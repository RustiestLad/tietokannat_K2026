console.log('*** TESTI ***');
const express = require('express')
const mysql = require('mysql2/promise')
const app = express()

app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Admin',
    password: 'Mansikat123',
    database: 'Opiskelijat'
});


app.listen(3000, () => {
    console.log('Serveri käynnistyy...');

});

app.get('/testi', (req, res) => {
    res.send('Palvelin toimii');
});

app.post('/api/opiskelijat', async (req, res) => {

    const {
        etunimi,
        sukunimi,
        osoite,
        luokkatunnus
    } = req.body;

    await pool.query(
        'CALL LisaaOpiskelija(?, ?, ?, ?)',
        [etunimi, sukunimi, osoite, luokkatunnus]
    );

    res.send('Opiskelija lisätty!');
});

app.get('/api/opiskelijat', async (req, res) => {
    const [rows] = await pool.query('CALL NaytaOpiskelijat()');
    res.json(rows);
});

app.delete('/api/opiskelijat/:id', async (req, res) => {
    const id = Number(req.params.id);
    await pool.query('CALL PoistaOpiskelija(?)', [id]);
    res.send('Opiskelija poistettu!');
});

app.put('/api/opiskelijat/:id', async (req, res) => {
    try {
        const {
            etunimi,
            sukunimi,
            osoite,
            luokkatunnus
        } = req.body;

        await pool.query(
            'CALL PaivitaOpiskelija(?, ?, ?, ?, ?)',
            [
                req.params.id,
                etunimi,
                sukunimi,
                osoite,
                luokkatunnus
            ]
        );

        res.send('Opiskelija päivitetty!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Virhe päivityksessä');
    }
});