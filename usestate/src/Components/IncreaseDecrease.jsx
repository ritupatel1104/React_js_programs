import React from 'react'
import { useState } from "react"
const IncreaseDecrease = () => {


    const [Number, setNumber] = useState(0);
      //Number (first variable) ==> Read only value (you can't use that varible value)
      //setNumber (second varible) ==> write only value (if you want to change Number variable's value use setNumber)

      function IncreaseNum(){
        setNumber(Number + 1)
      }

       function DecreaseNum(){
        if(Number > 0) return setNumber(Number - 1);
      }

      function  IncreaseNum5(){
        setNumber(Number + 5)
      }
       function DecreaseNum5(){
             if (Number - 5 >= 0)
               {
                 setNumber(Number - 5);
               } else {
                        setNumber(0);
                      }
      }

      function Resetfn(){
        setNumber (0)
      }

      //self task: 
      //cretae button jump5 -- increase number with 5
      //create button dec5 -- decrease number with 5
      //reset button sets num to 0
  return (
    <>
      <section>
        <h1 className='text-center text-3xl font-extrabold mt-10'>Usestate : Change Data (Use to define and to change the value of variable)</h1>

        <p className='text-center mt-5'>Increase And Decrease Number</p>

        <div className='w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-5'>
          {Number}
        </div>
       <div className='flex items-center justify-center mt-5 gap-6'>
           <button className='bg-orange-600 px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-orange-400' onClick={IncreaseNum}>Increase</button>
           <button className='bg-orange-600 px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-orange-400' onClick={DecreaseNum}>Decrease</button>
       </div>
       <div className='flex items-center justify-center mt-5 gap-6'>
           <button className='bg-orange-600 px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-orange-400' onClick={IncreaseNum5}>Increase 5</button>
           <button className='bg-orange-600 px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-orange-400' onClick={DecreaseNum5}>Decrease 5</button>
       </div>
      <div className='flex items-center justify-center mt-5 gap-6'>
         <button className='bg-orange-600 px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-orange-400' onClick={Resetfn}>Reset</button>
      </div>
      </section>
    
    </>
      
  )
}

export default IncreaseDecrease
