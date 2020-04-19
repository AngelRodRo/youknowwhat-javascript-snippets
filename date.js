const date = new Date();
const format = new Intl.DateTimeFormat('es', { year: 'numeric', month: 'numeric', day: '2-digit' });
const [{ value: day },,{ value: month },,{ value: year }] = format.formatToParts(date);

console.log(`${day}-${month}-${year}`);


// Source
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts