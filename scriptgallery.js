$(document).ready( function(){
    $.getJSON('pictures.json', function(data) {
        $.each(data.items, function(i,f) {
            $("ul").append("<li>URL: "+f.url+"</li><li>Caption: "+f.caption+"</li><br />");

        });
    });
});
