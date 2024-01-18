import React, { useState } from 'react';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [addTodo, setAddTodo] = useState('');

    const addList = () => {
        if (addTodo.trim() !== '') {
            setTodos([...todos, addTodo]);
            setAddTodo('');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex',
                gap: 10,
                flexDirection: "column",
            }} className='input'>
                <input style={{
                    border: "none",
                    borderRadius: 10,
                    background: 'darkgray',
                    width: 250,
                    height: 50
                }} type="text"
                       value={addTodo}
                       placeholder='Добавить лист...'
                       onChange={(e) => setAddTodo(e.target.value)}
                />
                <button style={{
                    width: 150,
                    height: 50,
                    background: 'aqua',
                    border: 'none',
                    borderRadius: 10,
                    transition: 'width 0.3s ease, height 0.3s ease'
                }} onClick={addList}>Добавить</button>
            </div>
            <ul style={{
                display: "flex",
                flexDirection: "column",
                listStyleType: 'none',
                background: 'gray',
                borderRadius: 6
            }}>
                {todos.map((todo, index) => (
                    <li style={{
                        color: 'white',
                        display:'flex',
                        textAlign:'center',

                    }} key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
