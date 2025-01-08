const crypto = require("crypto");

const checkEncryptedPassword = (password, salt) => {
  return new Promise((resolve, reject) => {
    if (salt === "") {
      salt = crypto.randomBytes(16);
    }
    crypto.pbkdf2(
      password,
      salt,
      310000,
      32,
      "sha256",
      async (err, encryptedPassword) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const data = { encryptedPassword, salt };
          resolve(data);
        }
      },
    );
  });
};

module.exports = checkEncryptedPassword;
