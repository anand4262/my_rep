var express = require('express');
var app = express();
const employees = [
    {empID: 001, empName: 'Mahesh', empDesignation: 'software developer', empSalary: 50000, empLocation: 'New Delhi'},
    {empID: 002, empName: 'Anand',  empDesignation: 'web developer', empSalary: 40000, empLocation: 'Assam'},
    {empID: 003, empName: 'Praveena', empDesignation: 'app developer', empSalary: 57000, empLocation: 'Mumbai'}
];
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", {layout: false})
app.get('/', function(req, res){
    res.render('index.ejs', {
        message: 'Hello World',
        people: ['kingkong', 'spiderman', 'batman'],
        data: [
            {
                id: 101,
                name:'kingkong' 
            },
            {
                id: 102,
                name:'spiderman'
            },
            {
                id: 103,
                name: 'batman'
            }
        ]
    }); 
})
app.get('/home', function(req, res){
    res.render('pages/home');
})
app.get('/about', function(req, res){
    res.render('pages/about');
})
app.get('/employees', function(req, res){
    res.render('pages/employees', {
       employees: employees
    });
})
app.get('/employee/:id', function(req, res){
    const emp = employees.filter((emp) =>{
            return emp.empID == req.params.id
    })[0]
    res.render('pages/employee',{
        empID: emp.empID,
        empName: emp.empName,
        empDesignation: emp.empDesignation,
        empSalary: emp.empSalary,
       empLocation: emp.empLocation
    });
})
app.listen(5000, function(){
    console.log('server connected.....')
})
