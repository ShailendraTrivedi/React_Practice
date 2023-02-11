import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
const EditContact = ({ pointer, updateData, deleteData }) => {
  const [text, setText] = useState(pointer.user);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    updateData(pointer, text);
    setEdit(false);
  };
  return (
    <>
      <tr className="text-center">
        <td class=" border-2 border-black">{pointer.user}</td>
        <td class="border-2 border-black">{pointer.phone}</td>

        <td class="border-2 border-black">
          <button onClick={() => setEdit(true)}>
            <BiEdit />
          </button>
        </td>
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
