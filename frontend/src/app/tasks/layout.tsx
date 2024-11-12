'use client'

import { logout } from "../(auth)/services/auth.services";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import './layout.css';

function TaskContainer({children}:{children: React.ReactNode}){

    const router = useRouter();
    const dispatch = useDispatch();

    const handleOnclick = () => {
        logout(dispatch);
        router.push('/login');
    }

    return(
        <div >
            <nav>
              <ul>
                <button onClick={handleOnclick}>Logout</button>
              </ul>
            </nav>
            <div >{children}</div>
        </div>
    );
}

export default TaskContainer;


            