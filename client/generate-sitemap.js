import { createWriteStream } from 'fs'; // ES module import for fs
import sitemap from 'sitemap'; // Default import for the 'sitemap' package
const { SitemapStream } = sitemap; // Destructure SitemapStream from the default export

// Define your routes
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/About', changefreq: 'daily', priority: 0.7 },
  { url: '/Services', changefreq: 'daily', priority: 0.3 },
  { url: '/Gallery', changefreq: 'daily', priority: 0.5 },
  { url: '/Project', changefreq: 'daily', priority: 0.2 },
  { url: '/Blog', changefreq: 'daily', priority: 0.4 },
  { url: '/Testimonial', changefreq: 'daily', priority: 0.6 },
  { url: '/Contact', changefreq: 'daily', priority: 0.8 },


];

// Create a writable stream to write the sitemap to the public folder
const writeStream = createWriteStream('./public/sitemap.xml');

// Create a sitemap stream with your base URL (hostname)
const sitemapStream = new SitemapStream({ hostname: 'https://ntcodexsystems.tech/' });

// Pipe the sitemap to the write stream
sitemapStream.pipe(writeStream);

// Write each page URL to the sitemap
pages.forEach(page => sitemapStream.write(page));

// End the sitemap stream
sitemapStream.end();

// Handle the 'finish' event to confirm the file has been written
writeStream.on('finish', () => {
  console.log('Sitemap has been successfully written to public/sitemap.xml');
});

// Handle errors (if any occur during writing the sitemap)
writeStream.on('error', (err) => {
  console.error('Error writing sitemap file:', err);
});
