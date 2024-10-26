import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import Dashboard from './Pages/Dashboard';
// import { Provider } from 'react-redux';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Sidebar from './Components/Sidebar';
import ZodForm from './Pages/ZodForm';
import Details from './Pages/Details';
// import store from './store/store';


// REDUX DATA FLOW
// import ZodForm from './Pages/Redux/ZodForm';
// import Dashboard from './Pages/Redux/Dashboard';


function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/details" element={<Details />} />
              <Route path="/zod" element={<ZodForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
