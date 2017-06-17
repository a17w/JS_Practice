//USING WHILE LOOP

function factorialize(num) {
  var answer = 1;
  while(num > 1) {
    answer = answer * num;
    num--;
  }
  return answer;
}

console.log(factorialize(5));
