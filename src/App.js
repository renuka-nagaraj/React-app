import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './book.json';

class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this); // handleChange being bind with this
    this.state = {
      data:data,
      value:'',                                 //get data from Json
     
    }
   
  }
  handleChange(event) {
    console.log("values from text",event.target.value);
    this.setState({value: event.target.value});
  }
  render() {
   
          let ans = this.state.data;
          let value = this.state.value;
          
          debugger;
          //Filter the values based on rating,name,genre
          if(value.length>0){
            ans = data.filter(function(movie){ 
              return movie.rating.match(value) ||movie.name.match(value) || movie.genre.match(value)  ;
              });
            }
           
          //console.log(value);
    return (
     
      <div className="App">
        {/* ------------header starting------------ */}
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to MindTree Library!....</h1>
        </header>
       {/* ------------header ending------------ */}

       {/* ------------Searchbox starting------------ */}
            <div className="App-border">
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search"/>
           <br/>
           <br/>
           <br/>
            </div>
            
         {/* ------------Searchbox ending------------ */}
        {/* <div class="row"className="App-border">
            <div class="col-sm-3" >Name</div>
            <div class="col-sm-3">Author</div>
            <div class="col-sm-3">Genre</div>
            <div class="col-sm-3">Rating</div>
          </div> */}
       
     {/* ------------Getting value from json------------ */}
     {ans.map(function(name, index){
          return (

            <div class="row">
            <div class="col-sm-5">
             <img src={name.image} class="image"/><br/>
             <a href="#">Read</a>
            </div>
            <div class="col-sm-5">
            <p key={ index }>{name.name}</p>
            <p key={ index }>Author:{name.author}</p>
            <p key={ index }>Genre:{name.genre}</p>
            <p key={ index }>Rating:{name.rating}</p>
            <br/><br/>
            <br/><br/>
              </div>
             
            {/* <div class="col-sm-3"><p key={ index }>{name.genre}</p></div>
            <div class="col-sm-3"><p key={ index }>{name.rating}</p></div> */}
          </div>
           )
          
       })}
 
  </div>
    );
  }
}

export default App;
