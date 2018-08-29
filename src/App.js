import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[
        {
        "id":"1",
        "name": "harry potter",
        "rating": "4.5",
        "author": "J. K. Rowling",
        "genre": "fiction"
        },
        {
        "id":"2",
        "name": "design of everyday things",
        "rating": "4.8",
        "author": "Don Norman",
        "genre": "design"
        },
        {
        "id":"3",
        "name": "Into the wild",
        "rating": "4",
        "author": "Jon Krakauer",
        "genre": "philosophy"
        },
        {
        "id":"4",
        "name": "How to unleash your potential",
        "rating": "4.2",
        "author": "shivam",
        "genre": "philosophy"
        }
        ]
    }
  }
  render() {
    debugger;
          const ans = this.state.data;
          console.log(ans[0].name);
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     this.state.data.map
      //   </p>
      // </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    
     {ans.map(function(name, index){
          return (
            <table>
             
              <tr>
                <td> <p key={ index }>{name.name}</p></td>
               
                <td> <p key={ index }>{name.author}</p></td>
                <td></td>
                <td> <p key={ index }>{name.genre}</p></td>
                <td> <p key={ index }>{name.rating}</p></td>
              </tr>
            </table>

           
                     
            )
          
       })}
 
  </div>
    );
  }
}

export default App;
