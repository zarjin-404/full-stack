import { z } from 'zod';

export const Username = z
  .string()
  .min(3, 'must 3 mini characters')
  .max(20, 'must 20 max characters');
export const Email = z.string().email();
export const Password = z
  .string()
  .min(8, 'must 8 mini characters')
  .max(20, 'must 20 max characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'use special characters'
  );

export const SignUpSchema = z.object({
  username: Username,
  email: Email,
  password: Password,
});
