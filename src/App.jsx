import { Login } from "./components/Login";
import { AddJobs } from "./components/AddJobs";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import {Dashboard} from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
        <Route path="/login" element ={<Login />}/>
        <Route path="/addjobs" element ={<AddJobs />}/>
      </Routes>
    </div>
  );
}

export default App;
