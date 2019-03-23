const fs = require('fs')
var sqlite3 = require('sqlite3')

let INdic

fs.access('directory.db', fs.constants.F_OK, (err) => {
    switch (err) {
        case 0:
        err = true
        INdic = true
        break
        case 1:
        err = false
        INdic = false
        break
    }
})

// This function checks for a directory SQL database


// This class function makes a database

class DATABASE {
    constructor(example) {

    }
}

// Nested function w/ switch statement

switch (INdic) {
    case 0:
    INdic == false
    break
    case 1:
    INdic == true
    break
}