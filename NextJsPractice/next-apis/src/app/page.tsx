
const fetchToDos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });
  if (!res.ok) {
    throw new Error('Fetch data from server component is error');
  }
  const data = await res.json();
  return data;
}


export default async function Home() {
  let todos = await fetchToDos();
  todos = todos.slice(1, 3);

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
