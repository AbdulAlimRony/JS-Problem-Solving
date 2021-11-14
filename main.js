// Product Price Calculation

function Products(watch , phone, laptop){
    var price;
    if(watch < 0 || phone < 0 || laptop < 0){
        var message = "Product Price can't be Negative <br>";
        return message;
    }
    price = watch + phone + laptop;
    return "The price of the Products: " + price + "<br>";
}
document.writeln(Products(2, 1, 4));

//  Hotel Rent Calculation
function hotelRent(days, normalCharge){
    let rent, discount;
    if(days < 0 || normalCharge < 0){
        var alert1 = "Values can't be negative <br>";
        return alert1;
    }
    else if(days == 0){
        var alert2 = "Are you sure? Actually, you did't stay at this hotel or you have already paid rent. <br>";
        return alert2;
    }
    else if(normalCharge == 0){
        var alert3 = "Do you want to loose your business? <br>";
        return alert3;
    }

    else{
        rent = days * normalCharge;
    if(days > 10 && days <= 20){
        discount = (days-10) * 20;
        rent = rent - discount;
    }
    else if(days > 20){
        discount = ((days - 20) * 50) + 200;
        rent = rent - discount;
    }
    return "You Cost" + " " + rent + "TK." + "<br>";
    }
    
}
document.writeln(hotelRent(24, 0));

// Largest name Finding
function LargestNameSearch(names)
{
    var tmp = 0;
    var finalNames = [];
    for(var i = 0; i < names.length; i++)
    {
        for(var j = 1; j < names.length; j++){
            if(names[j].length > names[i].length){
                tmp = names[j];
                names[j] = names[i];
                names[i] = tmp;
            }
        }
    }
     // If the length of the names same...
    for(var x = 0; x < names.length; x++){
        if(names[x].length == names[0].length){
            finalNames = finalNames + ", " + names[x];
        }
        else{
            finalNames = names[0];
        }
    }
  return "The largest Name or Names: " + finalNames;  
}
document.writeln(LargestNameSearch(['Sakib', 'Munem', 'Jahid', 'Basu', 'Robiul', 'Taha']));


/*Hotel Rent Calculation: 

function RentCal(n) {
var rentPerDay = 0;
var rent = 0;
for(var i=1; i <= n; i++){
    if(i <= 10){
        rentPerDay = 100;
    }
    else if(i > 10 && i <= 20){
        rentPerDay = 80;
    }
    else{
        rentPerDay = 50;
    }
rent = rent +  rentPerDay;
return rent;
}
}
document.writeln(RentCal(1));*/




