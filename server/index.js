const express = require ('express')
const bodyParser = require ('body-parser')
const app = express ();
const port = 4000;
const lc = require ("./controllers/listControllers");

app.use(bodyParser.json())

app.get("/api/groceryList", lc.getList);
app.post("/api/groceryList", lc.addToList);
app.put(`/api/groceryList/:id`, lc.updateList);
app.delete(`/api/groceryList/:id`, lc.deleteItem);





app.listen(4000, () => {
    console.log ('all good', port)
})

