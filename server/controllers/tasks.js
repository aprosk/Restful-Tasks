const Task = require('mongoose').model('Task')

class Tasks {
    getAll(req, res) {
        Task.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Task.findOne({_id: req.params._id})
            .then(data =>res.json(data))
            .catch(err => res.json(err))
    }
    create(req, res) {
        console.log(`request: ${req.body}`);
        Task.create(req.body)
            .then(() => res.json({'added': req.body.title}))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Task.findByIdAndUpdate({_id:req.params._id}, req.body)
            .then(()=>res.json({status:'ok'}))
            .catch(err => res.json(err));
    }
    remove(req, res) {
        Task.deleteOne({'_id': req.params._id })
            .then(() =>res.json({'removed': req.params.title}))
            .catch(err => res.json(err))
    }
}

module.exports = new Tasks();

