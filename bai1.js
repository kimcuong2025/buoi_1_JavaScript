// Đầu vào
// - Tạo biến chứa số tiền lương một ngày có giá trị là 100000
// - Tạo biến chứa số ngày làm việc (tự gán là 22)
// - Tạo biến tiền lương nhân viên (total) gán giá trị 0

// Xử lý
// - Cập nhật lại giá trị cho biến total: Lương một ngày * Số ngày làm việc
// - Tạo biến result để hiển thị “tổng lương nhân viên là total”

// Đầu ra
// - In result ra ngoài màn hình

const salaryPerDay = 100000;
const workingDays = 22;
total = 0;

total = salaryPerDay * workingDays;
let result = "Tổng lương nhân viên là: " + total;

console.log(result);