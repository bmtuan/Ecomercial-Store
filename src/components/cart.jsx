import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { isEmpty, map, parseInt, times } from "lodash";
import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast'
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: localStorage.getItem('username'),
      wish: [],
      product: [],
    }
    this.totalPrice = 0
  }
  componentDidMount() {
    axios
      .get("http://localhost/EcomercialStore/API/cart")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          wish: response.cart.rows,
        });
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost/EcomercialStore/API/product")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          product: response.product.rows,
        });
      })
      .catch((error) => console.log(error));
  }
  deleteWish = (e) => {
    toast.success('Xóa thành công!!')
    console.log(e)
    const wish = this.state.wish.filter((p) => p.id != e)
    this.setState({
      wish: wish
    })
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/delete_cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { id: e },
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
  }
  accept = (t) => {
    const today = new Date();
    const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    const status = 'Trong kho'
    const data = {
      time: date,
      status: status,
      total: (this.totalPrice + 2000)/2,
      username: this.state.username
    }
    console.log(data)
    const config1 = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/insert_order`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config1)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
    const config = {
      method: "post",
      url: `http://localhost/EcomercialStore/API/delete_all_cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { username: this.state.username },
    };
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      });
    this.setState({
      wish: []
    })
    toast.success('Thanh toán thành công!!!', {
      position: 'top-center'
    })
    toast.dismiss(t.id)
  }
  dismiss = (t) => {
    toast.error('Thanh toán không thành công!!!', {
      position: 'top-center'
    })
    toast.dismiss(t.id)
  }
  notify() {
    toast((t) => (
      <span>
        Vui lòng xác nhận <b>thanh toán</b><br />
        <button class='add-cart' onClick={() => this.accept(t)}>
          Xác nhận
        </button>
        <button class='add-cart' onClick={() => this.dismiss(t)}>Hủy bỏ </button>
      </span>
    ), {
      position: 'top-center',
      duration: 10000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }
  render() {
    const listId = this.state.wish.filter((p) => p.username === this.state.username).map((p) => p)
    const { product } = this.state
    listId.map((p) => {
      var arr = product[p.id_product - 1]?.salePrice.split('.')
      if (arr)
        this.totalPrice += parseInt(arr[0]) * 1000 + parseInt(arr[1])
    });
    // this.setState({
    //   totalPrice: totalPrice,
    // })

    return (
      <div>
        <Toaster position='top-left' />
        <div className="breadcrumb-section">
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">Cart</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-section">
          <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="table_desc">
                    <div className="table_page table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th className="product_remove" >Xóa</th>
                            <th className="product_thumb">Ảnh</th>
                            <th className="product_name">Sản phẩm</th>
                            <th className="product-price">Giá</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!isEmpty(listId) && !isEmpty(product) && map(listId, (id) => (
                            <tr>
                              <td className="product_remove"><button class='add-cart' onClick={(e) => this.deleteWish(id.id)}><i class="fas fa-trash"></i></button></td>
                              <td className="product_thumb"><a href="product-details-default.html"><img src={product[id.id_product - 1]?.src} alt="" /></a></td>
                              <td className="product_name"><a href="product-details-default.html">{product[id.id_product - 1]?.nameProduct}</a></td>
                              <td className="product-price">{product[id.id_product - 1]?.salePrice}</td>
                            </tr>
                          ))
                          }

                        </tbody>
                      </table>
                    </div>
                    <div className="cart_submit">
                      <button type="submit">Cập nhật giỏ hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coupon_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="coupon_code left" data-aos="fade-up" data-aos-delay={200}>
                    <h3>Mã giảm giá</h3>
                    <div className="coupon_inner">
                      <p>Nhập mã giảm giá của bạn</p>
                      <input placeholder="Coupon code" type="text" />
                      <button type="submit">Áp dụng</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                    <h3>Hóa đơn</h3>
                    <div className="coupon_inner">
                      <div className="cart_subtotal">
                        <p>Giá tiền sản phẩm</p>
                        <p className="cart_amount">{parseInt(this.totalPrice / 1000)}.{parseInt(this.totalPrice % 1000)}.000VND</p>
                      </div>
                      <div className="cart_subtotal ">
                        <p>Phí vận chuyển</p>
                        <p className="cart_amount">1.000.000VND</p>
                      </div>

                      <div className="cart_subtotal">
                        <p>Tổng</p>
                        <p className="cart_amount">{parseInt((this.totalPrice + 1000) / 1000)}.{parseInt((this.totalPrice + 1000) % 1000)}.000VND</p>
                      </div>
                      <div className="checkout_btn">
                        <button class='add-cart' onClick={() => this.notify()}>Thanh toán</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;