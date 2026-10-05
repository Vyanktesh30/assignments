//conditional statements

//credit score, Income,  Employment status, debt-to-income ratio

function loanDetails(customerName: string, creditScore: number, income: number, empStatus: boolean, dbtratio: number): void {

    console.log(customerName);
    console.log(creditScore);
    console.log(income);
    console.log(empStatus);
    console.log(dbtratio);

    if (creditScore > 750) {
        console.log(`${customerName}, your loan is approved as score is above limit ${creditScore}`);
    } else if (creditScore >= 650 && creditScore <= 750) {
        console.log(`${customerName}, your loan is proceed for further verification as your credit score is ${creditScore}`);

        if (income > 50000) {
            console.log(`${customerName}, your loan is considered as your income is: ${income}`);
        } else {
            console.log(`${customerName}, your income is low, high risk of loan: ${income}`);
        }

        if (empStatus) {
            console.log(`${customerName}, customer is employed: ${empStatus}`);
            if (dbtratio < 40) {
                console.log(`${customerName}, loan is approved as debt-to-income ratio is ${dbtratio}`);
            } else {
                console.log(`${customerName}, loan is rejected as debt-to-income ratio is ${dbtratio}`);
            }
        } else {
            console.log(`${customerName}, loan is denied`);
        }
    } else if (creditScore < 650) {
        console.log(`${customerName}, loan is denied as your credit score is very low: ${creditScore}`);
    }
}

//calling fundtion

loanDetails("john doe", 749, 5000, false, 35)

