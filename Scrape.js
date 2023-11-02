li_elements = document.querySelectorAll('[data-testid="product-card"]');
Array_of_Shops = []

for(li of li_elements){
    price = li.querySelectorAll('[class="dominant-price"]')[0].innerText;
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
        score = price+ price*0.1*0.8; 
        break;
    case "Διαθέσιμο από 4 έως 10 ημέρες":
        score = price+ price*0.4*0.8; 
        break;
    case "Διαθέσιμο":
        core = price+ price*0.15*0.8;
        break;
    case "Διαθέσιμο από 10 έως 30 ημέρες":
        break;
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
console.log(Array_of_Shops)

/*
303 , 4-10

309 , 1

307 , 4 - 10



price * 0.8

availability * 0.2

1/price *0.8
*/