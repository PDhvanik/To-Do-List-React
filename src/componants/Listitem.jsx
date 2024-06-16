import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";

function ListItem({ work, index, onDelete }) {
  const [isDone, setIsDone] = useState(false);

  const handleComplete = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
      {/* <p className="text-gray-500">Work Number: {rank}</p> */}
      <div className="flex items-center">
        {(isDone) ? <FaCheckCircle /> : <FaTimesCircle />}
        <p className="text-xl m-1">{work}</p>
      </div>
      <div className="mx-10 ">
        <button onClick={handleComplete} className={`border-2 rounded-md mx-10 p-1 ${(isDone) ? "bg-red-500" : "bg-green-500"}`} >
          {isDone ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(index)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ListItem;

