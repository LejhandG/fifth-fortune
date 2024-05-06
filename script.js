let total_amount = 0.00;
function depAmount() {
    amount = prompt("Enter deposit amount");
    if (parseFloat(amount) > 499 && parseFloat(amount) < 50000) {
        amountHTML = document.querySelector(".amount-text")
        total_amount+=parseFloat(amount);
        amountHTML.innerText = parseFloat(total_amount).toFixed(2)
    }
    else if (parseFloat(amount) < 500 || parseFloat(amount) > 49999) {
        alert("Enter amount between 500 and 50,000");
    }
    else {
        alert("Enter valid amount to deposit");
    }
}
function withAmount() {
  amount = prompt("Enter withdraw amount");
  if (parseFloat(document.querySelector(".amount-text").innerText) < amount) {
    alert("Not enough balance to withdraw");
  }
  else if (parseFloat(amount) > 499 && parseFloat(amount) < 50000) {
      amountHTML = document.querySelector(".amount-text")
      total_amount-=parseFloat(amount);
      amountHTML.innerText = parseFloat(total_amount).toFixed(2)
  }
  else if (parseFloat(amount) < 500 || parseFloat(amount) > 49999) {
      alert("Enter amount between 500 and 50,000");
  }
  else {
      alert("Enter valid amount to withdraw");
  }
}
function randomMulti() {
    const betAmountInput = document.querySelector("#bet-amount");
    const targetMultiplierInput = document.querySelector("#target-multiplier");
    const walletBalanceElement = document.querySelector(".amount-text");
    const randomCounterElement = document.querySelector("#counter");
    const amount = parseFloat(betAmountInput.value);
    const target = parseFloat(targetMultiplierInput.value);
    let walletBalance = parseFloat(walletBalanceElement.innerText);
    if (amount < 0 || amount > walletBalance) {
      alert("Insufficient wallet balance");
      return;
    }
    if (target < 1.02 || target > 10000) {
      alert("Target range is 1.01 - 10000");
      return;
    }  
    const randomNum = (Math.random() * target + 1).toFixed(2);
    const randomNum2 = (Math.random() * target).toFixed(2);
    const randomArr = [randomNum2, randomNum];
    const finalRandom = randomArr[Math.floor(Math.random() * 2)];
    randomCounterElement.innerText = finalRandom + "x";
    if (finalRandom >= target) {
      randomCounterElement.style.color = "#1FFF20";
      walletBalance += amount * (target - 1); 
    } else {
      randomCounterElement.style.color = "#E9113C";
      walletBalance -= amount;
    }
    walletBalanceElement.innerText = walletBalance.toFixed(2);
  }
document.querySelector("#bet-amount").addEventListener('input', function() {
    let target = document.querySelector("#target-multiplier").value;
    target = parseFloat(target);
    let betAmount = parseFloat(document.querySelector("#bet-amount").value);
    let pow = document.querySelector("#profit-on-win");
    pow.value = (betAmount * target).toString(); 
})
document.querySelector("#target-multiplier").addEventListener('input', function() {
    let target = document.querySelector("#target-multiplier").value;
    target = parseFloat(target);
    let betAmount = parseFloat(document.querySelector("#bet-amount").value);
    let pow = document.querySelector("#profit-on-win");
    pow.value = (betAmount * target).toString();  
    let winChance = document.querySelector("#win-chance");
    winChance.value = parseFloat(100/target).toFixed(2);
})
function mySubmitFunction(e) {
    e.preventDefault();
}
document.querySelector("#halfAmount").addEventListener('click', function() {
    let betAmount = document.querySelector("#bet-amount");
    betAmount.value = 0.5*parseFloat(betAmount.value);
    let target = document.querySelector("#target-multiplier").value;
    target = parseFloat(target);
    let pow = document.querySelector("#profit-on-win");
    pow.value = (betAmount.value * target).toString(); 
})
document.querySelector("#doubleAmount").addEventListener('click', function() {
    let betAmount = document.querySelector("#bet-amount");
    betAmount.value = 2.0*parseFloat(betAmount.value);
    let target = document.querySelector("#target-multiplier").value;
    target = parseFloat(target);
    let pow = document.querySelector("#profit-on-win");
    pow.value = (betAmount.value * target).toString(); 
})