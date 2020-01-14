$(document).ready(function(){

    $("#btn1").click(fn1);
    function fn1(){
        $("#test1").fadeToggle(200);
    }
    // JQ selectors can be grouped in paranthesis.
    //for multiple: ,
    //for child: parent>child
    //for all descendent: parent descendent.

    $("#btn2").click(f2);
    function f2(){
        $("p:first").css("font-weight","bold").css("font-style","italic");
    }

    $("#btn3").click(f3);
    function f3(){
        $("p:odd").css("color","red");
    }

    $("#btn4").click(f4);
    function f4(){
        $("#first p:last").text("Hello, The text has been changed!").css("color","indigo");
    }

    $("#btn5").click(f5);
    function f5(){
        $("p").css("background-color","black").css("color","white");
    }

    $("#btn6").click(f6);
    function f6(){
        $("#first").fadeToggle(200);
    }


    $("#append").click(myappend);
    function myappend(){
        // alert("hello");
        $("#second").append("<p> This is another new paragraph </p>");
    }


    $("#after").click(myafter);
    function myafter(){
        // alert("hello");
        $("#second").after("<p> This is another new paragraph after div </p>");
    }

    $("#prepend").click(myprepend);
    function myprepend(){
        // alert("hello");
        $("#second").prepend("<p> This is another new paragraph using prepend. </p>");
    }

    $("#before").click(mybefore);
    function mybefore(){
        // alert("hello");
        $("#second").before("<p> This is another new paragraph using before </p>");
    }

    $("#remove").click(myremove);
    function myremove(){
        // alert("hello");
        $("#second").remove();
    }

    $("#empty").click(myempty);
    function myempty(){
        // alert("hello");
        $("#second").empty();
    }

    $("#hide").click(myhide)
    function myhide(){
        $("#p1").hide();
    }

    $("#show").click(myshow);
    function myshow(){
        $("#p1").show();
    }

    $("#toggle").click(mytoggle);
    function mytoggle(){
        $("#p1").toggle();
    }


    //fadeIn, fadeOut, fadeToggle
    //slideUp, slideDown, slideToggle.
    //animation:

    $("#anim").click(myanimate);
    function myanimate(){
        //animate method accepts 3 parameters in sequence:
        //1.list of css items to change,
        //2. time to complete the animation in ms (optional)
        //3. callback function (optional)
        $("#animation").animate({
            marginLeft:'150px',
            height:'200px',
            width:'200px',
            opacity:'1'
        },1000)
    }

    $("#action").click(dom1);
    function dom1(){
        //text(), html(), attr(), css() methods.
        alert($("#action").attr("id"));
        //setting new value to any attribute.
        $("#action").attr("id","newIDHere");
        alert($("#newIDHere").attr("id"));
        //getting value of attribute id with old id gives undefined.

    }

    $("#addClass").click(function(){
        $("#addStyle").addClass("dynamicClass");
    });
    
    $("#removeClass").click(function(){
        $("#addStyle").removeClass("dynamicClass");
    });

    $("#toggleClass").click(function(){
        $("#addStyle").toggleClass("dynamicClass");
    });
    
    

});