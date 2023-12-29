import React from 'react';
import './App.css';
import StaffComp from './components/StaffComp';
import BusketComp from './components/BusketComp';
import FormComp from './components/FormComp';


class App extends React.Component{
    constructor() {
        super();
        
        this.state={
            staffArr: [
                {
                    id: 0,
                    title: "Жесткий диск Western Digital Caviar Blue, 1000 GB",
                    img: "https://shop.pulser.kz/images/cache/Products/Product4703/1a29420c6c-2_245x185.jpg",
                    description: "Производитель - Western Digital, Форм-фактор - 3.5, Емкость - 1000, Скорость шпинделя - 7200, Назначение - Массовое применение",
                    cost: "18499тг",
                    taken: 0,
                },
                {
                    id: 1,
                    title: "Жесткий диск Seagate BarraСuda, 1000 GB",
                    img: "https://shop.pulser.kz/images/cache/Products/Product644/16db6c4f00-2_245x185.jpg",
                    description: "Производитель - Seagate, Форм-фактор - 3.5, Емкость - 1000, Скорость шпинделя - 7200, Назначение - Массовое применение",
                    cost: "19340тг",
                    taken: 0,
                },
                {
                    id: 2,
                    title: "Жесткий диск Toshiba, HDWD110UZSVA, 1000 GB",
                    img: "https://shop.pulser.kz/images/cache/Products/Product645/6c779b706e-2_245x185.jpg",
                    description: "Производитель - Toshiba, Форм-фактор - 3.5, Емкость - 1000, Скорость шпинделя - 7200, Назначение - Массовое применение",
                    cost: "19788тг",
                    taken: 0,
                },
            ],
            busketArr: [],
            condition: 'staff',
        }

        this.updateBusketData = this.updateBusketData.bind(this);
        this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
        this.decreaseItemQuantity = this.decreaseItemQuantity.bind(this);
    }
    render(){
        let content;
        if(this.state.condition === 'staff')  content=<StaffComp 
                                                staffProp={this.state.staffArr} 
                                                updateData={this.updateBusketData} 
                                                />
        else if(this.state.condition === 'busket')   content=<BusketComp 
                            busketProp={this.state.busketArr} 
                            increase = {this.increaseItemQuantity}
                            decrease = {this.decreaseItemQuantity}
                            toPayComp={this.toPayComp} 
                            />
        else if(this.state.condition === 'form') content=<FormComp />
      
        return(
            <div class='cont'>
                <nav class="navbar">
                    <ul>
                        <li onClick={(ev)=>{
                                ev.preventDefault();
                                this.setState({
                                  condition: 'staff',
                                })
                                console.log(this.state.condition)
                            }}>
                            <p>Товар</p>
                        </li>
                        <li onClick={(ev)=>{
                                ev.preventDefault();
                                this.setState({
                                  condition: 'busket',
                                })
                                console.log(this.state.condition)
                            }}>
                            <p>Корзина</p>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    { content }
                </div>
            </div>
        )
    };

    updateBusketData = (id) => {
        let result = this.state.busketArr;
        let item = this.state.staffArr[id];

        let index = result.indexOf(item);
        if(index >= 0){
            result[index].taken += 1;
        } else {
            item.taken += 1;
            result.push(item);
        }

        this.setState({
            basketArr: result,
        });
    };

    increaseItemQuantity = (index) => {
        let result = this.state.busketArr;
        result[index].taken += 1;

        this.setState({
            basketArr: result,
        });
    }

    decreaseItemQuantity = (index) => {
        let result = this.state.busketArr;
        result[index].taken -= 1;
        if(!result[index].taken) result.splice(index, 1);

        this.setState({
            basketArr: result,
        });
    }

    toPayComp = () => {
        this.setState({
            condition: 'form',
        })
        console.log(this.state.condition)
    }
}

//Class

// class App extends React.Component{
//   render(){
//     const condition = false;
//     //if
//     // if(condition) return <FormComp text="Comp #1" />
//     //  else return <FormComp text="Comp #2" />

//     //ternar
//     // return(
//     // <div>
//     //   {condition ? <FormComp text="Comp #1" />: <FormComp text="Comp #2" />}
//     // </div>
//     // )

//     // &&
//     return(
//       <div>
//         {condition && <FormComp text="Comp #1" />}
//         {!condition && <FormComp text="Comp #2" />}
//       </div>
//       )
//   }
// }


// Функциональный вариант использования тернарного оператора

// function App(props){
//   const condition=true;
//   const condition2=true;
//   let mode= "la"

//   let content;
//   // Функциональный вариант использования амперсанта
//   // {condition && (content=<FormComp text="Comp #1" />)}
//   // {condition2 && (content=<FormComp text="Comp #2" />)}

//   // Функциональный вариант использования if
//   // if(condition) content=<FormComp text="Comp #1" />
//   // else   content=<FormComp text="Comp #2" />
  

//   //// Функциональный вариант использования switch
//   switch(mode){
//     case "galery": content=<FormComp text="Comp #1" />; break;
//     case "la": content=<FormComp text="Comp #2" />; break;
//   }

//   return (
//     <div>
//       {/* // Функциональный вариант использования тернарного оператора
//       { condition ? <FormComp text="Comp #1" /> : <FormComp text="Comp #2" />} */}

//         {/* // Функциональный вариант использования амперсанта
//         {condition && <FormComp text="Comp #1" />}
//         {condition2 && <FormComp text="Comp #2" />} */}

//         {content}
//     </div>
//   )
// }

//Первый урок

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//           preview: 
//             {
//               title: '',
//               text: "",
//             },
//           publication : {
//             title: '',
//             text: "",
//           },
//         }
//         this.updateData = this.updateData.bind(this);
//     };
//     updateData = (curArticle) => {
//         console.log(curArticle)
//         console.log(this.state.articles)
//         const newArticlesArr = [...this.state.articles, curArticle];
//         this.setState({
//             articles: newArticlesArr,
//         });
//         console.log(this.state.articles)
//     };

//     render(){
//         return (
//             <div className="App">
//                 <FormComp publication={this.state.publication}></FormComp>

//             </div>
//         );
//     }
// }
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//           preview: 
//             {
//               title: '',
//               text: "",
//             },
//           publication : {
//             title: '',
//             text: "",
//           },
//         }
//         this.updateData = this.updateData.bind(this);
//     };
//     updateData = (curArticle) => {
//         console.log(curArticle)
//         console.log(this.state.articles)
//         const newArticlesArr = [...this.state.articles, curArticle];
//         this.setState({
//             articles: newArticlesArr,
//         });
//         console.log(this.state.articles)
//     };

//     render(){
//         return (
//             <div className="App">
//                 <FormComp publication={this.state.publication}></FormComp>

//             </div>
//         );
//     }
// }

export default App;