import * as React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import './App.css';

import StudentInfo from './components/StudentInfo'
import StudentList from './components/StudentsList'

class App extends React.Component {
    constructor(){
        super();
        this.state={
            students: [
                {
                  id:0,
                  fullName: "Иванов Иван Иванович",
                  age: 17,
                  attendance: 95, // Процент посещаемости
                  academicPerformance: 85, // Успеваемость в баллах
                  coursesPassed: 3,
                },
                {
                  id:1,
                  fullName: "Петрова Анна Сергеевна",
                  age: 16,
                  attendance: 92,
                  academicPerformance: 90,
                  coursesPassed: 4,
                },
                {
                  id:2,
                  fullName: "Смирнов Алексей Павлович",
                  age: 18,
                  attendance: 88,
                  academicPerformance: 78,
                  coursesPassed: 2,
                },
                {
                  id: 3,
                  fullName: "Козлова Ольга Игоревна",
                  age: 17,
                  attendance: 96,
                  academicPerformance: 92,
                  coursesPassed: 5,
                },
                {
                  id: 4,
                  fullName: "Горбунов Максим Андреевич",
                  age: 16,
                  attendance: 90,
                  academicPerformance: 87,
                  coursesPassed: 3,
                },
            ],
          
        }
    }

    render(){
        return (
            <div>
              <Router>
                <header>
                    <nav class="menu">
                      <ul>
                            <li>
                                <NavLink to="/" exact >Студенты</NavLink>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/about">Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                  <Route path="/" element={ <StudentList students={this.state.students} />} />
                  <Route path="/about/:id" element={<StudentInfo students={this.state.students} />} />
                </Routes> 
                </Router>
            </div>
        )
    }
}

export default App;