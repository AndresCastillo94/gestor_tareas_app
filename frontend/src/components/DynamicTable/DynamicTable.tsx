"use client"

import { useReactTable,getCoreRowModel,flexRender,getPaginationRowModel,getFilteredRowModel } from "@tanstack/react-table";
import './DynamicTable.css';
import { useState } from "react";
import { useSelector} from 'react-redux';
import { RootState } from '../../app/store/store';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { TfiPencilAlt } from 'react-icons/tfi';
import deleteTask from '../../app/tasks/services/deleteTask.service'
import { useRouter } from "next/navigation";
import { CellContext } from "@tanstack/react-table";

interface tableProps {
    dataTask: Task[];
    setDataTask: React.Dispatch<React.SetStateAction<Task[]>>;
    modalOn: (task: Task) => void;
}


function DynamicTable({dataTask,setDataTask,modalOn}: tableProps){

    

    const user = useSelector((state: RootState) => state.user);
    const router = useRouter();
    const data = dataTask;

    const handleDelete = async (id:number) =>{
        const isConfirmed = window.confirm("¿Estás seguro/a de que quieres eliminar esta tarea?");
        if(isConfirmed){
            const deleteResult = await deleteTask(id);
            if(deleteResult.success){
                setDataTask(dataTask.filter(task => task.id !== id));
            }else{
                alert(deleteResult.message);
                router.push("/login");
            }
        }
    }

    const handleUpdate = async (task: Task) =>{
        modalOn(task);
    }

    const columns = [
        {
            header: 'TITULO',
            accessorKey: 'title',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>
        },
        {
            header: 'DESCRIPCION',
            accessorKey: 'description',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>
        },
        {
            header: 'FECHA VENCIMIENTO',
            accessorKey: 'end_date',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>
        },
        {
            header: 'CREADOR',
            accessorKey: 'user',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>
        },
        {
            header: 'ESTADO',
            accessorKey: 'task_status',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>,
            enableColumnFilter: true,
            Filter: ({ column }) => (
                <select
                    onChange={e => column.setFilterValue(e.target.value || undefined)}
                    value={column.getFilterValue() || ""}
                >
                <option value="">Todos</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En progreso">En progreso</option>
                <option value="Completada">Completada</option>
              </select>
            ),
          },
        {
            header: 'PRIORIDAD',
            accessorKey: 'task_priority',
            cell: (props: CellContext<Task, unknown>) => <p>{props.getValue() as string}</p>,
            Filter: ({ column }) => (
                <select
                    onChange={e => column.setFilterValue(e.target.value || undefined)}
                    value={column.getFilterValue() || ""}
                >
                <option value="">Todas</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            ),
        },
        {
            header: 'HERRAMIENTAS',
            accessorKey: '',
            cell: (props: CellContext<Task, unknown>) => 
            <div className="mutate-buttons-container">
                <button onClick={() => handleUpdate(props.row.original)}><TfiPencilAlt/></button>  
                <button onClick={() => handleDelete(props.row.original.id)}><MdOutlineDeleteOutline/></button>  
            </div>
        },
        
    ]
    
    
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(4);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
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
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.columnDef.Filter && (
                                        <div>
                                            {flexRender(header.column.columnDef.Filter, header.getContext())}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                ))}
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