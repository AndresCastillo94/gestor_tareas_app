import {z} from 'zod';




export const TaskShema = z.object({
    title: z.string().min(1, { message: 'El título es requerido' }),
    description: z.string().min(1, { message: 'La descripción es requerida' }),
    end_date: z.string().refine(date => new Date(date) >= new Date(), {
        message: 'La fecha debe ser hoy o una fecha futura'
    }),
    task_status_id: z.string().nonempty({ message: 'El estado es requerido' }),
    task_priority_id: z.string().nonempty({ message: 'La prioridad es requerida' }),
});