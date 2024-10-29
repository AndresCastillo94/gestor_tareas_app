'use client'

import { logout } from "../auth/services/auth.services";
import { useRouter } from 'next/navigation';
import './layout.css';

function TaskContainer({children}:{children: React.ReactNode}){

    const router = useRouter();

    const handleOnclick = () => {
        logout();
        router.push('/auth/login');
    }

    return(
        <div>
            <nav>
              <ul>
                <button onClick={handleOnclick}>Logout</button>
              </ul>
            </nav>
            <div className="task-container">{children}</div>
        </div>
    );
}

export default TaskContainer;


            