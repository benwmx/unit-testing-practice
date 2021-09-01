const stringLength = (string) => {
  string = Array.from(string);
  let length = 0;
  for(let char of string) {
    length += 1;
  }
  if(length < 1 || length > 10) throw new Error("the Srting length is less than 1 or longer than 10");
  return length;
}

module.exports = stringLength;