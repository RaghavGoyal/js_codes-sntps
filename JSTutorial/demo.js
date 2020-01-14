var fname="raghav";

//JS switch case expression can have expressions and strings.
switch(fname+" goyal"){
    case "raghav":
        document.write("raghav");
        break;
    case "Raghav":
        document.write("Raghav");
        break;
    case "raghav goyal":
        document.write("full name");
        break;
}


//creating objects in JS:
// Method 1: using literals
    var car={
        property1:"value1",
        property2:"value2",
        property3:"value3",

        //objects can also contain methods;
        //functions are called methods when declared inside the object or class.
        methodname:function(){
            //do whatever you want to do.
        }
    }
    // acccessing propreties:
    console.log(car.property1);
    // accessing method:
    car.methodname();


//method1 do not eleminate code duplication. for multiple objects.

//method 2: using Constructor:
    function Objname(prop1, prop2, prop3){
        this.prop1=prop1;
        this.prop2=prop2;
        this.prop3=prop3;

        //method:
        this.methodName=function(){
            //do anything here.
        }
    }
    // invoking the above template:
    var a=new Objname("value1", "value2","value3");

    //accessing individual properties:
    a.prop1;
    //accessing method
    a.methodName();


// we can still add more properties in an existing object as:
a.newProperty="value";
//simillarly, we can also change the type of any property by assigning value of other kind.

//delete a property:
delete a.newProperty;


