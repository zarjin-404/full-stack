import { z } from 'zod';

export const verifySchema = z.object({
  VerifyCode: z.string().length(6, 'Verifyction must 6 digist'),
});
