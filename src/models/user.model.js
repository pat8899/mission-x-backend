const { getPool } = require('../db');
const pool = getPool();


//  CREATE TABLE `demo`.`users` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(90) NOT NULL,
//   `email` VARCHAR(255) NOT NULL,
//   `password` CHAR(60) NOT NULL,
//   PRIMARY KEY (`id`));


// CREATE TABLE `userImages` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `image` longblob NOT NULL,
//   `mimeType` varchar(45) NOT NULL,
//   PRIMARY KEY (`id`)
// )

const register = (name, email, passwordHash) => {
  return pool.then(async (connection) => {
    const [
      rows,
    ] = await connection.execute(
      'INSERT INTO `MissionX-ssp`.`users` (`name`,`email`,`password`) VALUES (?, ?, ?);',
      [name, email, passwordHash],
    );
    return rows;
  });
};

const getProfile = (userID) => {
  return pool.then(async (connection) => {
    const [
      rows,
    ] = await connection.execute('SELECT `user_mx_ssp`.`School`, `user_mx_ssp`.`Name`, `user_mx_ssp`.`TeacherID`, `user_mx_ssp`.`DateOfBirth`, `user_mx_ssp`.`ContactNumber`, `user_mx_ssp`.`Email`, `Project`.`Course`FROM `MissionX-ssp`.`user_mx_ssp` INNER JOIN `MissionX-ssp`.`Progresshistory` ON `user_mx_ssp`.`﻿UserID` = `Progresshistory`.`﻿UserID`INNER JOIN `MissionX-ssp`.`Project` ON `Progresshistory`.`ProjectID` = `Project`.`﻿ProjectID` WHERE `user_mx_ssp`.`﻿UserID` = ?;'
     , [userID]);
    return rows;
  });
};

const getPassword = (email) => {
  return pool.then(async (connection) => {
    const [
      rows,
    ] = await connection.execute(
      'SELECT `users`.`password` FROM `MissionX-ssp`.`users` WHERE `users`.`email` = ?;',
      [email],
    );
    return rows;
  });
};

const updateBLOB = (fileBase64String, mimeType) => {
  return pool.then(async (connection) => {
    const [
      rows,
    ] = await connection.execute(
      'INSERT INTO `demo`.`userImages` (`image`, `mimeType`) VALUES (?, ?);',
      [fileBase64String, mimeType],
    );
    return rows;
  });
};

const getUserProfilePic = (id) => {
  return pool.then(async (connection) => {
    const [
      rows,
    ] = await connection.execute('SELECT * FROM demo.userImages WHERE id = ?;',
    [id]
    );
    return rows;
  });
};



module.exports = { registerUser: register, getPassword, updateBLOB, getUserProfilePic, getProfile };
