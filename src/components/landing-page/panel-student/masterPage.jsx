import React, {Component} from 'react';
import EditImformation from './editImformation';
import CourseTable from './courseTable';
import UserInfo from '../../common/userInfo-s';
import {Link, Route, Switch, Redirect} from 'react-router-dom';

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
    if (this.state.addClass) {
      boxClass = 'main nav-open';
      boxicon = 'fa fa-bars  menu-icon menu-icon-open navbar-toggler';
      boxblack = 'close-layer visible';
    }
    switch (this.state.active) {
      case 0:
        lbl = 'active';
        lbl1 = '';
        break;
      case 1:
        lbl = '';
        lbl1 = 'active';
        break;
      case 2:
        lbl = '';
        lbl1 = '';
        lbl2 = 'active';
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
                    src={require('../../../content/images/react_1353124.png')}
                    alt="logo"
                    className="Sidebar-img"
                  ></img>
                  <span>پنل دانشجو</span>
                </li>
                <hr className="section-form" />

                <UserInfo
                  imageUrl={require('../../../content/images/smile-man.jpg')}
                  fullName="حافظ ساداتی"
                />

             

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <Link
                    className="root"
                    to="courses"
                    onClick={() => {
                      this.setState({active: 0});
                    }}
                  />
                  <input type="radio" name="item" id="menu-5" value="true" />
                  <label htmlFor="menu-5" className={lbl}>
                    <i className="fa fa-address-card" />
                    <span> دوره های من</span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl1}>
                    <Link
                      className="root"
                      to="edit"
                      onClick={() => {
                        this.setState({active: 1});
                      }}
                    />
                    <i className="fa fa-pencil" />
                    <span>ویرایش پروفایل</span>
                  </label>
                </li>

                <li className="li-btn" onClick={this.toggle.bind(this)}>
                  <input type="radio" name="item" id="menu-6" />
                  <label htmlFor="menu-6" className={lbl2}>
                    <Link
                      className="root"
                      to="paymentstatus"
                      onClick={() => {
                        this.setState({active: 2});
                      }}
                    />
                    <i className="fa fa-credit-card-alt" />
                    <span> وضعیت پرداخت ها</span>
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
                <Route exact path="/edit" component={EditImformation} />
                <Route exact path="/courses" component={CourseTable} />
                <Route exact path="/" component={CourseTable} />
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
