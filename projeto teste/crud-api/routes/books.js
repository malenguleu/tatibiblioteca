const express = require('express');
const multer = require('multer');
const path = require('path');
const Book = require('../models/Book');
const router = express.Router();

// Configuração do Multer para armazenar as imagens na pasta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde as imagens serão armazenadas
    },
    filename: (req, file, cb) => {
        // Usar um nome único para o arquivo baseado no timestamp
        cb(null, Date.now() + path.extname(file.originalname)); // Ex: 1609459200000.jpg
    }
});

// Filtra apenas arquivos de imagem (JPEG, PNG, etc)
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Arquivo de imagem inválido!'), false);
    }
};

// Inicializando o Multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limite de 5MB para a imagem
}).single('coverImage'); // 'coverImage' é o nome do campo no form HTML

// Rota POST para adicionar um novo livro com capa de imagem
router.post('/', upload, async (req, res) => {
    const { title, author, year } = req.body;
    const coverImage = req.file ? req.file.path : null; // Caminho da imagem

    try {
        const newBook = new Book({ title, author, year, coverImage });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error });
    }
});

// Rota GET para buscar todos os livros
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});

// Rota PUT para atualizar um livro, incluindo a capa de imagem
router.put('/:id', upload, async (req, res) => {
    const { title, author, year } = req.body;
    const coverImage = req.file ? req.file.path : null; // Caminho da imagem

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, year, coverImage },
            { new: true }
        );
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// Rota DELETE para deletar um livro
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

module.exports = router;
