let bag=document.querySelector("#bag");
let cart=document.querySelector("#cart");
let cartpage=document.getElementsByClassName("cart-page")[0];
let fullpage=document.getElementsByClassName("fullpage")[0];
let xmark=document.getElementById("xmark");
let items=document.getElementsByClassName("items")[0]
let cart2=document.getElementById("cart2");
let cart3=document.getElementById("cart3");
let cart4=document.getElementById("cart4");
let addcart=document.querySelector(".add-to-cart")
cart.addEventListener("click",()=>{
console.log("grv");


})
bag.addEventListener("click",()=>{
console.log("dsf");
 cartpage.style.transform="translateX(0px)"

 cartpage.style.display="block"
 bag.style.color="red"
});
function additems(){
    // let cart=document.querySelector(".cart-page");
    let addcart=document.querySelector(".add-to-cart");
    console.log(addcart);
    let cartlen=addcart.children.length;
    console.log(cartlen);
    let cartvalue=document.querySelector("#cart-value");
    cartvalue.innerHTML=cartlen;
}
cart.addEventListener("click",()=>{
let bag1div=document.createElement("div");
addcart.appendChild(bag1div);
bag1div.className="bag1div";

let bag1flexdiv=document.createElement("div")
bag1div.appendChild(bag1flexdiv);
let bag1img=document.createElement("img");
bag1flexdiv.appendChild(bag1img);
console.log("rgv");
bag1img.src="./t-3.png";
bag1img.style.width="200px";
let bag2flexdiv=document.createElement("div");
bag1div.appendChild(bag2flexdiv)
let bag1cnt=document.createElement("h2");
bag2flexdiv.appendChild(bag1cnt);
bag1cnt.innerHTML="MRF";
let bag1cnt2=document.createElement("p");
bag2flexdiv.appendChild(bag1cnt2);
bag1cnt2.style.marginTop="20px"
bag1cnt2.innerHTML="The MRF ZVTS tyre is an excellent performer and an ideal fit for my car. Drive quality is comfortable and traction is good during rainy season.";
let bag1price=document.createElement("h4");
bag2flexdiv.appendChild(bag1price);
bag1price.innerHTML="MRP:₹ 2,000";
bag1price.style.marginTop="20px";
let bag1remove=document.createElement("p");
bag2flexdiv.appendChild(bag1remove);
bag1remove.innerHTML="Remove item";
bag1remove.style.backgroundColor="red";
bag1remove.style.color="white";
bag1remove.style.padding="5px";
bag1remove.style.width="fit-content"
bag1remove.style.marginTop="20px";
bag1remove.style.cursor="pointer"
bag1remove.addEventListener("click",()=>{
    bag1div.remove();
    console.log("ugilk");
    additems();
});
additems();
})
cart2.addEventListener("click",()=>{
    console.log("uykgthk7");
    let bag2div=document.createElement("div");
addcart.appendChild(bag2div);
  bag2div.className="bag2div"
    let bag2div1=document.createElement("div");
    bag2div.appendChild(bag2div1);
    let img2=document.createElement("img");
    bag2div1.appendChild(img2);
    img2.src="./t-4.png";
    img2.style.width="200px";

    let bag2div2=document.createElement("div");
    bag2div.appendChild(bag2div2);
    let title2=document.createElement("h2");
    bag2div2.appendChild(title2);
    title2.innerHTML="CEAT";
    let p2=document.createElement("p");
    bag2div2.appendChild(p2);
    p2.innerHTML="CEAT is one of India's largest leading tyre manufacturers, providing the finest tyres. We guarantee tyre durability, smooth ride and secure grip."
    let price2=document.createElement("h3");
    p2.style.marginTop="20px"
    bag2div2.appendChild(price2);
   price2.innerHTML="MRP: ₹2,200";
   price2.style.marginTop="20px"
   let bag2remove=document.createElement("p");
bag2div2.appendChild(bag2remove);
bag2remove.innerHTML="Remove item";
bag2remove.style.backgroundColor="red";
bag2remove.style.color="white";
bag2remove.style.padding="5px";
bag2remove.style.width="fit-content"
bag2remove.style.marginTop="20px";
bag2remove.style.cursor="pointer";
bag2remove.addEventListener("click",()=>{
    bag2div.remove();
    additems();
})
additems();
});
cart3.addEventListener("click",()=>{
    console.log("uykgthk7");
    let bag3div=document.createElement("div");
  addcart.appendChild(bag3div);
  bag3div.className="bag3div"
 
    let bag3div1=document.createElement("div");
    bag3div.appendChild(bag3div1);
    let img3=document.createElement("img");
    bag3div1.appendChild(img3);
    img3.src="./t-2.png";
    img3.style.width="200px";
    let bag3div2=document.createElement("div");
    bag3div.appendChild(bag3div2);
    let title3=document.createElement("h2");
    bag3div2.appendChild(title3);
    title3.innerHTML="BRIDGESTONE";
    let p3=document.createElement("p");
    bag3div2.appendChild(p3);
    p3.innerHTML="Choose the best tyres online for Indian roads from Bridgestone. We provide wide range of tyres for Cars, SUVs, CUVs, luxury cars, Trucks and buses in India."
    let price3=document.createElement("h3");
    p3.style.marginTop="20px"
    bag3div2.appendChild(price3);
   price3.innerHTML="MRP: ₹3,000";
   price3.style.marginTop="20px"
   let bag3remove=document.createElement("p");
bag3div2.appendChild(bag3remove);
bag3remove.innerHTML="Remove item";
bag3remove.style.backgroundColor="red";
bag3remove.style.color="white";
bag3remove.style.padding="5px";
bag3remove.style.width="fit-content"
bag3remove.style.marginTop="20px";
bag3remove.style.cursor="pointer";
bag3remove.addEventListener("click",()=>{
    bag3div.remove();
    additems();
});
additems();
});
cart4.addEventListener("click",()=>{
    console.log("uykgthk7");
    let bag4div=document.createElement("div");
 addcart.appendChild(bag4div);
  bag4div.className="bag4div";
    let bag4div1=document.createElement("div");
    bag4div.appendChild(bag4div1);
    let img2=document.createElement("img");
    bag4div1.appendChild(img2);
    img2.src="./t-3.png";
    img2.style.width="200px";
    let bag4div2=document.createElement("div");
    bag4div.appendChild(bag4div2);
    let title2=document.createElement("h2");
    bag4div2.appendChild(title2);
    title2.innerHTML="DUNLOOP";
    let p2=document.createElement("p");
    bag4div2.appendChild(p2);
    p2.innerHTML="Dunlop Tyres is a brand of tyres which is managed by different companies around the world. It was founded by pneumatic tyre pioneer John Boyd Dunlop"
    let price2=document.createElement("h3");
    p2.style.marginTop="20px"
    bag4div2.appendChild(price2);
   price2.innerHTML="MRP: ₹3,400";
   price2.style.marginTop="20px"
   let bag4remove=document.createElement("p");
bag4div2.appendChild(bag4remove);
bag4remove.innerHTML="Remove item";
bag4remove.style.backgroundColor="red";
bag4remove.style.color="white";
bag4remove.style.padding="5px";
bag4remove.style.width="fit-content"
bag4remove.style.marginTop="20px";
bag4remove.style.cursor="pointer";
bag4remove.addEventListener("click",()=>{
    bag4div.remove();
    additems();
})
additems();
});
xmark.addEventListener("click",()=>{
    cartpage.style.display="none";
    cartpage.style.transform="translateX(600px)"
    bag.style.color="white"
})