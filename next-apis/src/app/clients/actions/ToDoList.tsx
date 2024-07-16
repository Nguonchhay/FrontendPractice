'use client';

import { fetchToDos } from "@/app/actions";
import { useState, useEffect } from 'react';

export default function ToDoListClientAction() {
    const [todos, setToDos] = useState([]);

    const getToDos = () => {
        fetchToDos().then(res => {
            setToDos(res.slice(1, 5));
        });
    }

    useEffect(() => {
        getToDos();
    }, []);

    return (
        <div>
            <h2>On Client</h2>
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
