import { Component } from "react";

class Detail extends Component{
    render(){
    return (
        <div>
          <div className="breadcrumb-section">
            <div className="breadcrumb-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                    <h3 className="breadcrumb-title">Product Details Variable</h3>

                  </div>
                </div>
              </div>
            </div>
          </div> {/* ...:::: End Breadcrumb Section:::... */}
          {/* Start Product Details Section */}
          <div className="product-details-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                    <div className="product-large-image product-large-image-horaizontal">
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_1.jpg" alt="" />
                      </div>
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_2.jpg" alt="" />
                      </div>
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_3.jpg" alt="" />
                      </div>
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_4.jpg" alt="" />
                      </div>
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_5.jpg" alt="" />
                      </div>
                      <div className="product-image-large-single zoom-image-hover">
                        <img src="assets/images/products_images/aments_products_large_image_6.jpg" alt="" />
                      </div>
                    </div>
                    <div className="product-image-thumb product-image-thumb-horizontal pos-relative">
                      <div className="zoom-active product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_1.jpg" alt="" />
                      </div>
                      <div className="product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_2.jpg" alt="" />
                      </div>
                      <div className="product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_3.jpg" alt="" />
                      </div>
                      <div className="product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_4.jpg" alt="" />
                      </div>
                      <div className="product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_5.jpg" alt="" />
                      </div>
                      <div className="product-image-thumb-single">
                        <img className="img-fluid" src="assets/images/products_images/aments_products_image_6.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-details-content-area" data-aos="fade-up" data-aos-delay={200}>
                    {/* Start  Product Details Text Area*/}
                    <div className="product-details-text">
                      <h4 className="title">Nonstick Dishwasher PFOA</h4>
                      <div className="d-flex align-items-center">
                        <div className="product-review">
                          <span className="review-fill"><i className="fa fa-star" /></span>
                          <span className="review-fill"><i className="fa fa-star" /></span>
                          <span className="review-fill"><i className="fa fa-star" /></span>
                          <span className="review-fill"><i className="fa fa-star" /></span>
                          <span className="review-empty"><i className="fa fa-star" /></span>
                        </div>
                        <a href className="customer-review">(customer review )</a>
                      </div>
                      <div className="price"><del>$70.00</del>$80.00</div>
                      <p>eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in</p>
                    </div> {/* End  Product Details Text Area*/}
                    {/* Start Product Variable Area */}
                    <div className="product-details-variable">
                      <h4 className="title">Available Options</h4>
                      {/* Product Variable Single Item */}
                      <div className="variable-single-item">
                        <span>Color</span>
                        <div className="product-variable-color">
                          <label htmlFor="product-color-red">
                            <input name="product-color" id="product-color-red" className="color-select" type="radio" defaultChecked />
                            <span className="product-color-red" />
                          </label>
                          <label htmlFor="product-color-tomato">
                            <input name="product-color" id="product-color-tomato" className="color-select" type="radio" defaultChecked />
                            <span className="product-color-tomato" />
                          </label>
                          <label htmlFor="product-color-green">
                            <input name="product-color" id="product-color-green" className="color-select" type="radio" />
                            <span className="product-color-green" />
                          </label>
                          <label htmlFor="product-color-light-green">
                            <input name="product-color" id="product-color-light-green" className="color-select" type="radio" />
                            <span className="product-color-light-green" />
                          </label>
                          <label htmlFor="product-color-blue">
                            <input name="product-color" id="product-color-blue" className="color-select" type="radio" />
                            <span className="product-color-blue" />
                          </label>
                          <label htmlFor="product-color-light-blue">
                            <input name="product-color" id="product-color-light-blue" className="color-select" type="radio" />
                            <span className="product-color-light-blue" />
                          </label>
                        </div>
                      </div>
                      {/* Product Variable Single Item */}
                      <div className="d-flex align-items-center">
                        <div className="variable-single-item ">
                          <span>Quantity</span>
                          <div className="product-variable-quantity">
                            <input min={1} max={100} defaultValue={1} type="number" />
                          </div>
                        </div>
                        <div className="product-add-to-cart-btn">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a>
                        </div>
                      </div>
                      {/* Product Variable Single Item */}
                      <div className="variable-single-item">
                        <span>Size</span>
                        <select className="product-variable-size">
                          <option selected value={1}> size in option</option>
                          <option value={2}>s</option>
                          <option value={3}>m</option>
                          <option value={4}>l</option>
                          <option value={5}>xl</option>
                          <option value={6}>xxl</option>
                        </select>
                      </div>
                    </div> {/* End Product Variable Area */}
                    {/* Start  Product Details Meta Area*/}
                    <div className="product-details-meta mb-20">
                      <ul>
                        <li><a href><i className="icon-heart" />Add to wishlist</a></li>
                        <li><a href><i className="icon-repeat" />Compare</a></li>
                      </ul>
                    </div> {/* End  Product Details Meta Area*/}
                    {/* Start  Product Details Social Area*/}
                    <div className="product-details-social">
                      <ul>
                        <li><a href="#" className="facebook"><i className="fa fa-facebook" />Like</a></li>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter" />Tweet</a></li>
                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest" />Save</a></li>
                        <li><a href="#" className="google-plus"><i className="fa fa-google-plus" />Save</a></li>
                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin" />Linked</a></li>
                      </ul>
                    </div> {/* End  Product Details Social Area*/}
                  </div>
                </div>
              </div>
            </div>
          </div> 
          {/* Start Product Content Tab Section */}
          <div className="product-details-content-tab-section section-inner-bg section-top-gap-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    {/* Start Product Details Tab Button */}
                    <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                      <li><a className="nav-link active" data-bs-toggle="tab" href="#description">
                          <h5>Description</h5>
                        </a></li>
                      <li><a className="nav-link" data-bs-toggle="tab" href="#specification">
                          <h5>Specification</h5>
                        </a></li>
                      <li><a className="nav-link" data-bs-toggle="tab" href="#review">
                          <h5>Reviews (1)</h5>
                        </a></li>
                    </ul> {/* End Product Details Tab Button */}
                    {/* Start Product Details Tab Content */}
                    <div className="product-details-content-tab">
                      <div className="tab-content">
                        {/* Start Product Details Tab Content Singel */}
                        <div className="tab-pane active show" id="description">
                          <div className="single-tab-content-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. </p>
                            <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget</p>
                          </div>
                        </div> {/* End Product Details Tab Content Singel */}
                        {/* Start Product Details Tab Content Singel */}
                        <div className="tab-pane" id="specification">
                          <div className="single-tab-content-item">
                            <table className="table table-bordered mb-20">
                              <tbody>
                                <tr>
                                  <th scope="row">Compositions</th>
                                  <td>Polyester</td>
                                </tr>
                                <tr>
                                  <th scope="row">Styles</th>
                                  <td>Girly</td>
                                </tr><tr>
                                  <th scope="row">Properties</th>
                                  <td>Short Dress</td>
                                </tr>
                              </tbody>
                            </table>
                            <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                          </div>
                        </div> {/* End Product Details Tab Content Singel */}
                        {/* Start Product Details Tab Content Singel */}
                        <div className="tab-pane" id="review">
                          <div className="single-tab-content-item">
                            {/* Start - Review Comment */}
                            <ul className="comment">
                              {/* Start - Review Comment list*/}
                              <li className="comment-list">
                                <div className="comment-wrapper">
                                  <div className="comment-img">
                                    <img src="assets/images/user/image-1.png" alt="" />
                                  </div>
                                  <div className="comment-content">
                                    <div className="comment-content-top">
                                      <div className="comment-content-left">
                                        <h6 className="comment-name">Kaedyn Fraser</h6>
                                        <div className="product-review">
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-empty"><i className="fa fa-star" /></span>
                                        </div>
                                      </div>
                                      <div className="comment-content-right">
                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                      </div>
                                    </div>
                                    <div className="para-content">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                    </div>
                                  </div>
                                </div>
                                {/* Start - Review Comment Reply*/}
                                <ul className="comment-reply">
                                  <li className="comment-reply-list">
                                    <div className="comment-wrapper">
                                      <div className="comment-img">
                                        <img src="assets/images/user/image-2.png" alt="" />
                                      </div>
                                      <div className="comment-content">
                                        <div className="comment-content-top">
                                          <div className="comment-content-left">
                                            <h6 className="comment-name">Oaklee Odom</h6>
                                          </div>
                                          <div className="comment-content-right">
                                            <a href="#"><i className="fa fa-reply" />Reply</a>
                                          </div>
                                        </div>
                                        <div className="para-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul> {/* End - Review Comment Reply*/}
                              </li> {/* End - Review Comment list*/}
                              {/* Start - Review Comment list*/}
                              <li className="comment-list">
                                <div className="comment-wrapper">
                                  <div className="comment-img">
                                    <img src="assets/images/user/image-3.png" alt="" />
                                  </div>
                                  <div className="comment-content">
                                    <div className="comment-content-top">
                                      <div className="comment-content-left">
                                        <h6 className="comment-name">Jaydin Jones</h6>
                                        <div className="product-review">
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-fill"><i className="fa fa-star" /></span>
                                          <span className="review-empty"><i className="fa fa-star" /></span>
                                        </div>
                                      </div>
                                      <div className="comment-content-right">
                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                      </div>
                                    </div>
                                    <div className="para-content">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                    </div>
                                  </div>
                                </div>
                              </li> {/* End - Review Comment list*/}
                            </ul> {/* End - Review Comment */}
                            <div className="review-form">
                              <div className="review-form-text-top">
                                <h5>ADD A REVIEW</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>
                              </div>
                              <form action="#" method="post">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="default-form-box mb-20">
                                      <label htmlFor="comment-name">Your name <span>*</span></label>
                                      <input id="comment-name" type="text" placeholder="Enter your name" required />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="default-form-box mb-20">
                                      <label htmlFor="comment-email">Your Email <span>*</span></label>
                                      <input id="comment-email" type="email" placeholder="Enter your email" required />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="default-form-box mb-20">
                                      <label htmlFor="comment-review-text">Your review <span>*</span></label>
                                      <textarea id="comment-review-text" placeholder="Write a review" required defaultValue={""} />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <button className="form-submit-btn" type="submit">Submit</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div> {/* End Product Details Tab Content Singel */}
                      </div>
                    </div> {/* End Product Details Tab Content */}
                  </div>
                </div>
              </div>
            </div>
          </div> 
          {/* ...:::: Start Product  Section:::... */}
          <div className="product-section section-top-gap-100">
            {/* Start Section Content */}
            <div className="section-content-gap">
              <div className="container">
                <div className="row">
                  <div className="section-content">
                    <h3 className="section-title" data-aos="fade-up" data-aos-delay={0}>Related Products</h3>
                  </div>
                </div>
              </div>
            </div> {/* End Section Content */}
            {/* Start Product Wrapper */}
            <div className="product-wrapper" data-aos="fade-up" data-aos-delay={200}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="product-default-slider product-default-slider-4grids-1row">
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                      {/* Start Product Defautlt Single */}
                      <div className="product-default-single border-around">
                        <div className="product-img-warp">
                          <a href="product-details-default.html" className="product-default-img-link">
                            <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" className="product-default-img img-fluid" />
                          </a>
                          <div className="product-action-icon-link">
                            <ul>
                              <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                              <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                              <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-default-content">
                          <h6 className="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                          <span className="product-default-price"><del className="product-default-price-off">$30.12</del> $25.12</span>
                        </div>
                      </div> {/* End Product Defautlt Single */}
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* End Product Wrapper */}
          </div> {/* ...:::: End Product Section:::... */}
        </div>
      );
    }
}

export default Detail;