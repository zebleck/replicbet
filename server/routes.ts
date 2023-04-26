import { Router } from 'express';
import connectToDatabase from '../utils/db';
import { Bet, User } from '@/types/global';
import { Db } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
let db: Db;

connectToDatabase().then((database) => {
  db = database;
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const db = await connectToDatabase();
  const collection = db.collection<User>('users');
  const user = await collection.findOne({ username, password });
  if (user) {
    res.json(user);
  } else {
    res.status(401).send('Invalid credentials');
  }
});

router.post('/bet', async (req, res) => {
  const { userId, outcome, amount } = req.body;
  const db = await connectToDatabase();
  const userCollection = db.collection<User>('users');
  const betCollection = db.collection<Bet>('bets');
  const user = await userCollection.findOne({ _id: userId });
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  if (user.balance < amount) {
    res.status(400).send('Insufficient balance');
    return;
  }
  const result = { success: Math.random() > 0.5 ? outcome : !outcome };
  const payout = result.success ? amount : -amount;
  await userCollection.updateOne({ _id: userId }, { $inc: { balance: payout } });
  await betCollection.insertOne({ _id: uuidv4(), userId, outcome, amount, result });
  res.json({ result: result.success, payout });
});

router.get('/bets', async (req, res) => {
  const { userId } = req.query;
  const db = await connectToDatabase();
  const collection = db.collection<Bet>('bets');
  const bets = await collection.find({ userId }).toArray();
  res.json(bets);
});

export default router;
