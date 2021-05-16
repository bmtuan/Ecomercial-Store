import { Component } from "react";

class ShopList extends Component{

    render(){
        return(
            <div>
        <div className="breadcrumb-section">
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">List Product</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-section">
          <div className="container">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-12">
                <div className="shop-sort-section" data-aos="fade-up" data-aos-delay={0}>
                  <div className="container">
                    <div className="row">
                      <div className="sort-box d-flex justify-content-between align-items-center flex-wrap sort">
                        <div className="sort-select-list">
                          <form action="#">
                            <fieldset >
                              <select name="speed" id="speed" className="select-box">
                                <option>Sort by average rating</option>
                                <option selected>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                              </select>
                            </fieldset>
                          </form>
                        </div>
                        <div className="page-amount">
                          <span>Showing 1–9 of 21 results</span>
                        </div> {/* End Page Amount */}
                      </div> {/* Start Sort Wrapper Box */}
                    </div>
                  </div>
                </div>
                <div className="sort-product-tab-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-content tab-animate-zoom">
                          <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                            <div className="row">
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={0}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={200}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={400}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={600}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={0}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={200}>
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
                              </div>
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={400}>
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
                              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={600}>
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
                              </div>
                            </div>
                          </div> {/* End Grid View Product */}
                          {/* Start List View Product */}
                          <div className="tab-pane sort-layout-single" id="layout-list">
                            <div className="row">
                              <div className="col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-list-single border-around">
                                  <a href="product-details-default.html" className="product-list-img-link">
                                    <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" className="img-fluid" />
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h5>
                                    <span className="product-list-price"><del className="product-list-price-off">$30.12</del> $25.12</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                    <div className="product-action-icon-link-list">
                                      <ul>
                                        <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                                        <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> {/* End Product Defautlt Single */}
                              </div>
                              <div className="col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-list-single border-around">
                                  <a href="product-details-default.html" className="product-list-img-link">
                                    <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" className="img-fluid" />
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h5>
                                    <span className="product-list-price"><del className="product-list-price-off">$30.12</del> $25.12</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                    <div className="product-action-icon-link-list">
                                      <ul>
                                        <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                                        <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> {/* End Product Defautlt Single */}
                              </div>
                              <div className="col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-list-single border-around">
                                  <a href="product-details-default.html" className="product-list-img-link">
                                    <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" className="img-fluid" />
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h5>
                                    <span className="product-list-price"><del className="product-list-price-off">$30.12</del> $25.12</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                    <div className="product-action-icon-link-list">
                                      <ul>
                                        <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                                        <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> {/* End Product Defautlt Single */}
                              </div>
                              <div className="col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-list-single border-around">
                                  <a href="product-details-default.html" className="product-list-img-link">
                                    <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" className="img-fluid" />
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h5>
                                    <span className="product-list-price"><del className="product-list-price-off">$30.12</del> $25.12</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                    <div className="product-action-icon-link-list">
                                      <ul>
                                        <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                                        <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> {/* End Product Defautlt Single */}
                              </div>
                              <div className="col-12">
                                {/* Start Product Defautlt Single */}
                                <div className="product-list-single border-around">
                                  <a href="product-details-default.html" className="product-list-img-link">
                                    <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" className="img-fluid" />
                                  </a>
                                  <div className="product-list-content">
                                    <h5 className="product-list-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h5>
                                    <span className="product-list-price"><del className="product-list-price-off">$30.12</del> $25.12</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                    <div className="product-action-icon-link-list">
                                      <ul>
                                        <li><a href="wishlist.html"><i className="icon-heart" /></a></li>
                                        <li><a href="compare.html"><i className="icon-repeat" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-eye" /></a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"><i className="icon-shopping-cart" /></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> {/* End Product Defautlt Single */}
                              </div>
                            </div>
                          </div> {/* End List View Product */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* End Tab Wrapper */}
                {/* Start Pagination */}
                <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
                  <ul className="index">
                    <li><a href="#">Previous</a></li>
                    <li><a className="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div> {/* End Pagination */}
              </div> {/* End Shop Product Sorting Section  */}
            </div>
          </div>
        </div> {/* ...:::: End Shop Section:::... */}
      </div>
        )
    }
}

export default ShopList;