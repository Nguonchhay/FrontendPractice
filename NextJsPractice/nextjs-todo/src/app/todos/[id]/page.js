import EditToDo from "@/components/ToDos/EditToDo";

async function getToDo(id) {
    const res = await fetch(`https://coding-fairy.com/api/mock-api-resources/1715945679/todos/${id}`, {
        cache: 'no-store'
    });
   
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

export default async function EditToDoPage({ params }) {
    const todoId = parseInt(params.id);
    const todo = await getToDo(todoId);
    console.log("Selected ID : ", todo);
    return (
        <div>
            <h2>Edit To Do</h2>
            <EditToDo item={todo} />
        </div>
    );
}