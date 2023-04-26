import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/myapp';
const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect();
  console.log('Connected successfully to server');
  return client.db('myapp');
}
  
export default connectToDatabase;