import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const SubmitFormSuccess = () => {
  const state = useSelector(state => ({...state.submitInfo}));

  return (
    <Result
      status="success"
      title={`Xin chào: ${state.fullname}`}
      subTitle={`Bạn đã hoàn thành khai báo y tế vào lúc: ${state.date}`}
      extra={[
        <Button type="primary" key="console">
          <Link to="/">TRỞ VỀ TRANG CHỦ</Link>
        </Button>
      ]}
    />
  );
};

export default SubmitFormSuccess;