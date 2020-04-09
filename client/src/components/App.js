import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import authReducer from '../redux/reducers/authReducer'
import * as actions from '../redux/actions/actions'
import LandingPage from './LandingPage'
import Payments from './payments'
class  App extends React.Component{
   
    componentDidMount(){
       this.props.FetchData()
    }
   render(){
      const SurveysPageComponent=()=><h1>SurveysPageComponent</h1>
      const NewSurveysComponent=()=><h2>NewSurveysComponent</h2>
         return(<div className="container">
             <Header/>
              <Switch>
               <Route exact path="/" component={LandingPage} />
               <Route exact path='/surveys' component={SurveysPageComponent}/>
              <Route exact path='/surveys/new' component={NewSurveysComponent}/>
           </Switch> </div>)
           }
}
export default connect(null,actions)(App)