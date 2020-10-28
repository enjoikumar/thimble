$(document).ready(function() {

  $('#login').click(function(){
    setStorage()

    $('.cc-heading').html("Small business insurance that works when "+ localStorage.first_name + " does");

    $('.button').attr("href", "https://app.thimble.com/pre-quote?quoteid=" + localStorage.quote_id);

    $('.text').html("Request your quote");

    $('#login').html("Logout")

  });


  function setStorage(){
    localStorage.setItem("first_name", "Joe");
    localStorage.setItem("last_name", "Lastly");
    localStorage.setItem("quote_id", "20010004PL");
    localStorage.setItem("version", "2");
    localStorage.setItem("is_valid", "true");
    localStorage.setItem("insurance_name", "Professional Liability");
    localStorage.setItem("coverage_limit", 1000000);
  }


});

// document.cookie = "first_name:=Joe, last_name:Lastyly, quote_id=20010004PL, version=2, insurance_name=Professional Liability, coverage_limit=1000000";

localStorage.clear();

// localStorage.setItem("first_name", "Joe");
// localStorage.setItem("last_name", "Lastly");
// localStorage.setItem("quote_id", "20010004PL");
// localStorage.setItem("version", "2");
// localStorage.setItem("is_valid", "true");
// localStorage.setItem("insurance_name", "Professional Liability");
// localStorage.setItem("coverage_limit", 1000000);




// var t_user={
//   "first_name": "Joe",
//   "last_name": "Lastly",
//   "quote_id": "20010004PL",
//   "version": 2,
//   "is_valid": true,
//   "insurance_name": "Professional Liability",
//   "coverage_limit": 1000000
// }



// "t_user={
//     \"user\":{\"first_name\":\"Joe\",
//     \"last_name\":\"Lastly\"},
//     \"quote\":{\"quote_id\": \"20010004PL\",
//     \"version\": 2,
//     \"is_valid\":true,
//     \"insurance_name\":\"Professional Liability\",
//     \"coverage_limit\": 1000000}
//   }"
