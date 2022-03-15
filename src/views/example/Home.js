import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      console.log("check todo-app");
      navigate("/todo-app");
    }, 3000);
    setTimeout(() => {
      console.log("check 4500");
    }, 4500);
    setTimeout(() => {
      console.log("check 6000");
    }, 6000);
  });
  return (
    <div>
      <h1>Home page. Wating 3 second</h1>
    </div>
  );
}

export default Home;
