import axios from "axios";
import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { isEmpty, map } from "lodash";
import { Button, Modal, ProgressBar } from "react-bootstrap";

class MyAccount extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: localStorage.getItem('name'),
			email: localStorage.getItem('email'),
			address: localStorage.getItem('address'),
			phone: localStorage.getItem('phone'),
			orders: [],
			show: false,
			now: 25,
			handleClose: () => this.setState({ show: false }),

		}
	}
	handleShow = (e) => {
		this.setState({ now: e })
		this.setState({ show: true })
	}
	clear = (e) => {
		e.preventDefault()
		localStorage.removeItem('token');
		localStorage.removeItem('info')
		window.location.href = '/login'
	}
	componentDidMount() {
		axios
			.get("http://localhost/EcomercialStore/API/get_all_order")
			.then((res) => {
				const { response } = res.data;
				this.setState({
					orders: response.order.rows,
				});
			})
			.catch((error) => console.log(error));
	}
	handleChange = (event) => {
		if (event.target.name === 'name') this.setState({ name: event.target.value })
		if (event.target.name === 'email') this.setState({ email: event.target.value })
		if (event.target.name === 'address') this.setState({ address: event.target.value })
		if (event.target.name === 'phone') this.setState({ phone: event.target.value })
	}
	handleSummit = (e) => {
		localStorage.setItem('name', this.state.name)
		localStorage.setItem('email', this.state.email)
		localStorage.setItem('address', this.state.address)
		localStorage.setItem('phone', this.state.phone)
		return toast.success('Cập nhật thành công!!!')
	}
	viewStatus = () => {
		toast.success('Xem thành công!!!')
	}
	status(e) {
		if (e == 25) return 'Trong kho'
		if (e == 50) return 'Nhân viên đã lấy'
		if (e == 75) return 'Đang giao'
		if (e == 100) return 'Hoàn thành'
	}
	render() {
		// const name = localStorage.getItem('name')
		const username = localStorage.getItem('username')
		const { orders } = this.state
		const listOrder = orders.filter((p) => p.username === username)
		return (
			<div>
				<Modal show={this.state.show} onHide={this.state.handleClose}>
					<Modal.Header>
						<Modal.Title>Tình trạng đơn hàng</Modal.Title>
					</Modal.Header>
					<Modal.Body><ProgressBar now={this.state.now} label={this.status(this.state.now)} /></Modal.Body>
					<Modal.Footer>
						<Button class='add-cart' variant="secondary" onClick={this.state.handleClose}>
							Đóng
						</Button>
					</Modal.Footer>
				</Modal>
				<div className="breadcrumb-section">
					<Toaster position='top-left'></Toaster>
					<div className="breadcrumb-wrapper">
						<div className="container">
							<div className="row">
								<div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
									<h3 className="breadcrumb-title">Thông tin tài khoản</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="account_dashboard">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-3 col-lg-3">
								<div className="dashboard_tab_button" data-aos="fade-up" data-aos-delay={0}>
									<ul role="tablist" className="nav flex-column dashboard-list">
										<li><a href="#dashboard" data-bs-toggle="tab" className="nav-link active">Trang chính</a></li>
										<li> <a href="#orders" data-bs-toggle="tab" className="nav-link">Đơn hàng</a></li>
										<li><a href="#account-details" data-bs-toggle="tab" className="nav-link">Thông tin cá nhân</a></li>
										<li><a href="/" className="nav-link" onClick={(e) => this.clear(e)}>Đăng xuất</a></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-12 col-md-9 col-lg-9">
								<div className="tab-content dashboard_content" data-aos="fade-up" data-aos-delay={200}>
									<div className="tab-pane fade show active" id="dashboard">
										<h4>Trang chính</h4>
										<p>Bạn có thể kiểm tra và xem <a href="#">những đơn hàng đã đặt</a>, quản lí <a href="#">địa chỉ giao hàng</a> và <a href="#">chỉnh sửa thông tin tài khoản.</a></p>
									</div>
									<div className="tab-pane fade" id="orders">
										<h4>Đơn hàng</h4>
										<div className="table_page table-responsive">
											<table>
												<thead>
													<tr>
														<th>Đơn hàng</th>
														<th>Thời gian</th>
														<th>Tổng</th>
														<th>Hoạt động</th>
													</tr>
												</thead>
												<tbody>
													{!isEmpty(listOrder) && map(listOrder, (p, index) => (
														<tr>
															<td>{index + 1}</td>
															<td>{p?.time}</td>
															<td>{p?.total / 1000}.000VND</td>
															<td><button className="add-cart" onClick={(e) => this.handleShow(p?.status)}>Xem</button></td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
									<div className="tab-pane fade" id="account-details">
										<h3>Thông tin cá nhân</h3>
										<div className="login">
											<div className="login_form_container">
												<div className="account_login_form">
													<form>
														<div className="input-radio">
															<span className="custom-radio"><input type="radio" defaultValue={0} name="id_gender" checked /> Mr.</span>
															<span className="custom-radio"><input type="radio" defaultValue={1} name="id_gender" /> Mrs.</span>
														</div> <br />
														<div className="default-form-box mb-20">
															{/* {console.log(this.state.info)} */}
															<label>Họ và tên</label>
															<input pattern='^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]$' type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
														</div>
														<div className="default-form-box mb-20">
															<label>Email</label>
															<input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
														</div>
														<div className="default-form-box mb-20">
															<label>Địa chỉ</label><small>Địa chỉ này dùng để giao hàng</small>
															<input type="text" name="address" value={this.state.address} onChange={(e) => this.handleChange(e)} />
														</div>
														<div className="default-form-box mb-20">
															<label>Phone</label>
															<input pattern="(84|0[3|5|7|8|9])+([0-9]{8})" type="text" name="phone" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
														</div>
														<br />
														<div className="save_button primary_btn default_button">
															<button type="submit" onClick={(e) => this.handleSummit(e)}>Lưu</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		)
	}
}

export default MyAccount