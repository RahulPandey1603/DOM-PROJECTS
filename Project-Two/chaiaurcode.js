const form = document.querySelector('form');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  console.log(height);
  console.log(isNaN(height));

  if (height === "" ||height  < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
    
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  }
  else
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    
//   }
//   results.innerHTML = `<span>${bmi}</span>`

// categorise in normal , under-weight and over weight
let category = ""
 
if (bmi < 18.6) {
    category  = `under weight`
}
else if (bmi >= 18.6 && bmi <=24.9 ) {
     category  = `normal range`
}
else   {
    category  =  `over weight`
    
}

results.innerHTML = `your bmi <strong>${bmi} </strong> and category ${category}`}

});
