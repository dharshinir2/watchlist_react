import axios from "axios";
import { Link } from "react-router-dom";
import React,{Component} from "react";
class Table extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getwatchlist').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>movie or series</th>
                        <th>Streaming site</th>
                        <th>genre</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.serialnumber}</td>
                            <td>{user.name}</td>
                            <td>{user.movieorseries}</td>
                            <td>{user.streamingsite}</td>
                            <td>{user.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
            
      }
}
export default Table;