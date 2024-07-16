
import { fetchToDos } from "@/app/actions";
import ToDoListClientAction from './ToDoList';


export default async function ClientActionPage() {
    let todos = await fetchToDos();
    todos = todos.slice(1, 3);

    return (
        <div className="py-5 px-5">
            <h2>Client component with actions.ts - To Do List</h2>
            <h2>On server</h2>
            <ol>
                {
                    todos.length && todos.map((item: any, index: number) => (
                        <li key={index}>{index + 1}. {item.title}</li>
                    ))
                }
            </ol>
            <ToDoListClientAction />
        </div>
    )
}
