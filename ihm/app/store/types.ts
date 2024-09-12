import { z } from 'zod';

export const messageSchema = z.object({
    pseudo: z.string(),
    message: z.string().optional(),
    image: z.string().optional(),
    profilePicture: z.string().optional()
});
export type Message = z.infer<typeof messageSchema>;