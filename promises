//Understanding Promises in Javascript
//Completing tasks one after the other.
let wakeup = function() {
  return new Promise(function(resolve, reject) {
	var value=true;//change this value between true-false to get resolve/reject content	
	if(value)
    	resolve('I Woke Up,');
	else
	reject("sorry, couldn't clean the room");
  });
};

let breakfast = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then took breakfast,');
  });
};

let randomStuff = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' then spent time on quora/medium/news');
  });
};

wakeup().then(function(result){
	return breakfast(result);
}).then(function(result){
	return randomStuff(result);
}).then(function(result){
	console.log('final call finished!!!! \n ' + result);
}).catch(function(reason){ 
  console.log(reason)
});


//Promise.all() for fetching apis together(parallel), no waiting here
var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}).catch(reason => { 
  console.log(reason)
});



//Promise in DOM - while deleting a element in dom
function deleteCat(catId){
    return database.delete('cats',catId)
}

function deleteButtonClickHandler(e){
    var catId=e.target.data['cat-id']
    deleteCat(catId)
    .then(()=>removeItemElementFromPage(catId))
    .catch(err=>
	showMessageDialog(
	    'item' + getCatName(catId) + 'was not deleted'))
      }

	
//Promises with Axios

var url='https://jsonplaceholder.typicode.com/posts/1';
var url2='https://jsonplaceholder.typicode.com/posts/22';
var url3='https://jsonplaceholder.typicode.com/posts/33';
function makeAjaxCall(url){
return axios({
  method: 'get',
  url: url ,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
});
}
 function successRes(res){
 console.log(res.data)
 }
 function errorRes(err){
 console.log(err.response.status);
 }
//makeAjaxCall(url).then(successRes,errorRes);
makeAjaxCall(url).then(function(result){
	console.log(result.data);
  return makeAjaxCall(url2);
}).then(function(result){
	console.log(result.data);
})



