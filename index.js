const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://cishika104:doraemon1234@cluster0.khhhxjh.mongodb.net/movieApp').then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("NO"+err);
})

const movieSchema=new mongoose.Schema({
    name:String,
    year:Number,
    rating:Number,
    isWatched:Boolean
})

const Movie=mongoose.model('Movie',movieSchema);

// const Ironman=new Movie({name:'Ironman',year:2016,rating:8.6,isWatched:true});
// Ironman.save().then((m)=>{
//     console.log("Saved")
// }).catch((err)=>{
//     console.log(err);
// })

const dummy_movies=[{
    name:'jab we met',
    year:2006,
    rating:10,
    isWatched:true
},{
    name:'ddlj',
    year:2010,
    rating:7.8,
    isWatched:false
},{
    name:'dhoom',
    year:2012,
    rating:8.6,
    isWatched:true
}];

// Movie.insertMany(dummy_movies).then((m)=>{
//     console.log(m);
// }).catch((err)=>{
//     console.log(err);
// })

Movie.create({name:'hulchul',year:2015,rating:9.6,isWatched:true}).then((m)=>{
    console.log(m);
}).catch((err)=>{
    console.log(err);
})