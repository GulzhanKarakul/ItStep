// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewComp from './components/NewComp';

// const name = 'Gulzhan';
// const cl='app'
// let firstTime=false;
// Создание элемента
// const element = (<h1 className='cl'>Первый элемент</h1>);
// const element2 = React.createElement('h1', {className: cl}, `Второй Элемент`)

class App extends React.Component {
  users = [
    {
      name: 'Marry',
      status: 'Awesome',
      avatar: 'https://cojo.ru/wp-content/uploads/2023/01/lisy-ari-1.webp',
      netState: 'Online'
    },
    {
      name: 'Gulzhan',
      status: 'Awesome',
      avatar: 'https://pibig.info/uploads/posts/2022-07/1657211357_2-pibig-info-p-krasivie-kartinki-na-telefon-babochki-2.jpg',
      netState: 'Offline'
    },
  ];
  render() {
    return <NewComp users={this.users}></NewComp>
  };
}


// function App() {
//    users = [
//     {
//       na
//     }
//    ]
//   if(firstTime)
//   return (
//     <div className="App">
//       <header className={cl}>
//         <img src={logo} className="App-logo" alt="logo" />
//         {element}
//         {element2}
//         <NewComp></NewComp>
//         <p>
//           Hello {name}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//   else return <NewComp />;
// }

export default App;




// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement(
//         "h3",
//         null,
//         "Список дел"
//       ),
//       React.createElement(TodoList, { items: this.state.items }),
//       React.createElement(
//         "form",
//         { onSubmit: this.handleSubmit },
//         React.createElement(
//           "label",
//           { htmlFor: "new-todo" },
//           "Что нужно сделать?"
//         ),
//         React.createElement("input", {
//           id: "new-todo",
//           onChange: this.handleChange,
//           value: this.state.text
//         }),
//         React.createElement(
//           "button",
//           null,
//           "Добавить #",
//           this.state.items.length + 1
//         )
//       )
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return React.createElement(
//       "ul",
//       null,
//       this.props.items.map(item => React.createElement(
//         "li",
//         { key: item.id },
//         item.text
//       ))
//     );
//   }
// }

// export default TodoApp;