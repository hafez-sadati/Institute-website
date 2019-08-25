import React from 'react';
const UserInfo = ({imageUrl,fullName}) => {
    return ( 

        <li key="2" className="li-dropdown">
            <input type="checkbox" name="drop-profile" id="menu-1"/>
            <label id="holderadmininhtmlFormation" htmlFor="menu-1">
                <img src={imageUrl}/>
                <span>{fullName}
                </span>
                <i className="fa fa-chevron-down down"></i>
            </label>
            <div className="content three-sub">

                <div>
                    <input type="radio" name="item" id="menu-2"/>
                    <label id="edit_profile" htmlFor="menu-2">
                        <a className="root_d" href="#"></a>
                        پروفایل
                    </label>
                </div>
                <div>
                    <input type="radio" name="item" id="menu-3"/>
                    <label htmlFor="menu-3">
                        رمز عبور
                    </label>
                </div>
                <div>
                    <a className="root_d" href="#"></a>
                    <input type="radio" name="item" id="menu-4"/>
                    <label htmlFor="menu-4">
                        خروج
                    </label>
                </div>
            </div>
      </li>
     );
}
 
export default UserInfo;