let list = [
    {
        title: 'milk',
        id: 1
    },
    {
        title: 'eggs',
        id: 2
    },
    {
        title: 'carrots',
        id: 3
    },
    {
        title: 'apples',
        id: 4
    }
]


 let id = 5

module.exports = {
    getList: (req, res) => {
        res.status(200).send(list);
    },

    addToList: (req, res) => {
        console.log(req.body)
        const {title} = req.body
        let newItem = {
            title,
            id
        }
        id++
        list.push(newItem)
        res.status(200).send(list)
    },

    updateList: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        let i = list.findIndex(list => list.id === Number(id))
        if(i !== -1) {
            list[i].title = title
        }
        res.status(200).send(list)
    },
    
    deleteItem: (req, res) => {
        const {id} = req.params
        let index = list.findIndex(list => list.id === Number(id))
        if(index !== -1) {
            list.splice(index, 1)
        }
        res.status(200).send(list)
    }
}

