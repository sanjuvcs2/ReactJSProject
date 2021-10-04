const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({
    nameId: os.userInfo().username,
    user: 'test',
    password: 'password',
    isSuccess: true
}));

app.get('/api/send', (req, res) => res.send({
    nameId: 'test',
    user: 'test',
    status: 'success'
}));

app.get('/api/getPageContent', (req, res) => res.send(
    {
        userId: 1,
        id: 1,
        hometitle: 'Home',
        aboutUs: 'About Us',
        innerTitle: "The standard Lorem Ipsum passage, used since the 1500s",
        imgurl: 'http://placehold.it/1200x400/2980b9/ffffff&text=Portfolio',
        trans: '1914 translation by',
        homeContentPage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }
));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
