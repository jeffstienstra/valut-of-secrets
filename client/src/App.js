import React from 'react'
import {Routes, Route} from 'react-router-dom';

//Routes
import SignUp from './routes/SignUp'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;