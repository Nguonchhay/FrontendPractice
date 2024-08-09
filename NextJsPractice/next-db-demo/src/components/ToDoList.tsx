export default function ToDoList({ todos }: any) {
  return (
    <div className="p-5">
        <h4>To Do List</h4>
        <ul className="list-decimal pl-10">
            {todos.map((item: any, ind: number) => (
            <li key={ind}>
                {item.title}
            </li>
            ))}
        </ul>
    </div>
  )
}
