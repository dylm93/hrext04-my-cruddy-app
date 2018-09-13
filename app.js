$(document).ready(function() {


  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");



    $(".user-input-title").hide();
    $(".user-input-body").hide();
    $(".add-text-btn").hide();

// var nationArray = [
// {nation: 'brazil', flag: "<img src = 'brazil.png'>"},
// {nation: 'argentina', flag: "<img src = 'argentina.png'>"},
// {nation: 'france', flag: "<img src = 'france.png'>"},
// {nation: 'portugal', flag: "<img src = 'portugal.png'>"}
// ]

// for (var i = 0; i < nationArray.length; i++) {


// if (inputKey === nationArray[i].nation && $("." + nationArray[i].nation + "-players").length === 0) { 
//     var country = nationArray[i].nation;
//     var country = country.slice(1, country[country.length-1]); 
//     console.log(country)
//     country = document.createElement("div")
//     country.className = country + '-players';
//     country.append(inputKey + ': ');
//     country.append(inputValue);
//     $(".nation-players").append(country);
//     $(".nation-players").show();
//     $("." + country + "-players").show();
//     var $nation = nationArray[i].flag;
//     $(".nation-flag").append($nation);
//     country = $("." + country + "-players")[0];
//     $("." + country + "-players").show();

//   } else if (inputKey === country && $("." + country + "-players").length !== 0) {
//     $("." + country + "-players").append(', ' + inputValue);
//     $(".nation-players").append($("." + country + "-players"));

//     $(".nation-flag").append($nation);
//     $(".nation-players").show();
//     $('.nation-players').not(`:contains(${nation})`).hide();
//   }
// }


if (inputKey === 'Brazil' && $(".brazil-players").length === 0) {
    brazil = document.createElement("div")
    brazil.className = 'brazil-players';
    brazil.append(inputKey + ': ');
    brazil.append(inputValue);
    $(".nation-players").append(brazil);
    $(".nation-players").show();
    $(".brazil-players").show();
    var $brazil = $("<img src = 'brazil.png'>")
    $(".nation-flag").append($brazil);
    brazil = $(".brazil-players")[0];
    $(".argentina-players").hide();
    $(".france-players").hide();
    $(".portugal-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();

    spin = document.createElement("div")
    spin.className = 'spin';
    var degAngle = 60;
    $('.spin').delay(300).animate({rotate: degAngle+'deg'}, 500);

  } else if (inputKey === 'Brazil' && $(".brazil-players").length !== 0) {
    $(".brazil-players").append(', ' + inputValue);
    $(".nation-players").append($(".brazil-players"));
    var $brazil = $("<img src = 'brazil.png'>")
    $(".nation-flag").append($brazil);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".brazil-players").show();
    $(".argentina-players").hide();
    $(".portugal-players").hide();
    $(".france-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();
  }

if (inputKey === 'Argentina' && $(".argentina-players").length === 0) {
    argentina = document.createElement("div")
    argentina.className = 'argentina-players';
    argentina.append(inputKey + ': ')
    argentina.append(inputValue)
    $(".nation-players").append(argentina);
    $(".nation-players").show();
    $(".argentina-players").show();
    var $argentina = $("<img src = 'argentina.png'>")
    $(".nation-flag").append($argentina);
    argentina = $(".argentina-players")[0];
    $(".brazil-players").hide();
    $(".france-players").hide();
    $(".portugal-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();

  } else if (inputKey === 'Argentina' && $(".argentina-players").length !== 0) {
    $(".argentina-players").append(', ' + inputValue);
    $(".nation-players").append($(".argentina-players"));
    var $argentina = $("<img src = 'argentina.png'>")
    $(".nation-flag").append($argentina);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".argentina-players").show();
    $(".brazil-players").hide();
    $(".portugal-players").hide();
    $(".france-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();
  }
  

if (inputKey === 'France') {
    france = document.createElement("div")
    france.className = 'france-players';
    france.append(inputKey + ': ')
    france.append(inputValue)
    $(".nation-players").append(france);
    $(".nation-players").show();
    $(".france-players").show();
    var $france = $("<img src = 'france.png'>")
    $(".nation-flag").append($france);
    france = $(".france-players")[0];
    $(".brazil-players").hide();
    $(".argentina-players").hide();
    $(".portugal-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();

  } else if (inputKey === 'France' && $(".france-players").length !== 0) {
    $(".france-players").append(', ' + inputValue);
    $(".nation-players").append($(".france-players"));
    var $france = $("<img src = 'france.png'>")
    $(".nation-flag").append($france);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".brazil-players").hide();
    $(".argentina-players").hide();
    $(".portugal-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();
  }

if (inputKey === 'Portugal') {
    portugal = document.createElement("div")
    portugal.className = 'portugal-players';
    portugal.append(inputKey + ': ')
    portugal.append(inputValue)
    $(".nation-players").append(portugal);
    $(".nation-players").show();
    $(".portugal-players").show();
    var $portugal = $("<img src = 'portugal.png'>")
    $(".nation-flag").append($portugal);
    portugal = $(".portugal-players")[0];
    $(".brazil-players").hide();
    $(".france-players").hide();
    $(".argentina-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();
  }


 else if (inputKey === 'Portugal' && $(".portugal-players").length !== 0) {
    $(".portugal-players").append(', ' + inputValue);
    $(".nation-players").append($(".portugal-players"));
    var $portugal = $("<img src = 'portugal.png'>")
    $(".nation-flag").append($portugal);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".brazil-players").hide();
    $(".argentina-players").hide();
    $(".france-players").hide();
    $(".header").hide();
    $(".search-button").hide();
    $(".search").hide();
  }



$(".search-button").on("click", function(){

  let nationKey = $(".search").val();
  $(".search").val("");

  if (nationKey === 'Brazil') {
    var $brazil = $("<img src = 'brazil.png'>")
    $(".nation-flag").append($brazil);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".brazil-players").show();
    $(".argentina-players").hide();
    $(".portugal-players").hide();
    $(".france-players").hide();
    $(".header").hide();
    $(".user-input-title").hide();
    $(".user-input-body").hide();
    $(".add-text-btn").hide();
    $(".search-button").hide();
    $(".search").hide();
  }

  if (nationKey === 'Argentina') {
    var $argentina = $("<img src = 'argentina.png'>")
    $(".nation-flag").append($argentina);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".argentina-players").show();
    $(".brazil-players").hide();
    $(".portugal-players").hide();
    $(".france-players").hide();
    $(".header").hide();
    $(".user-input-title").hide();
    $(".user-input-body").hide();
    $(".add-text-btn").hide();
    $(".search-button").hide();
    $(".search").hide();
  }

  if (nationKey === 'France') {
    var $france = $("<img src = 'france.png'>")
    $(".nation-flag").append($france);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".france-players").show();
    $(".brazil-players").hide();
    $(".portugal-players").hide();
    $(".argentina-players").hide();
    $(".header").hide();
    $(".user-input-title").hide();
    $(".user-input-body").hide();
    $(".add-text-btn").hide();
    $(".search-button").hide();
    $(".search").hide();
  }

  if (nationKey === 'Portugal') {
    var $portugal = $("<img src = 'portugal.png'>")
    $(".nation-flag").append($portugal);
    $(".nation-flag").show();
    $(".nation-players").show();
    $(".portugal-players").show();
    $(".brazil-players").hide();
    $(".france-players").hide();
    $(".argentina-players").hide();
    $(".header").hide();
    $(".user-input-title").hide();
    $(".user-input-body").hide();
    $(".add-text-btn").hide();
    $(".search-button").hide();
    $(".search").hide();
  }







});


    

    console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);
    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });

$(".home").on("click", function(){
  $(".nation-flag").html("");

  $(".user-input-title").val("");
  $(".user-input-body").val("");
  $(".user-input-title").show();
  $(".user-input-body").show();
  $(".add-text-btn").show();
  $(".nation-players").hide();
  $(".header").show();
  $(".search-button").show();
  $(".search").show();


});


   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   // $(".del-text-btn").on("click", function() {
   //   alert('item deleted? check the console'); // maybe change to a window.confirm
   //   localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
   //   $(".user-input-title").val("");
   //   $(".user-input-body").val("");
   //   // clearing display? what if I have multiple items?
   //   // after item is removed from local storage, redisplay items from local storage
   //   // refresh from storage?
   // });






   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});