import React from 'react';
import '../../../content/css/admin-panel/form.css';
import '../../../content/css/admin-panel/StyleSheet.css';
import '../../../content/css/admin-panel/addSlideForm.css';
import ReactSelected from '../../../components/common/reactSelected';
const UserForm = () => {
  const options = [
    {value: '10', label: '10'},
    {value: '25', label: '25'},
    {value: '50', label: '50'},
    {value: '100', label: '100'},
  ];
  return (
    <React.Fragment>
      <div className="col-sm-12 form-holder addSlideForm">
        <div className="title">
          <label className="titleText">
            <h1> ویرایش</h1>
          </label>
        </div>
        <div className="row inputMargin">
          <div className="col-md-2 col-sm-12 my-3 titr">اطلاعات کاربر</div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="firstName"
                  type="text"
                  placeholder="نام شامل حروف فارسی باشد"
                />
                <div className="input-titleBackStyle titleNormal">نام </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle  rateInput">
                <input
                  className="input inpNormal"
                  id="lastName"
                  type="text"
                  placeholder="نام خانوادگی شامل حروف فارسی باشد"
                />
                <div className="input-titleBackStyle titleNormal">
                  نام خانوادگی{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="phone"
                  type="text"
                  placeholder="شماره تلفن شامل عدد باشد"
                />
                <div className="input-titleBackStyle titleNormal">
                  تلفن همراه{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle  rateInput">
                <input
                  className="input inpNormal"
                  id="postalCode"
                  type="text"
                  placeholder="اعداد لاتین بین صفر و ده"
                />
                <div className="input-titleBackStyle titleNormal">کد پستی </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="address"
                  type="text"
                  placeholder="ادرس شامل حروف فارسی باشد"
                />
                <div className="input-titleBackStyle titleNormal">ادرس </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-4 col-sm-12 my-3">
            <ReactSelected options={options} />
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="radio_two">
              <span className="titr">جنسیت :</span>
              <input
                type="radio"
                name="IsMale"
                id="Male"
                value="1"
                defaultChecked
              />
              <label htmlFor="content_Male">مرد </label>

              <input type="radio" name="IsMale" id="Female" value="0" />
              <label htmlFor="content_Female">زن </label>

              <span className="inputAlarm-error">این یک پیام هشدار است</span>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
        <hr className="section-form d-none d-sm-block" />
        <div className="row inputMargin">
          <div className="col-md-2" />
          <div className="col-md-8 col-sm-12  my-3">
            <div className="preViewImage">
              <img
                src={require ('../../../content/images/smile-man.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2" />
        </div>
        <div className="row inputMargin">
          <div className="col-md-4" />
          <div className="col-md-4 col-sm-12 my-3">
            <input type="file" id="file" name="file" className="inputfile" />
            <label htmlFor="file">
              <i className="fa fa-upload " />
              انتخاب تصویر
            </label>
          </div>
          <div className="col-md-4" />
        </div>
        <hr className="section-form" />
        <div className="row inputMargin">
          <div className="col-md-2 col-sm-12 my-3 titr">
            اطلاعات حساب کاربری
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="userName"
                  type="text"
                  placeholder="نام کاربری شامل حروف فارسی باشد"
                />
                <div className="input-titleBackStyle titleNormal">
                  نام کاربری{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle  rateInput">
                <input
                  className="input inpNormal"
                  id="email"
                  type="text"
                  placeholder="اعداد لاتین وارد شود "
                />
                <div className="input-titleBackStyle titleNormal">ایمیل </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="passWord"
                  type="text"
                  placeholder="رمز عبور شامل حروف انگلیسی"
                />
                <div className="input-titleBackStyle titleNormal">
                  کلمه عبور{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="holder">
              <div className="input-boxStyle  rateInput">
                <input
                  className="input inpNormal"
                  id="rePassWord"
                  type="text"
                  placeholder="رمز عبور شامل حروف انگلیسی"
                />
                <div className="input-titleBackStyle titleNormal">
                  تکرار کلمه عبور{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>

        <div className="row radio-btn inputMargin">
          <div className="col-sm-2" />
          <div className="col-sm-2">وضعیت:</div>
          <div className="col-sm-1" />
          <div className="col-md-4 col-sm-6">
            <div className="checkShow">
              <input type="checkbox" id="checkShow" value="1" name="show" />
              <label htmlFor="show" />
              <span className="show">فعال</span>
              <span className="hide">غیر فعال</span>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>

        <div className="row inputMargin">
          <div className="col-sm-2" />
          <div className="col-sm-4" />
          <div className="col-sm-2">
            <div className="btn-holder fillBtn">
              <input type="submit" value="افزودن" />
            </div>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-2" />
        </div>

      </div>
    </React.Fragment>
  );
};

export default UserForm;
