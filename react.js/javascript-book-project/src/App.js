import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage'
import HomePage from './components/HomePage'
import InterPage from './components/InterPage'
import HelpPage from './components/HelpPage'

class App extends React.Component {

  render(){
      return (
          <div>

            <Router>
              <header>

                    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
                      <Link to="/" class="navbar-brand" href="#">Navbar</Link>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                          
                          <li class="nav-item active">
                            <Link to="/" class="nav-link" href="#">Главная</Link>
                          </li>

                          <li class="nav-item">
                            <Link to="/help" class="nav-link" href="#">Помощь</Link>
                          </li>
                          
                          <li class="nav-item">
                            <Link to="/inter" class="nav-link" href="#">Вход</Link>
                          </li>

                          <li class="nav-item">
                            <Link to="/interknbdxnb" class="nav-link" href="#">Ошибка</Link>
                          </li>

                        </ul>
                      </div>
                    </nav>

              </header>

              <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/inter" element={<InterPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/help/:id" element={<HelpPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes> 
              </Router>
          </div>
      )
  }
}


export default App;
