/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee)=>{
    if(employee.profession==="developer"){
      console.log(employee));
    }
  });
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee)=>{
    if(employee.profession==="developer"){
      console.log(employee);
    }
  });
  //Write your code here , just console.log
}

function addData() {
  let newEmployee={id:4,name:"susan",age:20,profession:"intern"};
  arr.push(newEmployee);
  console.log(newEmployee);
  //Write your code here, just console.log
}

function removeAdmin() {
  let filteredArr=arr.filter((employee)=>employee.profession!=="admin");
  console.log(filteredArr);
  //Write your code here, just console.log
}

function concatenateArray() {
  let newArr=[
    {id:5,name:"alex",age:"23",profession:"designer"},
    {id:6,name:"emma",age:"25",profession:"manager"},
    {id:7,name:"liam",age:"21",profession:"tester"},
  ];
  let combineArray=arr.concat(newArr);
  console.log(combinedArray);
  //Write your code here, just console.log
}
