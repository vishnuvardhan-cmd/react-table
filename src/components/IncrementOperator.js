import React,{useState} from 'react'

const IncrementOperator = () => {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
  return (
    <div>
        <div className='text-4xl mt-10 mx-5 backgroundColor-red'>
           <button onClick={incrementOne}>Count One-{counterOne}</button>
        </div>
        <div className='text-4xl mt-10 mx-5 backgroundColor-red'>
        <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
        </div>
    </div>
  )
}

export default IncrementOperator