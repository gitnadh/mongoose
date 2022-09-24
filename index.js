const Person = require("./person");
//Create_and_Save_a_Record_of_a_Model
Person.insertMany([{
    name:"Nidhal Rebhi",
    age:25,
    favoriteFoods:["Pizza","Pasta","Meal"]
}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});
//Create many model
Person.create([
    {
        name:"Zahra",
        age:30,
        favoriteFoods:["Couscous","Pizza"]
    },
    {
        name:"Chaaben",
        age:43,
        favoriteFoods:["Every","Food"]
    },
    {
        name:"Josef",
        age:19,
        favoriteFoods:["Pizza","Pasta"]
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});


//Use_model.find()_to_Search_Your_Database
Person.find().then(remainingPerson => {console.log(remainingPerson)});


//Use_model.findOne()
Person.findOne().then(remainingPerson => {console.log(remainingPerson)});



//Use_model.findById()
var id = "616adc1542221ee3848c8903"; //just exemple 
Person.findById(id, function (err, docs) {console.log(docs)});



//model.findOneAndUpdate()
Person.findOneAndUpdate({"name":"Nidhal Rebhi"},{$set:{age:"26"}})
.then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});



//model.findByIdAndRemove()
Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});



//model.remove()
Person.remove({name:"Nidhal Rebhi"})
.then(removedPersons => {console.log("Removed Person :",removedPersons)});
