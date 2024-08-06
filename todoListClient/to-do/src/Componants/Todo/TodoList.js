import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tooltip } from 'react-tooltip';
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import './TodoList.css';
import TodoListItems from '../ToDoItems/TodoListItems';
import AddTodoList from '../AddTodo/AddTodoList'; // Import the new component


export default function Todolist() {
    const [listitems, setListItems] = useState([]); 
    const [messageList, setMessageList] = useState(''); 
    const [isEditing, setIsEditing] = useState(false); 
    const [editingId, setEditingId] = useState(null); 
    const [editingValue, setEditingValue] = useState(''); 
    const [selectedListId, setSelectedListId] = useState(null); 
    const [selectedListTitle, setSelectedListTitle] = useState(null); 
    const [fromAdd, setFromAdd] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('/todos');
            if (res.status === 200) {
                setMessageList('');
                setListItems(res.data); 
                if (res.data.length > 0) {
                    handleSelectList(res.data[0].id, res.data[0].title);
                }
            } else if (res.status === 204) {
                setMessageList('Lists are empty');
                setListItems([]); 
            }
        } catch (error) {
            if (error.response && error.response.status === 500) {
                setMessageList('Error reading the list');
            } else {
                setMessageList('Error fetching todo items');
            }
        }
    };

    const postTodoItem = async (addListValue) => {
        try {
            const res = await axios.post('/todos', {
                id: new Date().getTime(),
                title: addListValue,
                todoItems: [],
                date: new Date().toISOString().split('T')[0],
            });
            setMessageList(res.data.message);
            setFromAdd(true);
            const newList = res.data;
            await fetchTodos(); 
             
            handleSelectList( newList.id, newList.title);
           
        } catch (error) {
            setMessageList('Error posting todo item');
        }
    };

    const handleAddItemToServer = (addListValue) => {
        if (addListValue.trim()) {
            postTodoItem(addListValue); 
            setMessageList('List Added');
        }
    };

    const handleRemoveItem = async (index) => {
        try {
            const res = await axios.delete(`/todos/${index}`);
            setMessageList('List Removed');
            fetchTodos(); 
            window.location.reload()
        } catch (error) {
            setMessageList('Error deleting todo item');
        }
    };

    const handleEditItem = (item) => {
        setIsEditing(true);
        setEditingId(item.id);
        setEditingValue(item.title);
    };

    const handleSaveEdit = async () => {
        try {
            const res = await axios.put(`/todos/${editingId}`, {
                title: editingValue
            });
            setMessageList('Todo updated successfully');
            setIsEditing(false);
            setEditingId(null);
            fetchTodos();
        } catch (error) {
            setMessageList('Error updating todo item');
        }
    };

    const handleSelectList = (id, title) => {
        setSelectedListId(id);
        setSelectedListTitle(title);
    };

    const handleEditValue = (e) => {
        if (e.key === 'Enter') {
            handleSaveEdit();
        }
    };

    return (
        <div className='container'>
            <div className='leftsection'>
                <div className='todoListContainer'>
                    <div className='todolist'>
                        <Tooltip id='tip' style={{ color: "#cdc4df", backgroundColor: '#78659e', borderRadius: '10px' }} />
                        <h1 style={{ color: "#78659e" }}>Lists</h1>
                        <AddTodoList onAddItem={handleAddItemToServer} /> 
                        <ul className="listItems">
                            {listitems.map((listitem) => (
                                <li className='listItem' key={listitem.id} onClick={() => handleSelectList(listitem.id, listitem.title)}
                                    data-tooltip-id="tip"
                                    data-tooltip-content="Click to add to-do"
                                    data-tooltip-place="left-start"
                                >
                                    {isEditing && editingId === listitem.id ? (
                                        <input
                                            type="text"
                                            className='editInput'
                                            value={editingValue}
                                            onChange={(e) => setEditingValue(e.target.value)}
                                            onKeyDown={handleEditValue}
                                        />
                                    ) : (
                                        <p>{listitem.title}</p>
                                    )}
                                    {isEditing && editingId === listitem.id ? (
                                        <MdPlaylistAdd className='addItemBtn' onClick={handleSaveEdit} />
                                    ) : (
                                        <GrEdit className='editBtn' onClick={() => handleEditItem(listitem)} />
                                    )}
                                    <IoIosClose className='deleteListItem' onClick={() => handleRemoveItem(listitem.id)} />
                                </li>
                            ))}
                        </ul>
                        {messageList && <p className="message">{messageList}</p>}
                    </div>
                </div>
            </div>
            <div className='rghtSec'>
                {selectedListId && <TodoListItems listId={selectedListId} listTitle={selectedListTitle} />} 
            </div>
        </div>
    );
}
