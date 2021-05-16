import React,{Component} from 'react'



class Header extends Component{
    render() {
        return(
            <header className="header-section d-lg-block d-none">
            <div className="header-top">
              <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-6">
                    <div className="header-top--left">
                      <span>Chào mừng đến với cửa hàng của chúng tôi!</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="header-top--right">
                      <ul className="header-user-menu">
                        <li>
                          <a href='/login'>Đăng nhập</a>
                        </li>
                        <li>
                          <a href='/login'>Đăng kí</a>
                        </li>
                      </ul> 
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="header-center">
              <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-3">
                    {/* Logo Header */}
                    <div className="header-logo">
                      <a href="/"><img src="assets/images/logo/logo.png" alt="Not found" /></a>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Start Header Search */}
                    <div className="header-search">
                      <form action="#" method="post">
                        <div className="header-search-box default-search-style d-flex">
                          <input className="default-search-style-input-box border-around border-right-none" type="search" placeholder="Nhập từ khóa tìm kiếm ..." required />
                          <button className="default-search-style-input-btn" type="submit"><i class="fas fa-search"></i></button>
                        </div>
                      </form>
                    </div> {/* End Header Search */}
                  </div>
                  <div className="col-3 text-end">
                    {/* Start Header Action Icon */}
                    <ul className="header-action-icon">
                      <li>
                        <a href="/wishlist" className="offcanvas-toggle">
                        <i class="fas fa-heart"></i>
                          <span className="header-action-icon-item-count">3</span>
                        </a>
                      </li>
                      <li>
                        <a href="/cart" className="offcanvas-toggle">
                        <i class="fas fa-shopping-cart"></i>
                          <span className="header-action-icon-item-count">3</span>
                        </a>
                      </li>
                    </ul> {/* End Header Action Icon */}
                  </div>
                </div>
              </div>
            </div> {/* End Header Center Area */}
            {/* Start Bottom Area */}
            <div className="header-bottom sticky-header">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* Header Main Menu */}
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li className="has-dropdown">
                            <a className="active main-menu-link" href="/">Trang chủ </a>
                          </li>
                          <li className="has-dropdown has-megaitem">
                            <a href="product-details-default.html">Mua sắm<i className="fa fa-angle-down" /></a>
                            <div className="mega-menu">
                              <ul className="mega-menu-inner">
                                <li className="mega-menu-item">
                                  <a href="#" className="mega-menu-item-title">Danh mục</a>
                                  <ul className="mega-menu-sub">
                                    <li><a href="#">Laptop</a></li>
                                    <li><a href="#">Bàn phím</a></li>
                                    <li><a href="#">Màn hình</a></li>
                                    <li><a href="#">Chuột</a></li>
                                    <li><a href="#">Pad chuột</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="about-us.html">Thông tin cửa hàng</a>
                          </li>
                          <li>
                            <a href="contact-us.html">Liên hệ với chúng tôi</a>
                          </li>
                          <li>
                            <a href="/account">Thông tin tài khoản</a>
                          </li>
                        </ul>
                      </nav>
                    </div> 
                  </div>
                </div>
              </div>
            </div> 
          </header>
        );
      }
    };


export default Header;