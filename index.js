// Write your solution in this file!
const employee = {};
//updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(object,key,value){
    return {...object,[key] : value, };
    }
updateEmployeeWithKeyAndValue(employee,"name","sam");
updateEmployeeWithKeyAndValue(employee,"streetAdress","11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
        object[key] = value;
        return object;

    }
destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(object, key) {
        const newEmployee = {...object};          
        delete newEmployee[key]; 
        return newEmployee;      
}
deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;
}
destructivelyDeleteFromEmployeeByKey(employee , "name");