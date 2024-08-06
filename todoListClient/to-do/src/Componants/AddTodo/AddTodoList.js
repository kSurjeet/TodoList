import React, { useState, useRef,useEffect } from 'react';
import { AiFillFileAdd } from "react-icons/ai";
import '../Todo/TodoList.css';
import { Tooltip } from 'react-tooltip';

export default function AddTodoList({ onAddItem }) {
    const [addListValue, setAddListValue] = useState(''); 
    const [showInput, setShowInput] = useState(false); 
    const inputRef = useRef(null);

    const handleAddListItem = () => {
        setShowInput(true);
    };

    const handleAddItem = () => {
        if (addListValue.trim()) {
            onAddItem(addListValue); // Call the parent function to add item
            setAddListValue('');
            setShowInput(false);
        }
    };

    const handleKeyPress = (e) => {
        if (showInput && e.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowInput(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <Tooltip id='tip' style={{ color: "#cdc4df", backgroundColor: '#78659e', borderRadius: '10px' }} />
            <AiFillFileAdd className='addListBtn' onClick={handleAddListItem} 
                                    data-tooltip-id="tip"
                                    data-tooltip-content="Click to add list"
                                    data-tooltip-place="left-start"/>
            {showInput && (
                <div>
                    <input
                        type="text"
                        value={addListValue}
                        onChange={(e) => setAddListValue(e.target.value)}
                        placeholder="Enter item"
                        className='inputListItem'
                        onKeyDown={handleKeyPress}
                        ref={inputRef}
                    />
                </div>
            )}
        </div>
    );
}
