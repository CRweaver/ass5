(function () {
    'use strict';
    $(document).ready(function () {
        /*  */
        // handle the click event of button 
        $("#submit-btn").click(function (event) {
            
            // Prevent the form submitting
            event.preventDefault();
            
        // read the value of text input into var
            var citytype = $("#city-type").val();
                // define user input text as one or another string
            if ((citytype === "LA") || (citytype === "Los Angeles")) {
                // select dom element body and change attribute of class
                $("body").attr("class", "la");
                // define user input text as one or another string
            } else if ((citytype === "nyc") || (citytype === "New York") || (citytype === "New York City")) {
                // select dom element body and change attribute of class
                $("body").attr("class", "nyc");
                // define user input text as one or another string 
            } else if ((citytype === "San Francisco") || (citytype === "sf") || (citytype === "Bay Area")) {
                // select dom element body and change attribute of class
                $("body").attr("class", "sf");
                // define user input text as one or another string
            } else if ((citytype === "Austin") || (citytype === "ATX")) {
                // select dom element body and change attribute of class
                $("body").attr("class", "austin");
                // define user input text as one or another string
            } else if ((citytype === "SYD") || (citytype === "Sydney")) {
                // select dom element body and change attribute of class
                $("body").attr("class", "sydney");
            }
        });
    });
})();
    