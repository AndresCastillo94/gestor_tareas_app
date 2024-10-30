import {z} from 'zod';

export const loginUserShema = z.object({
    email: z
        .string()
        .min(1, { message: "Por favor ingresa tu correo" })
        .email({
            message:"Por favor ingresa un email valido"
        }),   
    password: z
        .string()
        .min(6, {
            message: "La contraseña debe tener al menos 6 caracteres",
        })
});