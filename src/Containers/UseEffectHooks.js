import React from 'react'
import { useState,useEffect } from 'react'

export default function UseEffectHooks() {

    const [count,setCount]=useState(0);

    useEffect (() => {
        console.log(`You have clicked the button ${count} times`)

    });
    
    
  return (
    <div>

        <button onClick={ () => setCount(count+1)}>Click me</button>

    </div>
  );
}
