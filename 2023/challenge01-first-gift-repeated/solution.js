function findFirstRepeated(gifts) {
  // Code here
  let numbers = [];
  let response = [];
  gifts.map((gift) => {
    if (numbers.includes(gift)) {
      console.log("Si incluye el numero", gift);
      response.push(gift);
    } else {
      console.log("No incluye el numero", gift);
      numbers.push(gift);
    }
  });
  if (response.length === 0) {
    return -1;
  } else {
    return response[0];
  }
}
