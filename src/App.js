import React, { Component } from 'react';
import PostForm from './Components/PostForm';
import AllPost from './Components/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
        <AllPost/>

      </div>
    );
  }

}

export default App;
