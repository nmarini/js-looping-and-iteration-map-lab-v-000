function lowerCaseDrivers(array) {
  return array.map(function(name) {
    return name.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function(fullName) {
    return Object.assign({}, {
      firstName: fullName.split(' ').slice(0, -1).join(" "),
       lastName: fullName.split(' ').slice(-1).join(" ")
     })
  })
}
