import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
const EditContact = ({ pointer, updateData, deleteData }) => {
  const [editName, setEditName] = useState(pointer.user);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [editNumber, setEditNumber] = useState(pointer.phone);
  const handleName = () => {
    updateData(pointer, editName, editNumber);
    setIsEditingName(false);
  };
  const handlePhone = () => {
    updateData(pointer, editName, editNumber);
    setIsEditingNumber(false);
  };
  return (
    <>
      <tr className="text-center">
        {isEditingName ? (
          <td class=" border-2 border-black w-[200px] ">
            <div className="flex justify-between bg-white">
              <input
                type="text"
                className=""
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button
                className="border-l-2 border-slate-500 px-2"
                onClick={handleName}
              >
                <MdOutlineDoneAll />
              </button>
            </div>
          </td>
        ) : (
          <td class=" border-2 border-black  w-[200px] ">
            <div className="flex justify-between">
              <p className="">{pointer.user}</p>
              <button className="" onClick={() => setIsEditingName(true)}>
                <BiEdit />
              </button>
            </div>
          </td>
        )}
        {isEditingNumber ? (
          <td class=" border-2 border-black w-[308.475px] ">
            <div className="flex justify-between bg-white">
              <input
                type="text"
                className=""
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              />
              <button
                className="border-l-2 border-slate-500 px-2"
                onClick={handlePhone}
              >
                <MdOutlineDoneAll />
              </button>
            </div>
          </td>
        ) : (
          <td class=" border-2 border-black">
            <div className="flex justify-between">
              <p className="">{pointer.phone}</p>
              <button className="" onClick={() => setIsEditingNumber(true)}>
                <BiEdit />
              </button>
            </div>
          </td>
        )}
        <td class="border-2 border-black">
          <button onClick={() => deleteData(pointer.id)}>
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
    </>
  );
};

export default EditContact;
