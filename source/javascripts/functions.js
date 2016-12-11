/* jQuery was overkill for this! */
function detail(id)
{
	/* Check to see if the button currently says 'More' or 'Less'. */
	if( document.getElementById(id).innerHTML[0] == 'M' ) {
	  document.getElementById(id).innerHTML = 'Less Detail';
	  document.getElementById(id + "_S").style.display = "none";
	  document.getElementById(id + "_L").style.display = "block";
	}
	else {
	  document.getElementById(id).innerHTML = 'More Detail';
	  document.getElementById(id + "_L").style.display = "none";
	  document.getElementById(id + "_S").style.display = "block";
	}
}
