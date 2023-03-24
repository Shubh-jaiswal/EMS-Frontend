import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Login from './users/Login';
import Register from './users/Register';

function App() {
  return (
    <div className="App ">

      <Router>
        
      
      <Navbar />
        
            <Routes>
              <Route exact path="/" element={<Register />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/adduser" element={<AddUser />}></Route>
              <Route exact path="/edituser/:id" element={<EditUser />}></Route>
              <Route exact path="/viewuser/:id" element={<ViewUser />}></Route>


            </Routes>
        
        
      </Router>
    </div>
    
  );
}

export default App;
