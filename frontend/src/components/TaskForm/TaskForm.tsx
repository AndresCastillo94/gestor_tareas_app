

import { zodResolver } from "@hookform/resolvers/zod";
import { TaskShema } from "./validations/TaskShema";
import { SubmitHandler, useForm } from "react-hook-form";
import './TaskForm.css'
import { postTask } from "app/app/tasks/services/createTask.service";
import Cookies from "js-cookie";


function TaskForm({onClose}){

    const{ register,handleSubmit,reset,formState:{errors} } =  useForm({
        resolver: zodResolver(TaskShema)
    });
    const id_user = Cookies.get('id_u');

   
    const onSubmit = async (task) => {
        try {
            await postTask({ ...task, user_id: id_user });
            onClose();
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    return(
        <>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                <label htmlFor="title">Titulo de la tarea</label>
                <input type="text" id="title" 
                {...register('title')}
                />
                {errors.title && <span className="error-span">{errors.title.message}</span>}
            
            
                <label htmlFor="description">Descripción de tu tarea</label>
                <input type="text" id="description" 
                {...register('description')}
                />
                {errors.description && <span className="error-span">{errors.description.message}</span>}

                <label htmlFor="end_date">Fecha de finalización</label>
                <input
                type="date"
                id="end_date"
                {...register("end_date")}
                />
                {errors.endDate && <span className="error-span">{errors.endDate.message}</span>}
            
                <label htmlFor="state">Estado</label>
                <select id="state" {...register('task_status_id', { required: 'El estado es requerido' })}>
                    <option value="">Selecciona un estado</option>
                    <option value="1">Pendiente</option>
                    <option value="2">En proceso</option>
                    <option value="3">Completada</option>
                </select>
                {errors.state && <span className="error-span">{errors.state.message}</span>}

                <label htmlFor="priority">Prioridad</label>
                <select id="priority" {...register('task_priority_id', { required: 'La prioridad es requerida' })}>
                    <option value="">Selecciona una prioridad</option>
                    <option value="1">Alta</option>
                    <option value="2">Media</option>
                    <option value="3">Baja</option>
                </select>
                {errors.priority && <span className="error-span">{errors.priority.message}</span>}

                <input type="hidden" {...register('user_id')} value={id_user} />
            
            <button type="submit" >Crear Tarea</button>
        </form> 
        </>
    );
}

export default TaskForm;