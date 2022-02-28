import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  let activeStyle = {
    color: "red"
  };
  let inActive = {
    color: "white"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink
              style={({ isActive }) => {
                return isActive ? activeStyle : inActive;
              }}
              className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink
              style={({ isActive }) => {
                return isActive ? activeStyle : inActive;
              }}
              className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink
              style={({ isActive }) => {
                return isActive ? activeStyle : inActive;
              }}
              className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<h1>No Page Found</h1>}></Route>
      </Routes>
    </div>

  );
}

export default App;
