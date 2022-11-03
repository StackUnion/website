module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_ORIGIN,
  generateRobotsTxt: true,
  exclude: ['/sitemaps/*'],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_ORIGIN}/sitemaps/ions.xml`],
  },
}
