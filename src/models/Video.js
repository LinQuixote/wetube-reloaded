import mongoose from "mongoose";

// describing the shape of object what things should be
const videoSchema = new mongoose.Schema({
    title: {type:String, required:true, trim:true},
    description: {type:String, required:true},
    createdAt: {type:Date, required: true, default: Date.now},
    hashtags: [{type:String, trim:true}],
    meta : {
        views:{type:Number, default:0},
        rating:{type:Number, default:0},
    }
});
videoSchema.static('formatHashtags', function(hashtags) {
    return hashtags.split(",").map((word)=> word.startsWith('#') ? word : `#${word}`);
})

const Video = mongoose.model("Video", videoSchema)
export default Video

