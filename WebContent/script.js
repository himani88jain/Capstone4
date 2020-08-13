let itemName=[];
let itemPrice=[];
let itemQuan=[];

function addToCart(name,price){
itemName.push(name);
itemPrice.push(price);
}

function addQuan1(){
let quantity=0;
let elQuantity=document.getElementById("q1");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

 function addQuan2(){
let quantity=0;
let elQuantity=document.getElementById("q2");
quantity =elQuantity.value;
itemQuan.push(quantity);
 for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan3(){
let quantity=0;
let elQuantity=document.getElementById("q3");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan4(){
let quantity=0;
let elQuantity=document.getElementById("q4");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan5(){
let quantity=0;
let elQuantity=document.getElementById("q5");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan6(){
let quantity=0;
let elQuantity=document.getElementById("q6");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan7(){
let quantity=0;
let elQuantity=document.getElementById("q7");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan8(){
let quantity=0;
let elQuantity=document.getElementById("q8");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan9(){
let quantity=0;
let elQuantity=document.getElementById("q9");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan10(){
let quantity=0;
let elQuantity=document.getElementById("q10");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan11(){
let quantity=0;
let elQuantity=document.getElementById("q11");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}

function addQuan12(){
let quantity=0;
let elQuantity=document.getElementById("q12");
quantity =elQuantity.value;
itemQuan.push(quantity);
for(let i=0;i<itemQuan.length;i++)
 console.log(itemQuan[i]);
}
 
function printCart(){
let total=0;
let grandTotal=0;
for(let i=0;i<itemPrice.length;i++)
total+=itemPrice[i]*parseInt(itemQuan[i]);

let finalCart=document.getElementById("checkout");
finalCart.innerHTML="Receipt:"+"<br/>";
finalCart.innerHTML+= " Name		Quantity		Price<br/>";
for(let i=0;i<itemName.length;i++){
finalCart.innerHTML+=itemName[i]+"		"+itemQuan[i]+"		$"+itemPrice[i]*(parseInt(itemQuan[i])).toFixed(2)+"<br/>";
}
finalCart.innerHTML+= "<br/>"+"SubTotal: $"+total.toFixed(2)+"</br>"
 +"Tax: $"+(total*.06).toFixed(2)+"<br/>"+"Total: $"+(total*1.06).toFixed(2);
}


