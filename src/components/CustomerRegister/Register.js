import React,  {useState, useEffect} from 'react';

import { I18nProvider, LOCALES } from '../../i18n';

import translate from '../../i18n/translate';
import { connect } from 'react-redux'; 


function Register() {

  const [locale, setLocale] = useState(LOCALES.FRENSH);

    
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
                  <form method="post" action="assets/register.php" id="register">
                    <h6>data data</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name and Last Name" name="name_register" id="name_register" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row add_bottom_15">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email Address" name="email_register" id="email_register" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <h6>Restaurant data</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Restaurant Name" name="restaurantname_register" id="restaurantname_register" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Address" name="address_register" id="address_register" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row add_bottom_15">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="City" name="city_register" id="city_register" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-control" name="country_register" id="country_register">
                            <option value>Country</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Unated States">Unated States</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <h6>I am not a robot</h6>
                    <div className="row add_bottom_25">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" id="verify_register" className="form-control" placeholder="Human verify: 3 + 1 =?" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="form-group text-center"><input type="submit" className="btn_1" defaultValue="Submit" id="submit-register" /></div>
                  </form>
                </div>
                <div className="col-lg-5">
                  <div className="text-center add_bottom_15">
                    <h4>Please fill the form below</h4>
                    <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
                  </div>
                  <div id="message-register" />
                  <form method="post" action="assets/register.php" id="register">
                    <h6>{translate("name")}</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="name" id="name" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <h6>{translate("phone")}</h6>
                    <div className="row add_bottom_15">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="phone" id="phone" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <h6>Restaurant data</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="password" id="password" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group text-center"><input type="submit" className="btn_1" defaultValue="Submit" id="submit-register" /></div>
                  </form>
                </div>
              </div>
            </div>
            {/* /container */}
          </div>  
          </I18nProvider>
        )

    Register.prototype = {
      users: React.PropTypes.array.isRequired
    }

    function mapStateToProps(state) {
      return {
        users: state.users
      }
    }

}

export default connect(mapStateToProps)(Register);