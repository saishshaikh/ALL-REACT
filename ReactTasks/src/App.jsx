// import { useState } from "react";



// const CRUDAPP = () => {
//   const [crud, setcrud] = useState([]);
//   const [input, setinput] = useState("");
//   const [editindex, seteditindex] = useState(null);

//   const ADDUpdtaed = () => {
//     if (!input.trim()) return;

//     if (editindex !== null) {
//       const NewCrud = [...crud];
//       NewCrud[editindex] = input;
//       setcrud(NewCrud);
//       seteditindex(null);
//     } else {
//       setcrud([...crud, input]);
//     }

//     setinput("");
//   };

//   const Delet = (index) => {
//     const newcrudee = crud.filter((_, i) => i !== index);
//     setcrud(newcrudee);
//   };

//   const editcrude = (index) => {
//     setinput(crud[index]);
//     seteditindex(index);
//   };

//   return (
//     <div>
//       <h1>CRUD APP</h1>

//       <input
//         type="text"
//         placeholder="ENTER YOUR TASK"
//         value={input}
//         onChange={(e) => setinput(e.target.value)}
//       />

//       <button onClick={ADDUpdtaed}>
//         {editindex !== null ? "Update" : "Add"}
//       </button>

//       <ul>
//         {crud.map((items, index) => (
//           <li key={index}>
//             {items}

//             <button onClick={() => editcrude(index)}>
//               Edit
//             </button>

//             <button onClick={() => Delet(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CRUDAPP;


// form handling to build auth logic 


import { useState } from "react"
const  Auth = ()=> {
   const [form,setform] = useState=({
    FullName,
    Email,
    Password,
   })
   const [input ,setinput]= useState ("")



   const Handlesetchng = (e)=> {
      const [name,value]= e.target
      setform ({
        ...FormData,
        [name] : value

      })
   }

   const FormSumbit =(e)=> {
    e.preventDefault()
    console.log ("Form SUMbited Succesfully" + formdata)

   }

   return (
    <div>
    <form onClick={FormSumbit}>
    
    <input 
    placeholder="Enter Your FulNAme"
    name="FullName"
    value={formdata.FullName}
    onChange={Handlesetchng}
    
    />
    <input 
    placeholder="Enter Your Email"
    name="FullName"
    value={formdata.Email}
    onChange={Handlesetchng}
    
    />
     <input 
    placeholder="Enter password"
    name="FullName"
    value={formdata.Password}
    onChange={Handlesetchng}
    
    />

    <button type="sumbit" > sumbit </button>
    </form>

    </div>
   )
}

export default Auth