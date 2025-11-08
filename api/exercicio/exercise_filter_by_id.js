// Criando uma nova rota que recebe um ID pela URL. `:monstro_id`
app.get('/monstros/:monstro_id', (req, res) => {

    // Pegando o ID passado pela URL
    let id = req.params.monstro_id;

    // Filtrando o monstro pelo ID
    let monstro = monstros.find(m => m.id == id);

    if (monstro) {
        res.json(monstro);
    } else {
        res.status(404).json({ erro: 'Nenhum monstro encontrado.' });
    }
});
