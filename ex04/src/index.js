function compareDifferentValues(m,n) {
if(m === n) {
    return "Equal";
}
    return "NotEqual";
}  
console.log(compareDifferentValues(8, "8")); 
console.log(compareDifferentValues("8", 8)); 
console.log(compareDifferentValues('8', 8)); 
console.log(compareDifferentValues("8", "8")); 
console.log(compareDifferentValues(8, 8)); 

module.exports = compareDifferentValues;