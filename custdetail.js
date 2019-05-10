$(function() {
  $.get("data/customers.json", function(data) {
      console.log(data);
  
      var Search = data;

        var customers = Search[document.cookie];
        var table =
          '<tr><td>' + customers.customerID +'</td><td>'+
          customers.companyName +'</td><td>' +  customers.contactName +'</td><td>' +
          customers.contactTitle +'</td><td>' +  "Street :"+ customers.address.street + "<br>" + 
          "City :"+ customers.address.city + "<br>" + "Region :"+ customers.address.region + "<br>" +
          "PostalCode :"+ customers.address.postalCode + "<br>" + "Country :"+ customers.address.country + "<br>" +
          "Phone :"+ customers.address.phone +'</td></tr>' ;
  
        $("#datafull").append(table);

    });
});

function setCookies(i){
  document.cookie = i;
}