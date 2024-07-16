
const fetchToDos = async () => {
  const res = await fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos');
  if (!res.ok) {
    throw new Error('Fetch data from server component is error');
  }
  const data = await res.json();
  return data;
}


export default async function Home() {
  const todos = await fetchToDos();

  return (
    <div className="py-5 px-5">
      <h2>To Do List</h2>
      <ol>
        {
          todos.map((item: any, index: number) => (
            <li key={index}>{item.title}</li>
          ))
        }
      </ol>
    </div>
  )
}
