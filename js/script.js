// const generationEmails = document.getElementById("generation-emails");
// const list = document.querySelector("ul");

// generationEmails.addEventListener("click", () => {
//   let listEmailsHTML = "";
//   const emails = [];

//   for (let i = 0; i < 10; i++) {
//     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
//       emails.push(response.data.response);
//       console.log(emails[i]);
//       listEmailsHTML += `<li>${emails[i]}</li>`;
//       list.innerHTML = listEmailsHTML;
//     });
//   }
// });

const generationEmails = document.getElementById("generation-emails");
const list = document.querySelector("ul");

generationEmails.addEventListener("click", () => {
  let listEmailsHTML = "";
  const emails = [];
  console.log("PRIMA DEL FOR");
  for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
      emails.push(response.data.response);
      console.log(emails[i]);

      console.log("DENTRO AL THEN", emails[i]);
      listEmailsHTML += `<li>${emails[i]}</li>`;

      if (emails.length === 10) {
        stampa(listEmailsHTML);
      }
    });
  }

  console.log("DOPO IL FOR");
});

const stampa = (listEmailsHTML) => {
  list.innerHTML = listEmailsHTML;
};
