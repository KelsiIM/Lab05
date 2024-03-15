const express = require("express");
const app = express();
const path = require("path");


// middleware
app.use(express.static(path.join(__dirname,'./public')));
app.set('view engine', 'ejs');

// routes
app.get("/", (req, res) => {
    
    const toy = [
        {"title":"Hornby Santa's Express Train Set","manufacturer":"Hornby","url":"https://www.amazon.co.uk/Hornby-Train-Set-Scotsman-Analogue/dp/B0CRF5YFVB/ref=sr_1_1_sspa?crid=11C92VFYMLYXM&dib=eyJ2IjoiMSJ9.GGDFJ-0xObihEdt5fdRCjJIvEeHyQ7s1NeT7pCUe6dJdnKUHfSgdFnsrTiHQK-olSipt9hq-jkW4cx76iFMHQd5Sn0zVUinyMzUIfuuqnFkoXEPSdKVxCO5NmB94de0g4zqLFEc5lKjKTfEjorQTgJKYh-hKY5wCBtmJGa5-ahSdzKI-J_qSQ2V3fo6-uIEmjFxIeKZ1ReQ6eP1tx1SdAqNg4ErEuikSmklpC-5F476SmM4xptEvEG0aSjG5SEXj7OTTjvuJRa35pGJGcdANsUlMfZ68W3RMROtC6K6HZ_w.qQDCAqhRM1N-iogxVzSJVIQn4CI8uLzGqtMtosiO6uE&dib_tag=se&keywords=Hornby%2BSanta%27s%2BExpress%2BTrain%2BSet&qid=1710243859&sprefix=hornby%2Bsanta%27s%2Bexpress%2Btrain%2Bset%2Caps%2C53&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"},
        {"title":"Chuggington Interactive Wash and Fuel Set with Brewster Train Toy","manufacturer":"Chuggington","url":"http://www.amazon.co.uk/Learning-Curve-Diecast-Chuggington"},
        {"title":"Thomas and Friends Take-n-Play Molly","manufacturer":"Fisher-Price","url":"http://www.amazon.co.uk/Thomas-Friends-Take-n-Play-Samson-Engine/dp/B00R4YIOV2"},
        {"title":"Harry Potter - Diecast Hogwarts Express Train","manufacturer":"Corgi","url":"http://www.amazon.co.uk/Harry-Potter-Hogwarts-Express-Model/dp/B000V3RCM0"},
        {"title":"WWF Wolf plush stuffed soft animal toy","manufacturer":"IBTT","url":"http://www.amazon.co.uk/Flopsie-13269-12-inch-Wolf/dp/B007HLJXRQ"},
        {"title":"Melissa & Doug Jack Russell Terrier Plush Toy","manufacturer":"Melissa & Doug","url":"http://www.amazon.co.uk/Melissa-Doug-Chihuahua-Plush-Toy/dp/B003NSBKXM"},
        {"title":"Plants vs Zombies Sprinter Zombie Plush 11 inch","manufacturer":"Plants vs Zombies","url":"http://www.amazon.co.uk/Lovely-Plush-Doll-28cm-gift/dp/B00P2AYOK0"},
        {"title":"Marvel Captain America Distressed Shield Logo","manufacturer":"Titan Merchandise","url":"http://www.amazon.co.uk/Soldier-Captain-America-Marvel/dp/B00BGXIRD2"},
        {"title":"Charlie Bears - Thistle","manufacturer":"Charlie Bears","url":"http://www.amazon.co.uk/Charlie-Bears-Terry/dp/B00ZIMM6T8"},
        {"title":"Smasha-Ballz Mini Van Wolf Plush","manufacturer":"Smasha-Ballz","url":"http://www.amazon.co.uk/Smasha-Ballz-28136-8500-Mini-Zeebo-Plush/dp/B00A21KZB6"},
        {"title":"Snoopy - Woodstock Small Soft Toy In Gift Bag","manufacturer":"Snoopy","url":"http://www.amazon.co.uk/Peanuts-60406-11-inch-Snoopy-Plush/dp/B00NO77LZI"},
        {"title":"My Little Pony Friendship Magic Collection - Plush Doll 6 Pieces Doll Set 6.5\" (Rarity, Pinkie Pie, Applejack, Fluttershy, Rainbow Dash and Twilight Sparkle)","manufacturer":"Aurora My Little Pony","url":"http://www.amazon.co.uk/Original-Beanies-Little-Pony-Rarity/dp/B00HQDDXJ4"},
        {"title":"Sesame Street - Snuffleupagus 17","manufacturer":"Gund","url":"http://www.amazon.co.uk/Big-Bird-Soft-Toy-14/dp/B000BGT6CG"},
        {"title":"Dempsey Designs Minicraft 18cm Guinea Pig Kit Length","manufacturer":"Dempsey Designs Minicraft","url":"http://www.amazon.co.uk/Dempsey-Designs-Factory-Minicraft-Filling/dp/B000WNZ1SQ"},
        {"title":"Cuddly Soft Spinosaurus Dinosaur Soft Toy Gift 43cm","manufacturer":"Ravensden","url":"http://www.amazon.co.uk/Plush-Brontosaurus"},
        {"title":"Mickey Mouse 36 x 36cm Mickey Cushion","manufacturer":"Mickey Mouse","url":"http://www.amazon.co.uk/Mickey-Mouse-14967-Minnie-Cushion/dp/B008D1CUH4"}
    ];
    
    res.render('index', {mydata: toy});
});



app.listen(3000, (err)=>{
     if(err) throw err;
     console.log(`Server is listening on //localhost:3000`)
});