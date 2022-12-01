// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress:'11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee,name,key){
    const newEmployee={...employee};
    newEmployee[name]=key;
    return newEmployee;
    }


function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value) {
        employee[streetAddress] =value;
        return employee;

    }

    function deleteFromEmployeeByKey(employee, name) {
        const newEmployee={...employee};
        delete newEmployee.name;
        return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee.name;
    return employee
}