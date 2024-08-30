const fs = require('fs');
const path = require('path');
const router = require('../src/router');

const domain = 'https://example.com';
const sitemapStream = fs.createWriteStream(path.join(__dirname, 'dist/sitemap.xml'));
sitemapStream.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

 // 假设router.routes是你vue-router的路由数组
router.routes.forEach(route => {
  // 这里简化处理，实际上可能需要添加域名等更多信息
  if(route.path) {
    sitemapStream.write(`<url>\n${domain}<loc>${route.path}</loc>\n</url>\n`);
  }
});

sitemapStream.write('</urlset>');
sitemapStream.end();