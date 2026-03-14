import { useState } from "react"

const AddUser = () => {
    const [Data, setData] = useState([
        {name:"Ishika Mehta", email: "ishika@gmail.com", color: "bg-teal-400"},
        {name:"Ritika Patel", email: "ritikaptl@gmail.com", color: " bg-purple-400"},
        {name:"Mahek Shah", email: "mahekshah@gmail.com", color: "bg-yellow-400"},
    ]);

    function Add(){
        let arr = [...Data] //Copy Array
        if (Data.some(user => user.name === "Nisha Dhabhi")){
            return alert("User Exists!!!!");
        }
        arr.push({name:"Nisha Dhabhi", email: "nishu@gmail.com", color: "bg-green-400"})
        setData(arr);

    }

    //task:
    //1. create a btn that add two user

    function Add2user (){
         let arr = [...Data] //Copy Array
        if(Data.some(user => user.name ==="Nayan Patil") || Data.some(user => user.name ==="Jigar Prajapati") ){
            return alert("User Exists!!!!")
        }
        arr.push(
            {name:"Nayan Patil", email: "nyn@gmail.com", color: "bg-olive-500"},
            {name:"Jigar Prajapati", email: "jp@gmail.com", color: "bg-blue-400"},
        )

        setData(arr);
    }
    


  return (
    <>
    <section className="flex flex-wrap justify-center items-center gap-6 my-10">
        {Data.map((user)=>{
            return(
                     <div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
                        <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">{user.name}</h1>
                        <h2 className="bg-[#222] w-full rounded-xl px-4 py-2">{user.email}</h2>
                     </div>
            )
            
        })}
    </section>

    <div className="flex justify-center items-center">
        <button className="bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all" onClick={Add}>Add One more user</button>
    </div>

      <div className="flex justify-center items-center">
        <button className="bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all mt-5" onClick={Add2user}>Add Two user</button>
    </div>
      
    </>
  )
}

export default AddUser
