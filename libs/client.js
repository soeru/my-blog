import { createClient } from 'microcms-js-sdk';

export const client = createClient({
	serviceDomain: 'chanma',
	apiKey: process.env.API_KEY,
});
