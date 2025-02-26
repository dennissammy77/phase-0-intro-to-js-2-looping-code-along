const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts){
  for(let i = 0; i < gifts?.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts
};

wrapGifts(gifts)

function writeCards(namesarray,eventname){
  let temparr = [];
  for(let i = 0; i < namesarray?.length; i++){
    temparr.push(`Thank you, ${namesarray[i]}, for the wonderful ${eventname} gift!`)
  };
  return temparr;
}


function wrapGiftsWhileLoop(array){
  let i = 0;
  while (i < array?.length) {
    console.log(`Wrapped ${array[i]} and added a bow!`);
    i++;
  }
  return array;
}

wrapGiftsWhileLoop(gifts)

function countDown(positiveInteger){
  while(positiveInteger >= 0){
    console.log(positiveInteger)
    positiveInteger--
  }
  return;
}

