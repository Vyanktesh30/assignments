// let credit:number[]=[5000, 3000, 4000]
// let debit:number[]=[-2000, -15000, -200, -300, -3000]

let transactions:number[]=[5000, -2000, 3000,-15000, -200, -300, 4000, -3000, 20000, -11000]


//1. Print total number of credit and debit transactions completed

let creditCount:number=0;
let debitCount:number=0;

for (let i=0; i< transactions.length; i++){

    if(transactions[i]!>0){
        creditCount++;
    } else if (transactions[i]!<0){
        debitCount++;
    }
    
}
console.log(`No. of credit transactions: ${creditCount}`)
console.log(`No. of Deit transactions: ${debitCount}`)


//2. Print the total amount credited and debited in account

let totalcredit:number=0
let totaldebit:number=0

for (let i:number=0; i<transactions.length; i++){

    if (transactions[i]!>0){
        totalcredit+=transactions[i]!

    } else if(transactions[i]!<0){
        totaldebit+=transactions[i]!
    }
    
}

console.log(`Total amount credited: ${totalcredit}`)
console.log(`Total amount debited: ${totaldebit}`)

// Print total amount remaining at the end in Bank Account
let accountbalance:number=0

for (let i:number=0; i<transactions.length; i++){
    accountbalance+=transactions[i]!
}

console.log(`Remaining account balance is: ${accountbalance}`)

//If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let suspiciousDebit:number=0
let suspiousCredit:number=0
for (let i:number=0; i<transactions.length; i++){
    if (transactions[i]!> 10000){
        console.log("suspicious credit transaction:", transactions[i])
        suspiousCredit++;
} else if (transactions[i]!<-10000){
    console.log("suspicious debit transaction:", transactions[i])
    suspiciousDebit++
}
}

console.log("No.of debit transactions",suspiciousDebit)
console.log("No.of credit transactions",suspiousCredit)