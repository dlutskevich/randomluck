function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const a = parseInt(prompt('Число от 1 до 10'));
const b = randomInteger(1, 10)

if (a === b) {
  alert('Чертов везунчик, неси свой четырехлистный клевер!');
}
else {
  alert('Соре бро, не зеро((');
}