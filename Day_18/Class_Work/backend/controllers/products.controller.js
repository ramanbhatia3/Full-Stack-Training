const data = [
    {
    "id": 1,
    "title": "GTA San Andreas",
    "genre": "Action-Adventure",
    "platform": "PS2"
  },
  {
    "id": 2,
    "title": "God of War Ragnarok",
    "genre": "Action",
    "platform": "PS5"
  },
  {
    "id": 3,
    "title": "Spider-Man 2",
    "genre": "Superhero",
    "platform": "PS5"
  }
]


const  products = (req,res) => {
    try {
        res.status(200).send({msg:"Data retrieved",data:data})
    } catch (error) {
        res.status(400).send({err:err})
    }
}

module.exports={
    products
}