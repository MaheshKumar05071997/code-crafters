import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // UPDATE BASE URL
  const baseUrl = 'https://code-crafters-peach.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}