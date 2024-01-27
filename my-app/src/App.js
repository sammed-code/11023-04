import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import { Route, Routes } from 'react-router-dom';

function App() {
  const company = "KVSC"
  const [name, setName] = useState("Saksham")
  
  return (
    <Routes>
      <Route path='/' element={<ClassComponent />} />
      <Route path='/func-comp' element={<FuncComponent />} />
    </Routes>
    // <div className="App">
    //   <h2>Hello World!!</h2>
    //   <ClassComponent />
    //   <FuncComponent name={name} age={14} company={company} setName={setName} />
    // </div>
  );
}

export default App;
