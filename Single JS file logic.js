
    var books = [
      {
        "title": "Book 1",
        "duration": "PT122M",
        "actors": [
          "Tim Test",
          "Fina Freeman",
          "Bob William"
        ],
        "ratings": [
          {"userId": 7002, "rating": 8},
          {"userId": 9251, "rating": 9},
          {"userId": 34140, "rating": 8}
        ],
        "favorites": [66381, 7002, 9251, 34140],
        "watchlist": [15292, 51418, 62290, 6147, 71390, 93708]
      },
      {
        "title": "Book 2",
        "duration": "PT165M",
        "actors": [
          "Test Brand",
          "Alcme Pac",
          "Jane Can"
        ],
        "ratings": [
          {"userId": 15292, "rating": 9},
          {"userId": 51418, "rating": 9},
          {"userId": 7002, "rating": 9},
          {"userId": 9251, "rating": 7},
          {"userId": 71390, "rating": 9}
        ],
        "favorites": [15292, 51418, 7002, 9251, 71390, 93708],
        "watchlist": [62290, 66381, 34140, 6147]
      },
      {
        "title": "Book 3",
        "duration": "PT152M",
        "actors": [
          "Christ Baleme",
          "Heath William",
          "Aaron Zhang"
        ],
        "ratings": [
          {"userId": 15292, "rating": 8},
          {"userId": 7002, "rating": 9},
          {"userId": 9251, "rating": 6},
          {"userId": 34140, "rating": 7},
          {"userId": 93708, "rating": 7}
        ],
        "favorites": [15292, 7002, 9251, 34140, 93708],
        "watchlist": [51418, 62290, 6147, 71390]
      },
      {
        "title": "Book 4",
        "duration": "PT195M",
        "actors": [
          "Lim Nees",
          "Rob Fiennes",
          "Ben Huang"
        ],
        "ratings": [
          {"userId": 62290, "rating": 8},
          {"userId": 66381, "rating": 5},
          {"userId": 6147, "rating": 6},
          {"userId": 71390, "rating": 7}
        ],
        "favorites": [62290, 66381, 6147, 71390],
        "watchlist": [15292, 51418, 7002, 9251, 93708]
      },
      {
        "title": "Book 5",
        "duration": "PT154M",
        "actors": [
          "Jack Travolta",
          "Ume Thur",
          "Sam Jackson"
        ],
        "ratings": [
          {"userId": 15292, "rating": 10},
          {"userId": 51418, "rating": 9},
          {"userId": 62290, "rating": 9},
          {"userId": 66381, "rating": 9},
          {"userId": 71390, "rating": 8},
          {"userId": 93708, "rating": 10}
        ],
        "favorites": [15292, 51418, 62290, 66381, 71390, 93708],
        "watchlist": [7002, 9251, 34140, 6147]
      },
      {
        "title": "Book 6",
        "duration": "PT201M",
        "actors": [
          "Test Actor",
          "Test1 Actor",
          "Test2 Actor"
        ],
        "ratings": [
          {"userId": 62290, "rating": 3},
          {"userId": 66381, "rating": 5},
          {"userId": 34140, "rating": 6},
          {"userId": 6147, "rating": 7},
          {"userId": 71390, "rating": 7}
        ],
        "favorites": [62290, 66381, 34140, 6147, 71390, 93708],
        "watchlist": [15292, 51418, 7002, 9251, 34140, 6147, 71390, 93708]
      }
    ];
   var users = [
    {
      "userId": 15292,
      "email": "Constan_test15@qq.com",
      "friends": [7002, 51418, 62290]
  },
  {
      "userId": 7002,
      "email": "Liam3@baidu.com",
      "friends": [15292, 51418, 62290, 66381]
  },
  {
      "userId": 51418,
      "email": "Lenin81@gmail.com",
      "friends": [15292, 7002, 9251]
  },
  {
      "userId": 62290,
      "email": "kingsley.Test@alibaba.com",
      "friends": [15292, 7002]
  },
  {
      "userId": 9251,
      "email": "Luke16@qq.com",
      "friends": [66381, 51418]
  },
  {
      "userId": 66381,
      "email": "Mike_Lubowitz61@qq.com",
      "friends": [7002, 9251]
  },
  {
      "userId": 34140,
      "email": "Nwood42@baidu.com",
      "friends": [6147,93708]
  },
  {
      "userId": 6147,
      "email": "use_test@resoft.com",
      "friends": [93708,71390,34140]
  },
  {
      "userId": 71390,
      "email": "use_Ruse@qq.com",
      "friends": [6147,93708]
  },
  {
      "userId": 93708,
      "email": "test_user@resoft.com",
      "friends": [6147,34140,71390]
  }
    ];
   

var findUser = function(obj)
{
    return obj.userId === userId;
}

var topWatchBooksAmongFriends = function(userId) {
    // TODO: Implement
    
    let currentUser = users.find(function (obj) {
        return obj.userId === userId
    });

   
    bookTitleList = []
    currentUser.friends.forEach(function(friend){
      books.forEach(function(book){
        if(book.watchlist.includes(friend)){
          bookTitleList.push(book.title)
        }
      })
    })
    
    //returns an array of objects with count and name. With duplicates.
let newtitleList = [];
bookTitleList.map(function(titleItem){
let titleObj = {};
titleObj["count"] = 1;
titleObj["name"] = titleItem;

newtitleList.push(titleObj);
});

//returns an array of objects with their count "reduced" into, no duplicates.
//no idea how this code works.
let reduceArray = newtitleList.reduce((newArr, oldItem) => {
newArr[oldItem.name] = (newArr[oldItem.name] || 0) + oldItem.count
return newArr;
}, {})

//converts the array of objects to an array of arrays
let arrArray = Object.keys(reduceArray).map((key) => {
return [key, reduceArray[key]];
})

//sorts array first by view count, then by alphabetical order if the same view count.
let sortArray = arrArray.sort((arr1, arr2) => {
let itemArr1 = arr1[1];
let itemArr2 = arr2[1];

if (itemArr1 > itemArr2) {
  return -1;
} else if (itemArr1 < itemArr2) {
  return 1;
} else if (itemArr1 === itemArr2) {
  // order alphabetically
  if(arr1[0] < arr2[0]){
    return -1;
  } else if (arr1[0] > arr2[0]) {
    return 1;
  } else {
    return 0;
  }
}
})

//checks to see if there is more than 4 items in the array. if there is, it returns an array of only 4.
let topThreeArray = (sortArr) => {
let top3Watched = [];
if (sortArr.length >= 3) {
  top3Watched.push(sortArr[0]);
  top3Watched.push(sortArr[1]);
  top3Watched.push(sortArr[2]);

}
return top3Watched;
}
//sets this array of 4 to a variable
let ThreeMostBooks = topThreeArray(sortArray);
//checks to see if array of 4 exists, if so returns that array, if not returns however many it can. use users[4] to check as the function argument
//return fourMostMovies.length > 0 ? fourMostMovies : newtitleList;
return sortArray;
//return newtitleList.map(t => t.name);
}

console.log(topWatchBooksAmongFriends(93708));

