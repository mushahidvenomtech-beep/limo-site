import { MetadataRoute } from 'next';

const BASE_URL = 'https://mjlimos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    '',
    '/blog',
    '/contact-us',
    // Services
    '/services/airport-limo-service',
    '/services/black-car-service',
    '/services/chauffeur-service',
    '/services/limo-service',
    '/services/town-car-service',
    '/services/whistler-transfers',
    '/services/yvr-transfers',
    // Service Areas
    '/service-areas/burnaby-bc',
    '/service-areas/delta-bc',
    '/service-areas/fairview-bc',
    '/service-areas/killarney-bc',
    '/service-areas/kitsilano-bc',
    '/service-areas/marpole-bc',
    '/service-areas/richmond-bc',
    '/service-areas/surrey-bc',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
