import React, { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
const style = {
  bg: `flex flex-col justify-between items-center border-4 border-black h-[200px]  w-[250px]`,
  form: `flex justify-center items-center border-4 border-black m-5`,
  btn: `h-[40px] w-[100px] bg-white text-black`,
};
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <>
      <div className={style.bg}>
        <input
          type="text"
          className="flex m-5 rounded-lg"
          placeholder="Enter username"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={style.form}>
          <button className={style.btn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;

// import React from "react";
// import { db } from "../firebase.config.js";
// import { collection, addDoc } from "firebase/firestore";

// const AddTodo = () => {
//   const [title, setTile] = React.useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (title !== "") {
//       await addDoc(collection(db, "todos"), {
//         title,
//         completed: false,
//       });
//       setTile("");
//     }
//   };
//   return;
//   <>
//     <form onSubmit={handleSubmit}>
//       <div className="flex justify-center items-center">
//         <input
//           type="text"
//           placeholder="Enter todo..."
//           value={title}
//           onChange={(e) => setTile(e.target.value)}
//         />
//       </div>
//       <button className=" flex justify-center items-center border-4 border-black">
//         Add
//       </button>
//     </form>
//   </>;
// };

// export default AddTodo;
