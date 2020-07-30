const resultfield = document.getElementById('result');
const amountfield = document.getElementById('salario');

const firstLimit = 1045;
const secondLimit = 2089.60;
const thirdLimit = 3134.40;
const forthLimit = 6101.06;

const firstPct = 7.5 / 100;
const secondPct = 9 / 100;
const thirdPct = 12 / 100;
const forthPct = 14 / 100;

document.getElementById('form-wrap').addEventListener('submit', function(e) {
  const amount = parseFloat(amountfield.value.replace(',', '.'));

  if (amount < firstLimit) {
    alert('Salario bruto deve ser maior ou igual ao salario minimo vigente');
  } else if (amount > firstLimit && amount < secondLimit) {
    const firstRange = parseFloat((firstLimit * firstPct).toFixed(2));
    const secondRange = parseFloat(((Math.min(amount, secondLimit) - firstLimit) * secondPct).toFixed(2));
    resultfield.value = (firstRange + secondRange).toFixed(2);
  } else if (amount > secondLimit && amount < thirdLimit) {
    const firstRange = parseFloat((firstLimit * firstPct).toFixed(2));
    const secondBase = parseFloat((Math.min(amount, secondLimit) - firstLimit));
    const secondRange = parseFloat((secondBase * secondPct).toFixed(2));
    const thirdRange = parseFloat(((Math.min(amount, thirdLimit) - secondBase - firstLimit) * thirdPct).toFixed(2));
    resultfield.value = (firstRange + secondRange + thirdRange).toFixed(2);
  } else if (amount > thirdLimit && amount < forthLimit) {
    const firstRange = parseFloat((firstLimit * firstPct).toFixed(2));
    const secondBase = parseFloat((Math.min(amount, secondLimit) - firstLimit));
    const secondRange = parseFloat((secondBase * secondPct).toFixed(2));
    const thirdBase = parseFloat(((Math.min(amount, thirdLimit) - secondBase - firstLimit)));
    const thirdRange = parseFloat(thirdBase * thirdPct).toFixed(2);
    const forthRange = parseFloat((Math.min(amount, forthLimit) - thirdBase - secondBase - firstLimit) * forthPct).toFixed(2);
    resultfield.value = (parseFloat(firstRange) + parseFloat(secondRange) + parseFloat(thirdRange) + parseFloat(forthRange)).toFixed(2);
  } else if (amount > forthLimit) {
    const firstRange = parseFloat((firstLimit * firstPct).toFixed(2));
    const secondBase = parseFloat((Math.min(amount, secondLimit) - firstLimit));
    const secondRange = parseFloat((secondBase * secondPct).toFixed(2));
    const thirdBase = parseFloat(((Math.min(amount, thirdLimit) - secondBase - firstLimit)));
    const thirdRange = parseFloat(thirdBase * thirdPct).toFixed(2);
    const forthRange = parseFloat((forthLimit - thirdBase - secondBase - firstLimit) * forthPct).toFixed(2);
    resultfield.value = (parseFloat(firstRange) + parseFloat(secondRange) + parseFloat(thirdRange) + parseFloat(forthRange)).toFixed(2);
  }

  e.preventDefault();
});
