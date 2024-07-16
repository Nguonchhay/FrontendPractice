'use client';

import { useState, useEffect } from 'react';

export default function ClientPage() {

    const [todos, setToDos] = useState([]);

    const fetchToDos = () => {
        fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setToDos(data);
        });
    }

    useEffect(() => {
        fetchToDos();
    }, [fetchToDos]);

    return (
        <div className="py-5 px-5">
            <h2>Client component - To Do List</h2>
            <ol>
                {
                todos.length && todos.map((item: any, index: number) => (
                    <li key={index}>{item.title}</li>
                ))
                }
            </ol>
        </div>
    )
}
