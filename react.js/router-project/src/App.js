import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    // Switch,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import Home from './components/HomeComp';
import About from './components/AboutComp';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: 'Hello',
    }
  }
  render(){
    return (

        <Router>
        <header>
            <nav>
                    <li>
                        <NavLink to="/" exact >Главная</NavLink>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/about">Контакты</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/news/link/id/1">Контакты</Link>
                    </li>

            </nav>
            <button onClick={()=> {
            let url= new URLSearchParams(this.props)
            console.log(url.get('userId'))
        }}>Info
        </button>
        </header>

        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={<About text={this.state.text} />} />
          <Route path="//news/link/id/1" element={<About />} />
        </Routes>        

        {/* <main>
            {/* <Switch> рендерит первый <Route>, совпавший с URL */}
            {/* <Switch>
                <Route path="/about" component={About}>
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch> */}
        {/* </main> */} 
    </Router>


    )
  }
}

export default App;
