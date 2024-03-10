const checkStringLength = (string, maxlength) =>{
  if (string.length <= maxlength){
    return true;
  }
  return false;
};

const palindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, '');
  const len = Math.floor(str.length / 2);
  for(let i = 0; i < len; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
    return true;
  }
};
