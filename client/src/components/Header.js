import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Payments from './payments'
class Header extends React.Component{
    checkStatus =(auth)=>{
             if(auth==null) return;
             else if(auth==false)return(<li><a href="/auth/google">Login</a></li>)
    else return ([<li key='1'><Payments /></li>,<li key="3" style={{margin:"0 10px"}}> Credits: {this.props.auth.credits} </li>,<li key='2'><a href="/api/logout">Logout</a></li>])
    }
    render(){
        return(
            <div>
                  <nav>
                        <div className="nav-wrapper">
                        <Link to={this.props.auth?"/surveys":'/'} className="brand-logo">Feedback-App</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.checkStatus(this.props.auth)}
                        </ul>
                        </div>
                    </nav>  
            </div>
        )
    }
}
const mapStateToProps=(state)=> {return {auth:state.auth}}
export default connect(mapStateToProps,null)(Header)