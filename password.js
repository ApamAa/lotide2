let password = process.argv[2];

const obfuscate = function(password) {
  let newPass = '';
  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
    case 'a':
      newPass += 4;
      break;
    case 'e':
      newPass += 3;
      break;
    case 'o':
      newPass += 0;
      break;
    case 'l':
      newPass += 1;
      break;
    default:
      newPass += password[i];
      break;
    }
  }

  return newPass;
};

console.log(obfuscate(password));