import { Component } from "react";
class Catagory extends Component {
  render() {
    return (
      <div className="product-catagory-section section-top-gap-100">
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <h3
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay={50}
                >
                  Danh mục sản phẩm
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="product-catagory-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Laptop</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Bàn phím</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Pad chuột</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_04.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Chuột</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Màn hình</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <a
                  href="/list"
                  className="product-catagory-single"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="product-catagory-img">
                    <img
                      src="assets/images/categories_images/aments_categories_06.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-catagory-content">
                    <h5 className="product-catagory-title">Case máy tính</h5>
                    <span className="product-catagory-items">(20 Items)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catagory;
