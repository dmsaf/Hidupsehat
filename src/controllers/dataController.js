app.delete('/register', (req, res) => {
  collection.deleteOne(
    { name: req.body.name }
  )
    .then(result => {
      res.json(`Data deleted`)
    })
    .catch(error => console.error(error))
})