import React from 'react';


class Main extends React.Component {
    render() {
        return (
            
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
        {/* /bg_gray */}
        <div className="container margin_60_40">
          <div className="main_title">
            <span><em /></span>
            <h2>Popular Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href="#0">View All</a>
          </div>
          <div className="owl-carousel owl-theme carousel_4">
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-30%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_1.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Pizza</small>
                    <div className="item_title">
                      <h3>Da Alfredo</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-40%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_2.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Burghers</small>
                    <div className="item_title">
                      <h3>Best Burghers</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.5</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-30%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_3.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Vegetarian</small>
                    <div className="item_title">
                      <h3>Vego Life</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>7.5</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-25%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_4.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Japanese</small>
                    <div className="item_title">
                      <h3>Sushi Temple</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.5</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-30%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_5.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Pizza</small>
                    <div className="item_title">
                      <h3>Auto Pizza</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>7.0</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-15%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_6.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Burghers</small>
                    <div className="item_title">
                      <h3>Alliance</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_open">Now Open</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="strip">
                <figure>
                  <span className="ribbon off">-30%</span>
                  <img src="img/lazy-placeholder.png" data-src="img/location_7.jpg" className="owl-lazy" alt="" />
                  <a href="detail-restaurant.html" className="strip_info">
                    <small>Chinese</small>
                    <div className="item_title">
                      <h3>Alliance</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li><span className="loc_closed">Now Closed</span></li>
                  <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /carousel */}
          <div className="banner lazy" data-bg="url(img/banner_bg_desktop.jpg)">
            <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.2)">
              <div>
                <small>foogra</small>
                <h3>More than 3000 Restaurants</h3>
                <p>Book a table easly at the best price</p>
                <a href="grid-listing-filterscol.html" className="btn_1">View All</a>
              </div>
            </div>
            {/* /wrapper */}
          </div>
          {/* /banner */}
          <div className="row">
            <div className="col-12">
              <div className="main_title version_2">
                <span><em /></span>
                <h2>Our Very Best Deals</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <a href="#0">View All</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_home">
                <ul>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>9.5</strong></div>
                      <em>Italian</em>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li><span className="ribbon off">-30%</span></li>
                        <li>Average price $35</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_2.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>8.0</strong></div>
                      <em>Mexican</em>
                      <h3>Alliance</h3>
                      <small>27 Old Gloucester St, 4563</small>
                      <ul>
                        <li><span className="ribbon off">-40%</span></li>
                        <li>Average price $30</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_3.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>9.0</strong></div>
                      <em>Sushi - Japanese</em>
                      <h3>Sushi Gold</h3>
                      <small>Old Shire Ln EN9 3RX</small>
                      <ul>
                        <li><span className="ribbon off">-25%</span></li>
                        <li>Average price $20</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_home">
                <ul>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_4.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>9.5</strong></div>
                      <em>Vegetarian</em>
                      <h3>Mr. Pepper</h3>
                      <small>27 Old Gloucester St, 4563</small>
                      <ul>
                        <li><span className="ribbon off">-30%</span></li>
                        <li>Average price $20</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_5.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>8.0</strong></div>
                      <em>Chinese</em>
                      <h3>Dragon Tower</h3>
                      <small>22 Hertsmere Rd E14 4ED</small>
                      <ul>
                        <li><span className="ribbon off">-50%</span></li>
                        <li>Average price $35</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_6.jpg" alt="" className="lazy" />
                      </figure>
                      <div className="score"><strong>8.5</strong></div>
                      <em>Pizza - Italian</em>
                      <h3>Bella Napoli</h3>
                      <small>135 Newtownards Road BT4</small>
                      <ul>
                        <li><span className="ribbon off">-45%</span></li>
                        <li>Average price $25</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
          <p className="text-center d-block d-md-block d-lg-none"><a href="grid-listing-filterscol.html" className="btn_1">View All</a></p>
          {/* /button visibile on tablet/mobile only */}
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
      
        )
    }

}

export default Main;