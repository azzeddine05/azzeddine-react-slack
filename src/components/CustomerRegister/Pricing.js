import React from 'react';


class Pricing extends React.Component {
    render() {
        return (
            <div className="container margin_60_40">			
            <div className="main_title center">
              <span><em /></span>
              <h2>Our Pricing Plans</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className="row plans">
              <div className="plan col-md-4">
                <div className="plan-title">
                  <h3>1 Month</h3>
                  <p>Free of charge one standard listing</p>
                </div>
                <p className="plan-price">Free</p>
                <ul className="plan-features">
                  <li><strong>Check and go</strong> included</li>
                  <li><strong>1 month</strong> valid</li>
                  <li><strong>Unsubscribe</strong> anytime</li>
                </ul>
                <a href="#submit" className="btn_1 gray btn_scroll">Submit</a>
              </div> {/* End col-md-4 */}
              <div className="plan plan-tall col-md-4">
                <div className="plan-title">
                  <h3>6 Months</h3>
                  <p>One time fee for one listing, highlighted in search results</p>
                </div>
                <p className="plan-price">$199</p>
                <ul className="plan-features">
                  <li><strong>Premium</strong> support</li>
                  <li><strong>Check and go</strong> included</li>
                  <li><strong>APP</strong> included</li>
                  <li><strong>6 months</strong> valid</li>
                  <li><strong>Unsubscribe</strong> anytime</li>
                </ul>
                <a href="#submit" className="btn_1 btn_scroll">Submit</a>
              </div>{/* End col-md-4 */}
              <div className="plan col-md-4">
                <div className="plan-title">
                  <h3>12 Months</h3>
                  <p>Monthly subscription for unlimited listings</p>
                </div>
                <p className="plan-price">$299</p>
                <ul className="plan-features">
                  <li><strong>Premium</strong> support</li>
                  <li><strong>Check and go</strong> included</li>
                  <li><strong>12 months</strong> valid</li>
                  <li><strong>Unsubscribe</strong> anytime</li>
                </ul>
                <a href="#submit" className="btn_1 gray btn_scroll">Submit</a>
              </div>{/* End col-md-4 */}
            </div>{/* End row plans*/}
          </div>
                
        )
    }

}

export default Pricing;