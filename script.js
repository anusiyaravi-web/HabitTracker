const form = document.getElementById("habitForm");
const tableBody = document.getElementById("habitTableBody");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let habitName = document.getElementById("habitName").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let targetDays = document.getElementById("targetDays").value;

    if(habitName === "" ||
       description === "" ||
       category === "" ||
       targetDays === "")
    {
        alert("All fields are required");
        return;
    }

    let row = `
        <tr>
            <td>${habitName}</td>
            <td>${description}</td>
            <td>${category}</td>
            <td>${targetDays}</td>
        </tr>
    `;

    tableBody.innerHTML += row;

    message.innerHTML = "Habit Added Successfully";

    form.reset();
});