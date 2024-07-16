
const fetchToDos = async () => {
    const res = await fetch('http://localhost:3000/api/todos');
      if (!res.ok) {
        throw new Error('Fetch data from own API is error');
      }
      const data = await res.json();
      return data;
}

export default async function OwnApiPage() {
    let todos = await fetchToDos();
    todos = todos.slice(0, 3);

    return (
        <div>
            <h2>Call Own APIs</h2>
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
