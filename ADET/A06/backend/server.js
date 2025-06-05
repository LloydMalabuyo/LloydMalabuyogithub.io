import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';

const app = express();
const PORT = 3000;
const DB_FILE = './db.json';

app.use(cors());
app.use(express.json());

app.get('/api/items', async (req, res) => {
  const data = await fs.readJson(DB_FILE);
  res.json(data.items);
});

app.post('/api/items', async (req, res) => {
  const { name, qty, price } = req.body;
  if (!name || qty <= 0 || price <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const db = await fs.readJson(DB_FILE);
  db.items.push({ name, qty, price });
  await fs.writeJson(DB_FILE, db, { spaces: 2 });
  res.json({ message: "Item added" });
});

app.delete('/api/items', async (req, res) => {
  await fs.writeJson(DB_FILE, { items: [] }, { spaces: 2 });
  res.json({ message: "Items cleared" });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
