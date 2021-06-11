import React from 'react';
import Logo from '../../img/logo.png';

import './HeaderComponent.scss';

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={Logo} alt="fresco-logo" />
      <h1>KHAI BÁO Y TẾ TỰ NGUYỆN</h1>
    </div>
  )
}

export default HeaderComponent;