class Employee {

        constructor(name, salary) {
                this.name = name;
                this.salary = salary;
        }

        displayTotalSalary(month) {

                let totalSalary;

                if ("january".startsWith(month)) {
                        totalSalary = this.salary * 1;
                }

                else if ("february".startsWith(month)) {
                        totalSalary = this.salary * 2;
                }

                else if ("march".startsWith(month)) {
                        totalSalary = this.salary * 3;
                }

                else if ("april".startsWith(month)) {
                        totalSalary = this.salary * 4;
                }

                else if ("may".startsWith(month)) {
                        totalSalary = this.salary * 5;
                }

                else if ("june".startsWith(month)) {
                        totalSalary = this.salary * 6;
                }

                else if ("july".startsWith(month)) {
                        totalSalary = this.salary * 7;
                }

                else if ("august".startsWith(month)) {
                        totalSalary = this.salary * 8;
                }

                else if ("september".startsWith(month)) {
                        totalSalary = this.salary * 9;
                }

                else if ("october".startsWith(month)) {
                        totalSalary = this.salary * 10;
                }

                else if ("november".startsWith(month)) {
                        totalSalary = this.salary * 11;
                }

                else if ("december".startsWith(month)) {
                        totalSalary = this.salary * 12;
                }
                else {
                        console.log("invalid month");
                        return;
                }


                console.log(`The Salary of ${this.name} for the month ${month} is: ${totalSalary}`);
        }
}

const employeeRamesh = new Employee('Ramesh', 100000);
const employeeJogesh = new Employee('Jogesh', 2500000);
const employeePronay = new Employee('Pronay', 3500000);

employeeRamesh.displayTotalSalary('february');
