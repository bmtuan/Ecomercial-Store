import { Component } from "react";

class MyAccount extends Component{
    render(){
        return(
            <div>
        <div className="breadcrumb-section">
          <div className="breadcrumb-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                  <h3 className="breadcrumb-title">My Account</h3>
                </div>
              </div>
            </div>
          </div>
        </div> {/* ...:::: End Breadcrumb Section:::... */}
        {/* ...:::: Start Account Dashboard Section:::... */}
        <div className="account_dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                {/* Nav tabs */}
                <div className="dashboard_tab_button" data-aos="fade-up" data-aos-delay={0}>
                  <ul role="tablist" className="nav flex-column dashboard-list">
                    <li><a href="#dashboard" data-bs-toggle="tab" className="nav-link active">Dashboard</a></li>
                    <li> <a href="#orders" data-bs-toggle="tab" className="nav-link">Orders</a></li>
                    <li><a href="#address" data-bs-toggle="tab" className="nav-link">Addresses</a></li>
                    <li><a href="#account-details" data-bs-toggle="tab" className="nav-link">Account details</a></li>
                    <li><a href="login.html" className="nav-link">logout</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-9 col-lg-9">
                {/* Tab panes */}
                <div className="tab-content dashboard_content" data-aos="fade-up" data-aos-delay={200}>
                  <div className="tab-pane fade show active" id="dashboard">
                    <h4>Dashboard </h4>
                    <p>Bạn có thể kiểm tra và xem <a href="#">những đơn hàng đã đặt</a>, quản lí <a href="#">địa chỉ giao hàng</a> và <a href="#">thay đổi mặt khẩu và chỉnh sửa thông tin tài khoản.</a></p>
                  </div>
                  <div className="tab-pane fade" id="orders">
                    <h4>Orders</h4>
                    <div className="table_page table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>May 10, 2018</td>
                            <td><span className="success">Completed</span></td>
                            <td>$25.00 for 1 item </td>
                            <td><a href="cart.html" className="view">view</a></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>May 10, 2018</td>
                            <td>Processing</td>
                            <td>$17.00 for 1 item </td>
                            <td><a href="cart.html" className="view">view</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane" id="address">
                    <p>The following addresses will be used on the checkout page by default.</p>
                    <h5 className="billing-address">Billing address</h5>
                    <a href="#" className="view">Edit</a>
                    <p><strong>Bobby Jackson</strong></p>
                    <address>
                      Address: Your address goes here.
                    </address>
                  </div>
                  <div className="tab-pane fade" id="account-details">
                    <h3>Account details </h3>
                    <div className="login">
                      <div className="login_form_container">
                        <div className="account_login_form">
                          <form action="#">
                            <p>Already have an account? <a href="#">Log in instead!</a></p>
                            <div className="input-radio">
                              <span className="custom-radio"><input type="radio" defaultValue={1} name="id_gender" /> Mr.</span>
                              <span className="custom-radio"><input type="radio" defaultValue={1} name="id_gender" /> Mrs.</span>
                            </div> <br />
                            <div className="default-form-box mb-20">
                              <label>First Name</label>
                              <input type="text" name="first-name" />
                            </div>
                            <div className="default-form-box mb-20">
                              <label>Last Name</label>
                              <input type="text" name="last-name" />
                            </div>
                            <div className="default-form-box mb-20">
                              <label>Email</label>
                              <input type="text" name="email-name" />
                            </div>
                            <div className="default-form-box mb-20">
                              <label>Password</label>
                              <input type="password" name="user-password" />
                            </div>
                            <div className="default-form-box mb-20">
                              <label>Birthdate</label>
                              <input type="date" name="birthday" />
                            </div>
                            <span className="example">
                              (E.g.: 05/31/1970)
                            </span>
                            <br />
                            <div className="save_button primary_btn default_button">
                              <button type="submit">Save</button>
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
      </div>
        )
    }
}

export default MyAccount