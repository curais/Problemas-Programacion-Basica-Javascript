/*
34. Usando el segundo ejemplo. hacer un programa 
    que busque una nota en la lista
*/
const Student = require('./Student');

let notesMap = new Map();
notesMap.set('Generic name 1',10);
notesMap.set('Generic name 2',8);
notesMap.set('Generic name 3',7);
notesMap.set('Generic name 4',6);
notesMap.set('Generic name 5',7.5);
notesMap.set('Generic name 6',8);
notesMap.set('Generic name 7',10);
notesMap.set('Generic name 8',2);
notesMap.set('Generic name 9',1);
notesMap.set('Generic name 10',10);

let student = new Student();
student.name = 'Generic Student Name';
student.notes = notesMap;
console.log(student.find('Generic name 4'));
