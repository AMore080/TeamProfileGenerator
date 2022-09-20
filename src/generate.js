const Intern = require("../public/scripts/Intern");

const generate = (team) => {
  console.log(team);
  const loopHTML = [];


  const manager = manager => {
    console.log(manager);
    console.log(manager.id);
    const managerHTML = `
      <container class="box-border items-center bg-sky-400 px-3 pb-10 pt-3 w-80 border-4 bg-gradient-to-b from-indigo-500 bg-sky-400">
          <h1 class="w-full bg-blue-900 text-3xl rounded-lg text-center">${manager.getRole()}</h1>
          <p class="text-xl p-3 border-double border-4 my-3">Name: ${manager.name}</p>
          <p class="text-xl p-3 border-double border-4 my-3">Email: <a href="${manager.email}">${manager.email}</a></p>
          <p class="text-xl p-3 border-double border-4 my-3">ID: ${manager.id}</p>
          <p class="text-xl p-3 border-double border-4 my-3">Office #: ${manager.getOfficeNumber()}</p>
      </container>`;
    loopHTML.push(managerHTML)
  }

  const engineer = Engineer => {
    console.log(Engineer)
    const engineerHTML = `
      <container class="box-border items-center bg-sky-400 px-3 pb-10 pt-3 w-80 border-4 bg-gradient-to-b from-indigo-500 bg-sky-400">
          <h1 class="w-full bg-blue-900 text-3xl rounded-lg text-center">${Engineer.getRole()}</h1>
          <p class="text-xl p-3 border-double border-4 my-3">Name: ${Engineer.name}</p>
          <p class="text-xl p-3 border-double border-4 my-3">Email: <a href="${Engineer.email}">${Engineer.email}</a></p>
          <p class="text-xl p-3 border-double border-4 my-3">ID: ${Engineer.id}</p>
          <p class="text-xl p-3 border-double border-4 my-3">Github: ${Engineer.getGithub()}</p>
      </container>`;
    loopHTML.push(engineerHTML)
  }

  const intern = Intern => {
    console.log(Intern)
    const InternHTML = `
      <container class="box-border items-center bg-sky-400 px-3 pb-10 pt-3 w-80 border-4 bg-gradient-to-b from-indigo-500 bg-sky-400">
          <h1 class="w-full bg-blue-900 text-3xl rounded-lg text-center">${Intern.getRole()}</h1>
          <p class="text-xl p-3 border-double border-4 my-3">Name: ${Intern.name}</p>
          <p class="text-xl p-3 border-double border-4 my-3">Email: <a href="${Intern.email}">${Intern.email}</a> </p>
          <p class="text-xl p-3 border-double border-4 my-3">ID: ${Intern.id}</p>
          <p class="text-xl p-3 border-double border-4 my-3">ID: ${Intern.getSchool()}</p>
      </container>`;
    loopHTML.push(InternHTML)
  }

  for(let i = 0; i < team.length; i++){
    if(team[i].getRole() == "Manager"){
      console.log("I am functioning")
      manager(team[i]);
    }
    if(team[i].getRole() == "Engineer"){
      console.log("I am functioning")
      engineer(team[i]);
    }
    if(team[i].getRole() == "Intern"){
      console.log("I am functioning")
      intern(team[i]);
    }
  }
  return loopHTML.join('');
}

module.exports = team => {
  console.log(team)
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="../public/css/tailwind.css">
    </head>
    <body class="bg-slate-300 h-full font-serif text-gray-50">
      <h1 class="bg-gradient-to-r from-indigo-500 bg-sky-400 p-10 text-4xl text-center font-bold">Your Team</h1>
      <div class="flex flex-row px-5 py-10 justify-around flex-wrap">
      ${generate(team)}
      </div>
      <script src="index.js"></script>
    </body>
  </html>
  `
};