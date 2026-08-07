import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🖥️  ZS TECH API running at http://localhost:${PORT}`);
  console.log(`   GET  /api/data   → site content`);
  console.log(`   POST /api/contact → contact form submissions`);
});
