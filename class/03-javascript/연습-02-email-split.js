// const email = "codecamp@gmail.com";
// undefined
// email
// 'codecamp@gmail.com'
// email.includes('@');
// true
// email.split('@');
// (2) ['codecamp', 'gmail.com']
// const userMail = email.split('@')[0];
// undefined
// const company = email.split('@')[1];
// undefined
// const maskingMail = [];
// undefined
// maskingMail.push(userMail[0])
// 1
// maskingMail.push(userMail[1])
// 2
// maskingMail.push(userMail[2])
// 3
// maskingMail.push(userMail[3])
// 4
// maskingMail
// (4) ['c', 'o', 'd', 'e']
// maskingMail.push('*');
// 5
// maskingMail.push('*');
// 6
// maskingMail.push('*');
// 7
// maskingMail.push('*');
// 8
// maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
// maskingMail.join('-')
// 'c-o-d-e-*-*-*-*'
// maskingMail.join('/')
// 'c/o/d/e/*/*/*/*'
// maskingMail.join()
// 'c,o,d,e,*,*,*,*'
// maskingMail.join('');
// 'code****'
// maskingMail.join(''); + '@' + company
// 'NaNgmail.com'
// maskingMail.join('')+'@'+company;
// 'code****@gmail.com'
// const result = maskingMail.join('')+'@'+company;
// undefined
// result
// 'code****@gmail.com'