const AC = require('./AC.js')
const DAO = require('./dao.js')
const fs = require('fs')
var portfinder = require('portfinder')
const Repository = require('./repository.js')


function directory(dbfp) {
    this.check = function (folder) {
        try {
            fs.statSync(folder)
        } catch(e) {
            fs.mkdirSync(folder)
            const Init = new DAO('./storage.sqlite3')
        }
    }

    this.check(dbfp)
}

const NORA = new directory('./database')

function N(selector) {
    const datreposit = new Repository(DAO)
    var selector = selector ? datreposit.getIP : new NORA.Node()
}

NORA.Node = function () {
    const datreposit = new Repository(DAO)

    this.create = function() {
        const PORT_NUMS = [1776, 1791, 1865, 1964]

        var screen = readline()
        var username = `@${readline()}`
        var analogue_nid = function() {
            crypto.randomBytes(79, (err, buf) => {
                if (err) throw err
                buf.toString('hex')})
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

        datreposit.createDIRtable(AC.initialize)
        datreposit.IN(screen, username, analogue_nid,
        interproto, pport, platform(), vers)
    }
}