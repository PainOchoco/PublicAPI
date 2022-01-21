const fetch = require('node-fetch')

async function mojang(req, res) {
    return fetch(`https://api.mojang.com/${req.url.split('/mojang/')[1]}`).then((res) => res.json());
}

module.exports = mojang
