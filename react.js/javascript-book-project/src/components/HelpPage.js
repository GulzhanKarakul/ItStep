import React from 'react';

import './HelpPage.css'


class HelpPage extends React.Component {
    constructor(){
        super();
        this.state={
            articles: [
                {
                  id:0,
                  header: 'Number (Число)',
                  text: 'Тип данных для представления чисел, как целых, так и с плавающей запятой. Примеры: 5, 3.14, -42.',
                },
                {
                  id:1,
                  header: 'String (Строка)',
                  text: `Тип данных для представления текстовых строк. Строки могут быть заключены в одинарные, двойные или обратные кавычки. Примеры: "Привет, мир!", 'JavaScript', Строка с переменной \${name}.`,
                },
                {
                  id:2,
                  header: 'Boolean (Логическое значение)',
                  text: 'Тип данных, представляющий логические значения true (истина) или false (ложь). Примеры: true, false.',
                },
                {
                  id: 3,
                  header: 'Undefined (Неопределенное значение)',
                  text: 'Тип данных, который имеет только одно значение - undefined. Он присваивается переменным, которые были объявлены, но не инициализированы. Пример: let x; (x равно undefined).',
                },
                {
                  id: 4,
                  header: 'Null (Пусто)',
                  text: 'Тип данных, представляющий отсутствие значения или пустоту. Пример: let y = null;.',
                },
                {
                  id: 5,
                  header: 'Object (Объект)',
                  text: 'Тип данных, представляющий коллекцию ключ-значение (свойство-значение). Объекты используются для организации и хранения данных. Пример: { name: "John", age: 30 }.',
                },
                {
                  id: 6,
                  header: 'Array (Массив)',
                  text: 'Тип данных, представляющий упорядоченный список элементов. Элементы могут быть любого типа данных и доступны по индексам (целым числам). Пример: [1, 2, 3, "apple", "banana"].',
                },
            ],

            result: [],
          
        }
        this.url=window.location.pathname.split('/');
        this.id = parseInt(this.url[2]);

        this.searchDate = this.searchDate.bind(this);
    }

    render(){
        return (
            <div>
                <h1>HelpPage</h1>

                <div class="help-container">
                    <h2>Помощь</h2>
                    <div class="search-form">
                        <form action="#" >
                            <input type="text" id="search" name="search" placeholder="Введите ключевое слово" required></input>
                            <input type="submit"  onClick={this.searchDate} value="Найти" ></input>
                        </form>
                    </div>
                    <div class="search-results">
                        {
                            this.state.result.map( (a) => {
                                
                                return (
                                    <section class="custom-section">
                                        <h2>{a.header}</h2>
                                        <p>{a.text}</p>
                                    </section>

                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )

    }

    searchDate = (event)=>  {
        event.preventDefault()
        let input = document.querySelector('#search')
        const value = input.value.toLowerCase();

        let resultArray=[];
        
        this.state.articles.forEach( (a) => {
            let header = a.header;
            let text = a.text;
            if(header.toLowerCase().includes(value) || text.toLowerCase().includes(value)) {
                resultArray.push(a)
            }
        });

        console.log(resultArray);
        this.setState({
            result: resultArray,
        })

      }
}

export default HelpPage;