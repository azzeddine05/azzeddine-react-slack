import React,  {useState, useEffect} from 'react';
import RegisterFormLayout from './RegisterFormLayout';

import classnames from 'classnames';

import { I18nProvider, LOCALES } from '../../i18n';

import translate from '../../i18n/translate';
import { connect } from 'react-redux'; 
import {saveUser} from '../../actions/users';


function RegisterFormContainer({saveUser}) {

  const [locale, setLocale] = useState(LOCALES.FRENSH);
  const [name, SetName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDisplay, setIsDisplay] = useState({display: 'none'})

  /*const customProps = {
    isDisplay,
    setIsDisplay

  };*/

   const handleSubmit = (e) => {

     e.preventDefault();
     console.log("submit form");
     let errors = {};
     if(email === '')errors.title = "Can't be empty";
     if(password === '')errors.title = "Can't be empty";
    
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

    
  return (
    <I18nProvider locale={locale}>
      <div className="bg_gray pattern" id="submit">
      <div className="container margin_60_40">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="text-center add_bottom_15">
              <h4>Please fill the form below</h4>
              <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
            </div>
            <div id="message-register" />
            <form className={classnames('ui', 'form', {loading: true })} onSubmit={handleSubmit}>
              <h6>{translate("name")}</h6>
              <div className="row ">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" value={name} onChange={e =>SetName(e.target.name)} />
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
                    <span>{errors.title}</span>
                  </div>
                </div>
              </div>
              {/* /row */}
              <h6>{translate("password")}</h6>
              <div className= "row">
                <div className="col-lg-12 error">
                  <div className={classnames('form-group', { error: !!errors.password})}>
                    <input type="text" className="form-control error" name="password" id="password" value={password} onChange={e =>setPassword(e.target.password)} />
                    <span>{errors.title}</span>
                  </div>
                </div>
              </div>
              <div className="form-group text-center"><input type="submit" className="btn_1" defaultValue="Submit" value="submit user" id="submit-register" /></div>
            </form>
          </div>

          <div style={isDisplay} className="col-lg-5">
            <div className="text-center add_bottom_15">
              <h4>Please fill the form below</h4>
              <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
            </div>
            <div id="message-register" />
            <form className={classnames('ui', 'form', {loading: true })} onSubmit={handleSubmit}>
              <h6>{translate("name")}</h6>
              <div className="row ">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" value={name} onChange={e =>SetName(e.target.name)} />
                  </div>
                </div>
              </div>
              {/* /row */}
              <h6>Customer info</h6>
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
                    <span>{errors.title}</span>
                  </div>
                </div>
              </div>
              {/* /row */}
              <h6>{translate("password")}</h6>
              <div className= "row">
                <div className="col-lg-12 error">
                  <div className={classnames('form-group', { error: !!errors.password})}>
                    <input type="text" className="form-control error" name="password" id="password" value={password} onChange={e =>setPassword(e.target.password)} />
                    <span>{errors.title}</span>
                  </div>
                </div>
              </div>
              <div className="form-group text-center"><input type="submit" className="btn_1" defaultValue="Submit" value="submit customer" id="submit-register" /></div>
            </form>
          </div>
        </div>
      </div>
      {/* /container */}
    </div>
    </I18nProvider>
  )

}


  //RegisterFormContainer.PropTypes = {
   // users: React.PropTypes.array.isRequired
  //}

  /*function mapStateToProps(state) {
    return {
      users: state.users
    }
  }*/


export default connect(null, { saveUser })(RegisterFormContainer);