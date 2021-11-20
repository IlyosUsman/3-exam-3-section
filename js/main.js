var salaries = {
    "Akmal": 1200,
      "Salim": 5200,
      "Karima": 1800
  };
  
  
  function priceSalary(salaries){
      var price = 0;
      for(var salary of Object.values(salaries)){
        price += salary
      }
      return price;
  }
  
  
  console.log(priceSalary(salaries));