const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM persona, docente, curso, curso_docente', (err, rows)=>{
            if(err) return res.send(err)
              res.json(rows)
        })
    })
})

routes.post('/', (req, res)=> {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO estudiante_curso ', (err, rows)=>{
            if(err) return res.send(err)

            res.json('curso insertado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM persona where id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('persona agregada')
        })
    })
})


module.exports = routes;