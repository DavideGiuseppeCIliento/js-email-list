const emails = [];

// # ACQUISIZIONE API
axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
  for (let i = 0; i < 10; i++) {
    emails.push(response.data.response);
  }
  console.table(emails);
});
