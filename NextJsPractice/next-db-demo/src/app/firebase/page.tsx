import ToDoList from '@/components/ToDoList';
import { getToDos } from '@/libs/Firebase';


const fetchToDos = async () => {
  const data = await getToDos();
  return data;
}

export default async function Home() {
  const todos = await fetchToDos();
  return (
    <div>
      <h2>Firebase Demo</h2>
      <ToDoList todos = {todos} />
    </div>
  );
}
