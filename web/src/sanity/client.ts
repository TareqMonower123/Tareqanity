import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "6koo24mx",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});