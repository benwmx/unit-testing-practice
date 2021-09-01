const stringLength = (string) => {
  string = Array.from(string);
  let length = 0;
  for(let char of string) {
    length += 1;
  }
  return length;
}

module.exports = stringLength;