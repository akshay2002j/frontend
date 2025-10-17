
$(document).ready( () =>{
  const form = document.getElementById("user-details-form");
  const tableBody = document.getElementById("user-details-table-body");


//  const con = document.querySelector("#res-container"); 
//   con.addEventListener("submit",(e)=>{
//     console.log("parent element")
//   } ,true);
  let cnt = 1;
  form.addEventListener("submit", (event) =>{
    console.log("child element clikled");
    event.preventDefault();
     const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const birthdate = document.getElementById("user-birthdate").value;

   let row =  document.createElement("tr");
   row.innerHTML = `<td>${cnt++}</td>
   <td>${name}</td>
   <td>${email}</td>
   <td>${password}</td>
   <td>${gender}</td>
   <td>${birthdate}</td>
   `;

   tableBody.appendChild(row);
   form.reset();
    alert("Form submitted successfully!");
  })
});