const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(teachers[3]);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

for (let i = 0; i < teachers.length; i++) {
  if (i === 4) 
    { 
    teachers[i] = 'Patrick'; 
  }
  console.log(teachers[i]);
}

//teachers[4]= 'Patrick'
// console.log(teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = true;

//passato da const a let

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i]) { 
    isTeachersEmpty = false;
    
  }
}
console.log(isTeachersEmpty);

// secondo modo

// let isTeachersEmpty = teachers.length === 0;
// console.log(isTeachersEmpty);