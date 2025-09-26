import {z} from 'zod';
export const registerSchema=z.object({
    email:z.string().min(1,'Email is required').email('Invalid email address'),

    password:z.string().min(6,'Password must be at least 6 characters long').max(20,'Password must be at most 20 characters long'),

    name :z.string().min(1,'Name is required').max(20,'Name must be at most 50 characters long').trim(),
})