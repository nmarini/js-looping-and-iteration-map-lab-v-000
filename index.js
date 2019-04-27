function lowerCaseDrivers(array) {
  return array.map(function(name) {
    return name.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function(fullName) {
    let first = fullName.split(' ').slice(0, -1).join()
    let last = fullName.split(' ').slice(-1).join()
    debugger
    return Object.assign({}, fullName, {firstName: first, lastName: last})
  })
}
