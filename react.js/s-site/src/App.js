import React from 'react';
import './App.css';
import FormComp from './components/FormComp'
import ReviewComp from './components/ReviewComp';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
          articles: [
            {
                header: 'Header',
                writingTime: '23-09-18',
                text: 'React Text Form'
            }
          ],
          reviewPost: {},
        }
        this.updateData = this.updateData.bind(this);
        this.updateReviewData = this.updateReviewData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    };
    updateData = (curArticle) => {
        console.log(curArticle)
        console.log(this.state.articles)
        const newArticlesArr = [...this.state.articles, curArticle];
        this.setState({
            articles: newArticlesArr,
        });
        console.log(this.state.articles)
    };
    updateReviewData = (curArticle) => {
        console.log(curArticle)
        console.log(this.state.reviewPost)
        this.setState({
            reviewPost: curArticle,
        });
    };
    deleteData=()=>{
        this.setState({
            reviewPost: {},
        });
    }
    render(){
        return (
            <div className="App">
                
                <div class='form'>
                    <FormComp 
                        parentState={this.state} 
                        updateData={this.updateData}
                        updateReviewData={this.updateReviewData}
                        deleteData={this.deleteData}
                    ></FormComp>

                    <ReviewComp
                        parentState={this.state} 
                        updateData={this.updateData}
                        updateReviewData={this.updateReviewData}
                    />
                 </div>

                 <div class='noted'>
                    <h1>Записи: </h1>
                    <ol className='list'>
                    {
                        this.state.articles.map(post => (
                            <li className='shop' key={post.id}>
                                <div className='cont'>
                                    <h1>{post.header}</h1>
                                    <i><p>{post.writingTime}</p></i>
                                    <p>{post.text}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
                
            </div>
        );
    }
}

export default App;