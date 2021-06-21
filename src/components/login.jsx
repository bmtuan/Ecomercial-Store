import axios from "axios";
import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Redirect } from "react-router";
class Login extends Component {
	constructor(props) {
		super(props);
		this.onSignIn = this.onSignIn.bind(this);
		this.state = {
			username: "",
			password: "",
			password2nd: '',
			email: '',
			login: false,
			loginFail: false,
			signUpFail: false,
			signUp: false
		};
	}
	// componentDidMount(){
	//   const {history} = this.props
	// }
	// notify = () => {
	// 	if (this.state.login)
	// 		toast.success('Đăng nhập thành công!')
	// }
	handleChangeSignIn = (event) => {
		if (event.target.name === 'username') this.setState({ username: event.target.value });
		if (event.target.name === 'password') this.setState({ password: event.target.value });
	}
	handleChangeSignUp = (event) => {
		console.log(event.target.value)
		if (event.target.name === 'username') this.setState({ username: event.target.value });
		if (event.target.name === 'password') this.setState({ password: event.target.value });
		if (event.target.name === 'email') this.setState({ email: event.target.value });
		// if (event.target.name === 'password2nd') this.setState({ password2nd: event.target.value });
	}
	onSignIn = (e) => {
		e.preventDefault();
		const username = this.state.username
		const password = this.state.password
		const data = {
			'username': username,
			'password': password
		}
		const config = {
			method: "post",
			url: `http://localhost/EcomercialStore/API/login`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then((res) => {
				toast.success('Đăng nhập thành công!!')
				localStorage.setItem("token", res.data.token);
				const user = res.data.response.user
				console.log(user)
				let userInfo = {
					name: user.name,
					email: user.email,
					address: user.address,
					gender: user.gender,
					phone: user.Phone,
				};
				localStorage.setItem("name", userInfo.name);
				localStorage.setItem("email", userInfo.email);
				localStorage.setItem("address", userInfo.address);
				localStorage.setItem("phone", userInfo.phone);
				localStorage.setItem('username', user.username)
				setTimeout(() => { this.setState({ login: true }) }, 500)

			})
			.catch((err) => {
				console.log(err.response)
				this.setState({
					loginFail: true
				})
			});
		// if (localStorage.getItem('token')) toast.success("Đăng nhập thành công!!!")
	};
	onSignUp = (e) => {
		// const { history } = this.props;
		e.preventDefault();
		// console.log(this.props);
		const username = this.state.username
		const password = this.state.password
		const email = this.state.email
		// const password2nd = this.state.password2nd
		const data = {
			'username': username,
			'password': password,
			'email': email
		}
		const config = {
			method: "post",
			url: `http://localhost/EcomercialStore/API/register`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then((res) => {
				console.log(res)
				toast.success('Đăng kí thành công!!!')
				this.setState({
					signUp: true,
					signUpFail: false
				})
			})
			.catch((err) => {
				console.log(err.response)
				this.setState({
					signUpFail: true,
					signUp: false
				})
			});
	};
	loginSuccess = () => {
		// toast.success("Đăng nhập thành công!!");
		return <Redirect to='/'></Redirect>

	}
	render() {
		return (
			<div>
				<Toaster
					position="top-left"
					// duration='3000'
					reverseOrder={false}
				/>
				{/* {this.notify()} */}
				{this.state.login ? this.loginSuccess() : null}
				<div className="breadcrumb-wrapper"></div>
				<div className="customer_login">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="account_form" data-aos="fade-up" data-aos-delay={0}>
									<h3>login</h3>
									<form>
										<div className="default-form-box mb-20">
											<label>
												Username<span>*</span>
											</label>
											<input type="text" name='username' onChange={(e) => this.handleChangeSignIn(e)} />
											<label>
												Passwords <span>*</span>
											</label>
											{/* {console.log(this.state.loginFail)} */}
											<input type="password" name='password' onChange={(e) => this.handleChangeSignIn(e)} />
											<label className="alert-login">{this.state.loginFail ?
												<div className="alert " role="alert">
													Tài khoản/Mật khẩu không hợp lệ!
												</div> : ''
											}</label>
										</div>
										<div className="login_submit">
											<button type='submit' onClick={(e) => this.onSignIn(e)}>Login</button>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="account_form register" data-aos="fade-up" data-aos-delay={200}>
									<h3>Register</h3>
									<form onSubmit={(e) => this.onSignUp(e)}>
										<div className="default-form-box mb-20">
											<label>
												Email address <span>*</span>
											</label>
											<input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" name='email' onChange={(e) => this.handleChangeSignUp(e)} />
											<label>
												Username <span>*</span>
											</label>
											<input pattern="^(?=.{6,14}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$" type="text" name='username' onChange={(e) => this.handleChangeSignUp(e)} />
											<label>
												Passwords <span>*</span>
											</label>
											<input type="password" name='password' onChange={(e) => this.handleChangeSignUp(e)} />
											{/* <label>
												Reapeat Passwords <span>*</span>
											</label> */}
											{/* <div className="success " role="alert">
													Đăng kí thành công
                								</div> */}
											{/* <input type="password" name='password2nd' onChange={(e) => this.handleChangeSignUp(e)} /> */}
											<label href="/" className="alert-login">{this.state.signUpFail ?
												<div className="alert " role="alert">
													Tài khoản đã tồn tại
												</div> : ''
											}</label>
											<label href="/" className="alert-login">{this.state.signUp ?
												<div className="success " role="alert">
													Đăng kí thành công
												</div> : ''
											}</label>
										</div>
										<div className="login_submit">
											<button type="submit">Register</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
