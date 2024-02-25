// eslint-disable-next-line no-unused-vars
const checkStringLenght = (string, maxlength) =>{
  if (string.length <= maxlength){
    return false;
  }
  return true;
};


// Строка короче 20 символов
checkStringLenght('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLenght('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLenght('проверяемая строка', 10); // false
