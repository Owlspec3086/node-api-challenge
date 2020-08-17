const router = require('express').Router()
const Db = require('./helpers/actionModel')


router.post('/:id',(req,res)=>{
    const id = req.params.id
    const data = req.body

    data.project_id = Number(id)
    Db.insert(data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(500).json({error:'We can not add '}))
})


router.get('/',(req,res)=>{
    Db.get()
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(500).json({error:'could not grab users'}))
})

// Done
router.get('/:id',(req,res)=>{
    const id = req.params.id
    Db.get(id)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(()=>res.status(500).json({error:'can not find acition with that id'}))
})

// Done
router.put('/:id',(req,res)=>{
    const id = req.params.id
    const data = req.body
    Db.update(id,data)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(()=>res.status(500).json({error:'could not update that id '}))
})

// Done
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Db.remove(id)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(err=>res.status(500).json({error:'can not delete action at the id'}))
})
module.exports = router