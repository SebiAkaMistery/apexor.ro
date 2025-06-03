/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.apexor.ro',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'], // dacă nu folosești SSR sitemap
  alternateRefs: [
    {
      href: 'https://www.apexor.ro/ro',
      hreflang: 'ro',
    },
    {
      href: 'https://www.apexor.ro/en',
      hreflang: 'en',
    },
  ],
};