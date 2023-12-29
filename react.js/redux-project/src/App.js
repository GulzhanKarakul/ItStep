import './App.css';
import { connect } from 'react-redux';
import { increment, decrement, clear, addGrade } from './redux/actions';

const App = ({count, students, increment, decrement, clear, addGrade }) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={clear}>CLEAR</button>

            <div>
                {students.map( (s, index) => {
                    
                    return ( 
                        <div key={index}>
                            <p>Имя: {s[0]}</p>
                            <p>Оценка: {s[1]}</p>
                        </div>
                    )
                })}
            </div>

            <input type='text' id="index"></input>
            <input type='number' id="grade"></input>
            <button onClick={ () => {
                let index = document.getElementById('index').value;
                let grade = document.getElementById('grade').value;

                addGrade(index, grade);
            }}>Оценка</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count : state.count,
        students: state.students
    }
}

const mapDispatchToProps = {
    increment,
    decrement, 
    clear, 
    addGrade,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);