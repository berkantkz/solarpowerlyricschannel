var request = require('request');
var botApiKey = process.env.BOTAPIKEY;

var songList = ["the_path", "solar_power", "california", "stoned_at_the_nail_salon", "fallen_fruit", "secrets_from_a_girl", "the_man_with_the_axe", "dominoes", "big_star", "leader_of_a_new_regime", "mood_ring", "oceanic_feeling"];
lyrics = {
    "0" : ["Teen millionaire having nightmares from the camera flash", "Now I'm alone on a windswept island", "Won't take the call if it's the label or the radio", "Now if you're looking for a saviour, well, that's not me", "You need someone to take your pain for you?\nWell, that's not me", "'Cause we are all broken and sad", "Where arе the dreams that we had?", "Can't find thе dreams that we had", "Let's hope the sun will show us the path, path", "I just hope the sun will show us the path", "Savior is not me"],
    "1" : ["I hate the winter, can't stand the cold", "I tend to cancel all the plans (so sorry, I can't make it)", "Can I kick it? Yeah, I can", "No shirt, no shoes, only my features", "Come one, come all, I'll tell you my secrets", "I'm kinda like a prettier Jesus", "Forget all of the tears that you've cried\nIt's over", "Are you coming, my baby?", "Can you reach me? No, you can't", "Come on and let the bliss begin"],
    "2" : ["And I knew that's it, I'll never be the same", "Now I've spent thousands on you darling", "All the hotels and the jets\nAnd I'd pay it all again\nTo have your golden body back in my bed", "Goodbye to all the bottles, all the models\nBye to the clouds in the skies that all hold no rain-", "Don't want that California love", "It's just a dream\nIt's all just a dream\nI wanna wake up, I wanna wake up"],
    "3" : ["Well, my hot blood's been burnin' for so many summers now", "'Cause all the beautiful girls, they will fade like the roses\nAnd all the times they will change, it'll all come around", "Maybe I'm just stoned at the nail salon", "Got a memory of waitin' in your bed wearin' only my earrings", "But the sun has to rise, when it does, we'll divide up the papers", "[...] I'm still crazy for you, babe", "Spend all the evenings you can with the people who raised you\n'Cause all the times they will change, it'll all come around"],
    "4" : ["We had no idea the dreams we had were far too big", "And we will walk together", "We'll disappear in the cover of the rain", "It's time for us to leave", "But how can I love what I know I am gonna lose?"],
    "5" : ["It's a funny thing, thought you'd never gain self control", "Guess it's been a while since you last said sorry", "Growing up a little at a time then all at once", "Everybody wants the best for you\nBut you gotta want it for yourself\nMy love", "You can take 'em if you want 'em, these are just\nSecrets from a girl, who's seen it all", "Baby girl, no one's gonna feel the pain for you", "You're gonna love again, so just try staying open", "And when the time comes, you'll fall", "They won't let you down", "Do your best to trust all the rays of light", "The temperature is unbearable until you face it"],
    "6" : ["But our shapes in the dark are the reason I've stayed for all these years", "I thought I was a genius", "They fill up my nights and then they float away"],
    "7" : ["Just another phase you're rushing on through", "The whole world changes right around you"],
    "8" : ["Everyone knows that you're too good for me, don't they?", "I can't believe I used to stay inside", "But every perfect summer's gotta say goodnight", "Now I watch you run through the amber light", "Drinking in the dark, take me home tonight", "Baby, you're a big star", "I've got so much to tеll you and not enough time to do it in", "I'll still watch you run through the winter light", "Baby, you're a big star\nYou're a big star\nWanna take your picture\n'Til I die\n'Til I die\n'Til I die."],
    "9" : ["I'm gonna live out my days"],
    "10" : ["Can't seem to fix my mood", "Today it's as dark as my roots", "Now all of my oceans have riptides", "Can't seem to find what's wrong", "The whole world is letting me down", "Don't you think the early 2000s seem so far away?", "I can't feel a thing", "Tell me how I'm feeling", "Let's fly somewhere eastern, they'll have what I need", "We'll keep dancing 'til the mood rings", "Take me to some kinda\nTake me to some kinda\nTake me to some kinda place\anywhere", "Watch the sun set, look back on my life\nI just wanna know, will it be alright?"],
    "11" : ["Can you hear the waves and the cicadas all around?", "Brain so hot, it's a summer body\nEvery day is blue and never cloudy", "I can make anything real", "I just had to breathe", "Oh, was enlightenment found?\nNo, but I'm tryin', takin' it one year at a time", "I know you'll show me how, I'll know when it's time\nTo take off my robes and step into the choir."],
}

var song = lyrics[Math.floor(Math.random() * songList.length)];
var lyric = song[Math.floor(Math.random() * song.length)];

var uri = "https://api.telegram.org/" + botApiKey + "/sendMessage?chat_id=@solarpowerlyrics&parse_mode=markdown&text=" + "" + lyric + "";

request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
