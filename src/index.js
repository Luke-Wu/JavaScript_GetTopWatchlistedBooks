export default class BookFaviroute {
    constructor(books, users) {
        this.books = books;
        this.users = users;
    }

    topWatchBooksAmongFriends(userId) {
    

        let currentUser = this.users.find(function (obj) {
          return obj.userId === userId
      });
  
     
      let bookTitleList = []
      currentUser.friends.forEach(function(friend){
        this.books.forEach(function(book){
          if(book.watchlist.includes(friend)){
            bookTitleList.push(book.title)
          }
        })
      })
      
      
  let newtitleList = [];
  bookTitleList.map(function(titleItem){
  let titleObj = {};
  titleObj["count"] = 1;
  titleObj["name"] = titleItem;
  
  newtitleList.push(titleObj);
  });
  
 
  let reduceArray = newtitleList.reduce((newArr, oldItem) => {
  newArr[oldItem.name] = (newArr[oldItem.name] || 0) + oldItem.count
  return newArr;
  }, {})
  
  
  let arrArray = Object.keys(reduceArray).map((key) => {
  return [key, reduceArray[key]];
  })
  
  
  let sortArray = arrArray.sort((arr1, arr2) => {
  let itemArr1 = arr1[1];
  let itemArr2 = arr2[1];
  
  if (itemArr1 > itemArr2) {
    return -1;
  } else if (itemArr1 < itemArr2) {
    return 1;
  } else if (itemArr1 === itemArr2) {
  
    if(arr1[0] < arr2[0]){
      return -1;
    } else if (arr1[0] > arr2[0]) {
      return 1;
    } else {
      return 0;
    }
  }
  })
  
 
  let topThreeArray = (sortArr) => {
  let top3Watched = [];
  if (sortArr.length >= 3) {
    top3Watched.push(sortArr[0][0]);
    top3Watched.push(sortArr[1][0]);
    top3Watched.push(sortArr[2][0]);
    
  }
  return top3Watched;
  }
 
  let threeMostBooks = topThreeArray(sortArray);

  return threeMostBooks.length > 0 ? threeMostBooks : sortArray.map(t => t.name);;
  








}

}