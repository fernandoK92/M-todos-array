'use strict';
function filtrarYRedondear(nums) {
    let resultado = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 10) {
        resultado.push(nums[i].toFixed(2));
      }
    }
    return resultado;
  }
  
  const nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
  const filtrado = filtrarYRedondear(nums);
  alert(filtrado); 