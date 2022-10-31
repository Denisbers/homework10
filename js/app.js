function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(num = +prompt('Введите число'), degree = +prompt('Ввведите степень')));