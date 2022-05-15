class EmploymentCenter{
    constructor(code, name, sex, year_of_birth, education, specialty, date_of_reg){
        this.code = code;
        this.name = name;
        this.sex = sex;
        this.year_of_birth = year_of_birth;
        this.education = education;
        this.specialty = specialty;
        this.date_of_reg = date_of_reg; 
    }
} 

class EmploymentCenterCollection{
    constructor(items = []){
        this.items = items;
    }

    getByCode(code){
        return this.items.find(user => user.code == code);
    }

    getByRequest(){
        let date = new Date();
        let unemployed = []
        for (let i = 0; i < this.items.length; i++){
            if (date.getFullYear() - this.items[i].year_of_birth >= 55)
                unemployed.push(this.items[i])
        }
        return unemployed
    }

    Add(user){
        this.items.push(user);
    }

    update(code, newEmployment){
        let user = this.getByCode(code);
        for (let key of ["code", "name", "sex", "year_of_birth", "education", "specialty", "date_of_reg"]){
            if (newEmployment[key])
                user[key] = newEmployment [key];
        }
    }

    delete(code){
        let userIndex = this.items.findIndex(user => user.code == code);
        this.items.splice(userIndex, 1)
    }
}


let employment = new EmploymentCenterCollection([]);
