import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getwatchlist')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(serialnumber)
    {
        await fetch('http://127.0.0.1:8080/delete/'+serialnumber,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.serialnumber}</td>
            <td className="text-left">{Expense.name}</td>
            <td className="text-left">{Expense.movieorseries}</td>
            <td className="text-left">{Expense.streamingsite}</td>
            <td className="text-left">{Expense.genre}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Expense.serialnumber)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        <h3>Watchlist</h3>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">serialnumber</th>
        <th class="text-left">name</th>
        <th class="text-left">movieorseries</th>
        <th class="text-left">streamingsite</th>
        <th class="text-left">genre</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Deletion;