"use client"

import { useReactTable,getCoreRowModel,flexRender,getPaginationRowModel } from "@tanstack/react-table";
import './DynamicTable.css';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { TfiPencilAlt } from 'react-icons/tfi';
import deleteTask from '../../app/tasks/services/deleteTask.service'


type Task = {
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

interface Props{
    dataTask: Task[];
}


function DynamicTable({dataTask,modalOn}: Props){

    const handleDelete = async (id) =>{
        const deleteResult = await deleteTask(id);
        if(deleteResult.success){
            setData(data.filter(task => task.id !== id))
        }else{
            alert("No se pudo eliminar esta tarea, intentalo de nuevo")
        }
    }

    const handleUpdate = async (task: Task) =>{
        modalOn(task);
    }

    const columns = [
        {
            header: 'TITULO',
            accessorKey: 'title',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'DESCRIPCION',
            accessorKey: 'description',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'FECHA VENCIMIENTO',
            accessorKey: 'end_date',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'CREADOR',
            accessorKey: 'user',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'ESTADO',
            accessorKey: 'task_status',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'PRIORIDAD',
            accessorKey: 'task_priority',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'HERRAMIENTAS',
            accessorKey: '',
            cell: (props) => 
            <p>
                <button onClick={() => handleUpdate(props.row.original)}><TfiPencilAlt/></button>  
                <button onClick={() => handleDelete(props.row.original.id)}><MdOutlineDeleteOutline/></button>  
            </p>
        },
        
    ]
    const user = useSelector((state) => state.user);

    const [data,setData] = useState(dataTask);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(4);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        // state:{
        //     pagination:{
        //         pageSize:4,
        //         pageIndex:0
        //     }
        // }
    });



    return(
        <div>
            <p>Bienvenido, {user.name}</p>
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key = {headerGroup.id}>
                                {headerGroup.headers.map(header => ( 
                                    <th key = {header.id}>
                                        {header.column.columnDef.header}
                                    </th>
                                ))
                                }
                            </tr>
                        ))
                    }
                </thead> 
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key = {row.id}>
                                {row.getVisibleCells().map(cell => (
                                   <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell,cell.getContext()) }
                                    </td> 
                                    
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="pagination-container">
                <p className="pagination-info">
                    {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                </p>
                <div className="pagination-buttons">
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} type="button">
                        &lt;
                    </button>
                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} type="button">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DynamicTable;