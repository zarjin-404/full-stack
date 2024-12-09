import { z } from 'zod';

export const AcceptMessageSchame = z.object({
  acceptMessage: z.boolean(),
});
