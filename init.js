const DAO = require('./DAO.js')
const fs = require('fs')
var portfinder = require('portfinder')
const Repository = require('./repository.js')


function directory(dbfp) {
    this.check = function (folder) {
        try {
            fs.statSync(folder)
        } catch(e) {
            fs.mkdirSync(folder)
            new DAO('./data/leveld')
        }
    }

    this.check(dbfp)
}

const NORA = new directory('./nora/data')

function N(selector) {
    const datreposit = new Repository(DAO)
    selector ? null : new NORA.Node()
}

NORA.Node = function () {
    this.create = function() {
        const PORT_NUMS = [1776, 1791, 1865, 1964]

        var screen = readline()
        var username = `@${readline()}`
        var sid = function(value) {
            let id_type

            crypto.randomBytes(79, (err, buf) => {
                if (err) throw err
            id_type = buf.toString('hex')})

            switch(value) {
                case 1:
                    id = `Ø${id_type}`
                break
                case 2:
                    id_type
                break
            }
        }
        var interproto = function() {

        }
        var pport = function(){
            i = 0
            while(i < PORT_NUMS.length) {
                portfinder.getPort({
                    port = PORT_NUMS[i],
                    stopPort = PORT_NUMS[i] - 1},
                function(err, port) {
                    if (err) i++
                    return port
                })
            }
        }
        var vers = '0.1.0'

        function platform () {
            proc = process.platform

            switch(proc) {
                case 'win32':
                    proc = 'Windows'
                break
                case 'darwin':
                    throw new Error('ERR — macOS is unsupported.')
                case 'linux':
                    proc = 'Linux'
                break
                default:
                throw new Error('ERR — OS is unknown.')
            }
        }

        DAO.create(sid(1), [screen, username, sid(2), interproto,
        pport, platform(), vers])
    }
    
}