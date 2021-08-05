
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { aboutpage } from './pages/aboutpage';
import { contactpage } from './pages/contactpage';
import { homepage } from './pages/homepage';
import { notfound } from './pages/notfound';
import { Post } from './pages/Post';



function App() {
  return (
    <BrowserRouter basename="/tutorial">
      <div className='App'>
        <Header />
      </div>
      <Switch>
        <Route path='/' component={homepage} exact />
        <Route path='/about' component={aboutpage} />
        <Route path='/contact' component={contactpage} />
        <Route path='/post/:id' component={Post}/>
        <Route component={notfound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
