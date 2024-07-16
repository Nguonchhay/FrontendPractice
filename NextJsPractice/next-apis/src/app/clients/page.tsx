'use client';

import { useState, useEffect } from 'react';

export default function ClientPage() {

    const [todos, setToDos] = useState([]);

    const fetchToDos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setToDos(data.slice(1, 5));
        });
    }

    useEffect(() => {
        fetchToDos();
    }, []);

    return (
        <div className="py-5 px-5">
            <h2>Client component - To Do List</h2>
            <ol>
                {
                todos.length && todos.map((item: any, index: number) => (
                    <li key={index}>{index + 1}. {item.title}</li>
                ))
                }
            </ol>
        </div>
    )
}
