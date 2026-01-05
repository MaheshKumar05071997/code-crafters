import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://your-domain.com'; // REPLACE THIS

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: Block private admin folders
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}