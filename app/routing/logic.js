// $(#containerid for matches).hide();
// $(#containerid for questions).show();





$("#submitbutton").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    var newFriend = {
        name:$("#name").val().trim(),
        Photo:"",
        scores:[
            $("#answer1").val().trim(),
            $("#answer2").val().trim(),
            $("#answer3").val().trim(),
            $("#answer4").val().trim(),
            $("#answer5").val().trim(),
            $("#answer6").val().trim(),
            $("#answer7").val().trim(),
            $("#answer8").val().trim(),
            $("#answer9").val().trim(),
            $("#answer10").val().trim()
           
        ]
  
    };

    console.log(newFriend);

    // pull json data from friends.js 
// 
// // make variable for friends.length length of object 
// Delcare array variable to record differences in scores var diff=[];
// for loop to chose first friend in friends object
// for (i=0; i<friends.length; i++){
    // console.log(friends.length)
// var compareFriend=friends[i]
// another for loop to compare scores
//         for(j=0; j<compareFriend.scores.length; j++)                 {var diff[j]=compareFriend.scores[j]-newFriend.scores[j];
// //  if (var diff[j] < 0){
//     var diff[j]=0;
// }
// ]

// }
// }
[]
// 1
// 1
// 1
// 1
// 1
// 1
});



