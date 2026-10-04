let students:string[] = ["Suresh", "Mahesh", "Naresh"];
let marks:number[]=[75,80,82];

let updatedMarks:number[]= []

for (let i:number=0; i < marks.length; i++ ){

    marks[i]+=10;

    updatedMarks.push(marks[i])

}
console.log("student Names", students)
console.log("updatedMakrs", updatedMarks)

//calculate average makrs

let totalmakrs:number=0;

for (mark of updatedMarks){
    totalmakrs+=mark;

}
let avarage:number= totalmakrs/updatedMarks.length

console.log("avarage marks", avarage)


















// let updatedMarks = marks.map(mark => mark + 10);
// console.log("Updated Marks:", updatedMarks);

// let avgMarks = updatedMarks.reduce((total, mark) => total + mark, 0) / updatedMarks.length;
// console.log("Average Marks:", avgMarks);


