formula = (price,factor)=>{return (3333/price) + price*0.15*(factor/price)}

li_elements = document.querySelectorAll('[data-testid="product-card"]');
Array_of_Shops = []

for(li of li_elements){
    price = li.querySelectorAll('[class="dominant-price"]')[0].innerText.replace(".","")
    price = parseFloat(price.split("€")[0].replace(',','.'))
    shipping = li.querySelectorAll('[class="extra-cost cf"]')[0].innerText;
    shipping = parseFloat(shipping.split("€")[0].replace(',','.').replace("Μεταφορικά\n+ ","").replace("+ ",""));
    try{
        availability = li.querySelectorAll('[class="availability"]')[0].innerText;
    }catch(e){
        availability = li.querySelectorAll('[class="ndd-info icon"]')[0].innerText.replace("\n"," ");
        if(availability.includes("Express παράδοση")){availability = "Express"}
        if(availability == "Διαθέσιμο από 10 έως 30 ημέρες"){continue}
    }

    switch (availability){
    case "Express":
        score = formula(price+shipping,4) ;//3333/price + price*(2/price);
        break;
    case "Διαθέσιμο":
        score = formula(price+shipping,3.5); //3333/price + price*(1.5/price);
        break;
    case "Διαθέσιμο από 4 έως 10 ημέρες":
        score = formula(price+shipping,1); //3333/price + price*(1/price);
        break;
    case "Διαθέσιμο από 10 έως 30 ημέρες":
        continue;
    }

    shop = li.querySelectorAll('[class="shop-name"]')[0].innerText;
    Array_of_Shops.push({"Total_price":price+shipping,"Shop":shop,"Price":price,"Shipping_price":shipping,"Availabillity":availability,"Score":score})
}
sum =0
for(a of Array_of_Shops){
    sum = sum + a['Shipping_price']
}

//Array_of_Shops.sort((x,y)=>{return x.Total_price-y.Total_price})
Array_of_Shops.sort((x,y)=>{return x.Score-y.Score})
console.log(Array_of_Shops.reverse())

/*
303 , 4-10

309 , 1

307 , 4 - 10


price * 0.8

availability * 0.2

1/price *0.8
*/