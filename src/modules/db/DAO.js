const level = require('level')

class Level_DB {
    constructor(filepath) {
        level(filepath, {
            keyEncoding: utf8,
            valueEncoding: binary
        }, function(err, db) {
            switch(err) {
                case level.errors.OpenError:
                    console.log('ERR — Failed to open the Levelup instance.')
                break
                default:
                console.log('ERR — Instance not reached.')
            }

            switch(db.isOpen()) {
                case 'new':
                    console.log('Levelup instance created!')
                break
                case 'open':
                    console.log('Levelup instance is open.')
                break
                case 'opening':
                    console.log(`It's still opening...`)
                break
                case 'close':
                    console.log(`Levelup instance is closed.`)
                break
                case 'closing':
                    console.log(`It's still closing...`)
                break
                default:
                console.log(db.isOpen())
            }
        })
    }

    create(key, value, III) {
        db.put(key, value, III, function(err) {
            if (err) throw err
            console.log('Computer has been initialized.')
        })
    }

    get(key, II) {
        db.get(key, II, function (err, value) {
            if (err) {
                if (err.NotFound) {
                    console.error('ERR — Pair not found.')
                    return
                } else {
                    return callback(err)
                }
            }

            return value
        })
    }
}

module.exports = Level_DB