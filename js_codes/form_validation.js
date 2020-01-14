document.getElementById("b1").addEventListener("click",validate);
document.getElementById("b2").addEventListener("click",reset);


function validate()
{
	var name=document.getElementById("name").value;
	var age=document.getElementById("age").value;
	if (name==''||age=='')
	{
		alert("please fill all details");

	}

	else
	{
		var name_pattern=/[a-zA-Z]+/;
		var age_pattern=/^[0-9]{2}$/;
		if(!name_pattern.test(name))
		{
			alert("please enter correct name");
		}

		if(!age_pattern.test(age))
		{
			alert("Please enter correct age.");
		}
	}
}


function reset()
{
	document.getElementById("name").innerHTML="";
	document.getElementById("age").innerHTML="";
}