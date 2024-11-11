

import { zodResolver } from "@hookform/resolvers/zod";
import { TaskShema } from "./validations/TaskShema";
import { SubmitHandler, useForm } from "react-hook-form";
import './TaskForm.css'
import { postTask } from "app/app/tasks/services/createTask.service";
import Cookies from "js-cookie";
import putTask from "app/app/tasks/services/updateTask.service";


function TaskForm({onClose,toUpdateTask}){

    const{ register,handleSubmit,reset,formState:{errors} } =  useForm({
        resolver: zodResolver(TaskShema)
    });
    const id_user = Cookies.get('id_u');



    
    const onSubmit = async (task) => {
        try {
            if(!toUpdateTask){
                await postTask({ ...task, user_id: id_user });
                onClose();
            }else{
                await putTask({ ...task, user_id: id_user, id: toUpdateTask.id });
                onClose();
            }
            
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    //console.log(selectedTask);

    return(
        <>
            <form onSubmit = {handleSubmit(onSubmit)}>
                {toUpdateTask?<input type="hidden" {...register('id')}  value = {toUpdateTask?.id}/>:null}
                
                
                <label htmlFor="title">Titulo de la tarea</label>
                <input type="text" id="title" defaultValue={toUpdateTask?.title || ''}
                {...register('title')}
                />
                {errors.title && <span className="error-span">{errors.title.message}</span>}
            
            
                <label htmlFor="description">Descripción de tu tarea</label>
                <input type="text" id="description" defaultValue={toUpdateTask?.description || ''}
                {...register('description')}
                />
                {errors.description && <span className="error-span">{errors.description.message}</span>}

                <label htmlFor="end_date">Fecha de finalización</label>
                <input
                type="date"
                id="end_date"
                defaultValue={toUpdateTask?.end_date ? new Date(toUpdateTask.end_date).toISOString().split('T')[0] : ''} 
                {...register("end_date")}
                />
                {errors.endDate && <span className="error-span">{errors.endDate.message}</span>}
            
                <label htmlFor="state">Estado</label>
                <select id="state" defaultValue={toUpdateTask?.task_status_id || ''} {...register('task_status_id', { required: 'El estado es requerido' })}>
                    <option value="">Selecciona un estado</option>
                    <option value="1">Pendiente</option>
                    <option value="2">En proceso</option>
                    <option value="3">Completada</option>
                </select>
                {errors.state && <span className="error-span">{errors.state.message}</span>}

                <label htmlFor="priority">Prioridad</label>
                <select id="priority" defaultValue={toUpdateTask?.task_priority_id || ''} {...register('task_priority_id', { required: 'La prioridad es requerida' })}>
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