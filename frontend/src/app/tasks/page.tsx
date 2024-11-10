
import { getTasks } from './services/getTasks.service';
import { DynamicTable,TaskUi }  from '../../components';
import { CreateTaskButton } from 'app/components';
import { cookies } from 'next/headers';



    
async function Tasks() {

    const cookieStore = cookies();
    const userId = cookieStore.get('id_u')?.value || '';
    const token = cookieStore.get('authToken')?.value || '';
    
    const tasksObtained = await getTasks(userId, token);

    const tasks = tasksObtained.data;
    
    console.log(tasks)

    return (
        <TaskUi tasks = {tasks} />
        
    );
}

export default Tasks;