import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import TodoTable from '../TodoTable';
import { getTodos } from '../../Services/todos-services';
export default function TodoPage() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        (async () => {
            const res = await getTodos();
            setTodos(res.slice(0, 10));
            console.log(res);
        })();
    }, []);

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        const _tempVariables = {
            completed: false,
            id: todos.length + 1,
            title: todo,
            userId: 1
        };
        const _todos = [...todos];
        _todos.push(_tempVariables);
        setTodos(_todos);
        setTodo('');
    };

    useEffect(() => {
        if (!!todo.length) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [todo]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Typography sx={{ mb: '20px' }} variant="h5">
                Todo Application
            </Typography>
            <Box
                sx={{
                    width: 1000,
                    height: 700,
                    border: '1px solid #ccc',
                    p: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Box width={'900px'}>
                        <CustomInput
                            onChange={handleTodoChange}
                            value={todo}
                            label="Todo"
                        ></CustomInput>
                    </Box>
                    <Box sx={{ ml: '20px' }}>
                        <CustomButton
                            disabled={isDisabled}
                            onclick={handleAddTodo}
                            label={'Add'}
                        ></CustomButton>
                    </Box>
                </Box>
                <Box sx={{ mt: '40px' }}>
                    <TodoTable todos={todos}></TodoTable>
                </Box>
            </Box>
        </Box>
    );
}
