import React from 'react';
import { Login } from './component/Login.js';
//import { Home } from './component/Home.js';
import { Footer } from './component/Footer.js'
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar1 } from './component/Navbar1.js';
import { Register } from './component/Register.js';
import { Forgotpassword } from './component/Forgotpassword.js';
import { Carosal } from './component/Carosal.js'
import { Home } from './component/Home.js';
import { Hrstyle } from './component/Hrstyle.js'
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact render={() => {
        return (<div><div><Navbar1 /></div><br />
          <div><Carosal /></div><br /><div><Hrstyle /></div><div><Home /></div><br /><div><Footer /></div></div>)
      }} />
      <Route path="/Login" exact render={() => { return (<Login />) }} />
      <Route path="/Register" exact render={() => { return (< Register />) }} />
      <Route path="/Forgotpassword" exact render={() => { return (< Forgotpassword />) }} />
    </BrowserRouter>
  );
}

export default App;
