class Hotel {
    hotelName = '"Speranza Hotel"';             //static variables
    hotelImage = '1';
    address = 'Belverderestrasse 6/5';

    constructor(userName, nights ) {           //by user inserted variables
        this.userName = userName;
        this.nights = nights;
        this.showAvailability = Math.floor(Math.random() * 10) + 1;
    }

    nightsReserve() {
        if (this.showAvailability >= this.nights ) {
            document.getElementById("result").style.backgroundColor = "#32bd19";
            document.getElementById("result").style.display = "block";
            return "I'll reserve";
        } else {
            document.getElementById("result").style.backgroundColor = "#e91e63";
            document.getElementById("result").style.display = "block";
            return "Sorry, no available nights for " + this.userName + ' in ' + this.hotelName;
        }
    }
}

//info about hotel
var hotelInfo = new Hotel();
var hotelName = hotelInfo.hotelName;
var hotelAddress = hotelInfo.address;
var hotelImage = hotelInfo.hotelImage;

//output hotel info
document.getElementById("hotelname").innerHTML = hotelName;
document.getElementById("address").innerHTML = hotelAddress;


//function to calculate input
function typedNumber() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var user = new Hotel(name, number);
    document.getElementById("result").innerHTML = user.nightsReserve();
    document.getElementById("text").innerHTML = 'You are welcome, ' + user.userName + '!';
    console.log(name);
    console.log(number);
    console.log(user.showAvailability);
}

//result after button click
document.getElementById("submit").addEventListener("click", typedNumber);





//persons
//var Maria = new Hotel('Maria', 4);
//var Jane = new Hotel('Jane', 6);
//var George = new Hotel('George', 9);

//document.write(Maria.nightsReserve());
//console.log(Maria.showAvailability);
//console.log(Maria.nights);
//console.log(Maria.hotelName);