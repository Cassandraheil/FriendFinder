var friends = require("../data/friends");



module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  });



  app.post("/api/friends", function (req, res) {
    //make a new friend with recieved data
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    //convert scores to numbers
    for (i = 0; i < 10; i++) {
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
    };
    // compare each friends score to the new one
    var friendScores = [];
    
    for (i = 0; i < friends.length; i++) {
      var userScore = 0
      for (k = 0; k < newFriend.scores.length; k++) {
        //find the difference index by index
        userScore += Math.abs(friends[i].scores[k] - newFriend.scores[k]);
      };
      friendScores.push(userScore);
      
    };
    //find the lowest number representing their new best friend forever
    var lowest = Math.min.apply(Math, friendScores);
    console.log("friend score in comparison", friendScores);
    console.log("lowest", lowest);

    //get the person attached to this score
    var BFFIndex = friendScores.indexOf(lowest);
    var BFF = friends[BFFIndex];
    console.log("bff", BFF); 

    friends.push(newFriend)
    
    return res.json(BFF)
    
  });

}
