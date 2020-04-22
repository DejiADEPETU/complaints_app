
$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();

        const userInput = $('input[type="number"]').val(); // (10)
 
        let response = null
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
            type: "GET",
            data: {
              "$limit" : 10000,
              "$$app_token" : "GK6bBl6WPG94rv04QvIaCVM9D"
            }
        }).done(function(data) {
          console.log("Retrieved " + data.length + " records from the dataset!");
          response = data;
        });
 
        // $.ajax({            // url : "https://data.cityofnewyork.us/resource/erm2-nwe9.json",              // }).then(             // (data)=> {

// const boroughButtons = document.getElementsByClassName("buttons");
        
        cx=null;      // if (userInput <= 0 or userInput == NAN){userInput = 10};
        while (cx < userInput){

            var button = document.createElement('input');
            button.setAttribute('type', 'submit');
            button.setAttribute('ID', 'btnSendMailClone');
            button.setAttribute('value', 'WHAT DID THE POLICE DO?');
            button.setAttribute('onclick', 'btnSendMail_Click()');
            button.setAttribute('form', 'myform');
            document.body.appendChild(button);
            button.setAttribute("class", "btn btn-primary");
            $('#button').addClass('myClass');
            $('#btnSendMailClone').css("margin-right", "100px")
            $('#btnSendMailClone').css("width", "98");

            function btnSendMail_Click() {
                console.log("WHAT DID THE POLICE DO?");
                $('#nypd').html(data.Agency);   //GET DATA
                $('#complaints').html(data.complaints);
                $('#latitude').html(data.Year);
                $('#longitude').html(data.Rated);
                $('#address').html(data.Rated);
            }

        cx++
        }
    });

});