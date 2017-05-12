// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if(err){ 
		return console.log("Unable to connect to mongodb server");
	}
	console.log("Connected to mongodb server");

	db.collection("Users").findOneAndUpdate(
		{
			_id: new ObjectID("591200f0fcabb905666f1314")
		},
		{
			$set: {name: "dani"},
			$inc: {age: +1}
		},
		{
			returnOriginal: false
		})
	.then((result) => {
			console.log(result);
		}
	);

	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID("591348c13d216e782c510756")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// }); 

	// db.close();
});