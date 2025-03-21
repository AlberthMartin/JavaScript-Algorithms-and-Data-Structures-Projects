let price = 1.87; //price of the item

//Cash in drawer
let cid = [ 
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
//should be provided by input element on page
let cash = 0;
let cashBoxStatus = "";

let penny = 0, nickel = 0, dime = 0, quarter = 0, one = 0;
let five = 0, ten = 0, twenty = 0, oneHundred = 0;

const inputCash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const changeInDrawer = document.getElementById("change-in-drawer")

//Update when money is added or taken away
const changeInDrawerReset = () =>{
  changeInDrawer.innerHTML ="";
  for(let i=0;i<cid.length;i++){
    changeInDrawer.innerHTML+=`<div>${cid[i][0]}: $${cid[i][1].toFixed(2)}</div>`
  }
}

//Initialize change in drawer
changeInDrawerReset();

//Requsion function to go through and count the needed change
const countChange = (cash) =>{
  if(cash === 0){
    //fullt konverterat
    return;
  }
  //Check that the money is in the drawer and that there
  //is more than 100 change left 
  else if(cash>=100 && cid[8][1] >=100){
    //Remove from drawer
    cid[8][1]-=100
    //remove from cash to payback
    cash = Number((cash-100).toFixed(2));
    //Add another onehundred
    oneHundred++;
    //Call the function again
    countChange(cash);
  }else if(cash>=20 && cid[7][1]>=20){
    twenty++;
    cash = Number((cash-20).toFixed(2));
    cid[7][1]-=20
    countChange(cash);
  }
  else if(cash>=10 && cid[6][1]>=10){
    ten++;
    cash = Number((cash-10).toFixed(2));
    cid[6][1]-=10
    countChange(cash);
  }
  else if(cash>=5 && cid[5][1]>=5){
    five++;
    cash = Number((cash-5).toFixed(2));
    cid[5][1]-=5
    countChange(cash);
  }
  else if(cash>=1 && cid[4][1]>=1){
    one++;
    cash = Number((cash-1).toFixed(2));
    cid[4][1]-=1
    countChange(cash);
  }
  else if(cash>=0.25 && cid[3][1]>=0.25){
    quarter++;
    cash = Number((cash-0.25).toFixed(2));
    cid[3][1]-=0.25
    countChange(cash);
  }
  else if(cash>=0.1 && cid[2][1]>=0.1){
    dime++;
    cash = Number((cash-0.1).toFixed(2));
    cid[2][1]-=0.1
    countChange(cash);
  }
  else if(cash>=0.05 && cid[1][1]>=0.05){
    nickel++;
    cash = Number((cash-0.05).toFixed(2));
    cid[1][1]-=0.05
    countChange(cash);
  }
  else if(cash>=0.01 && cid[0][1]>=0.01){
    penny++;
    cash = Number((cash-0.01).toFixed(2));
    cid[0][1]-=0.01
    countChange(cash);
  }
  //if there is no change left in the drawer and cash still needs to be paid
  else if(cash>0){
    cashBoxStatus ="INSUFFICIENT_FUNDS"
    return;
  }
}
//When the purchase button is pressed
purchaseBtn.addEventListener("click", () => {
  //The cash recieved from customer
  let paid = Number(parseFloat(inputCash.value).toFixed(2)) || 0;
  //If recieved cash is 0 return
  if(!paid){
    alert("Enter the cash from customer")
    return
  }

  // Reset previous change values
  oneHundred = twenty = ten = five = one = quarter = dime = nickel = penny = 0;
  changeDue.innerHTML = ""; // Clear previous change
  cashBoxStatus = ""; //Clears status
  
  if(paid<price){
    changeDue.innerHTML = "Customer does not have enough money to purchase the item"
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  else if(paid===price){
    changeDue.innerHTML = "No change due - customer paid with exact cash"
    alert("No change due - customer paid with exact cash")
    return;
  }
  //cash to be returned
  cash = Number((paid-price).toFixed(2));

  //count the cash in the register
  let totalCash = 0;
  for(let i = 0; i<cid.length;i++){
    totalCash +=cid[i][1];
  }
  //if there is not enough cash in the register
  if(totalCash<cash){
    changeDue.innerHTML+="Status: INSUFFICIENT_FUNDS"
    return;
  }
  //Status open 
  cashBoxStatus = "OPEN"
  //requring counting 
  //Changes status to INSUFFICIENT_FUNDS if there is not enough of some current
  countChange(cash);

  changeDue.innerHTML+=`Status: ${cashBoxStatus} <br>`

  if(oneHundred){
    changeDue.innerHTML+=`ONE HUNDRED: $${oneHundred*100}<br>`
  }
  if(twenty){
    changeDue.innerHTML+=`TWENTY: $${twenty*20}<br>`
  }
  if(ten){
    changeDue.innerHTML+=`TEN: $${ten*10}<br>`
  }
  if(five){
    changeDue.innerHTML+=`FIVE: $${five*5}<br>`
  }
  if(one){
    changeDue.innerHTML+=`ONE: $${one*1}<br>`
  }
  if(quarter){
    changeDue.innerHTML+=`QUARTER: $${quarter*0.25}<br>`
  }
  if(dime){
    changeDue.innerHTML+=`DIME: $${dime*0.1}<br>`
  }
  if(nickel){
    changeDue.innerHTML+=`NICKEL: $${nickel*0.05}<br>`
  }
  if(penny){
    changeDue.innerHTML+=`PENNY: $${penny*0.01}<br>`
  }
  

  changeInDrawerReset()

});