import React, {Component} from 'react';
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-12 form-holder addSlideForm das-ful ">
          <div className="title">
            <label className="titleText">
              <h1>داشبورد   </h1>
            </label>
          </div>

          <div className="row inputMargin">
                          <div className="col-md-6 col-sm-12">
                            <div className="card card-stats">
                              <div className="card-header card-header-warning card-header-icon">
                                <div className="card-icon">
                                  <i className="fa fa-database"></i>
                                </div>
                                <p className="card-category">فضای سرور</p>
                                <h3 className="card-title">49/50 GB</h3>
                              </div>
                              <div className="card-footer">
                                <div className="stats">
                                  <a href="#pablo">فضای بیشتری دریافت کنید</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="card card-stats">
                              <div className="card-header card-header-rose card-header-icon">
                                <div className="card-icon">
                                <i className="fa fa-users"></i>

                                </div>
                                <p className="card-category">تعداد دانشجو ها</p>
                                <h3 className="card-title">12344</h3>
                              </div>
                              <div className="card-footer">
                              <div className="stats">
                                  <i className="fa fa-table"></i>لیست همه دانشجو ها
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="card card-stats">
                              <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                <i className="fa fa-money"></i>
                                </div>
                                <p className="card-category">وضعیت مالی</p>
                                <h3 className="card-title">75.521</h3>
                              
                              </div>
                              <div className="card-footer">
                              <div className="stats">
                                  <i className="fa fa-calendar"></i> 
                                 امار یک ماه اخیر
                                </div>
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="card card-stats">
                              <div className="card-header card-header-info card-header-icon">
                                <div className="card-icon">
                                  <i className="fa fa-child"></i>
                                </div>
                                <p className="card-category">جدید ترین اعضا</p>
                                <h3 className="card-title">+245</h3>
                              </div>
                              <div className="card-footer">
                                <div className="stats">
                                  <i className="fa fa-refresh"></i> بروز رسانی
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
       
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
