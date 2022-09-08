let myVar;
function Loading() 
{
  myVar = setTimeout(showPage, 3000);
}

function showPage() 
{
  document.getElementById("loader").style.display = "none";
  document.getElementById("menu-page-r6").style.display = "block"
  document.getElementById("operators").style.display = "block"

}

