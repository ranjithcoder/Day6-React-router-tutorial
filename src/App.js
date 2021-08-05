
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Profile } from './pages/Profile';
import { contactpage } from './pages/contactpage';
import { homepage } from './pages/homepage';
import { notfound } from './pages/notfound';
import { Post } from './pages/Post';



function App() {

  const [login, setlogin] = useState(false);
  return (
    <BrowserRouter basename='/tutorial'>
      <div className='App'>
        <Header />
        <button className='button' onClick={() => setlogin(!login)}>
          {login ? 'logout' : 'login'}
        </button>
      </div>
      <Switch>
        <Route path='/' component={homepage} exact />
        <Route path='/about'>
          <Profile login={login}/>
        </Route>
        <Route path='/contact' component={contactpage} />
        <Route path='/post/:id' component={Post} />
        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
