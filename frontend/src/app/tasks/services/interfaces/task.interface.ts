interface Task {
    id: number;
    title: string;
    description: string;
    end_date: string;
    user: string;
    task_status_id: number;
    task_status: string;
    task_priority_id: number;
    task_priority: string;
}

interface TaskMutateResponse {
    success: boolean;
    data: object;
    message?: string;
}