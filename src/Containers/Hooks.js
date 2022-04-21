import React from 'react'
import { useState } from 'react'

export default function Hooks() {

    const [name,setName] = useState ("Akbar");
    const changeName = () => {
        setName("Mirza");
    };
  return (
    <div>
        <p>My name is {name}</p>
        <button onClick={changeName}>Click me</button>

    </div>
  );
};

