module.exports = function makeExchange(currency) {
    if (currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };
    if (currency <= 0){return {}};
    let exchange = {};
    const arrayCoins = [50,25,10,5,1];
    let arrayCurrency = [0,0,0,0,0];
    function checkExchange(element, index){
        if(currency >= element){
            arrayCurrency[index]++;
            currency = currency - element;
            if(currency > 0){
              checkExchange(element, index);
            } else {return;}          
        } else {
             if (arrayCurrency[index] === undefined){
                 arrayCurrency[index] = 0;
                 return 
             } else {return }
    }};
    if (currency >= 0) {
      for (let i = 0; i < arrayCoins.length; i++) {
       let el = arrayCoins[i];
       checkExchange(el, i);
    }};
    if(arrayCurrency[0]!=0){
      exchange["H"] = arrayCurrency[0];
    };
    if(arrayCurrency[1]!=0){
      exchange["Q"] = arrayCurrency[1];
    };
    if(arrayCurrency[2]!=0){
      exchange["D"] = arrayCurrency[2];
    };
    if(arrayCurrency[3]!=0){
      exchange["N"] = arrayCurrency[3];
    };
    if(arrayCurrency[4]!=0){
      exchange["P"] = arrayCurrency[4];
    };
    return exchange;
  };
