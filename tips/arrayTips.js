// Delete values repeat
const nums = [4, 4, 5, 5];
const noRepeat = [...new Set(nums)];
console.log(noRepeat);

// Conditional of cortocircuito
const salary = true;
if (salary) {
  console.log("hi");
}

salary && console.log("hi");
