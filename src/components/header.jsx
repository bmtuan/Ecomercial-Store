import axios from 'axios';
import { isNull } from 'lodash';
import React, { Component } from 'react'
import Suggest from '../components/suggest'
import toast, { Toaster } from 'react-hot-toast';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      data: [],
      query: '',
      search: '',
      redirect: '',
      wish: [],
      cart: []
    }
  }
  clear = (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
    localStorage.removeItem('info')
    window.location.href = '/login'
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
      .get("http://localhost/EcomercialStore/API/cart")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          cart: response.cart.rows,
        });
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost/EcomercialStore/API/wish")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          wish: response.wish.rows,
        });
      })
      .catch((error) => console.log(error));
    if (localStorage.getItem('token')) toast.success('Đăng nhập thành công!!!')

  }
  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
      search: e.target.value,

    })
  }
  handleOnClick = (e) => {
    e.preventDefault();
    console.log('/detail/'.concat(this.state.redirect))
    window.location.href = '/detail/'.concat(this.state.redirect)
  }
  handle = (e) => {
    this.setState({
      search: e.target.innerHTML,
      query: ''
    })
    this.state.data.filter((p) => p.nameProduct === e.target.innerHTML).map((id) => this.setState({ redirect: id.id }))
  }
  notify = ()=> {
    toast.error('Vui lòng đăng nhập để thực hiện chức năng này!')
  }
  Suggest() {
    if (this.state.query.length > 0) {
      return <Suggest results={this.state.data} filter={this.state.query} handle={(e) => this.handle(e)} />
    }
  }
  configLogin() {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    if (isNull(token))
      return (
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
        </div>)
    else
      return (
        <div className="col-6">
          <div className="header-top--right">
            <ul className="header-user-menu">
              <li>
                <a href='/account'>Hi, {name}</a>
              </li>
              <li>
                <a href='/' onClick={(e) => this.clear(e)}>Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      )
  }
  render() {
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    var numberCart = 0
    var numberWish = 0
    if (token) {
      // toast.success("Đăng nhập thành công!!")
      numberWish = this.state.wish.filter((p) => p.username === username).length
      numberCart = this.state.cart.filter((p) => p.username === username).length
    }
    // const html = token ? <div className="col-3 text-end">
    //   <ul className="header-action-icon">
    //     <li>
    //       <a href="/wishlist" className="offcanvas-toggle">
    //         <i class="fas fa-heart"></i>
    //         <span className="header-action-icon-item-count">{numberWish}</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/cart" className="offcanvas-toggle">
    //         <i class="fas fa-shopping-cart"></i>
    //         <span className="header-action-icon-item-count">{numberCart}</span>
    //       </a>
    //     </li>
    //   </ul>
    // </div> : <div className="col-3 text-end">
    //   <ul className="header-action-icon">
    //     <li>
    //       <a href="#" onClick={this.notify()} className="offcanvas-toggle">
    //         <i class="fas fa-heart"></i>
    //         <span className="header-action-icon-item-count">0</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" onClick={this.notify()} className="offcanvas-toggle">
    //         <i class="fas fa-shopping-cart"></i>
    //         <span className="header-action-icon-item-count">0</span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    return (
      <header className="header-section d-lg-block d-none">
        <Toaster
          position="top-left"
          reverseOrder={false}
        />
        <div className="header-top">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-6">
                <div className="header-top--left">
                  <span>Chào mừng đến với cửa hàng của chúng tôi!</span>
                </div>
              </div>
              {this.configLogin()}
            </div>
          </div>
        </div>
        <div className="header-center">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-3">
                <div className="header-logo">
                  <a href="/"><img src="assets/images/logo/logo.png" alt="Not found" /></a>
                </div>
              </div>
              <div className="col-6">
                <div className="header-search">
                  <form action="#" method="post">
                    <div className="header-search-box default-search-style d-flex">
                      <input value={this.state.search}
                        onChange={(e) => this.handleInputChange(e)} className="default-search-style-input-box border-around border-right-none" type="text" placeholder="Nhập từ khóa tìm kiếm ..." required />
                      <button className="default-search-style-input-btn" onClick={(e) => this.handleOnClick(e)} type="submit" ><i class="fas fa-search" ></i></button>
                    </div>
                    {this.Suggest()}
                  </form>
                </div>
              </div>
              <div className="col-3 text-end">
                <ul className="header-action-icon">
                  <li>
                    <a href="/wishlist" className="offcanvas-toggle">
                      <i class="fas fa-heart"></i>
                      <span className="header-action-icon-item-count">{numberWish}</span>
                    </a>
                  </li>
                  <li>
                    <a href="/cart" className="offcanvas-toggle">
                      <i class="fas fa-shopping-cart"></i>
                      <span className="header-action-icon-item-count">{numberCart}</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* {html} */}
            </div>
          </div>
        </div>
      </header>
    );
  }
};


export default Header;