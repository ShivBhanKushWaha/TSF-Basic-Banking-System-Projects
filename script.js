// navbar toggler
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(element => 
    element.addEventListener("click",() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// send money
var selectedRow = null;
const transactionHistoryTable = document.querySelector('#transaction-history');
const clearHistoryButton = document.querySelector('#clear-history');
// show alet6rs
function showAlerts(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".sendMoney");
    const main = document.querySelector(".send-bal");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),1000);
} 

// clear all fields
function clearAllFields(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#amount").value = "";
}

// add data
document.querySelector("#send-money").addEventListener("submit",(e) => {
    e.preventDefault();

    // get form values;
    
    const date = new Date();
    const Recipient = document.querySelector("#name").value;
    const Email = document.querySelector("#email").value;
    const Amount = document.querySelector("#amount").value;

    if(Recipient == "" || Email == "" || Amount == ""){
        showAlerts("Please fill all the fields", "danger");
        return;
    }
    else{
            const list = document.querySelector("#transaction-history");
            const row = document.createElement("tr");

            row.innerHTML = `<td data-label="date :">${date.toLocaleString()}</td>
                             <td data-label="Recipient :">${Recipient}</td>
                             <td data-label="Email :">${Email}</td>
                             <td data-label="Amount :">${Amount}</td>
                            `;
            list.appendChild(row);
            selectedRow = null;
            showAlerts("Money send succcessfully","success")
    }
    clearAllFields();
})
// delete history
clearHistoryButton.addEventListener('click', function() {
    // Remove all rows from the HTML table
    
    if(transactionHistoryTable.innerHTML != ''){
        transactionHistoryTable.innerHTML = '';
        showAlerts("History is cleared","danger");
    }
    else{
        showAlerts("No history","secondary");
    }
  });

//   //add usesr 
const userHistoryTable = document.querySelector('#user-history');
const userHistoryButton = document.querySelector('#clear-user-history');
// show alet6rs
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".adduser");
    const main = document.querySelector(".mainuser");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),1000);
} 

// clear all fields
function clearField(){
    document.querySelector("#Username").value = "";
    document.querySelector("#emails").value = "";
    document.querySelector("#balance").value = "";
}

// add data
document.querySelector("#add_user").addEventListener("submit",(e) => {
    e.preventDefault();

    // get form values;
    
    const Username = document.querySelector("#Username").value;
    const Emails = document.querySelector("#emails").value;
    const Initial_balance = document.querySelector("#balance").value;

    if(Username == "" || Emails == "" || Initial_balance == ""){
        showAlert("Please fill all the fields", "danger");
        return;
    }
    else{
            const list = document.querySelector("#user-history");
            const row = document.createElement("tr");

            row.innerHTML = `<td data-label="Recipient :">${Username}</td>
                             <td data-label="Email :">${Emails}</td>
                             <td data-label="Amount :">${Initial_balance}</td>
                            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("User add succcessfully","success")
    }
    clearField();
})
// delete history
userHistoryButton.addEventListener('click', function() {
    // Remove all rows from the HTML table
    
    if(userHistoryTable.innerHTML != ''){
        userHistoryTable.innerHTML = '';
        showAlert("User is cleared","danger");
    }
    else{
        showAlert("No User Found","secondary");
    }
  });