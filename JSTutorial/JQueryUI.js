//10 year back and forth from the present month can only be created using this widget.
//min and max beyond 10 yrs would not help.
$("#date").datepicker({
    numberOfMonths:1,
    changeYear:true,
    changeMonth:true,
    // showWeek:true,
    showOtherMonths:true,
    // minDate:new Date(1990,00,01),  //months start from 0-11 !
    // maxDate:new Date(yyyy,mm,dd),
});

$("img").tooltip({
    track:true,
    content:"Title",
    show:{effect:"highlight", duration:2000},
    //available effects are: bounce, pulsate, highlight,explode, blind.
    hide:{effect:"highlight", duration:2000},

});


$("#pannel").accordion({
    collapsible:true,
    // event:"mouseover",
    // animate:2000,
    active:"none", //may take index starting from 0
    heightStyle:true,
    //image sources may be specified.
    // icons:{header:"source", activeHeader:"source"},

});


$("#msgbox").click(function(){
    $("#parent").dialog({
        title:"Custom Msg Box", // to set title of msg box.
        draggable:false,
        resizable:false,
        // height:100,
        // width:100,
        modal:true, // to stop any background activity.
        buttons:[
            {
                text:"close",
                // icon:"ui-icon-heart",
                click: function(){
                    $(this).dialog("close");
                }
            },

            {
                text:"accept",
                // icon:"ui-icon-heart",
                click: function(){
                    $(this).dialog("close");
                }
            }
        ]


    });
});

var cities=["Mumbai", "Pune","Delhi","Mathura","Agra","City2", "City3","City4","City5"];
$("#citybox").autocomplete(
    {
        source:cities
    },
    {
        autoFocus:true,
        // delay:2000,
        minLength:2
    }
);
