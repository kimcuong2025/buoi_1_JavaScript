// Đầu vào
// - Tạo biến chứa chiều dài hình chữ nhật (tự gán là 4)
// - Tạo biến chứa chiều rộng hình chữ nhật (tự gán là 3)
// - Tạo biến chứa diện tích gán giá trị là 0 
// - Tạo biến chứa chu vi gán giá trị là 0

// Xử lý
// - Cập nhật giá trị cho diện tích = chiều dài * chiều rộng
// - Cập nhật giá trị cho chu vi = (chiều dài + chiều rộng) * 2
// - Tạo biến result để hiển thị kết quả tính diện tích và chu vi

// Đầu ra
// - In result ra ngoài màn hình

const length = 4;
const width = 3;
let area = 0;
let perimeter = 0;

area = length * width;
perimeter = (length + width) * 2;
let result = "Diện tích hình chữ nhật là: " + area + " và chu vi hình chữ nhật là: " + perimeter;

console.log(result);
