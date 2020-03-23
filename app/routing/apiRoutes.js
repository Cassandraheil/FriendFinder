var friends = require("../data/friends");



module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  });
  
  
  // Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
  //scoreNumbers()
  //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
  //    * Example:
  //      * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
  //      * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
  //      * Total Difference: **2 + 1 + 2 =** **_5_**
  //  * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
  //  * The closest match will be the user with the least amount of difference.
  
  app.post("/api/friends", function (req, res) {
    
    
    // $(".modal-body").push("the name of person");
    // $("#myModal").modal();
    
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log("this is new friend", newFriend)
    friends.push(newFriend)
    
    return res.json(newFriend)
    
    

  });
  
}


// scoreNumbers();

//     function scoreNumbers() {
//       for (i = 0; i < friends.scores.length; i++) {
//         parseInt(friends.scores[i]);
//         numScore.push(friends.scores[i]);
//       };
//       compare()
//     };
//     function compare(){
//       var numScore = [];
//       console.log("numbscores",numScore)
//     };