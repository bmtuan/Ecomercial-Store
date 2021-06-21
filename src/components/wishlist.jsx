import axios from "axios";
import { isEmpty, map } from "lodash";
import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast'
class WishList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: localStorage.getItem('username'),
      wish: [],
      product: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost/EcomercialStore/API/wish")
      .then((res) => {
        const { response } = res.data;
        this.setState({
          wish: response.wish.rows,
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
      url: `http://localhost/EcomercialStore/API/delete_wish`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {id: e},
    };
    axios(config)
      .then((res) => {
        console.log(res)
        // toast.success('Xóa thành công!!')
      })
      .catch((err) => {
        console.log(err.response)
      });
  }
  handleClickCart = (e) => {
		const username = localStorage.getItem('username')
		const data = {
			username : username,
			id_product : e
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
				toast.success('Thêm thành công!!')
				console.log(res)
			})
			.catch((err) => {
				console.log(err.response)
			});
	}
  render() {
    const listId = this.state.wish.filter((p) => p.username === this.state.username).map((p) => p)
    // console.log(product)
    const { product } = this.state
    // console.log(listId)
    return (
      <div>
        <div className="breadcrumb-section">
          <Toaster position='top-left'></Toaster>
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">Wishlist</h3>
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
                        <thead>
                          <tr>
                            <th className="product_remove">Xóa</th>
                            <th className="product_thumb">Hình ảnh</th>
                            <th className="product_name">Sản phẩm</th>
                            <th className="product-price">Giá</th>
                            <th className="product_stock">Trạng thái kho</th>
                            <th className="product_addcart">Hành động</th>
                          </tr>
                        </thead>
                        <tbody>

                          {!isEmpty(listId) && !isEmpty(product) && map(listId, (id) => (
                            <tr>
                              <td className="product_remove" ><button class='add-cart' onClick={(e) => this.deleteWish(id.id)}><i class="fas fa-trash"></i></button></td>
                              <td className="product_thumb"><a href="product-details-default.html"><img src={product[id.id_product - 1]?.src} alt="" /></a></td>
                              <td className="product_name"><a href="product-details-default.html">{product[id.id_product - 1]?.nameProduct}</a></td>
                              <td className="product-price">{product[id.id_product - 1]?.salePrice}</td>
                              <td className="product_stock">Còn trong kho</td>
                              <td className="product_addcart"><a onClick={(e) => this.handleClickCart(id.id_product)} data-bs-toggle="modal" data-bs-target="#modalAddcart">Thêm vào giỏ</a></td>
                            </tr>
                          ))
                          }
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