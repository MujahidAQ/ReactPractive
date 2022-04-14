import React, { useState } from 'react';
import TodoPage from './Components/TodoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import context from './Context';
function App() {
    const [todos, setTodos] = useState([]);
    return (
        <>
            <context.Provider
                value={{
                    todos,
                    setTodos
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TodoPage />} />
                    </Routes>
                </BrowserRouter>
            </context.Provider>
        </>
    );
}
export default App;
