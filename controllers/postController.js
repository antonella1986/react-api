const posts = require("../data/postsData");
const postsData = require("../data/postsData");
const postsRouter = require("../routers/posts");

//index
function index(req, res){
    res.json(postsData);
}

//show
function show(req, res){
    const postId = Number(req.params.id);
    //cerco il l'id che mi interessa dentro postData (l'array di oggetti)
    //(post rappresenta ogni elemento dell'array postsData
    //se il post.slug è uguale all'id che mi interessa, allora viene restituito
    const post = postsData.find(post => post.id === postId);
    res.json(post);
}

//store
function store (req, res){
    const slug = req.body.title.toLowerCase().split(" ").join("-");

    const newPost = {
        id: postsData.length ? postsData[postsData.length - 1].id + 1 : 1,
        title: "Torta alla banana light",
        slug: slug,
        content: "La torta alla banana light è una ricetta facile e veloce, infatti si prepara con soli 3 ingredienti: yogurt greco, uova e banane; è perfetta per la colazione, soprattutto per chi è in perenne dieta come me! Vi serviranno 200 grammi di yougurt greco, 2 uova e 2 banane mature. Innanzitutto, mettete a riscaldare il forno a 180 gradi e schiacciate le banane. Prendete una scodella dove sbatterete gli albumi e mettete il composto da parte. In un'altra scodella sbattete i tuorli e aggiungete lo yogurt greco e le banane schiacciate. Ora unite dal basso verso l'alto gli albumi montati a neve. Se lo preferite, aggiungete un dolcificante senza calorie. Versate il tutto in una tortiera di circonferenza 14-15 cm e infornate. La torta sarà pronta quando la superficie sarà scura. Lasciate raffreddare e gustate!",
        image: "...",
        tags: ["torta", "banana", "light"]
    }

    postsData.push(newPost);
    console.log(postsData);

    //status corretto
    res.sendStatus(201);
    res.json(newPost);
}

//update
function update(req, res){
    //recupero l'id del post da modificare
    const id = Number(req.params.id);
    //cerco il post tramite id
    const post = postsData.find(post => post.id === id);
    //controllo se esiste il post
    if(!post){
        res.status(404);
        return res.json({
            error: "404 not found",
            message: "Post not found"
        })
    }
    //aggiorno il post
    post.title = req.body.title;
    post.slug = req.body.slug;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    //controllo se il post è stato aggiornato
    console.log(postsData);
    //restituisco il post aggiornato in formato json
    res.json(post);
}

//modify
function modify(req, res){
    res.send(`Modifica parziale del post con id: ${req.params.id}`);
}

//destroy
function destroy(req, res){
    const postId = Number(req.params.id);
    // cerco il post con l'id passato
    const post = postsData.find(post => post.id === postId);
    // imposto il 404 se il post cercato non esiste
    if (!post) {
        res.sendStatus(404);
    }
    //rimuovo il post dall'array
    postsData.splice(postsData.indexOf(post), 1);
    res.status(204)
    console.log(post)
}

module.exports = { index, show, store, update, modify, destroy };