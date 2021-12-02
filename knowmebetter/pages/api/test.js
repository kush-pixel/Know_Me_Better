import dbConnect from '../../utils/dbConnect';
import dotenv from 'dotenv';
dotenv.config();
dbConnect();
export default async (req, res) => {
    res.json({ test: 'test' });
}