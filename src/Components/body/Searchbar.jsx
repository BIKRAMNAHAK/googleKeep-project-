import React, { useState } from 'react';
import './searchbar.css';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [showColors, setShowColors] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title || content) {
            addNote({ title, content, color });
            setTitle('');
            setContent('');
            setColor('#ffffff');
        }
    };

    const handleColorChange = (color) => {
        setColor(color);
        setShowColors(false);
    };

    return (
        <form className="note-form" onSubmit={handleSubmit} style={{ backgroundColor: color }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Take a note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="form-footer">
                <button type="button" onClick={() => setShowColors(!showColors)}>
                    Change Color
                </button>
                {showColors && (
                    <div className="color-picker">
                        <div className="color" style={{ backgroundColor: '#ffffff' }} onClick={() => handleColorChange('#ffffff')}></div>
                        <div className="color" style={{ backgroundColor: '#f28b82' }} onClick={() => handleColorChange('#f28b82')}></div>
                        <div className="color" style={{ backgroundColor: '#fbbc05' }} onClick={() => handleColorChange('#fbbc05')}></div>
                        <div className="color" style={{ backgroundColor: '#fff475' }} onClick={() => handleColorChange('#fff475')}></div>
                        <div className="color" style={{ backgroundColor: '#ccff90' }} onClick={() => handleColorChange('#ccff90')}></div>
                    </div>
                )}
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default NoteForm;
