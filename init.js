const DAO = require('./DAO.js')
const fs = require('fs')
const getPort = require('get-port')
const init = require('./initialize.js')


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
    this.computer = []
}

const NORA = new directory('./nora/data')

function N(selector) {
    selector ? null : new NORA.Node()
}

NORA.Node = function () {
    this.create = function() {
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
            (async () => {
                await getPort({port: [1776, 1791, 1865, 1964]})
            })();
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

        sid(1) = $.extend( true, {}, transfer )
        NORA.computer.push(transfer)

        DAO.create(NORA.computer, [screen, username, sid(2), interproto,
        pport, platform(), vers])
    }

    this.initialize = function() {
        new init(0, NORA.computer[0])
    }
}