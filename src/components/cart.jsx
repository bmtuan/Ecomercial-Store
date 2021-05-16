import { Component } from "react";

class Cart extends Component{
    render(){
        return(
            <div>
            <div className="breadcrumb-section">
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                      <h3 className="breadcrumb-title">Cart</h3>
                      <div className="breadcrumb-nav">
                        <nav aria-label="breadcrumb">
                          <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li className="active" aria-current="page">Cart</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...:::: Start Cart Section:::... */}
            <div className="cart-section">
              {/* Start Cart Table */}
              <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="table_desc">
                        <div className="table_page table-responsive">
                          <table>
                            {/* Start Cart Table Head */}
                            <thead>
                              <tr>
                                <th className="product_remove">Delete</th>
                                <th className="product_thumb">Image</th>
                                <th className="product_name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product_quantity">Quantity</th>
                                <th className="product_total">Total</th>
                              </tr>
                            </thead> {/* End Cart Table Head */}
                            <tbody>
                              {/* Start Cart Single Item*/}
                              <tr>
                                <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_1.jpg" alt="" /></a></td>
                                <td className="product_name"><a href="product-details-default.html">Handbag fringilla</a></td>
                                <td className="product-price">$65.00</td>
                                <td className="product_quantity"><label>Quantity</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                <td className="product_total">$130.00</td>
                              </tr> {/* End Cart Single Item*/}
                              {/* Start Cart Single Item*/}
                              <tr>
                                <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_2.jpg" alt="" /></a></td>
                                <td className="product_name"><a href="product-details-default.html">Handbags justo</a></td>
                                <td className="product-price">$90.00</td>
                                <td className="product_quantity"><label>Quantity</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                <td className="product_total">$180.00</td>
                              </tr> {/* End Cart Single Item*/}
                              {/* Start Cart Single Item*/}
                              <tr>
                                <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_3.jpg" alt="" /></a></td>
                                <td className="product_name"><a href="product-details-default.html">Handbag elit</a></td>
                                <td className="product-price">$80.00</td>
                                <td className="product_quantity"><label>Quantity</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                <td className="product_total">$160.00</td>
                              </tr> {/* End Cart Single Item*/}
                            </tbody>
                          </table>
                        </div>
                        <div className="cart_submit">
                          <button type="submit">update cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* End Cart Table */}
              {/* Start Coupon Start */}
              <div className="coupon_area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="coupon_code left" data-aos="fade-up" data-aos-delay={200}>
                        <h3>Coupon</h3>
                        <div className="coupon_inner">
                          <p>Enter your coupon code if you have one.</p>
                          <input placeholder="Coupon code" type="text" />
                          <button type="submit">Apply coupon</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                        <h3>Cart Totals</h3>
                        <div className="coupon_inner">
                          <div className="cart_subtotal">
                            <p>Subtotal</p>
                            <p className="cart_amount">$215.00</p>
                          </div>
                          <div className="cart_subtotal ">
                            <p>Shipping</p>
                            <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                          </div>
                          <a href="#">Calculate shipping</a>
                          <div className="cart_subtotal">
                            <p>Total</p>
                            <p className="cart_amount">$215.00</p>
                          </div>
                          <div className="checkout_btn">
                            <a href="/checkout">Proceed to Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* End Coupon Start */}
            </div> {/* ...:::: End Cart Section:::... */}
          </div>
        )
    }
}

export default Cart;