const router= require('express').Router();
const { route } = require('express/lib/application');
let Payment = require('../models/payment.models')


router.route('/').get((req,res)=>{
 Payment.find()
 .then(users => res.json(users))
 .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{

    const price=Number(req.body.price);
    const method=req.body.method;
    const address=req.body.address;
    const cardNumber=Number(req.body.cardNumber);

    const nPayment= new Payment({price,method,address,cardNumber,});

    nPayment.save()
    .then(() => res.json('payment added'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res)=>{
    Payment.findById(req.params.id)
     .then(payments => res.json(payments))
     .catch(err => res.status(400).json('Error :'+ err))
})

router.route('/:id').delete((req,res)=>{
    Payment.findByIdAndDelete(req.params.id)
     .then(() => res.json('Payment Deleted'))
     .catch(err => res.status(400).json('Error :'+ err))
})

module.exports=router