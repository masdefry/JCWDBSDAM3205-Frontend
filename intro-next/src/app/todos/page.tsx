'use client';

import { useRef, useState } from 'react';

export default function Page() {
  const [todos, setTodos] = useState<any[]>([]);
  const inputTodo = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    // Ambil value sebelumnya -> Tambahkan dengan value yg baru

    if (!inputTodo?.current?.value)
      return alert('Input todo tidak boleh kosong');

    setTodos([
      ...todos,
      { input: inputTodo?.current?.value, isDeleted: false },
    ]); // setTodos('xxx') -> Expected: setTodos(['xxx'])
  };

  const handleUpdateTodo = (index: number) => {
    /*
        ⚠️ TIDAK DIPERBOLEHKAN LANGSUNG MERUBAH VALUE DIDALAM USESTATE. 
        TIDAK MEN-TRIGGER UI UNTUK DI RENDER ULANG KETIKA TERJADI PERUBAHAN VALUE:

        alert(index);
        todos[index].isDeleted = true; ❌
        console.log(todos);
    */
    // Init variable baru untuk menampung current value dari useState
    const currentTodos = [...todos];

    // Variable baru nya kita manipulasi
    currentTodos[index].isDeleted = true;

    // Set state dengan variable baru
    setTodos(currentTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const currentTodos = [...todos];

    currentTodos.splice(index, 1);

    setTodos(currentTodos);
  };

  return (
    <div className='flex flex-col items-center mt-10'>
      <div className='flex w-[540px]'>
        <h1 className='text-2xl font-bold'>T O D O</h1>
      </div>
      <div className='w-[540px]'>
        <div className='flex items-center gap-3'>
          <label className='input w-full'>
            <input
              type='text'
              className='grow w-full'
              placeholder='Create a New Todo...'
              ref={inputTodo}
            />
          </label>
          <button
            onClick={handleAddTodo}
            className='btn btn-primary w-fit px-5'
          >
            Add
          </button>
        </div>
        <ul className='list bg-base-100 rounded-box shadow-md'>
          {JSON.stringify(todos)}
          {todos?.map((todo, index) => {
            return (
              <li
                key={index}
                className='list-row flex justify-between items-center'
              >
                <div className='flex items-center gap-3'>
                  <input
                    type='checkbox'
                    defaultChecked={todo?.isDeleted}
                    className='checkbox'
                    onChange={() => handleUpdateTodo(index)} // () => Untuk nge-delay supaya function tidak langsung terpanggil
                  />
                  {todo?.isDeleted ? ( // if(todo?.isDeleted === true)
                    <del>{todo?.input}</del>
                  ) : (
                    // else
                    <div>{todo?.input}</div>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className='btn btn-square btn-ghost w-fit'
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

numbers[0]; // 1
numbers[2]; // 3

numbers[1] = 100;

// COPY BY REFERENCE
const a = [100, 2, 3];
const b = a; // [100, 2, 3]
b[0] = 100;

// COPY BY VALUE
const x = [1, 2, 3];
const y = [...x]; // [1000, 2, 3]
y[0] = 1000;
