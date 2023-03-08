import { Link } from "react-router-dom";
import axios from "axios";
import React,{Component} from "react";
function FirstPage (){
    return(
        <div>
          <h1>My Watchlist</h1>
          
          
            
            <button className="playbut"><Link className="but" to='/getvalues'>Show Watchlist</Link></button>
            <button className="playbut"><Link className="but" to='/postvalue'>Add movies/series</Link></button>
            <button className="playbut"><Link className="but" to='/putvalues'>Update details</Link></button>
            <button className="playbut"><Link className="but" to='/deleteva'>Delete items</Link></button>

          
        </div>
    );

}
export default FirstPage
