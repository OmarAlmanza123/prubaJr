npm install mssql

const sql = require('mssql')

const config = {
    user: 'sa',
    password: '',
    server: 'DESKTOP-M2S3G8N\SQLEXPRESS',
    database: 'BD_PruebaJr'
}

sql.connect(config, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Conexión exitosa')
})
const request = new sql.Request()
    
    request.query('SELECT * FROM tu_tabla', (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        
        console.log(result.recordset)
    })
