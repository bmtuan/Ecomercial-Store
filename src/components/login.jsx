import axios from "axios";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      data : [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get("http://localhost/web_project2/API/user")
      .then((res) => {
        const data = res.data.response.user.rows;
        console.log(data);
        // this.setState({ username });
        this.setState({data});
      })
      .catch((error) => console.log(error));

    // if (this.state.username == data.map)
  }
  render() {
    return (
      <div>
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
                      Username or email <span>*</span>
                    </label>
                    <input type="text" />
                    {/* </div> */}
                    {/* <div className="default-form-box mb-20"> */}
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type="password" />
                    </div>
                    <div className="login_submit">
                      <button onClick={(e) => this.handleSubmit(e)}>login</button>
                      <label className="checkbox-default mb-20" htmlFor="offer">
                        <input type="checkbox" id="offer" />
                        <span>Remember me</span>
                      </label>
                      <a href="">Lost your password?</a>
                    </div>
                    {/* <button onClick={this.handleSubmit}>Click</button> */}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="account_form register" data-aos="fade-up" data-aos-delay={200}>
                  <h3>Register</h3>
                  <form>
                    <div className="default-form-box mb-20">
                      <label>
                        Email address <span>*</span>
                      </label>
                      <input type="text" />
                    {/* </div>
                    <div className="default-form-box mb-20"> */}
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type="password" />
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
