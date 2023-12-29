import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import "./App.css";
import { connect } from 'react-redux'; 
// import { useSelector } from 'react-redux';
import {  } from './redux/actions';
import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';
          

const App = () => {

  return (
    <Router>
        <div>

            <h1 className="winx"> Welcome To Winx Library</h1>
            <div className="container">

                <div className="left-menu">
                    <Link to="/">
                        <div className="books" data-target="books">
                              <i className="fa-solid fa-book"></i>
                        </div>
                    </Link>

                      <Link to="/user">
                          <div className="readers" data-target="readers">
                                <i className="fa-solid fa-user"></i>
                          </div>
                      </Link>
                </div>

                <div className="vivod">
                <Routes>
                  <Route path="/" element={ <MainPage />} />
                  <Route path="/user" element={<UserPage />} />
                </Routes> 

                </div>
            </div>

        </div>

         
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




            // {/* <!-- Контейнер для выданных книг --> */}
            // <div id="give_out" className=" result">
            //     <h2>Список недоступных книг</h2>


            // </div>