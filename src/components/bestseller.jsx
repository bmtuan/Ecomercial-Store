import { Component } from "react";
import Slider from "react-slick";
class BestSeller extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slideToScorll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="hero-area">
        <div className="hero-area-wrapper hero-slider-dots fix-slider-dots">
          <Slider {...settings}>
            <div className="hero-area-single">
              <div className="hero-area-bg">
                <img
                  className="hero-img"
                  src="assets/images/slider_images/home_1/aments_home_1_slider_3.jpg"
                  alt=""
                />
              </div>
              <div className="hero-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 col-md-8 col-xl-6">
                      <h5>Hàng chất lượng</h5>
                      <h2>Bán chạy nhất</h2>
                      <p>
                        Laptop Dell Inspiron 3501 i5 1135G7/4GB/512GB/Win10
                        (P90F005N3501B)
                      </p>
                      <a
                        href="product-details-default.html"
                        className="hero-button"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-area-single">
              <div className="hero-area-bg">
                <img
                  className="hero-img"
                  src="assets/images/slider_images/home_1/aments_home_1_slider_2.jpg"
                  alt=""
                />
              </div>
              <div className="hero-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 col-md-8 col-xl-6">
                      <h5 style={{ color: "whitesmoke" }}>Hàng chất lượng</h5>
                      <h2 style={{ color: "whitesmoke" }}>Bán chạy nhất</h2>
                      <p style={{ color: "whitesmoke" }}>
                        Laptop Dell Inspiron 7501 i7 10750H/8GB/512GB/4GB
                        GTX1650Ti/Win10 (X3MRY1){" "}
                      </p>
                      <a
                        href="product-details-default.html"
                        className="hero-button"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestSeller;
