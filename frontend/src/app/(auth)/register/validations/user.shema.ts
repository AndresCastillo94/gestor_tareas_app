import {z} from 'zod';

export const userShema = z.object({
    name: z
        .string()
        .min(1,{
            message: "Por favor ingresa tu nombre"
        }),
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
        }),
    confirmPassword: z
        .string()
        .min(6, {
            message: "La contraseña debe tener al menos 6 caracteres",
        }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir",
    path: ["confirmPassword"]
})