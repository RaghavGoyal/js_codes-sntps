function fibonacci(no_of_elements)
{
	
	var array_ret= new Array(no_of_elements);
	array_ret[0]=1;
	array_ret[1]=1;
	for(var i=2; i<no_of_elements; i++)
	{
		array_ret[i]=array_ret[i-1]+array_ret[i-2];
	}

	console.log(array_ret);
}

module.exports={fibonacci};