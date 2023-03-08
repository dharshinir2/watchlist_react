import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Put extends Component {
    constructor(props){
        super(props);
        this.state={
            serialnumber:" ",
            name:" ",
            movieorseries:" ",
            streamingsite:" ",
            genre:" ",
        }
    }
handleNChange = (event) => {
    this.setState({  serialnumber:event.target.value});
}

handleNameChange = (event) => {
    this.setState({ name:event.target.value});
}
handleMsChange = (event) => {
    this.setState({ movieorseries:event.target.value});
}
handleSChange = (event) => {
    this.setState({ streamingsite:event.target.value});
}
handleGChange = (event) => {
    this.setState({ genre:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        serialnumber : this.state.serialnumber,
        name : this.state.name,
        movieorseries : this.state.movieorseries,
        streamingsite : this.state.streamingsite,
        genre : this.state.genre       
    }
    axios.put('http://127.0.0.1:8080/name',data)
};
render(){
    return ( 
        <div>
            <h1>Update the entries</h1>

        <form onSubmit={this.handleSubmit} className="login-form">
            <label className="login-label">Serial number</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.serialnumber}
                onChange ={this.handleNChange}
                />
            <br></br>

            <label className="login-label">Name</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
                />
            <br></br>

            <label className="login-label">Movie or Series</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.movieorseries}
                onChange ={this.handleMsChange}
                />
            <br></br>

            <label className="login-label">Streaming site</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.streamingsite}
                onChange ={this.handleSChange}
            />
            <br></br>

            <label className="login-label">Genre</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.genre}
                onChange ={this.handleGChange}
            />
            <br></br>
            <button className="login-button" type="submit"> Submit </button>
            
            <br></br>
            <br></br>
        
            <button type="button" className="bbtn"><Link to="/" >Home</Link></button>
            <br></br>
        </form>
                </div>
        ); 
  }
}

export default Put;