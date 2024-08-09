import ToDoList from '@/components/ToDoList';
import { getToDos } from '@/libs/MySql';


const fetchToDos = async () => {
  const data = await getToDos();
  return data[0];
}

export default async function Home() {
  const todos = await fetchToDos();
  return (
    <div>
      <h2>MySQL Demo</h2>
      <ToDoList todos = {todos} />
    </div>
  );
}
