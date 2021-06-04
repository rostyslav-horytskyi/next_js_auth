import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://Rostyslav:eZ5X8V5ZmyPE9ic@cluster0.ot9mg.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
};
