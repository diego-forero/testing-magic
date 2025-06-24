import express from 'express';
import supabase from '../lib/supabaseClient.js';

const router = express.Router();

/**
 * GET /api/catalog/:setCode
 * Devuelve todas las cartas con precio para el set indicado (código en minúsculas)
 */
router.get('/:setCode', async (req, res) => {
  try {
    const setCode = req.params.setCode.trim().toLowerCase();

    const { data, error } = await supabase
      .from('catalog_cards_priced')          // vista general
      .select('*')
      .eq('set_code', setCode);

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'DB query failed' });
    }

    return res.json(data);                   // ← siempre un array
  } catch (err) {
    console.error('Route error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
