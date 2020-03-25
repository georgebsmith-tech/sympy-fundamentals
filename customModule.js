function returnLast3(str) {
    return str.substring(str.length - 3, str.length)

}

function returnFirst3(str) {
    return str.substr(0, 3);
}

// console.log(returnLast3("george stanley is a nice combo"));
// console.log(returnFirst3("george stanley is a nice combo"));

module.exports = { returnFirst3, returnLast3 };