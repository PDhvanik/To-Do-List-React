// import fs from "fs";
import React, { useEffect, useState } from "react";
import Listitem from "./Listitem";
function Title() {
  const [data, setData] = useState([]);
  const [work, setWork] = useState([]);
  function saveWork() {
    setData([...data, work]);
    document.querySelector('input').value=null;
  }

  function deleteWork(index) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  }
  return (
    <>
      <div className=" m-6 p-5 border-3">
        <div className="text-3xl">
          <h1 className="mb-3 flex justify-center text-3xl font-semibold">
            To-Do list
          </h1>
          <input
            type="text"
            placeholder="Work title here..."
            onChange={(e) => setWork(e.target.value)}
            onKeyPress={(e)=>{
              if(e.key =='Enter'){
                saveWork();
              }
            }}
            className="mr-2 p-1 border-2 rounded-md text-xl border-black "
          />
          <button
            type="submit"
            onClick={saveWork}
            className="text-xl w-40 text-black bg-zinc-400 hover:bg-black hover:te`xt-white border-black border-2 rounded-xl font-semibold"
          >
            Add to the list
          </button>
          <hr className="font-extrabold m-1 mt-4 mb-3 bg-black border-1 border-black" />
          <p className="text-2xl my-5">List :</p>
        </div>
        {(data.length == 0) ? <p className="text-xl text-slate-600">No work available...</p> : data.map((work, index) => (
          <Listitem key={index} work={work} index={index} onDelete={deleteWork} />
        ))}
      </div >
    </>
  );
}

export default Title;
