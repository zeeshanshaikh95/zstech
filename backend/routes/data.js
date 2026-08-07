import { Router } from 'express';
import siteData from '../data/siteData.js';

const router = Router();

/**
 * GET /api/data
 * Returns the full site content (services, projects, stats, contact…).
 */
router.get('/', (req, res) => {
  res.json({
    ok: true,
    data: siteData,
    servedAt: new Date().toISOString(),
  });
});

export default router;
