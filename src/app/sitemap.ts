import { MetadataRoute } from 'next'
import areasData from "@/lib/areas-data/Areas.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rangerover-garage.co.uk'

  const routes = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/areas',
    '/get-quote',
    '/services',
    '/reviews',
    '/engines',
    '/engines/range-rover',
    '/engines/range-rover/vogue-l322',
    '/engines/range-rover/vogue-l405',
    '/engines/range-rover/sport',
    '/engines/range-rover/sport-svr',
    '/engines/range-rover/evoque',
    '/engines/range-rover/velar',
    '/engines/land-rover',
    '/engines/land-rover/discovery-1',
    '/engines/land-rover/discovery-2',
    '/engines/land-rover/discovery-3',
    '/engines/land-rover/discovery-4',
    '/engines/land-rover/discovery-5',
    '/engines/land-rover/discovery-sport',
    '/engines/land-rover/freelander-1',
    '/engines/land-rover/freelander-2',
    '/engines/land-rover/defender',
    '/services/engine-rebuild',
    '/services/timing-chain-replacement',
    '/services/turbo-replacement',
    '/services/head-gasket-replacement',
    '/services/engine-repair',
    '/services/engine-replacement',
    '/services/engine-swap',
    '/services/timing-belt-replacement',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))


   const areaRoutes = areasData.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));



  return [...routes, ...areaRoutes];
}
