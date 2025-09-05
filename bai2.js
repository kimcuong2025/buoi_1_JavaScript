// Đầu vào
// - Tạo 5 biến, mỗi biến chứa một số thực (tự gán giá trị)
// - Tạo biến trung bình cộng (average) gán giá trị 0

// Xử lý 
// - Cập nhật lại giá trị cho Trung bình cộng: (số 1 + số 2 + số 3 + số 4 + số 5) / 5
// - Tạo biến result để hiển thị "Giá trị trung bình của 5 số là average"

// Đầu ra 
// - In result ra ngoài màn hình

const num_1 = 10;
const num_2 = 20;
const num_3 = 30;
const num_4 = 40;
const num_5 = 50;
let average = 0;

average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
let result = "Giá trị trung bình của 5 số là: " + average;

console.log(result);