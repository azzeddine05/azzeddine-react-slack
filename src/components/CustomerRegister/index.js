import React from 'react';

import Pricing from './Pricing';
import Register from './Register';
import Header from '../Home/Header';



class CustomerRegister extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Pricing/>
                <Register/>
            </div>
        
        )
    }

}

export default CustomerRegister;