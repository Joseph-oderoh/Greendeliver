// var billInput = document.getElementById("value");
// billInput = billInput.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
// if (billInput.length == 0) alert("Please enter your billing phone number."); 

document.getElementById("complete").style.display="";

function sendPrompt(){
    var billInput = document.getElementById("container");
// billInput = billInput.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    if (billInput.style.display == "block");
     billInput.style.display = "none";


     
     var complete = document.getElementById("complete");
        // if (complete.style.display === "block");
        complete.style.display = "block";

    var promptMe = confirm("Click 'OK' to Confirm Payment.");
    // promptMe.style.background = "red";
    if (promptMe != false){
        // var amount = getElementById("amount");  // the amount value entered
        // document.getElementsByClassName("container--fluid").style.display="None";
        document.getElementById("complete").innerHTML="Your payment of ksh. 500 is done." + "<br/>" + "Your order will arrive soon. Keep it green deliver.";
        
    }
     else { //document.getElementById("complete").innerHTML= have not entered anything."};
        alert("Your order has been cancelled");
        document.getElementById("complete").innerHTML= "ORDER CANCELLED!"
     }
 };


function next(){
    alert("next page does not exist.");
}

function previous(){
    alert("No previous page yet");
}