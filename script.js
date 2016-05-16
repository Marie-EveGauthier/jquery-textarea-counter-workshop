/* global $ */
$(document).ready(function() {
    var $textarea = $("#the-textarea");
    var $counter = $("#character-counter");

// display the remaining    
    $textarea.keyup(function() {
        var $remaining = 140 - ($textarea.val().length);
        $counter.text($remaining);

//changing the colour of the remaining according to how many        
        if ($remaining > (140 * 0.2) ) {
            $counter.addClass("green");
        }    
        else if ($remaining <= (140 * 0.2 ) && $remaining >= (140 * 0.1)) {
            $counter.removeClass("green");
            $counter.addClass("gold");
        }
        else {
            $counter.removeClass("gold");
            $counter.addClass("red");  
        }
    });
});

