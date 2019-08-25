import React, {Component} from 'react';
import getUsers from '../../../services/fakeUsers';
import '../../../content/css/admin-panel/tabelnahigiyan.css';
import Pagination from '../pagination';
import {paginate} from '../../../utils/paginate';
import {Link} from 'react-router-dom';
class UserTable extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 10,
  };

  componentDidMount() {
    const users = getUsers();
    this.setState({users});
  }

  handlePageChange = page => {
    this.setState({currentPage: page});
  };

  getPageData = () => {
    const {pageSize, currentPage, users: allUsers} = this.state;
    const users = paginate(allUsers, currentPage, pageSize);

    return {
      totalCount: allUsers.length,
      data: users,
    };
  };

  render() {
    const {pageSize, currentPage} = this.state;
    const {totalCount, data} = this.getPageData();
    return (
      <React.Fragment>
        <div className="col-sm-12 form-holder addSlideForm ">
          <div className="title">
            <label className="titleText">
              <h1> نمایش کل دوره ها </h1>
            </label>
          </div>
          <div className="btn-container text-center">
            <Link className="btn btn-success" to="/admin/course/add">
              <i className="fa fa fa-plus add-course-i"></i>افزودن دوره جدید
            </Link>
          </div>
          <section className="my-courses">
            <table className="tabular-list z-index-2">
              <thead>
                <tr className="row table-header" key="1">
                  <th className="col">تصویر</th>
                  <th className="col">نام دوره</th>
                  <th className="col">سطح</th>
                  <th className="col">تاریخ آغاز</th>
                  <th className="col">وضعیت</th>
                  <th className="col">ویرایش</th>
                  <th className="col">حذف</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => (
                  <tr className="row" key={user.id + 1}>
                    <td className="col pic-col">
                      <div className="pic-box m-l-c">
                        <img
                          src={user.courseImage}
                          alt=""
                          className="item-pic"
                        />
                      </div>
                    </td>
                    <td className="col name-col">{user.courseName}</td>
                    <td className="col level-col">{user.courseLevel}</td>
                    <td className="col start-date-col">{user.startDate}</td>
                    <td className="col status-col">
                      {' '}
                      {user.isShow ? 'فعال' : 'غیر فعال'}
                    </td>
                    <td className="col">
                      <Link className="item-btn" to="/admin/course/edit">
                        <img
                          src={require('../../../content/images/svg/edit.svg')}
                          alt=""
                        />
                      </Link>
                    </td>
                    <td className="col">
                      <Link className="item-btn" to="/admin/course/delete">
                        <img
                          src={require('../../../content/images/svg/delete.svg')}
                          alt=""
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          <img
            src={require('../../../content/images/svg/profile-list-shape.svg')}
            alt=""
            className="background-shape"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default UserTable;
