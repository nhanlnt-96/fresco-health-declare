import React from 'react';
import FooterLogo from '../../img/logo.png';

import './FooterComponent.scss'

const FooterComponent = () => {
  return (
    <>
      <div className="content">
        <h1>CÔNG TY TNHH FRESCO FOODS</h1>
        <p>Địa chỉ: 79A Ấp 6, Xuân Thới Sơn, Hóc Môn</p>
        <p>Phone: (+84 28) 6259.8686</p>
        <p>Hotline: (+84 28) 6259.8686 (24/7)</p>
        <p>Email: info@fresco.vn | Web: www.fresco.vn</p>
      </div>
      <div className="footer-logo">
        <img src={FooterLogo} alt="fresco-logo" />
      </div>
    </>
  )
}

export default FooterComponent;