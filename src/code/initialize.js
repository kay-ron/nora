var swarm = require('discovery-swarm')
var defaults = require('dat-swarm-defaults')

class Initialize {
    constructor(value, id) {
        switch(value) {
            case 0:
                start(id)
            break
        }
    }

    start(c_id) {
        var config = defaults({
            id: c_id,
            utp: false,
            tcp: true,
            dns: false,
            dht: true
        })
        var sw = swarm(config)


    }

}

module.exports = Initialize