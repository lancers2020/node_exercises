let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send(data);
})

router.get("/id/:id", (request, response) => {
    let {id} = request.params;
    let result = data.find((uwu) => {
        return uwu.id === parseInt(id);
    })
    response.status(200).send(result ? result : "record not found");
})

router.post("/post", (request, response) => {
    let result = {
        id: request.body.id,
        title: request.body.title,
        order: request.body.order,
        author: request.body.author
    };
    data.push(result);
    response.status(200).send(result);
});

router.put("/put/:id", (req, res)=>{
    const { id } = req.params;

    let result = data.find((item) => {
        return item.id === Number(id);
    });
    console.log(result);
    
    if(result !== undefined){
        result.title = req.body.title ? req.body.title : result.title;
        result.order = req.body.order ? req.body.order : result.order;
        result.completed = req.body.completed ? req.body.completed : result.completed;
        result.author = req.body.author ? req.body.author : result.author;

        res.status(200).send(result);
    }else{
        res.status(404).send("record not found");
    }
    

    // res.status(200).send( result ? result : "record not found" );
    // result ? res.status(200).send(result) : res.status(404).send("record not found");
    // if(result){
    //     res.status(200).send(result)
    // }else{
    //     res.status(404).send("record not found")
    // }

});

router.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    let sample = false;
    // let result = data.find((uwu) => {
    //     if(uwu.id !== parseInt(id)){
    //         sample.push()
    //     }
    // })
    data.map((value) => {
        if(value.id === parseInt(id)){
            sample = true;
            data.splice(data.indexOf(value), 1);
        }
    })
    res.status(200).send(sample ? data : "not found");
})


//Create a put function using id send status 404/message if  not existing id 




//id, title, order, author
// router.post("/employee", (req, res) =>{
//     let data = {
//       id: req.body.id,
//       name: req.body.name,
//       title: req.body.title,
//       age: req.body.age,
//       gender: req.body.gender,
//       languages: req.body.languages,
//     };
//     employees.push(data);
//     res.status(200).send( data );
//   });



// router.get("/", (req, res, next) =>{
//     res.send(data);
// });

// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     let employee = employees.find((item) => {
//         return item.id === Number(id);
//     });
//     res.status(200).send(employee ? employee : "Record not found!");
//   });
  




module.exports = router;