function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (str1 === '' || str2 === '') {
    return '';
  }
  // Return the concatenation of the first character of each string
  return str1[0] + str2[0];
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
