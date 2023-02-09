const express = require("express")
const { faker } = require('@faker-js/faker');
const { request, response } = require("express");
const app = express();
const port = 8000;
class Users{
	constructor(){
        this._id = faker.datatype.uuid();
        this.primer_nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.número_de_teléfono = faker.phone.number();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}
class Empresa{
	constructor(){
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.name();
        this.dirección = {
            calle: faker.address.street(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            código_postal: faker.address.zipCode(),
            país: faker.address.country()
        }
    }
}
app.get("/api/users/new",(request, response) => {
    response.json(new Users());
})
app.get("/api/companies/new",(request, response) => {
    response.json(new Empresa());
})
app.get("/api/user/company",(request, response) => {
    response.json({
        usuario: new Users(),
        company:  new Empresa()
    });
})

app.listen(port,()=>{
    console.log("Levantado en 80000");
})