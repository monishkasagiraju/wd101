function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var atnc = document.getElementById("atnc").checked;

    // Create a new table row
    var table = document.getElementById("dataTable");
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with the form values
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = password;
    newRow.insertCell(3).innerHTML = dob;
    newRow.insertCell(4).innerHTML = atnc ? "Yes" : "No";

    // Reset the form
    document.getElementById("userForm").reset();
}