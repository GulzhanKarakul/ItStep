import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef(); // Создаем ref
    }
  
    componentDidMount() {
      this.myRef.current.focus(); // Используем ref для фокусировки на элементе
    }
  
    render() {
      return <input ref={this.myRef} />;
    }
}
 
export default MyComponent;