import axios from "axios";
import { isEmpty, map } from "lodash";
import { Component } from "react";
import Slider from "react-slick";
import parse from 'html-react-parser';
import toast, { Toaster } from "react-hot-toast";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'laptop',
      data: [],
      id: this.props.match.params.id,
      reviews: [],
      token: localStorage.getItem('token'),
      comment: '',
      name: localStorage.getItem('name'),
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost/EcomercialStore/API/product")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          data: response.product.rows,
        });
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost/EcomercialStore/API/review")
      .then((res) => {
        const { response } = res.data
        this.setState({
          reviews: response.review.rows
        })
      })
  }
  handleClickWish = (e) => {
    const username = localStorage.getItem('username')
    const data = {
      username: username,
      id_product: e
    }
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/add_wish`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
    if (this.state.token) toast.success('Thêm thành công!!!')
    else toast.error('Thêm không thành công!!! Vui lòng đăng nhập!!!')
  }
  handleClickCart = (e) => {
    const username = localStorage.getItem('username')
    const data = {
      username: username,
      id_product: e
    }
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/add_cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
    if (this.state.token) toast.success('Thêm thành công!!!')
    else toast.error('Thêm không thành công!!! Vui lòng đăng nhập!!!')
  }
  listProduct = (tab) => {
    const { data } = this.state;
    const data_type = data.filter((product) => product.type == tab)
    const html = map(data_type, (product) =>
      <div className="product-default-single border-around">
        <div className="product-img-warp">
          <a href={"/detail/".concat(product.id)} className="product-default-img-link">
            <img src={product.src} className="product-default-img img-fluid" />
          </a>
          <div className="product-action-icon-link">
            <ul>
              <li>
                <a onClick={(e) => this.handleClickWish(product.id)}>
                  <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a onClick={(e) => this.handleClickCart(product.id)} data-bs-toggle="modal" data-bs-target="#modalAddcart">
                  <i class="fas fa-cart-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-default-content">
          <h6 className="product-default-link">
            <a>
              {product.nameProduct}
            </a>
          </h6>
          <span className="product-default-price">
            <del className="product-default-price-off">
              {product.defaultPrice}
            </del><br />
            {product.salePrice} <small>{product.percent}</small>
          </span>
        </div>
      </div>)
    return html;
  }
  handleClickWish = (e) => {
    const username = localStorage.getItem('username')
    const data = {
      username: username,
      id_product: e
    }
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/add_wish`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
    if (this.state.token) toast.success('Thêm thành công!!!')
    else toast.error('Thêm không thành công!!! Vui lòng đăng nhập!!!')
  }
  handleClickCart = (e) => {
    const username = localStorage.getItem('username')
    const data = {
      username: username,
      id_product: e
    }
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/add_cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
    if (this.state.token) toast.success('Thêm thành công!!!')
    else toast.error('Thêm không thành công!!! Vui lòng đăng nhập!!!')
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleOnClick = (e) => {
    if (this.state.token){
    toast.success('Bình luận thành công!!!')
    const arr = this.state.reviews
    const cmt = {
      username: this.state.name,
      id_product: this.state.id,
      review: this.state.comment
    }
    arr.push(cmt)
    this.setState({
      reviews: arr
    })
    const config = {
			method: "post",
			url: `http://localhost/EcomercialStore/API/insert`,
			headers: {
				"Content-Type": "application/json",
			},
			data: cmt,
		};
		axios(config)
			.then((res) => {
        console.log(res)
			})
			.catch((err) => {
				console.log(err.response)
			});
      this.setState({
        comment: ''
      })
    }
    else {
      toast.error('Vui lòng đăng nhập để bình luận!!!')
    }
  }
  render() {
    const settings = {
      dots: true,
      speed: 250,
      slidesToShow: 4,
      slideToScorll: 1,
      autoplay: true.valueOf,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: false
    };
    const product = this.state.data[this.state.id - 1]
    const detail = product ? product.detail : ''
    // console.log(detail)
    // console.log(this.state.id)
    const reviews = this.state.reviews.filter((p) => p.id_product === this.state.id)
    return (
      <div>
        <div className="breadcrumb-section">
          <Toaster position='top-left'></Toaster>
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">Product Details Variable</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                  <div className="product-large-image product-large-image-horaizontal">
                    <div className="product-image-large-single zoom-image-hover">
                      <img src={product?.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-details-content-area" data-aos="fade-up" data-aos-delay={200}>
                  <div className="product-details-text">
                    <h4 className="title">{product?.nameProduct}</h4>
                    <div className="price"><del>{product?.defaultPrice}</del>{product?.salePrice}</div>
                    <div>
                      {/* {console.log(parse(product?.detail))} */}
                      {/* parse(product?.detail)} */}
                      {parse(detail)}
                    </div>
                  </div>
                  <div className="product-details-variable">
                    <div className="d-flex align-items-center">
                      <div className="product-add-to-cart-btn">
                        <button class='add-cart' onClick={(e) => this.handleClickCart(product.id)}>Thêm vào giỏ</button>
                        <button class='add-cart' onClick={(e) => this.handleClickWish(product.id)}>Thêm vào danh sách yêu thích</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-content-tab-section section-inner-bg section-top-gap-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay={0}>
                  {/* Start Product Details Tab Button */}
                  <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                    <li className="nav-link" data-bs-toggle="tab">
                      <h5>Reviews ({reviews.length})</h5>
                    </li>
                    <div className="single-tab-content-item">
                      <ul className="comment">
                        {reviews.map((p) =>
                          <li className="comment-list">
                            <div className="comment-wrapper">
                              <div className="comment-img">
                                <img src="assets/images/user/image-1.png" alt="" />
                              </div>
                              <div className="comment-content">
                                <div className="comment-content-top">
                                  <div className="comment-content-left">
                                    <h6 className="comment-name"><b>{p.username}</b></h6>
                                  </div>
                                </div>
                                <div className="para-content">
                                  <p>{p.review}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        )}
                      </ul>
                      <div className="review-form">
                        <div className="review-form-text-top">
                          <h5>Thêm bình luận</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                          </div>
                          <div className="col-12">
                            <div className="default-form-box mb-20">
                              <label htmlFor="comment-review-text">Nhập bình luận<span>*</span></label>
                              <textarea id="comment-review-text" value={this.state.comment} onChange={(e) => this.handleChange(e)} placeholder="Nhập bình luận ở đây" required defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="form-submit-btn" onClick={() => this.handleOnClick()}>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-section section-top-gap-100">
          <div className="section-content-gap">
            <div className="container">
              <div className="row">
                <div className="section-content">
                  <h3 className="section-title" data-aos="fade-up" data-aos-delay={0}>Sản phẩm liên quan</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tab-wrapper" data-aos="fade-up" data-aos-delay={50}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content tab-animate-zoom">
                    <div className="tab-pane show active">
                      <div className="product-default-slider product-default-slider-4grids-1row">
                        <Slider {...settings}>
                          {!isEmpty(this.state.data) && this.listProduct(this.state.tab)}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;