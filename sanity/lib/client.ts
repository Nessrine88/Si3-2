// sanity/client.ts
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
 useCdn
});
