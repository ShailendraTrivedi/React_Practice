import React, { useEffect, useState } from "react";

import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import EditContact from "./EditContact";
const ContactDesign = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  //---------------create data with a unique ID---------------------
  const createData = async (e) => {
    if (name === "" || number === "") {
      alert("Please fill all sections !!! ");
      return;
    }
    await addDoc(collection(db, "users"), {
      user: name,
      phone: number,
    });
    setName("");
    setNumber("");
  };
  //---------------update data---------------------------
  const updateData = async (data, newText, newNumber) => {
    // console.log(todo);
    // console.log(newText);
    await updateDoc(doc(db, "users", data.id), {
      user: newText,
      phone: newNumber,
    });
  };
  //---------------delete data-----------------------------
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  //----------------get all data------------------------------
  useEffect(() => {
    const q = query(collection(db, "users"));
    const data = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
    });
    return () => data();
  }, []);
  //-------------------return-----------------------------------
  return (
    <>
      <div className="flex flex-col items-center h-[500px] w-[1000px] border-4 border-black">
        <div className=" text-3xl text-white bg-black w-full text-center p-5">
          Contact
        </div>
        <div className="grid grid-cols-3 justify-center w-full h-full gap-4">
          <div className=" flex flex-col justify-around items-center border-r-[1px] border-black bg-slate-300">
            <input
              type="text"
              className=" w-[200px] border-2 border-black"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className=" w-[200px] border-2 border-black"
              placeholder="Enter Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button
              className=" border-2 rounded-2xl border-black w-20 h-10 "
              onClick={createData}
            >
              Add
            </button>
          </div>
          <div className="flex flex-col justify-between items-center  border-l-[1px] border-black bg-slate-300 w-[655px]">
            <table class="border-2 border-black h-[100px] w-[652px]">
              <thead>
                <tr>
                  <th class="border-2 border-black">Name</th>
                  <th class=" border-2 border-black">Phone Number</th>
                  <th class="border-2 border-black">Delete</th>
                </tr>
              </thead>
              <tbody className="border-2 border-black">
                {data.map((pointer, index) => {
                  return (
                    <EditContact
                      key={index}
                      pointer={pointer}
                      updateData={updateData}
                      deleteData={deleteData}
                    />
                  );
                })}
              </tbody>
            </table>
            <button className="border-0 border-black m-3 p-3 text-white bg-black rounded-2xl">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDesign;
