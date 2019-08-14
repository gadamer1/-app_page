import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './nav/nav'
import {Chat, SignUp, Home} from './pages'
const App = ()=> {
  
  return (
    <>
    <div className="nav">
    <Nav/>
    </div>
    <div>
    <section className="article">

    </section>
    <section className="component">
    <Route exact path="/" component = {Home}/>
    <Route exact path="/chat" component = {Chat}/>
    <Route exact path="/SignUp" component = {SignUp}/>
    </section>
    </div>
    </>
  );
}

export default App;
