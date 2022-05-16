import Title from './components/Title';
import Todo from './components/Todo';
import { 
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
 } from "firebase/firestore";
import { db } from "./firebase";
import React from 'react';
import Add from './components/Add';


function App() {

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id})
      });
      setTodos(todosArray);
    })
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, 'todos', todo.id), {title: title})
  }
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  }
  return (
      <div className='overflow-x-hidden flex flex-col w-screen h-screen bg-gray-200'>
        <div><Title/></div>
        <div><Add/></div>
        <div className='mt-48 bg-gray-200'>
        {todos.map((todo) => (
            <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
          ))}
        </div>
        <h1 className='text-gray-700 text-sm mt-24 mb-8 flex justify-center'>Todo-app v-1.0.alpha by-<span className='font-bold'>Wish 🌐</span></h1>
      </div>
  );
}

// kalau warning Expected to return a value in arrow function  array-callback-return
// ganti {.map(() => {})} jadi {.map(() => ())} di .map

export default App;
