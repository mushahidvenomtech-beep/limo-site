'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { CardNavItem } from './CardNav';
import './CardNav.css';

interface CardNavDropdownProps {
  open: boolean;
  onClose: () => void;
  items: CardNavItem[];
  cardEffect?: 'rise' | 'unfold' | 'fade';
  stagger?: number;
  bounce?: number;
  speed?: number;
  cardHeight?: number;
  maxWidth?: number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const easeOut = (t: number) => 1 - (1 - t) ** 3;

export const CardNavDropdown: React.FC<CardNavDropdownProps> = ({
  open,
  onClose,
  items,
  cardEffect = 'rise',
  stagger = 0.1,
  bounce = 0.18,
  speed = 1.1,
  cardHeight = 160,
  maxWidth = 620,
  align = 'left',
  className = ''
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const engineRef = useRef<{ wake: () => void; refresh: () => void } | null>(null);
  const [shown, setShown] = useState(open);

  const settings = {
    open,
    cardEffect,
    stagger: clamp(stagger, 0, 0.3),
    bounce: clamp(bounce, 0, 1),
    speed: clamp(speed, 0.2, 3)
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) return undefined;
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const state = { p: settingsRef.current.open ? 1 : 0, v: 0, height: content.offsetHeight };
    let raf = 0;
    let last = 0;

    const render = () => {
      const s = settingsRef.current;
      panel.style.height = `${Math.max(0, state.p) * state.height}px`;
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const count = cards.length;
      const lag = count > 1 ? Math.min(s.stagger, 0.7 / (count - 1)) : 0;
      const span = 1 - lag * (count - 1);

      cards.forEach((card, index) => {
        const local = clamp((state.p - index * lag) / Math.max(span, 0.05), 0, 1);
        const e = easeOut(local);
        if (s.cardEffect === 'unfold') {
          card.style.transform = `translateY(${(1 - e) * -10}px) rotateX(${(1 - e) * -72}deg)`;
          card.style.opacity = `${clamp(local * 1.8, 0, 1)}`;
        } else if (s.cardEffect === 'fade') {
          card.style.transform = `translateY(${(1 - e) * 6}px)`;
          card.style.opacity = `${e}`;
          card.style.filter = e < 0.999 ? `blur(${(1 - e) * 6}px)` : '';
        } else {
          card.style.transform = `translateY(${(1 - e) * 24}px) scale(${0.96 + 0.04 * e})`;
          card.style.opacity = `${e}`;
        }
      });
    };

    const tick = (now: number) => {
      raf = 0;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const target = s.open ? 1 : 0;

      if (reduce) {
        state.p = target;
        state.v = 0;
      } else {
        const k = 170 * s.speed * s.speed;
        const zeta = s.open ? 1 - 0.68 * s.bounce : 1;
        const steps = Math.ceil(dt / (1 / 240));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) {
          state.v += (-k * (state.p - target) - 2 * zeta * Math.sqrt(k) * state.v) * h;
          state.p += state.v * h;
        }
      }

      const done = Math.abs(state.p - target) < 0.0005 && Math.abs(state.v) < 0.002;
      if (done) {
        state.p = target;
        state.v = 0;
      }

      render();
      if (done && target === 0) setShown(false);
      if (!done) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    engineRef.current = {
      wake,
      refresh: () => {
        state.height = content.offsetHeight;
        render();
      }
    };

    render();
    const observer = new ResizeObserver(() => {
      state.height = content.offsetHeight;
      render();
    });
    observer.observe(content);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      engineRef.current = null;
    };
  }, [items.length]);

  useLayoutEffect(() => {
    if (open) setShown(true);
    engineRef.current?.refresh();
    engineRef.current?.wake();
  }, [open]);

  useEffect(() => {
    engineRef.current?.refresh();
  });

  const alignStyles =
    align === 'left'
      ? 'left-0 origin-top-left'
      : align === 'right'
      ? 'right-0 origin-top-right'
      : 'left-1/2 -translate-x-1/2 origin-top';

  const vars = {
    '--cn-max': `${maxWidth}px`,
    '--cn-panel': 'rgba(23, 40, 58, 0.96)',
    '--cn-blur': 'blur(20px) saturate(1.6)',
    '--cn-edge': 'rgba(255, 255, 255, 0.12)',
    '--cn-highlight': 'rgba(255, 255, 255, 0.1)',
    '--cn-shadow': '0 24px 48px -18px rgba(0, 0, 0, 0.8), 0 8px 20px -8px rgba(0, 0, 0, 0.5)',
    '--cn-text': '#ffffff',
    '--cn-muted': 'rgba(244, 244, 245, 0.65)',
    '--cn-tile': 'linear-gradient(180deg, #223d57 0%, #182c40 100%)',
    '--cn-tile-rim':
      'inset 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 6px 14px -4px rgba(0, 0, 0, 0.6)',
    '--cn-gap': '10px',
    '--cn-inset': '10px',
    '--cn-radius': '18px',
    '--cn-card': `${cardHeight}px`
  } as React.CSSProperties;

  return (
    <div
      className={`card-nav-dropdown absolute top-full mt-2 z-50 ${alignStyles} ${className}`}
      data-open={open ? '' : undefined}
      data-shown={shown || open ? '' : undefined}
      style={{ ...vars, width: `${maxWidth}px`, maxWidth: '92vw' }}
    >
      <div ref={panelRef} className="card-nav__panel">
        <div ref={contentRef} className="card-nav__content" style={{ top: 0, padding: '10px' }}>
          <div className="card-nav__cards">
            {items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                ref={el => {
                  cardRefs.current[index] = el;
                }}
                className="card-nav__card"
                style={item.bgColor ? { background: item.bgColor, color: item.textColor } : undefined}
              >
                <div className="card-nav__card-head">
                  <span className="card-nav__label">{item.label}</span>
                  {item.description && <p className="card-nav__description">{item.description}</p>}
                </div>

                <ul className="card-nav__links">
                  {item.links.map((link, linkIndex) => (
                    <li key={`${link.label}-${linkIndex}`}>
                      <Link
                        href={link.href || '#'}
                        className="card-nav__link"
                        tabIndex={open ? undefined : -1}
                        onClick={e => {
                          link.onClick?.(e);
                          onClose();
                        }}
                      >
                        <span className="card-nav__arrow" aria-hidden="true">
                          <HugeiconsIcon className="card-nav__arrow-icon card-nav__arrow-icon--out" icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
                          <HugeiconsIcon className="card-nav__arrow-icon card-nav__arrow-icon--in" icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <span className="card-nav__rim" />
      </div>
    </div>
  );
};

export default CardNavDropdown;

