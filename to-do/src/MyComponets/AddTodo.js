import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); // by this page will not reload
        if (!title || !desc) {
            alert('Title and Discription cannot be blank')
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h2 className="text-success py-2">Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Discription</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add to the list</button>
            </form>
        </div>
    )
}