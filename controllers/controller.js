const express = require('express')
const problem = require('../models/model')

exports.create= async (req, res) => {
  
    const alien = new problem({
        StudentName: req.body.StudentName,
        FatherName : req.body.FatherName,
        DOB        : req.body.DOB,
        Address : req.body.Address,
        State : req.body.State,
        city : req.body.city,
        Pin : req.body.Pin,
        PhoneNumber : req.body.PhoneNumber,
        Email : req.body.Email,
        class: req.body.class,
        Marks : req.body.Marks,
        Date : req.body.Date
    })

    try {
        const a1 = await alien.save()
        console.log(a1);
       // res.json(a1)
       res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee",
        employee: req.body
    });
    } catch (err) {
        console.log(err)
        res.send('Error')
    }
}



exports.get =  async (req, res) => {
    try {
        let {page,size}=req.query;
        if(!page){
            page=1;
        }
        if(!size)
        {
            size=10;
        }
        const limit = parseInt(size);
        const skip =(page-1)*size;

        const aliens = await problem.find().limit(limit).skip(skip)
       // res.json(aliens)
       res.render("student/addOrEdit",{
           viewTitle:"Insert student details"
       })
    } catch (err) {
        res.send('Error ' + err)
    }
}


exports.update = async (req, res) => {
    try {
        const app = await problem.findById(req.params.id)
           app.StudentName= req.body.StudentName,
           app.FatherName =req.body.FatherName,
           app.DOB        = req.body.DOB,
           app.Address = req.body.Address,
           app.State = req.body.State,
           app.city =req.body.city,
           app.Pin =req.body.Pin,
           app.PhoneNumber = req.body.PhoneNumber,
           app.Email = req.body.Email,
           app.class = req.body.class,
           app.Marks = req.body.Marks,
           app.Date =req.body.Date
        const a1 = await app.save()
       // res.json(a1)
       res.render("employee/addOrEdit", {
        viewTitle: 'Update Employee',
        student: req.body
    });
    } catch (err) {
        res.send('Error')
    }

}