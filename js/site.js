function displaySearch() {
	$('#SearchList').show();
}

function hideSearch() {
 	$('#SearchList').hide();
}

function searchFilterFunction() {
  var input, filter, ul, li, a, i;
  
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("searchDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
//    if (txtValue.toUpperCase().indexOf(filter) > -1) {  // makes search work as "contains"
    if (txtValue.toUpperCase().startsWith(filter)) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "title" text as a caption
var img = $(".attractionimg");
var modalImg = document.getElementById("imgModalPopup");
var captionText = document.getElementById("caption");
if (img)
{
	$(".attractionimg").each(function() {
		$(this).click(function(){
		  modal.style.display = "block";
		  modalImg.src = this.src;
		  captionText.innerHTML = this.title;
		});
	});
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
