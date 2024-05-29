import * as z from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(2).max(15, {message: 'Max length is 15 characters'}),
  lastName: z.string().min(2),
  username: z.string().min(2),
});
