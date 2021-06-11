export const formInfo = [
  {
    id: 1,
    label: 'Họ và tên',
    name: 'fullname',
    messageInput: 'Vui lòng nhập thông tin Họ và tên!'
  },
  {
    id: 2,
    label: 'Số điện thoại',
    name: 'phone',
    messageInput: 'Vui lòng nhập thông tin Số điện thoại!'
  },
  {
    id: 3,
    label: 'Bộ phận làm việc',
    name: 'position',
    messageInput: 'Vui lòng nhập thông tin Bộ phận làm việc',
    subQuestion: [
      {
        item: 'HÀNH CHÍNH - IT'
      },
      {
        item: 'THỦ QUỸ'
      },
      {
        item: 'SẢN XUẤT'
      },
      {
        item: 'NHÂN SỰ'
      },
      {
        item: 'VP.TGĐ'
      },
      {
        item: 'CUNG ỨNG'
      },
      {
        item: 'KẾ HOẠCH TỔNG HỢP'
      },
      {
        item: 'KẾ TOÁN'
      },
      {
        item: 'CHĂM SÓC KHÁCH HÀNG'
      },
      {
        item: 'KINH DOANH'
      },
      {
        item: 'KHO VẬN'
      },
      {
        item: 'GIAO HÀNG XE MÁY'
      },
      {
        item: 'GIAO HÀNG XE TẢI'
      },
      {
        item: 'TÀI XẾ'
      },
      {
        item: 'BẢO TRÌ'
      },
      {
        item: 'BẢO VỆ'
      },
      {
        item: 'TẠP VỤ'
      },
      {
        item: 'BẾP NHẬT MINH'
      },
      {
        item: 'KHÁCH'
      }
    ]
  },
  {
    id: 4,
    label: 'Trong vòng 14 ngày, Anh/Chị: ',
    name: '14days',
    messageInput: 'Vui lòng chọn câu trả lời!',
    subQuestion: [
      {
        item: 'Có tiếp xúc với trường hợp bệnh hoặc nghi ngờ mắc bệnh COVID-19 không?'
      },
      {
        item: 'Có đi về từ vùng có dịch COVID-19 không?'
      },
      {
        item: 'Có tiếp xúc với trường hợp đi về từ vùng dịch không?'
      },
    ]
  },
  {
    id: 5,
    label: 'Trong vòng 14 ngày, Anh/Chị có đến Quốc gia/vùng lãnh thổ nào (có thể đi qua nhiều quốc gia):',
    name: 'nation',
    messageInput: 'Vui lòng chọn câu trả lời!',
  },
  {
    id: 6,
    label: 'Trong vòng 14 ngày, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?',
    name: 'sign14day',
    messageInput: 'Vui lòng chọn câu trả lời!',
    subQuestion: [
      {
        item: 'Sốt'
      },
      {
        item: 'Ho'
      },
      {
        item: 'Khó thở'
      },
      {
        item: 'Viêm phổi'
      },
      {
        item: 'Đau họng'
      },
      {
        item: 'Mệt mỏi'
      },
      {
        item: 'Không có'
      }
    ]
  },
  {
    id: 7,
    label: 'Hiện tại Anh/Chị có các bệnh nào dưới đây:',
    name: 'present',
    messageInput: 'Vui lòng chọn câu trả lời!',
    subQuestion: [
      {
        item: 'Bệnh gan mãn tính'
      },
      {
        item: 'Bệnh máu mãn tính'
      },
      {
        item: 'Bệnh phổi mãn tính'
      },
      {
        item: 'Bệnh tim mạch'
      },
      {
        item: 'Huyết áp cao'
      },
      {
        item: 'HIV hoặc suy giảm miễn dịch'
      },
      {
        item: 'Người nhận ghép tạng, tuỷ xương'
      },
      {
        item: 'Tiểu đường'
      },
      {
        item: 'Ung thư'
      },
      {
        item: 'Có thai'
      },
      {
        item: 'Không có'
      }
    ]
  }
];