import React from 'react';

import Pricing from './Pricing';
import Register from './RegisterFormContainer';
import Header from '../Home/HeaderContainer';



function CustomerRegister()  {

        return (
            <div>
                <Header/>
                <Pricing/>
                <Register/>
            </div>
        
        )

}

export default CustomerRegister;