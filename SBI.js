import { RBI } from "./Bank.js";

class SBI extends RBI{
    deposite(){
        console.log("Customer can depsite amount")
    }

    withdraw(){
        console.log("Customer can withdraw amount")
    }

    internetBanking(){
        console.log("Customer can use Internet Banking")
    }

}

let obj = new SBI()

obj.KYC()
obj.deposite()
obj.withdraw()
obj.internetBanking()