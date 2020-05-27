import React,  {useState, useEffect} from 'react';
import CustomerForm from './CustomerForm';

import classnames from 'classnames';

import { I18nProvider, LOCALES } from '../../i18n';

import translate from '../../i18n/translate';
import { connect } from 'react-redux'; 
import {saveUser} from '../../actions/users';


function Register({saveUser}) {

  const [locale, setLocale] = useState(LOCALES.FRENSH);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDisplay, setIsDisplay] = useState({display: 'none'})
  // Shop props
  const [shop_name, setShopName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  // const [password, setPassword] = useState('');

  /*const customProps = {
    isDisplay,
    setIsDisplay

  };*/

   const handleSubmit = (e) => {

     e.preventDefault();
     console.log("submit form");
     let errors = {};
     if(email === '')errors.email = "Can't be empty";
     if(password === '')errors.password = "Can't be empty";
    
     setErrors(errors);
     setLoading(true);
     console.log("errors here");
     console.log(errors);
     saveUser({email, password});
     setIsDisplay({display: 'block'});

     //this.handleSubmitCustomer();

  }

  const handleSubmitCustomer = (e) => {

    e.preventDefault();

  }

  const switchTabs = (e) => {
    // Tab content
    console.log("switchTabs called ==== ");
    const panels = document.querySelectorAll(".panel");
    if(e.target.tagName === "LI") {
      
      // check if email and pass not empty
      let errorsTab = {};
      
      if(email === '') errorsTab.email = "Can't be empty";
      if(password === '') errorsTab.password = "Can't be empty";
      console.log(errorsTab, (Object.keys(errorsTab).length !== 0));
      if(Object.keys(errorsTab).length !== 0) {
        setErrors(errorsTab);
        return false;
      }
      // Remove the style from other active li
      // Change the style of the li element
      let li = e.target;
      
      // get the element that triggred the event
      const targetPanel = document.querySelector(e.target.dataset.target);
      
      // remove style from li elements 
      let lis = document.getElementById("myTabs").querySelectorAll("li");

      lis.forEach(elemnt => {
        if(elemnt !== li) {
          elemnt.classList.remove("borderRed");
          elemnt.classList.remove("hover-gray");
          elemnt.classList.add("borderGray");
        }
      });

      // switch style
      panels.forEach(panel => {
          if(panel === targetPanel){
            panel.classList.add("active");
            
            li.classList.remove("borderGray");
            li.classList.add("hover-gray");
            li.classList.add("borderRed");
          }
          else {
            panel.classList.remove("active");
          }
      });
    } 
  }

    
  return (
    <I18nProvider locale={locale}>
      <div className="bg_gray pattern" id="submit">
      <div className="container margin_60_40">
        <div className="row justify-content-center">
          
          

          {/* <div style={isDisplay} className="col-lg-5"> */}
          
          
          <div id="tabbed-content">
                <ul className="tabs" id="myTabs">
                    <li data-target="#user-infos" className="active borderRed hover-gray t-col-12-xs" onClick={switchTabs}>User informations</li>
                    <li data-target="#restaurant-infos" className="active borderGray t-col-12-xs" onClick={switchTabs}>Restaurant Informations</li>
                </ul>
                <div className="panel active" id="user-infos">
                  {/* <div className="col-lg-5"> */}
                  <div className="">
                    <div className="text-center add_bottom_15">
                      <h4>1. Please fill the form below</h4>
                      <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
                    </div>
                    <div id="message-register" />
                    <form className={classnames('ui', 'form', {loading: true })} onSubmit={handleSubmit}>
                      <h6>{translate("name")}</h6>
                      <div className="row ">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" value={name} onChange={e =>setName(e.target.name)} />
                          </div>
                        </div>
                      </div>
                      {/* /row */}
                      <h6>{translate("phone")}</h6>
                      <div className="row add_bottom_15">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="phone" id="phone" value={phone} onChange={e =>setPhone(e.target.phone)} />
                          </div>
                        </div>
                      </div>
                      {/* /row */}
                      <h6>{translate("email")}</h6>
                      <div className={classnames('row', { error: !!errors.email})}>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" value={email} onChange={e =>setEmail(e.target.email)} />
                            <span>{errors.email}</span>
                          </div>
                        </div>
                      </div> 
                      {/* /row */}
                      <h6>{translate("password")}</h6>
                      <div className= "row">
                        <div className="col-lg-12 error">
                          <div className={classnames('form-group', { error: !!errors.password})}>
                            <input type="password" className="form-control error" name="password" id="password" value={password} onChange={e =>setPassword(e.target.password)} />
                            <span>{errors.password}</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-center"><input type="submit" className="btn_1" value="submit user" id="submit-register" /></div>
                    </form>
                  </div>
                </div>
                <div className="panel" id="restaurant-infos">
                  {/* <div className="col-lg-5"> */}
                  <div className="">
                    <div className="text-center add_bottom_15">
                      <h4>2. Please fill the form below</h4>
                      <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
                    </div>
                    <div id="message-register" />
                    <form className={classnames('ui', 'form', {loading: true })} onSubmit={handleSubmit}>
                      <h6>{translate("shop-name")}</h6>
                      <div className="row ">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="shop_name" id="shop_name" value={shop_name} onChange={e =>setShopName(e.target.shop_name)} />
                          </div>
                        </div>
                      </div>
                      {/* /row */}
                      {/* <h6>Shop phone</h6>
                      <div className="row add_bottom_15">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="shop_phone" id="shop_phone" value={shop_phone} onChange={e =>setShopPhone(e.target.phone)} />
                          </div>
                        </div>
                      </div> */}
                      {/* /row */}
                      {/* <h6>{translate("Shop email")}</h6>
                      <div className={classnames('row', { error: !!errors.email})}>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input type="email" className="form-control" name="shop_email" id="shop_email" value={shop_email} onChange={e =>setShopEmail(e.target.shop_email)} />
                            <span>{errors.title}</span>
                          </div>
                        </div>
                      </div>  */}
                      {/* /row */}
                      <h6>{translate("country")}</h6>
                      <div className= "row">
                        <div className="col-lg-12 error">
                          <div className={classnames('form-group', { error: !!errors.country})}>
                            <input type="text" className="form-control error" name="country" id="country" value={country} onChange={e =>setCountry(e.target.country)} />
                            <span>{errors.country}</span>
                          </div>
                        </div>
                      </div>
                      {/* /row */}
                      <h6>{translate("city")}</h6>
                      <div className= "row">
                        <div className="col-lg-12 error">
                          <div className={classnames('form-group', { error: !!errors.city})}>
                            <input type="text" className="form-control error" name="city" id="city" value={city} onChange={e =>setCity(e.target.city)} />
                            <span>{errors.city}</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-center"><input type="submit" className="btn_1" value="submit customer" id="submit-register" /></div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
      {/* /container */}
    </div>  
    </I18nProvider>
  )

}


  //Register.PropTypes = {
   // users: React.PropTypes.array.isRequired
  //}

  /*function mapStateToProps(state) {
    return {
      users: state.users
    }
  }*/


export default connect(null, { saveUser })(Register);