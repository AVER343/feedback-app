import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
class Payments extends React.Component{
    render(){
        return(
            <StripeCheckout 
            name="Feedback-App"
            description="$5 for 5 mails"
             amount={500}
             token={(token)=>this.props.handleToken(token)}
             stripeKey={`pk_test_bl603zEfmCRS029f1nBjOK0l005vR1MWD5`}
             >
                 <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}
export default connect(null,actions)(Payments)