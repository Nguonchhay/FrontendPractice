'use server';

export const fetchToDos = async () => {
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