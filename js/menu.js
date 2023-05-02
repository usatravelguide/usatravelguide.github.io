$(document).ready($("#topmenustrip").html('<ul class="nav nav-tabs topmenu">' +
'	  <li class="nav-item dropdown">' + 
'		<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">USA Travel Guide</a>' + 
'		<div class="dropdown-menu">' + 
'			<h6 class="dropdown-header ddheader">Asia</h6>' + 
'			<a class="dropdown-item" href="china.html">China</a>' + 
'			<a class="dropdown-item" href="japan.html">Japan</a>' + 
'			<a class="dropdown-item" href="northkorea.html">North Korea</a>' + 
'			<a class="dropdown-item" href="southkorea.html">South Korea</a>' + 
'			<a class="dropdown-item" href="taiwan.html">Taiwan</a>' + 
'			<a class="dropdown-item" href="vietnam.html">Vietnam</a>' + 
'			<a class="dropdown-item" href="philippines.html">Philippines</a>' + 
'			<a class="dropdown-item" href="malaysia.html">Malaysia</a>' + 
'			<a class="dropdown-item" href="india.html">India</a>' + 
'			<a class="dropdown-item" href="singapore.html">Singapore</a>' + 
'			<div class="dropdown-divider"></div>' + 
'			<h6 class="dropdown-header ddheader">Europe</h6>' + 
'			<a class="dropdown-item" href="unitedkingdom.html">United Kingdom</a>' + 
'			<a class="dropdown-item" href="spain.html">Spain</a>' + 
'			<a class="dropdown-item" href="france.html">France</a>' +
'			<a class="dropdown-item" href="portugal.html">Portugal</a>' + 
'			<a class="dropdown-item" href="ireland.html">Ireland</a>' + 
'			<a class="dropdown-item" href="italy.html">Italy</a>' + 
'			<a class="dropdown-item" href="switzerland.html">Switzerland</a>' +
'     <a class="dropdown-item" href="latvia.html">Latvia</a>' +
'     <a class="dropdown-item" href="germany.html">Germany</a>' +
'     <a class="dropdown-item" href="belgium.html">Belgium</a>' +
'			<div class="dropdown-divider"></div>' + 
'			<h6 class="dropdown-header ddheader">Oceania</h6>' + 
'     <a class="dropdown-item" href="australia.html">Australia</a>' +
'     <a class="dropdown-item" href="newzealand.html">New Zealand</a>' +
'     <a class="dropdown-item" href="fiji.html">Fiji</a>' +
'     <a class="dropdown-item" href="papuanewguinea.html">Papua New Guinea</a>' +
'			<a class="dropdown-item" href="frenchpolynesia.html">French Polynesia</a>' +
'			<a class="dropdown-item" href="tuvalu.html">Tuvalu</a>' +
'			<div class="dropdown-divider"></div>' + 
'			<h6 class="dropdown-header ddheader">South America</h6>' +
'			<a class="dropdown-item" href="brazil.html">Brazil</a>' +
'			<a class="dropdown-item" href="argentina.html">Argentina</a>' +
'			<a class="dropdown-item" href="colombia.html">Colombia</a>' +
'			<a class="dropdown-item" href="ecuador.html">Ecuador</a>' +
'			<a class="dropdown-item" href="peru.html">Peru</a>' +
'			<a class="dropdown-item" href="chile.html">Chile</a>' +
'			<a class="dropdown-item" href="bolivia.html">Bolivia</a>' +
' '+
'		</div>' + 
'	  </li>' + 
'	  </li>' + 
'	</ul>' + 
'	<div id="searchDropdown" class="search-dropdown-content">' + 
'		<label id="lblSearch" for="searchInput" class="hiddenLabel">Search</label>' + 
'		<input type="text" placeholder="Search.." id="searchInput" onkeyup="searchFilterFunction()" onclick="displaySearch()" onfocusout="setTimeout(hideSearch,500)">' + 
'		<div id="SearchList" class="search-list">' + 
'			<a href="argentina.html">Argentina</a>' +
'			<a href="australia.html">Australia</a>' +
'			<a href="belgium.html">Belgium</a>' +
'			<a href="bolivia.html">Bolivia</a>' +
'			<a href="brazil.html">Brazil</a>' +
'			<a href="chile.html">Chile</a>' +
'			<a href="china.html">China</a>' +
'			<a href="colombia.html">Colombia</a>' +
'			<a href="ecuador.html">Ecuador</a>' +
'			<a href="fiji.html">Fiji</a>' +
'			<a href="france.html">France</a>' +
'			<a href="frenchpolynesia.html">French Polynesia</a>' +                                          
'           <a href="germany.html">Germany</a>' +                          
'			<a href="india.html">India</a>' + 
'			<a href="ireland.html">Ireland</a>' + 
'			<a href="italy.html">Italy</a>' + 
'			<a href="japan.html">Japan</a>' + 
'           <a href="latvia.html">Latvia</a>' + 
'			<a href="malaysia.html">Malaysia</a>' +
'			<a href="newzealand.html">New Zealand</a>' + 
'			<a href="northkorea.html">North Korea</a>' + 
'			<a href="papuanewguinea.html">Papua New Guinea</a>' +
'			<a href="peru.html">Peru</a>' +
'			<a href="philippines.html">Philippines</a>' + 
'			<a href="portugal.html">Portugal</a>' + 
'			<a href="singapore.html">Singapore</a>' + 
'			<a href="southkorea.html">South Korea</a>' + 
'			<a href="spain.html">Spain</a>' + 
'			<a href="switzerland.html">Switzerland</a>' + 
'			<a href="taiwan.html">Taiwan</a>' + 
'			<a href="tuvalu.html">Tuvalu</a>' + 
'			<a href="unitedkingdom.html">United Kingdom</a>' + 
'			<a href="vietnam.html">Vietnam</a>' + 
'		</div>' + 
'	</div>' +
'	<div id="" class="topmenu-info">' + 
'		<a href="visa.html">Visas</a>' + 
' | ' + 
'		<a href="passport.html">Passport</a>' + 
' | ' + 
'		<a href="faq.html">FAQ</a>' +
' | ' + 
'		<a href="beforeyoutravel.html">Before You Travel</a>' + 
'	</div>' +
'		<!-- The Modal -->' + 
'		<div id="myModal" class="modal">' + 
'			<!-- The Close Button -->' + 
'			<span class="close">&times;</span>' + 
'			<!-- Modal Content (The Image) -->' + 
'			<img class="modal-content" id="imgModalPopup">' + 
'			<!-- Modal Caption (Image Text) -->' + 
'			<a id="caption" target="_blank"></a>' + 
'		</div>'
));
