//the below script helps you to generate buttons and also include the function
//another way is to addEventListener, which will be covered in 2nd group project

var wordlist = ["ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "n't", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself"];

var imgsrclist = []; 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png"); 
imgsrclist.push("https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png"); 
var img_index = 0; 
var randomindex = null;
var ans = wordlist[randomindex];
var html = '';
var c;
var input = ""; // This is the var for holding the input characters so the user input can be compared to correct answer
var wordlength = null;
var hangman_img_holder = document.getElementById("hangman_img"); 
var level = 0; 

for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}

document.getElementById('box').innerHTML = html;

//The setLetter(x) function is called when a letter button is clicked. x is the parameter, which represents the letter clicked
//This function adds the clicked leter (represented by x) to userinput
var setLetter = function(x) {
//check if level variable is not equal to 0. If level is 0, it simply means game has not started and no letter can be added to user's input
  if(level !== 0){
//If in level 1, maximum allowed guess is 5. Therefore, the function will check if LENGTH of user input 
//remember that we count starting from 0
//If the length of the user's input< allowed maximum try, will update the displayed letters (id 'name') to include the clicked letter parameter x 
    if(level == 1){
      if(input.length < 5){
//this will add the clicked letter (x) to the displayed letters. ID "name" is updated by appending x to the existing value of innerHTML
document.getElementById('name').innerHTML += x;
//The input variable is used to keep track of the letters that the user has guessed so far
//this adds the clicked letter x to the user's input string
        input += x;
      }
//
    } else if(level == 2) {
      if(input.length <= 8){
        document.getElementById('name').innerHTML += x;
        input += x;
      }
    } else if(level == 3){
      if(input.length <= 10){
        document.getElementById('name').innerHTML += x;
        input += x;
      }
    }
  }
};


// F.gen a random word
//the genword () function
//randomindex variable REPRESENTS the INDEX of a string in the wordlist array
//randomindex is then used to select a random word from the wordlist array by indexing into the array using square brackets and assigning the selected word to the ans variable
//wordlist[randomindex] is an expression that selects a random word from the wordlist array based on a randomly generated index
const genword = () => {
  randomindex = Math.floor(Math.random() * wordlist.length);
  ans = wordlist[randomindex];
}


//F.Level One
//levelOne () function will call genword() function
//Next, it checks the length of the variable ans. If yes, the function sets the variable 'level' to '1'. Also, update the HTML display to Level 1

const levelOne = () => {
  genword(); //
  
  if (ans.length <= 5) {
//below will execute until ans is less than or equal to 5
    level = 1; //the level variable will be set to 1
document.getElementById('answer').innerHTML = "Level 1"; 

//If the length of ans is greater than 5, the levelOne function calls itself recursively until ans is less than or equal to 5
  } else { levelOne() }
}

//F.Level Two
const levelTwo = () => {
  genword();
  if (ans.length > 5 && ans.length <= 8) {
    level = 2; 
    document.getElementById('answer').innerHTML = "Level 2";
  } else { 
    levelTwo(); 
  }
}

//F. Level Three
const levelThree = () => {
  genword();
  if (ans.length > 8 && ans.length <= 10) {
    level = 3; 
    document.getElementById('answer').innerHTML = "Level 3";
  } else { 
    levelThree(); 
  }
}



//F. Clear user input
//change variable input and the html display to a empty string
const clearAll = () => {
  input = "";
  document.getElementById('name').innerHTML = "";
}


//F. Restart the game 
function restart(){
  img_index = 0; 
  hangman_img_holder.setAttribute("src", imgsrclist[img_index]);
  document.getElementById("demo").innerHTML = ""; 
  clearAll(); 

  if(level == 1){
    levelOne(); 
  } else if(level == 2) {
    levelTwo(); 
  } else if(level == 3){
    levelThree(); 
  }
}

//F. show the answer
function showAns(){
  if(level != 0){
    document.getElementById('answer').innerHTML = "Level " + level + " " + "Answer: " + ans; 
  }
}


// Another way to addEventListener
document.getElementById("clickme").addEventListener("click", function() { 
  document.getElementById("demo").innerHTML = ""; 
  if (input.toLowerCase() == ans) {
    document.getElementById("demo").innerHTML = 'Input answer matches';
    clearAll(); 
    level = 0; 
    document.body.style.backgroundColor = "lightgreen"; 
  } else {
    if(level != 0){
      img_index++; 
      hangman_img_holder.setAttribute("src", imgsrclist[img_index]);
    }
    if(img_index > 5){
      document.getElementById("demo").innerHTML = "Gameover. The answer is " + ans + ". "; 
      hangman_img_holder.setAttribute("src", imgsrclist[6]);
    } else {
      for (var i = 0; i < ans.length; i++) {
        if (input.charAt(i).toLowerCase() == ans.charAt(i)) {
          document.getElementById("demo").innerHTML += input.charAt(i);
        } else {
          document.getElementById("demo").innerHTML += '-';
        }
      }
    }
  }
});

