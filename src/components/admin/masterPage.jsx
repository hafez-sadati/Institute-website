import React, {Component} from 'react';
import ShowCourses from './courses/default';
import ShowStudents from './students/default';
import Dashboard from './dashboard';
import AddStudents from './students/create';
import UserInfo from '../../components/common/userInfo-s';
import {Link, Route, Switch} from 'react-router-dom';

class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false, active: 0};
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let boxClass = 'main';
    let boxicon = 'fa fa-bars menu-icon navbar-toggler';
    let boxblack = '';
    let lbl = '';
    let lbl1 = '';
    let lbl2 = '';
    let lbl3 = '';
    let lbl4 = '';
    let lbl5 = '';
    if (this.state.addClass) {
      boxClass = 'main nav-open';
      boxicon = 'fa fa-bars  menu-icon menu-icon-open navbar-toggler';
      boxblack = 'close-layer visible';
    }
    switch (this.state.active) {
      case 0:
        lbl = 'active';
        lbl1 = '';
        lbl2 = '';
        lbl3 = '';
        lbl4 = '';
        lbl5 = '';
        break;
      case 1:
        lbl = '';
        lbl1 = 'active';
        lbl2 = '';
        lbl3 = '';
        lbl4 = '';
        break;
      case 2:
        lbl = '';
        lbl1 = '';
        lbl2 = 'active';
        lbl3 = '';
        lbl4 = '';
        lbl5 = '';
        break;
      case 3:
        lbl = '';
        lbl1 = '';
        lbl2 = '';
        lbl3 = 'active';
        lbl4 = '';
        lbl5 = '';
        break;
      case 4:
        lbl = '';
        lbl1 = '';
        lbl2 = '';
        lbl3 = '';
        lbl4 = 'active';
        lbl5 = '';
        break;
      case 5:
        lbl = '';
        lbl1 = '';
        lbl2 = '';
        lbl3 = '';
        lbl4 = '';
        lbl5 = 'active';
        break;
    }
    return (
      <div className={boxClass}>
        <div className="sidebar">
          <div className="menu-holder open-mode">
            <nav>
              <ul className="navigation">
                <li key="1" className="change-mode">
                  <img
                    src={require('../../content/images/react_1353124.png')}
                    alt="logo"
                    className="Sidebar-img"
                  ></img>
                  <span>  آکادمی بحر</span>
                </li>

                <hr className="section-form" />


                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl}>
                    <Link
                      className="root"
                      to="/admin/dashboard"
                      onClick={() => {
                        this.setState({active: 0});
                      }}
                    />
                    <i className="fa fa-tachometer" />
                    <span>داشبورد</span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <Link
                    className="root"
                    to="/admin/courses"
                    onClick={() => {
                      this.setState({active: 1});
                    }}
                  />
                  <input type="radio" name="item" id="menu-5" value="true" />
                  <label htmlFor="menu-5" className={lbl1}>
                    <i className="fa fa-address-card" />
                    <span> مدیریت دوره ها </span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl2}>
                    <Link
                      className="root"
                      to="/admin/students"
                      onClick={() => {
                        this.setState({active: 2});
                      }}
                    />
                    <i className="fa fa-users" />
                    <span> مدیریت دانشجو ها</span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl3}>
                    <Link
                      className="root"
                      to="/admin/teachers"
                      onClick={() => {
                        this.setState({active: 3});
                      }}
                    />
                    <i className="fa fa-user-circle" />
                    <span> مدیریت مدرسان </span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl4}>
                    <Link
                      className="root"
                      to="/admin/financialmanagement"
                      onClick={() => {
                        this.setState({active: 4});
                      }}
                    />
                    <i className="fa fa-credit-card" />
                    <span> مدیریت مالی</span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl5}>
                    <Link
                      className="root"
                      to="/admin/worksamples"
                      onClick={() => {
                        this.setState({active: 5});
                      }}
                    />
                    <i className="fa fa-file-code-o" />
                    <span> مشاهده نمونه کار ها</span>
                  </label>
                </li>            
                <li className="li-btn">
                  <input type="radio" name="item" id="menu-7" />
                  <label>
                    <i className="fa fa-home " />
                    <span> صفحه اصلی سایت</span>
                  </label>
                </li>
                <li className="li-btn">
                  <input type="radio" name="item" id="menu-7" />
                  <label>
                    <i className="fa fa-sign-out" />
                    <span> خروج</span>
                  </label>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="main-panel">
          <div className="container-fluid " style={{width: '98%'}}>
            <div className="row">
              <div className="col-md-12 content-holder">
                <div className="row">
                  <div className="col pull-right">
                    <nav className="address-bar">
                      <i className={boxicon} onClick={this.toggle.bind(this)} />
                    </nav>
                  </div>
                  <div className="col pull-left">
                    <nav>
                      <ul className="icon-navbar">
                        <li id="1" className="cog">
                          <i className="fa fa-cog" />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <Switch>
                <Route
                  exact
                  path="/admin/student/add"
                  component={AddStudents}
                />
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/courses" component={ShowCourses} />
                <Route exact path="/admin/students" component={ShowStudents} />
                <Route exact path="/admin/" component={ShowCourses} />
              </Switch>
            </div>
          </div>
          <div className={boxblack} onClick={this.toggle.bind(this)} />
        </div>
      </div>
    );
  }
}

export default MasterPage;
