function convertCurrency() {
	// get the input values
	let amount = document.getElementById("amount").value;
	let from = document.getElementById("from").value;
	let to = document.getElementById("to").value;

	// make an API request to get the exchange rate
	let xhr = new XMLHttpRequest();
	xhr.open("GET", `https://api.exchangerate-api.com/v4/latest/${from}`);
	xhr.onload = function() {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			let rate = response.rates[to];
			let result = amount * rate;
			document.getElementById("result").innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
		} else {
			console.log("Request failed.  Returned status of " + xhr.status);
		}
	};
	xhr.send();
}

const browser = document.querySelector(".browser");
const browserVersion = document.querySelector(".browser-version");
const os = document.querySelector(".os");

browser.innerHTML = platform.name;
browserVersion.innerHTML = platform.version;
os.innerHTML = platform.os;

// let time= document.getElementById("current-time");
// setInterval(() =>{
// 	let d = new Date();
// time.innerHTML=d.toLocaleTimeString();
// },1000)
var currentDate= new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year =currentDate.getFullYear();
var fullDate = day +"/" + month +"/" +year;
document.write("Date:" ,fullDate);

//db
var db=openDatabase("currencyDB","1.0","currencyDB",65535);
$(function(){

})
//to history
// $("#list").click(function(){
// 	$("currencylist").children().remove();
// 	db.transaction(function(transaction){
// 		var sql="SELECT * FROM CURRENCY SEARCHED BY id DESC"
// 		transaction.executesql(sql,undefined,
// 			function(transaction,result){
// 				if(result.rows.length){

// 				for(var i=0;i<result.length;i++){
// 					var row=result.rows.currency(i);
// 					var currency=row.currency;
// 					var id=row.id;
// 					var quantity=row.quantity;
// 					$("#currencylist").append('<tr><td>'+id+'</td><td>'+currency +'</td><td>' +quantity+ '</td>>/tr>');
// 				}

// 				}else{
// 					$("currencylist").append('<tr><td> colspan= "3" no item found </td></tr>');
// 				}
// 			})
// 	})
// })