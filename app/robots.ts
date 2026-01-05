import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // UPDATE BASE URL
  const baseUrl = 'https://code-crafters-peach.vercel.app'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}