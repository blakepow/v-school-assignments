let employees = []

function Employee(name, job, salary){
    this.Name = name
    this.Job = job
    this.Salary = salary
    this.Status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(employees)
    }
}

let Jimmy = new Employee("Jimmy", 'Salesman', '$64,000')
let Franky = new Employee('Franky', 'Security Guard', '$80,500')
let Mildred = new Employee('Mildred', 'Hitwoman', '$150,000')

Mildred.Status = 'Contract'

employees.push(Jimmy, Franky, Mildred)

Jimmy.printEmployeeForm()
