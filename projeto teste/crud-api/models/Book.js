const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Título do livro
    author: { type: String, required: true }, // Autor do livro
    year: { type: Number, required: true }, // Ano de publicação
    coverImage: { type: String } // Caminho ou URL da imagem da capa
});

module.exports = mongoose.model('Book', bookSchema);
