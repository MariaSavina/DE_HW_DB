const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kozulka29',
  port: 3306,
  insecureAuth: true,
  options: { trustedConnection: true },
  database: 'homework'
});

let query = 'SELECT * FROM Persons'

  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result)
  });


// 1. Вывести общее число жителей

let allPers = 'SELECT COUNT(*) as number FROM Persons'

  connection.query(allPers, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 2. Вывести средний возраст жителей

let averageAge = 'SELECT ROUND(AVG(AGE)) as avg FROM Persons'

  connection.query(averageAge, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 3. Вывести отсортированный по алфавиту список фамилий без повторений

let sortLname = 'SELECT DISTINCT LASTNAME FROM Persons ORDER BY LASTNAME'

  connection.query(sortLname, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 4. Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке

let fnameRepeat = 'SELECT LASTNAME, COUNT(LASTNAME) FROM Persons GROUP BY LASTNAME'

  connection.query(fnameRepeat, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 5. Вывести фамилии, которые содержат в середине букву «б»('b')

let fnameBletter = 'SELECT LASTNAME FROM Persons WHERE LASTNAME LIKE "%b%"'

  connection.query(fnameBletter, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 6. Вывести список «бомжей»

let homeless = 'SELECT ID, FIRSTNAME, LASTNAME FROM Persons WHERE ID_street IS NULL'

  connection.query(homeless, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 7. Вывести список несовершеннолетних, проживающих на проспекте Правды

let roomerPravdaAvenue = 'SELECT FIRSTNAME,LASTNAME,AGE FROM Persons INNER JOIN Street ON Persons.ID_Street = Street.ID WHERE AGE < 18 AND NAME like "Pravdi"'

  connection.query(roomerPravdaAvenue, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 8. Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице

let sortStreets = 'SELECT Name, count(*) as number FROM Persons INNER JOIN Street ON Persons.ID_street = Street.ID GROUP BY Name ORDER BY Name'

  connection.query(sortStreets, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 9. Вывести список улиц, название которых состоит из 6-ти букв

let streetSixLetters = 'SELECT NAME FROM Street WHERE NAME LIKE "______"'

  connection.query(streetSixLetters, (err, result) => {
    if (err) throw err;
    console.log(result)
  });

// 10. Вывести список улиц с количеством жильцов на них меньше 3

let streetHaveLessThreeroomers = 'SELECT NAME,count(Persons.ID) as NUMBER_NAME FROM Persons INNER JOIN Street ON Persons.ID_Street = Street.ID GROUP BY NAME HAVING count(Persons.ID) < 3'

  connection.query(streetHaveLessThreeroomers, (err, result) => {
    if (err) throw err;
    console.log(result)
  });