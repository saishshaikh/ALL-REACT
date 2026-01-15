import { useState } from "react";

const ObjectCode = () => {

  const [Num, SetNum] = useState({ user: "saish", age: 22 });

  const saara = () => {
    const Newnum = { ...Num };  
    Newnum.user = "aman";
    Newnum.age = 23;
    SetNum(Newnum);
  };

  return (
    <div>
      <h1>{Num.user}, {Num.age}</h1>
      <button onClick={saara}>CLICK ME !!</button>
    </div>
  );
};

export default ObjectCode;
