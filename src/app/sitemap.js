export default function sitemap() {
  return [
    {
      url: 'https://directorio-local.vercel.app', // Cambia por tu dominio exacto de Vercel
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
