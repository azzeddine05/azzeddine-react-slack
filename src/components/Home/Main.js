import React from 'react';


class Main extends React.Component {
    render() {
        return (
        <div>
        <main>
        <div className="hero_single version_2">
          <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-8">
                  <h1>Discover &amp; Book</h1>
                  <p>The best restaurants at the best price</p>
                  <form method="post" action="grid-listings-filterscol.html">
                    <div className="row no-gutters custom-search-input">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="What are you looking for..." />
                          <i className="icon_search" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input className="form-control no_border_r" type="text" placeholder="Address, neighborhood..." />
                          <i className="icon_pin_alt" />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <input type="submit" defaultValue="Search" />
                      </div>
                    </div>
                    {/* /row */}
                  </form>
                </div>
              </div>
              {/* /row */}
            </div>
          </div>
        </div>
        {/* /hero_single */}
        <div className="bg_gray">
          <div className="container margin_60_40">
            <div className="main_title center">
              <span><em /></span>
              <h2>Popular Categories</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
            </div>
            {/* /main_title */}
            <div className="owl-carousel owl-theme categories_carousel">
              <div className="item">
                <a href="#0">
                  <span>98</span>
                  <i className="icon-food_icon_pizza" />
                  <h3>Pizza - Italian</h3>
                  <small>Avg price $40</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>87</span>
                  <i className="icon-food_icon_sushi" />
                  <h3>Japanese - Sushi</h3>
                  <small>Avg price $50</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>96</span>
                  <i className="icon-food_icon_burgher" />
                  <h3>Burghers</h3>
                  <small>Avg price $55</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>78</span>
                  <i className="icon-food_icon_vegetarian" />
                  <h3>Vegetarian</h3>
                  <small>Avg price $40</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>65</span>
                  <i className="icon-food_icon_cake_2" />
                  <h3>Bakery</h3>
                  <small>Avg price $60</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>65</span>
                  <i className="icon-food_icon_chinese" />
                  <h3>Chinese</h3>
                  <small>Avg price $40</small>
                </a>
              </div>
              <div className="item">
                <a href="#0">
                  <span>65</span>
                  <i className="icon-food_icon_burrito" />
                  <h3>Mexican</h3>
                  <small>Avg price $35</small>
                </a>
              </div>
            </div>
            {/* /carousel */}
          </div>
          {/* /container */}
        </div>

        {/* /container */}
        <div className="call_section lazy" data-bg="url(img/bg_call_section.jpg)">
          <div className="container clearfix">
            <div className="col-lg-5 col-md-6 float-right wow">
              <div className="box_1">
                <h3>Are you a Restaurant Owner?</h3>
                <p>Join Us to increase your online visibility. You'll have access to even more customers who are looking to enjoy your tasty dishes at home.</p>
                <a href="submit-restaurant.html" className="btn_1">Read more</a>
              </div>
            </div>
          </div>
        </div>
        {/*/call_section*/}
        {/* /main */}
      </main>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_1">Quick Links</h3>
              <div className="collapse dont-collapse-sm links" id="collapse_1">
                <ul>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="help.html">Add your restaurant</a></li>
                  <li><a href="help.html">Help</a></li>
                  <li><a href="account.html">My account</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_2">Categories</h3>
              <div className="collapse dont-collapse-sm links" id="collapse_2">
                <ul>
                  <li><a href="listing-grid-1-full.html">Top Categories</a></li>
                  <li><a href="listing-grid-2-full.html">Best Rated</a></li>
                  <li><a href="listing-grid-1-full.html">Best Price</a></li>
                  <li><a href="listing-grid-3.html">Latest Submissions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_3">Contacts</h3>
              <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                <ul>
                  <li><i className="icon_house_alt" />97845 Baker st. 567<br />Los Angeles - US</li>
                  <li><i className="icon_mobile" />+94 423-23-221</li>
                  <li><i className="icon_mail_alt" /><a href="#0">info@domain.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_4">Keep in touch</h3>
              <div className="collapse dont-collapse-sm" id="collapse_4">
                <div id="newsletter">
                  <div id="message-newsletter" />
                  <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                    <div className="form-group">
                      <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                      <button type="submit" id="submit-newsletter"><i className="arrow_carrot-right" /></button>
                    </div>
                  </form>
                </div>
                <div className="follow_us">
                  <h5>Follow Us</h5>
                  <ul>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" className="lazy" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /row*/}
          <hr />
          <div className="row add_bottom_25">
            <div className="col-lg-6">
              <ul className="footer-selector clearfix">
                <li>
                  <div className="styled-select lang-selector">
                    <select>
                      <option value="English" selected>English</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="styled-select currency-selector">
                    <select>
                      <option value="US Dollars" selected>US Dollars</option>
                      <option value="Euro">Euro</option>
                    </select>
                  </div>
                </li>
                <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/cards_all.svg" alt="" width={198} height={30} className="lazy" /></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="additional_links">
                <li><a href="#0">Terms and conditions</a></li>
                <li><a href="#0">Privacy</a></li>
                <li><span>© 2019 Foogra</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*/footer*/}
      <div id="toTop" />
      <div className="layer" />
        </div>

        )
    }

}

export default Main;