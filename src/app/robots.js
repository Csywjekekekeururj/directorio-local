export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://directorio-local.vercel.app/sitemap.xml', // Cambia por tu dominio de Vercel si es otro
  }
}
