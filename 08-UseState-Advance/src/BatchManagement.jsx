import { useState } from "react";

const BatchManagement = () => {
  const [Num, SetNum] = useState({ user: "saish", age: 22 });

  const saara = () => {
    SetNum(prev => ({ ...prev, age: 45,user:"aman" }));
  };

  return (
    <div>
      <h1>{Num.user}, {Num.age}</h1>
      <button onClick={saara}>CLICK ME !!</button>
    </div>
  );
};

export default BatchManagement;
