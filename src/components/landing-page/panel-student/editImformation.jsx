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
                  placeholder="شامل حروف فارسی باشد"
                />
                <div className="input-titleBackStyle titleNormal">
                  نام و نام خانورادگی{' '}
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
                  id="lastName"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <div className="input-titleBackStyle titleNormal">
                  ایمیل {' '}
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
                  placeholder="1376/06/29"
                />
                <div className="input-titleBackStyle titleNormal">
                  تاریخ تولد{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-4 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="address"
                  type="text"
                  placeholder=""
                />
                <div className="input-titleBackStyle titleNormal">
                  {' '}رمز عبور جدید{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="holder">
              <div className="input-boxStyle ">
                <input
                  className="input inpNormal"
                  id="address"
                  type="text"
                  placeholder=""
                />
                <div className="input-titleBackStyle titleNormal">
                  {' '}تکرار رمز عبور جدید{' '}
                </div>
                <span className="inputAlarm-error">این یک پیام هشدار است</span>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-4 col-sm-12 my-3" />
          <div className="col-md-2" />
        </div>
        <div className="row inputMargin">
          <div className="col-sm-2" />

          <div className="col-md-2 col-sm-4">
            <div className="btn-holder fillBtn">
              <input type="submit" value="ویرایش" />
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
