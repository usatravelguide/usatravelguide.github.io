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
