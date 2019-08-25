import React, {Component} from 'react';
import getStudents from '../../../services/student.js';
import '../../../content/css/admin-panel/tabelnahigiyan.css';
import Pagination from '../pagination';
import {paginate} from '../../../utils/paginate';
import {Link} from 'react-router-dom';
class UserTable extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 25,
  };

  componentDidMount() {
    const users = getStudents();
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
              <h1>کل دانشجو ها </h1>
            </label>
          </div>
          <div className="btn-container text-center">
            <Link className="btn btn-success" to="/admin/student/add">
              <i className="fa fa fa-plus add-course-i"></i> افزودن دانشجو جدید
            </Link>
          </div>
          <section className="my-courses">
            <table className="tabular-list z-index-2">
              <thead>
                <tr className="row table-header" key="1">
                  <th className="col">نام </th>
                  <th className="col">تاریخ تولد</th>
                  <th className="col"> ایمیل</th>
                  <th className="col">ویرایش</th>
                  <th className="col">حذف</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => (
                  <tr className="row" key={user.id + 1}>
                    <td className="col name-col">{user.fullName}</td>
                    <td className="col birth-date-col">{user.birthDate}</td>
                    <td className="col email-col">{user.email}</td>

                    <td className="col">
                      <Link className="item-btn" to="/admin/student/edit">
                        <img
                          src={require('../../../content/images/svg/edit.svg')}
                          alt=""
                        />
                      </Link>
                    </td>
                    <td className="col">
                      <Link className="item-btn" to="/admin/student/delete">
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
