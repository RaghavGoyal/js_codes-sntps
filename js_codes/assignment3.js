function displayTable()
{
	var user= new Array();
	user.push(["id", "name", "username", "email"]);
	user.push([1, "Leanne Graham", "Bret", "Sincere@april.biz"]);
	user.push([2, "Ervin Howell", "Antonette", "Shanna@melissa.tv"]);
	user.push([3, "Clementine Bauch", "Samantha", "Nathan@yesenia.net"]);

	var table = document.createElement("TABLE");   // to create table element.
    var columnCount = user[0].length;
    var row = table.insertRow(-1);       // for header row
    for (var i = 0; i < columnCount; i++)
    {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = user[0][i]+"<span class='tooltip'>"+user[0][i]+"</span>";
            row.appendChild(headerCell);
            
    }

    for (var i = 1; i < user.length; i++)
    {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++)
            {
                var cell = row.insertCell(-1);
                cell.innerHTML = user[i][j]+"<span class='tooltip'>"+user[i][j]+"</span>";
            }
    }

    var Table = document.getElementById("table_div");
        Table.innerHTML = "";
        Table.appendChild(table);


}

// console.log("into script");
document.getElementById("b1").addEventListener("click",displayTable);