import React from 'react';
import {
    Link,
} from 'react-router-dom';
import './StudentList.css'


class StudentList extends React.Component {

    render(){
        return (
        <div className='list-container'>
            <h1>Список Студентов: </h1>

            <ol>
                <li>
                    {
                        this.props.students.map( (s) => {
                            return (
                                <Link activeClassName="active" to={"/about/" + s.id} key={s.id}>
                                    <h1>{s.fullName}</h1>
                                    <p>{s.age} лет</p>
                                </Link>
                            )
                        })
                    }
                </li>
            </ol>
        </div>
        )
    }
}

export default StudentList;