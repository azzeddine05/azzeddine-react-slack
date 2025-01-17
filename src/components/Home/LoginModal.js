import React from 'react';


class LoginModal extends React.Component {




    render() {
        let dialog = (
          <div id="sign-in-dialog" className="zoom-anim-dialog">
              <div className="modal_header">
                <h3>Sign In</h3>
              </div>
              <form>
                <div className="sign-in-wrapper">
                  <a href="#0" className="social_bt facebook">Login with Facebook</a>
                  <a href="#0" className="social_bt google">Login with Google</a>
                  <div className="divider"><span>Or</span></div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" />
                    <i className="icon_mail_alt" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" id="password" defaultValue />
                    <i className="icon_lock_alt" />
                  </div>
                  <div className="clearfix add_bottom_15">
                    <div className="checkboxes float-left">
                      <label className="container_check">Remember me
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="float-right mt-1"><a id="forgot" href="">Forgot Password?</a></div>
                  </div>
                  <div className="text-center">
                    <input type="submit" defaultValue="Log In" className="btn_1 full-width mb_5" />
                    Don’t have an account? <a href="account.html">Sign up</a>
                  </div>
                  <div id="forgot_pw">
                    <div className="form-group">
                      <label>Please confirm login email below</label>
                      <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                      <i className="icon_mail_alt" />
                    </div>
                    <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                    <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                  </div>
                </div>
              </form>
              {/*form */}
              <button onClick={this.props.onClose} title="Close (Esc)" type="button" className="mfp-close"></button>
            </div>
        );

        if (! this.props.isOpen) {
          dialog = null;
        }

        return (
          dialog
                
        );
    }

}

export default LoginModal;