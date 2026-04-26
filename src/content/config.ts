import { defineCollection, z } from 'astro:content';

const tradesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    trade: z.string(),                    // 'electricians', 'plumbers' etc
    tradeSingular: z.string(),            // 'electrician', 'plumber'
    tradeName: z.string(),                // 'Electricians' (display)
    tradeNameSingular: z.string(),        // 'Electrician'

    // Hero
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroVoiceQuestion: z.string(),        // for accessibility quick-answer

    // Phone mockup conversation
    phoneConversation: z.array(z.object({
      from: z.enum(['agent', 'customer']),
      text: z.string(),
      time: z.string(),
    })),

    // Problem section
    problemTitle: z.string(),
    problemBody: z.string(),

    // Trade-specific FAQ
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),

    // Credentials (e.g. NICEIC for electricians, Gas Safe for gas)
    credentials: z.object({
      title: z.string(),
      body: z.string(),
      schemes: z.array(z.string()),       // ['NICEIC', 'NAPIT', 'ELECSA']
    }),

    // Trade-specific escalation example (for the classification explainer)
    escalationExample: z.string(),        // "burning smells, sparking, electrical danger"

    // SEO
    metaTitle: z.string(),
    metaDescription: z.string(),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  trades: tradesCollection,
};
