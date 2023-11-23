const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

function redirectToIndex(req, res, next) {
    res.redirect('/');
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/Equipe.html', (req, res) => {
    res.sendFile(__dirname + '/Equipe.html');
});

app.get('/Noticias.html', (req, res) => {
    res.sendFile(__dirname + '/Noticias.html');
});

app.get('/contato.html', (req, res) => {
    res.sendFile(__dirname + '/contato.html');
});

app.get('/loguin.html', (req, res) => {
    res.sendFile(__dirname + '/loguin.html');
});

app.get('/Serviços.html', (req, res) => {
    res.sendFile(__dirname + '/Serviços.html');
});

app.get('/img/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, 'img', imageName);
    res.sendFile(imagePath);
});

app.get('/EquipeParaInicio', redirectToIndex);
app.get('/EquipeParaNoticias', (req, res) => {
    res.redirect('/Noticias.html');
});
app.get('/EquipeParaContato', (req, res) => {
    res.redirect('/contato.html');
});
app.get('/EquipeParaLoguin', (req, res) => {
    res.redirect('/loguin.html');
});
app.get('/EquipeParaServicos', (req, res) => {
    res.redirect('/Serviços.html');
});

app.get('/NoticiasParaInicio', redirectToIndex);
app.get('/NoticiasParaEquipe', (req, res) => {
    res.redirect('/Equipe.html');
});
app.get('/NoticiasParaContato', (req, res) => {
    res.redirect('/contato.html');
});
app.get('/NoticiasParaLoguin', (req, res) => {
    res.redirect('/loguin.html');
});
app.get('/NoticiasParaServicos', (req, res) => {
    res.redirect('/Serviços.html');
});

app.get('/contatoParaInicio', redirectToIndex);
app.get('/contatoParaEquipe', (req, res) => {
    res.redirect('/Equipe.html');
});
app.get('/contatoParaNoticias', (req, res) => {
    res.redirect('/Noticias.html');
});
app.get('/contatoParaLoguin', (req, res) => {
    res.redirect('/loguin.html');
});
app.get('/contatoParaServicos', (req, res) => {
    res.redirect('/Serviços.html');
});

app.get('/loguin', redirectToIndex);
app.get('/loguinParaInicio', (req, res) => {
    res.redirect('/index.html')
});



app.get('/EquipeParaInicio', (req, res) => { res.redirect('/index.html'); });
app.get('/NoticiasParaInicio', (req, res) => { res.redirect('/index.html'); });
app.get('/contatoParaInicio', (req, res) => { res.redirect('/index.html'); });
app.get('/loguinParaInicio', (req, res) => { res.redirect('/index.html'); });
app.get('/ServicosParaInicio', (req, res) => { res.redirect('/index.html'); });
app.get('/ChatAI.js', (req, res) => {
    res.sendFile(__dirname + '/ChatAI.js');
    res.setHeader('Content-Type', 'application/javascript'); // Define o tipo MIME para JavaScript
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/sua-rota-de-chatbot', (req, res) => {
    console.log('Recebida uma solicitação para /sua-rota-de-chatbot');
    const userMessage = req.body.message;
    console.log('Mensagem do usuário:', userMessage);


    const chatbotResponse = 'Exemplo de resposta do chatbot';

    res.json({ message: chatbotResponse });
});

