function createCard(symbol, size){
  if(size < 1 || size > 6) return "Tidak Valid. Harus angka antara 1 sampai 6.";

  let card = "";

  const width = size * 2 + 1;


  card += '#'
  for(let i = 1; i < width; i++){
    card += '-'
  }
  card += '#\n'



  card += '#'
  for(let i = 1; i < width; i++){
    card += '-'
  }
  card += '#\n'

  return card
}

console.log(createCard('♦', 1))