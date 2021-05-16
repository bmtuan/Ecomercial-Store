import { Component } from "react";

class WishList extends Component{
    render(){
        return(
            <div>
        <div className="breadcrumb-section">
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">Wishlist</h3>
                  <div className="breadcrumb-nav">
                    <nav aria-label="breadcrumb">
                      <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                        <li className="active" aria-current="page">Wishlist</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="wishlist-section">
          <div className="wishlish-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="table_desc">
                    <div className="table_page table-responsive">
                      <table>
                        {/* Start Wishlist Table Head */}
                        <thead>
                          <tr>
                            <th className="product_remove">Delete</th>
                            <th className="product_thumb">Image</th>
                            <th className="product_name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product_stock">Stock Status</th>
                            <th className="product_addcart">Add To Cart</th>
                          </tr>
                        </thead> {/* End Cart Table Head */}
                        <tbody>
                          {/* Start Wishlist Single Item*/}
                          <tr>
                            <td className="product_remove"><a href="#"><i class="far fa-trash-alt"></i></a></td>
                            <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_1.jpg" alt="" /></a></td>
                            <td className="product_name"><a href="product-details-default.html">Handbag fringilla</a></td>
                            <td className="product-price">$65.00</td>
                            <td className="product_stock">In Stock</td>
                            <td className="product_addcart"><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                          </tr> {/* End Wishlist Single Item*/}
                          {/* Start Wishlist Single Item*/}
                          <tr>
                            <td className="product_remove"><a href="#"><i class="far fa-trash-alt"></i></a></td>
                            <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_2.jpg" alt="" /></a></td>
                            <td className="product_name"><a href="product-details-default.html">Handbags justo</a></td>
                            <td className="product-price">$90.00</td>
                            <td className="product_stock">In Stock</td>
                            <td className="product_addcart"><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                          </tr> {/* End Wishlist Single Item*/}
                          {/* Start Wishlist Single Item*/}
                          <tr>
                            <td className="product_remove"><a href="#"><i class="far fa-trash-alt"></i></a></td>
                            <td className="product_thumb"><a href="product-details-default.html"><img src="assets/images/products_images/aments_products_image_3.jpg" alt="" /></a></td>
                            <td className="product_name"><a href="product-details-default.html">Handbag elit</a></td>
                            <td className="product-price">$80.00</td>
                            <td className="product_stock">In Stock</td>
                            <td className="product_addcart"><a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                          </tr> {/* End Wishlist Single Item*/}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Cart Table */}
        </div> {/* ...:::: End Wishlist Section:::... */}
      </div>
        );
    }
}

export default WishList;