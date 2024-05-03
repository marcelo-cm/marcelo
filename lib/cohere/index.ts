import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_TRIAL_API_KEY!,
});

export default cohere;
