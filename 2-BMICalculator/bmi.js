const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const mainResult = document.querySelector('#mainResult');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      mainResult.innerHTML = `<span>Under weight</span>`;
    }
    if (bmi > 24.9) {
      mainResult.innerHTML = `<span>over weight</span>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      mainResult.innerHTML = `<span>normal</span>`;
    }
  }
});