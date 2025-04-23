const emails = [];

// // # ACQUISIZIONE API
// axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
//   for (let i = 0; i < 10; i++) {
//     emails.push(response.data.response);
//   }
//   console.table(emails);
// });

// const generationEmails = document.getElementById("generation-emails");
// const list = document.querySelector("ul");
// let listEmailsHTML = "";

// generationEmails.addEventListener("click", () => {
//   for (let i = 0; i < 10; i++) {
//     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
//       emails.push(response.data.response);
//       listEmailsHTML += `<li>${emails[i]}</li>`;

//       console.log(emails[i]);
//     });
//   }
//   console.table(emails);
//   console.table(listEmailsHTML);
// });

// list.innerHTML = listEmailsHTML;

const generationEmails = document.getElementById("generation-emails");
const list = document.querySelector("ul");
let listEmailsHTML = "";

generationEmails.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
      emails.push(response.data.response);
      listEmailsHTML += `<li>${emails[i]}</li>`;

      console.log(emails[i]);
    });
  }
  console.table(emails);
  console.table(listEmailsHTML);
});

list.innerHTML = listEmailsHTML;
