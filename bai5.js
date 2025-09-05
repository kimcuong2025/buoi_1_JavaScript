// Đầu vào
// - Tạo biến chứa số tự nhiên (tự gán giá trị là 72)
// - Tạo biến chứa tổng ký số gán giá trị 0

// Xử lý
// - Tạo biến hàng chục = số tự nhiên / 10
// - Cập nhật làm tròn hàng chục = Math.floor(hàng chục)
// - Tạo biến hàng đơn vị = số tự nhiên % 10
// - Cập nhật tổng 2 ký số = hàng chục + hàng đơn vị
// - Tạo biến result để hiển thị tổng 2 ký số


// Đầu ra
// - In result ra ngoài màn hình

const digit = 72;
let sumOfDigits = 0;

let tensDigit = digit / 10;
tensDigit = Math.floor(tensDigit);
let onesDigit = digit % 10;

sumOfDigits = tensDigit + onesDigit;
let result = "Tổng 2 ký số là: " + sumOfDigits;

console.log(result);

