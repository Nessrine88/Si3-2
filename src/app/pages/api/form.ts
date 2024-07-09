// pages/api/form.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Request method: ${req.method}`);
  if (req.method === 'POST') {
    try {
      const data = req.body;
      console.log('Received data:', data);

      // Example: Save data to a database or perform other operations

      res.status(200).json({ message: 'Data received successfully' });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ error: 'Failed to process form data' });
    }
  } 
}
