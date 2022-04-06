import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import MyClassComponent from "./example/MyClassComponent";
import Home from "./example/Home";
import HOC from "./HOC/HOC";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayImage from "./DisplayImage/DisplayImage";
import ReduxUsing from "./ReduxUsing/ReduxUsing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/todo-app" element={<ListTodo />} />
            <Route exact path="/about" element={<MyClassComponent />} />
            <Route exact path="/hoc" element={<HOC />} />
            <Route exact path="/users" element={<ListUser />} />
            <Route path="/users/:id" element={<DetailUser />}/>
            <Route exact path="/display-image" element={<DisplayImage />} />
            <Route exact path="/redux-using" element={<ReduxUsing />} />
            <Route exact path="/" element={<div>Main page</div>} />
          </Routes>
        </header>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
