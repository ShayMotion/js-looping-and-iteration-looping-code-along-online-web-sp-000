function writeCards(names, event) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return result;
}

function countDown(integer) {
  let i = integer;
  while (i >= 0) {
    console.log(i);
    i -= 1;
  }
}