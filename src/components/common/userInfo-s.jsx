import React from 'react';

const UserInfo = ({imageUrl, fullName}) => {
  return (
    <li key="2" className="li-dropdown">
      <input type="checkbox" name="drop-profile" id="menu-1" />
      <label id="holderadmininhtmlFormation" htmlFor="menu-1">
        <img src={imageUrl} />
        <span>
          {fullName}
        </span>
      </label>
    </li>
  );
};

export default UserInfo;
