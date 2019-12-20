var inquirer = require('inquirer');
var { from } = require('rxjs');

class Employee {
  promptUser() {

    return inquirer.prompt
      ([


        {
          type: 'input',
          name: 'name',
          message: "What is your name",



        },
        {
          type: 'input',
          name: 'id',
          message: "What is your ID",
        },
        {
          type: 'list',
          name: 'title',
          message: "What is your Title",
          choices:['Manager', 'Engineer', 'Intern']

        },
      ])
      .then(promptRes =>{
        const managerQuest = new Manager;
        const engineerQuest = new Engineer;
        const internQuest = new Intern;

        var title = promptRes.title;
        if (title === "Manager"){
          managerQuest.promptUser();

        } else if(title === "Engineer"){
          engineerQuest.promptUser();
        
        } else if (title === "Intern"){
          internQuest.promptUser();
        }


      }) 
      
      }
     
  
}


class Manager {
  promptUser() {

    return inquirer.prompt(
      [
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is your office number ?",
        }

      ])
  }

}

class Engineer {
  promptUser() {

    return inquirer.prompt(
      [
        {
          type: 'input',
          name: 'gitHubUsername',
          message: "What is your GitHub username ?",
        }

      ])
  }

}

class Intern {
  promptUser() {

    return inquirer.prompt(
      [
        {
          type: 'input',
          name: 'School',
          message: "What School did you attend ?",
        }

      ])
  }

}



const employee1 = new Employee();
employee1.promptUser();
