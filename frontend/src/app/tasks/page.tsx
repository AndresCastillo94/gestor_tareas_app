
import { getTasks } from './services/getTasks.service';
import { DynamicTable,TaskUi }  from '../../components';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';



    
async function Tasks() {

    const cookieStore = cookies();
    const userId = cookieStore.get('id_u')?.value || '';
    const token = cookieStore.get('authToken')?.value || '';
    
    const tasksObtained = await getTasks(userId, token);
    if(!tasksObtained.success){
        console.log(tasksObtained.message);
        redirect('/login');
    }
    const tasks = tasksObtained.data;

    return (
        <TaskUi tasks = {tasks} />
    );
}

export default Tasks;