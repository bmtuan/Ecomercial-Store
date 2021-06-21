import axios from "axios";
import { Component } from "react";
import Slider from "react-slick";
import { isEmpty, map } from 'lodash'
import toast, { Toaster } from "react-hot-toast";


class NewProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'laptop',
			data: [],
			numRow: 0,
			token: localStorage.getItem('token')
		}
	}
	handleClick(name) {
		this.setState({
			tab: name,
		})
	}
	componentDidMount() {
		axios
			.get("http://localhost/EcomercialStore/API/product")
			.then((res) => {
				const { response } = res.data;
				// console.log(product);
				this.setState({
					data: response.product.rows,
					numRow: response.product.num_rows
				});
				// console.log(this.data);
			})
			.catch((error) => console.log(error));

		// if (this.state.username == data.map)
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
				// toast.success('Thêm thành công!!!')
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
				// toast.success('Thêm thành công!!!')
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
		const newproduct = data_type.filter(product => product.isNew == 1)
		const html = map(newproduct, (product) =>
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
	render() {
		const settings = {
			dots: true,
			speed: 250,
			slidesToShow: 4,
			slideToScorll: 1,
			autoplay: true.valueOf,
			autoplaySpeed: 3000,
			arrows: false,
		};

		const { data } = this.state;
		console.log(data)
		return (
			<div className="product-tab-section section-top-gap-100">
				<Toaster position='top-left'></Toaster>
				<div className="section-content-gap">
					<div className="container">
						<div className="row">
							<div className="section-content d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column">
								<h3 className="section-title" data-aos="fade-up" data-aos-delay={0}>Hàng mới</h3>
								<ul className="tablist nav product-tab-btn" data-aos="fade-up" data-aos-delay={400}>
									<li>
										<a className="nav-link active" data-bs-toggle="tab" href="#" onClick={() => this.handleClick('laptop')}>Laptop</a>
									</li>
									<li>
										<a className="nav-link" data-bs-toggle="tab" href="#" onClick={() => this.handleClick('screen')}>Màn hình</a>
									</li>
									<li>
										<a className="nav-link" data-bs-toggle="tab" href="#" onClick={() => this.handleClick('keyboard')}>Bàn phím</a>
									</li>
									<li>
										<a className="nav-link" data-bs-toggle="tab" href="#" onClick={() => this.handleClick('mouse')}>Chuột</a>
									</li>
									<li>
										<a className="nav-link" data-bs-toggle="tab" href="#" onClick={() => this.handleClick('case')}>Case</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					className="product-tab-wrapper"
					data-aos="fade-up"
					data-aos-delay={50}
				>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="tab-content tab-animate-zoom">
									<div className="tab-pane show active" id="car_and_drive">
										<div className="product-default-slider product-default-slider-4grids-1row">
											<Slider {...settings}>
												{!isEmpty(data) && this.listProduct(this.state.tab)}
											</Slider>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>{" "}
			</div>
		);
	}
}

export default NewProduct;