import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const decreseHandler = () =>{
    setCount(count - 1);

  }

  const increseHandler = () => {
    setCount(count + 1);
  }

  const resetHanler = () =>{
    setCount(0);
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-indigo-700 flex-col gap-10">
      <div className=" text-slate-100 font-semibold text-2xl">Increment & Decrement</div>

      <div className="bg-white flex justify-center gap-12 py-4 rounded-sm text-black text-2xl">
        <button onClick={decreseHandler} className=" border-r-2 text-center w-20 border-[black] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}

        </div>

        <button onClick={increseHandler} className=" border-l-2 text-center w-20 border-[black] text-5xl">
          +
        </button>
      </div>

      <button onClick={resetHanler} className=" bg-orange-400 text-white px-5 py-2 rounded-sm text-lg font-bold">
        Reset
      </button>
    </div>
  );
}

export default App;
