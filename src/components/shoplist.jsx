import axios from "axios";
import { Component } from "react";
import { isEmpty, map } from 'lodash'
import toast, { Toaster } from 'react-hot-toast';

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'laptop',
      data: [],
      numRow: 0
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
        toast.success('Thêm thành công!!!')
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
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
        toast.success('Thêm thành công!!!')
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
  }
  listProduct = (tab) => {
    const { data } = this.state;
    const data_type = data.filter((product) => product.type == tab);
    const html = map(data_type, (product) =>
      <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
        <div className="product-default-single border-around" data-aos="fade-up" data-aos-delay={0}>
          <div className="product-img-warp">
            <a href={"/detail/".concat(product.id)} className="product-default-img-link">
              <img src={product.src} alt="" className="product-default-img img-fluid" />
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
            <h6 className="product-default-link"><a href="">{product.nameProduct}</a></h6>
            <span className="product-default-price"><del className="product-default-price-off">{product.defaultPrice}</del> {product.salePrice} <small>{product.percent}</small></span>
          </div>
        </div>
      </div>
    )
    return html
  }
  render() {
    return (
      <div>
        <div className="breadcrumb-section">
          <Toaster position='top-left'></Toaster>
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
                          {/* <form action="#">
                            <fieldset >
                              <select name="speed" id="speed" className="select-box">
                                <option selected>Sort by name: A-Z</option>
                                <option>Sort by name: Z-A</option>
                              </select>
                            </fieldset>
                          </form> */}
                        </div>
                        <div className="page-amount">
                          <span>Showing 1–9 of 21 results</span>
                        </div>
                      </div>
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
                              {this.listProduct(this.state.tab)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
                  <ul className="index">
                    <li><a href="#">Previous</a></li>
                    <li><a className="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopList;