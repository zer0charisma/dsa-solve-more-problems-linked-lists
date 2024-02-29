const cycle = (list) => {
  if(!list.head) return false;
  
  let slowMo = list.head;
  let speedy = list.head;
  
  while (speedy.next && speedy.next.next) {
    slowMo = slowMo.next;
    speedy = speedy.next.next;
    
    if(slowMo == speedy) return true;
  }
  return false;
};

module.exports = cycle;
