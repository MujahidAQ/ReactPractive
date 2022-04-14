import React, { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getTodos } from '../../Services/todos-services';
import Context from '../../Context';
export default function TodoTable() {
    const { todos, setTodos } = useContext(Context);
    useEffect(() => {
        (async () => {
            const res = await getTodos();
            setTodos(res.slice(0, 10));
        })();
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>UserId</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell>{row.userId}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{String(row.completed)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
