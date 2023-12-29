import React from 'react';
import './FormComp.css'

class FormComp extends React.Component {

        render() {
            return (
                <div class="container">
                    <h2>Оплата товара</h2>
                    <form action="обработчик.php" method="post">
                        <div class="form-group">
                            <label for="name">Имя:</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div class="form-group">
                            <label for="card">Номер кредитной карты:</label>
                            <input type="text" id="card" name="card" required></input>
                        </div>
                        <input type="submit" value="Оплатить"></input>
                    </form>
                </div>
            )
    
        }
    
    }


// class FormComp extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             title: '',
//             text: "",
//         };
//         if(props.publication){
//             this.setState({
//                 title: this.props.publication.title,
//                 text: this.props.publication.text,
//             })
//         }
//     }
//     componentDidUpdate(){

//     }
//     render() {
//         return (
//             <div className='cont2'>
//               <h1>{this.state.title}</h1>
//               <p>{this.state.text}</p>
//             </div>
//         )

//     }

// }

export default FormComp;