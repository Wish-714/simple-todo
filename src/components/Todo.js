import React from 'react'

function Todo({todo,toggleComplete,handleDelete,handleEdit,}) {

    const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange = (i) => {
        i.preventDefault();
        if (todo.complete === true) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(i.target.value);
        }
    };

  return (
    <form className='my-4 w-screen flex justify-center items-center'>
        <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className='shadow-lg py-1 px-4 rounded-xl mr-2 ml-8 w-screen bg-gray-100'
        onChange={handleChange}
        />
        <button
        className='bg-gray-500 text-white px-2 py-1 rounded-xl mx-1 hover:bg-gray-400'
        onClick={() => toggleComplete(todo)}
        >
        ☑️
        </button>
        <button
        className='bg-gray-500 text-white px-2 py-1 rounded-xl mx-1 hover:bg-gray-400'
        onClick={() => handleEdit(todo, newTitle)}
        >
        🔄
        </button>
        <button
        className='bg-red-500 text-white px-2 py-1 rounded-xl ml-1 mr-8 hover:bg-red-700'
        onClick={() => handleDelete(todo.id)}
        >
        ✖️
        </button>
    </form>
  )
}

export default Todo