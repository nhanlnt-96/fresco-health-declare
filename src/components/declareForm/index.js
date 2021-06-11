import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Radio, Select, Checkbox, Collapse } from 'antd';
import { formInfo } from '../../configs/form.config';
import { submitForm } from '../../network/service';
import { submitSuccess } from '../../store/redux/submitForm/actions';

import './DeclareForm.scss';

const DeclareForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const {Option} = Select;
  const {Panel} = Collapse;
  const [radioSelect1, setRadioSelect1] = useState('');
  const [radioSelect2, setRadioSelect2] = useState('');
  const [radioSelect3, setRadioSelect3] = useState('');
  const [signOther, setSignOther] = useState('');
  const [presentOther, setPresentOther] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const state = useSelector(state => ({...state.submitInfo}));
  console.log(state)

  const onChangeInput = (e, id) => {
    if (id === 6) {
      setSignOther(e.target.value)
    } else {
      setPresentOther(e.target.value)
    }
  }

  const onFinish = async (value) => {
    setIsBusy(true);
    await submitForm(value, radioSelect1, radioSelect2, radioSelect3, signOther, presentOther).then((response) => {
      const {data} = response;
      dispatch(submitSuccess(data[0].B1, data[0].A1));
      setIsBusy(false);
      history.push('/success');
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {
        formInfo.map((val) => {
          return (
            <Form.Item
              key={val.id}
              label={val.label}
              name={val.name}
              rules={[
                {
                  required: true,
                  message: val.messageInput,
                },
              ]}
            >
              {
                (val.id === 3) ? <Select
                  key={val.id}
                  size="large"
                  placeholder="Chọn"
                  allowClear
                >
                  {
                    val.subQuestion.map((val, index) => <Option key={index} value={val.item}>{val.item}</Option>)
                  }
                </Select> : (val.id === 4) ? <table>
                  <tbody>
                  <tr>
                    <td>Có tiếp xúc với trường hợp bệnh hoặc nghi ngờ mắc bệnh COVID-19 không?</td>
                    <td>
                      <Radio.Group onChange={(e) => setRadioSelect1(e.target.value)} value={radioSelect1}>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Có đi về từ vùng có dịch COVID-19 không?</td>
                    <td>
                      <Radio.Group onChange={(e) => setRadioSelect2(e.target.value)} value={radioSelect2}>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Có tiếp xúc với trường hợp đi về từ vùng dịch không?</td>
                    <td>
                      <Radio.Group onChange={(e) => setRadioSelect3(e.target.value)} value={radioSelect3}>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </td>
                  </tr>
                  </tbody>
                </table> : (val.id === 6 || val.id === 7) ? <Checkbox.Group>
                  {
                    val.subQuestion.map((val, index) => <Checkbox key={index} value={val.item}>{val.item}</Checkbox>)
                  }
                  <Collapse>
                    <Panel header={<Checkbox>Khác</Checkbox>}>
                      < Input
                        placeholder="Khác"
                        size="large"
                        onChange={(e) => onChangeInput(e, val.id)} />
                    </Panel>
                  </Collapse>
                </Checkbox.Group> : <Input key={val.id} size="large" />
              }

            </Form.Item>
          )
        })
      }
      <Form.Item
        name="agree"
        rules={[
          {
            required: true,
            message: 'Vui lòng xác nhận thông tin!',
          },
        ]}
      >
        <Checkbox.Group>
          <Checkbox value="Tôi xin cam kết các thông tin khai báo là đúng sự thật.">Tôi xin cam kết các thông tin khai
            báo là đúng sự thật.</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isBusy}>
          GỬI KHAI BÁO
        </Button>
      </Form.Item>
    </Form>
  )
};

export default DeclareForm;