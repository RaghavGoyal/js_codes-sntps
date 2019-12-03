document.getElementById("alert").addEventListener("click", myAlertBox);
document.getElementById("confirm").addEventListener("click", myConfirmBox);
document.getElementById("prompt").addEventListener("click", myPromptBox);

function myAlertBox()
{
	alert("this is alert box");
}

function myConfirmBox()
{
	confirm("this is confirm box");
}

function myPromptBox()
{
	alert("this is prompt box");
}