const AC = require('./AC.js')

class REPO {
    constructor(access){
        this.DAO = access
    }

    createDIRTable(code) {
        if (code == AC.initialize) {
            const sql_cq = `
            CREATE TABLE IF NOT EXISTS directory (
                s_nm TEXT NOT NULL UNIQUE,
                unm TEXT NOT NULL UNIQUE,
                c_id INTEGER PRIMARY KEY,
                ip TEXT NOT NULL,
                port INTEGER NOT NULL,
                os TEXT NOT NULL,
                version TEXT NOT NULL,
            );`
            return this.DAO.run(sql_cq)
        } else {
            CHECK('directory')
        }
    }

    create(s_nm, unm, c_id, ip, port, platform, version) {
            return this.DAO.run(`
            INSERT INTO directory (s_nm, unm, c_id, ip, port, platform, version) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [s_nm, unm, c_id, ip, port, platform, version])
        }

    update(datapro) {
        const { id, s_nm, unm, ip, port, os, version} = datapro
        return this.DAO.run(
            `UPDATE directory
            SET s_nm = ?,
                unm = ?,
                ip = ?,
                port = ?,
                os = ?,
                version = ?
            WHERE id = ?`,
        [s_nm, unm, ip, port, os, version, id])
    }

    delete(id) {
        return this.DAO.run(
            `DELETE FROM directory WHERE id = ?`,
        [id])
    }

    getIP(id) {
        return this.DAO.get(
            `SELECT ip FROM directory WHERE c_id = ?`,
        [id], (err, row) => {
            if (err) throw err
            return row
        })
    }

    getAll() {
        return this.DAO.all(`SELECT * FROM directory`)
    }
}

class CHECK {
    constructor(name){
        return this.DAO.get(`SELECT name FROM sqlite_master WHERE type='table' AND name=${name}`,
        function(err, row) {
            if (row !== undefined) {
                console.log(err)
                throw new Error('ERR — The directory exists.')
            } else {
                throw new Error('ERR IS UNKNOWN')
            }
        })
    }
}

modules.export = REPO