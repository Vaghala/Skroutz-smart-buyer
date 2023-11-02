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
/*
    switch (availability){
    case "Express":availability = 1; break;
    case "Διαθέσιμο από 4 έως 10 ημέρες":availability = 10; break;
    case "Διαθέσιμο": availability = 2;break;
    case "Διαθέσιμο από 10 έως 30 ημέρες": continue;break;
    }
*/
    shop = li.querySelectorAll('[class="shop-name"]')[0].innerText;
    Array_of_Shops.push({"Total_price":price+shipping,"Shop":shop,"Price":price,"Shipping_price":shipping,"Availabillity":availability})
}
sum =0
for(a of Array_of_Shops){
    sum = sum + a['Shipping_price']
}

Array_of_Shops.sort((x,y)=>{return x.Total_price-y.Total_price})
console.log(Array_of_Shops)

