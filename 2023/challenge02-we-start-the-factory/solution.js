function manufacture(gifts, materials) {
  // Code here
  let result = [];

  gifts.map((gift) => {
    console.log(gift);
    let arrayWord = gift.split("");
    let count = 0;
    arrayWord.map((letter) => {
      if (materials.includes(letter)) {
        count += 1;
      }
    });
    if (count === arrayWord.length) {
      result.push(arrayWord.join(""));
    }
  });
  return result;
}
