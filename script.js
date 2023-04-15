let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  // using filter method find profession developer or not....
  const developers = arr.filter(employee => employee.profession === "developer");

  // here simply print the filter developer profession name
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);

}

function PrintDeveloperbyForEach() {

  // printing all data using forEach function..
  arr.forEach(function (employee) {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
}

function addData() {

  // creating new  employ object..
  const newEmployee = { id: 4, name: "Lucky", age: "20", profession: "intern" };
  // push the newEmployee in exsting arr 
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  
  // remove the admin using filter function and 
  // print the employees where profeession is not equal to "admin"
  const employees = arr.filter(employee => employee.profession !== "admin");
  console.log(employees);

}

function concatenateArray() {
  
  // create the new Array
  const newArray = [
      {id: 5, name: "Alice", age: "28", profession: "designer"},
      {id: 6, name: "Bob", age: "32", profession: "developer"},
      {id: 7, name: "Charlie", age: "23", profession: "intern"}
    ];

    // conactenate the new array using concat() function and print the new arr 
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
}
