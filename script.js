
      const cartBtn=document.getElementsByClassName("add-cart-btn")
      for(let btn of cartBtn){
        btn.addEventListener("click",function(){
         const title= btn.parentNode.children[1].children[1].innerHTML
          const price=Number(btn.parentNode.children[1].children[2].children[0].innerHTML)
          const cartImg=btn.parentNode.children[0].children[0].src
          
          
          const newDiv=document.createElement("div")
          newDiv.innerHTML=`
                <div class="bg-white p-5 shadow-sm">
                <div class="flex justify-between items-center p-3 bg-[#F8F8F8] rounded-2xl">
                    <div class="">
                      <img src="${cartImg}" class="w-[50%]" alt="">
                    </div>
                    <div ">
                      <p>${title}</p>
                      <p>${price} tk</p>
                    </div>
                </div>
            </div>
          `
          document.getElementById("sold-container").appendChild(newDiv)
          const totalPrice=Number(document.getElementById("total-price").innerText)
         
           const total=totalPrice+price
          
            document.getElementById("total-price").innerText=total
             document.getElementById("total-purchase").innerText=total
        })
       
      }
document.getElementById("coupon-btn").addEventListener("click",function(){
  const totalPrice=Number(document.getElementById("total-price").innerText)
  const couponAmount=Number(document.getElementById("coupon-input").value)
  if(couponAmount>1 && couponAmount<100){
    const discount=(totalPrice*couponAmount)/100
    
    document.getElementById("discount-ammount").innerText=discount
    document.getElementById("total-purchase").innerText=totalPrice-discount
  }
  
  
})
      
