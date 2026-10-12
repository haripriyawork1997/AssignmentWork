import { Company } from "./Company.js";

class Developer extends Company {

    writeCode() {
        console.log("Developer can write code");
    }

    testApplication() {
        console.log("Developer can test application");
    }

    fixBugs() {
        console.log("Developer can fix bugs");
    }
}

let obj = new Developer();

obj.employeeRegistration();     
obj.writeCode();
obj.testApplication();
obj.fixBugs();