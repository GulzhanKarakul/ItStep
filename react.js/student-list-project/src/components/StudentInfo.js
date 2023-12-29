import React from 'react';
import './StudentInfo.css'

class StudentInfo extends React.Component {
    constructor(){
        super();
        this.url=window.location.pathname.split('/');
        this.id = parseInt(this.url[2])
    }
    render(){
        return (
            <div className='student-info'>
                <h1>Ф.И.О: {this.props.students[this.id].fullName}</h1>
                <div>
                    <p>Возвраст: {this.props.students[this.id].age} лет</p>
                    <p>Процент посещаемости: {this.props.students[this.id].attendance} %</p>
                    <p>Успеваемость в баллах: {this.props.students[this.id].academicPerformance}</p>
                    <p>Колличество курсов: {this.props.students[this.id].coursesPassed}</p>
                </div>
            </div>
        )
    }
}

export default StudentInfo;