window.logout = function() {
	fetch('/~/homepage/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = '/~/homepage/index.html'
}

window.login = function() {
	fetch('/~/homepage/account.html', { method: 'POST'});
	location.href = '/~/homepage/account.html'
}

// Search bar above table in account page
window.search = function() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

window.tryIt = function() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById('cellOne').value;
  cell2.innerHTML = document.getElementById('cellTwo').value;
  cell3.innerHTML = document.getElementById('cellThree').value;
  cell4.innerHTML = document.getElementById('cellFour').value;
}