import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/todo-app");
    }, 3000);
    setTimeout(() => {
      navigate("/home");
    }, 6000);
  });
  return (
    <div>
      <h1>Home page. Wating 3 second</h1>
    </div>
  );
}

export default Home;
