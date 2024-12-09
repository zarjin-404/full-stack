import { z } from 'zod';

export const MessageSchena = z.object({
  content: z.string().min(15, 'massage atlist 10 ').max(100, 'must me 100'),
});
