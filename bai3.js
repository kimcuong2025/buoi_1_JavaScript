// Đầu vào
// - Tạo biến chứa tỷ giá đô có giá trị là 23500
// - Tạo biến chứa số tiền USD (tự gán giá trị là 5)
// - Tạo biến chứa số tiền VND gán giá trị 0

// Xử lý
// - Cập nhật số tiền VND = Số tiền USD * tỷ giá đô
// - Tạo biến result để hiển thị số tiền sau quy đổi

// Đầu ra
// - In result ra ngoài màn hình

const exchangeRate = 23500;
const amountUSD = 5;
let amountVND = 0;

amountVND = amountUSD * exchangeRate;
let result = amountUSD + " USD bằng với: " + amountVND + " VND";

console.log(result);