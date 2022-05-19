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
            if ((date.getFullYear() - this.items[i].year_of_birth >= 55 && this.items[i].sex == "Жіноча") || (date.getFullYear() - this.items[i].year_of_birth >= 60 && this.items[i].sex == "Чоловіча"))
                unemployed.push(this.items[i])
        }
        return unemployed
    }

    add(employment){
        this.items.push(employment);
    }

    addCollection(employments){
        for (let i = 0; i < employments.length; i++)
            this.items.push(employments[i])
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

class EmploymentCenterCollectionHtml extends EmploymentCenterCollection{
    constructor(items){
        super(items);
        document.addEventListener("delete", event => {
            this.delete(event.detail.code);
            this.mount(this._parrent, this._code);
        });

        document.addEventListener("addEmployment", event => {
            super.add(
                new EmploymentCenter(
                    event.detail.code,
                    event.detail.name,
                    event.detail.sex,
                    event.detail.year_of_birth,
                    event.detail.education,
                    event.detail.specialty,
                    event.detail.date_of_reg
                )
            )
        });

        document.addEventListener("editEmployment", event => {
            super.update(event.detail.code, event.detail)
        })

        document.addEventListener("addEmployments", event => {
            super.addCollection(
                    [new EmploymentCenter(
                        event.detail.code,
                        event.detail.name,
                        event.detail.sex,
                        event.detail.year_of_birth,
                        event.detail.education,
                        event.detail.specialty,
                        event.detail.date_of_reg                        
                    )]
            )
        })
    }

    employmentToHtml(employment){
        if (!employment)
            return ` <p class ="error">Користувача не знайдено</p>`;
        return `
        <table border="1" cellpadding="3">
        <tr>
            <td>Код</td>
            <td>Прізвище і ініціали</td>
            <td>Стать</td>
            <td>Рік народження</td>
            <td>Освіта</td>
            <td>Спеціальність</td>
            <td>Дата прийняття на облік</td>
        </tr>
        <tr>
            <td>${employment.code}</td>
	        <td>${employment.name}</td>
            <td>${employment.sex}</td>
            <td>${employment.year_of_birth}</td>
            <td>${employment.education}</td>
            <td>${employment.specialty}</td>
            <td>${employment.date_of_reg}</td>
            <input type="hidden" id="employment-id" value="${employment.code}">
            <td><button type="button" id="delete-button">delete</button></td>
            <td><button type="button" id="edit-button">edit</button></td>
	    </tr>`   
    }

    mount(parrent, code) {
        this._parrent = parrent;
        this._code = code;
        parrent.innerHTML = this.employmentToHtml(this.getByCode(code));
        document.getElementById("delete-button").onclick = function () {
            let code = parseInt(document.getElementById("employment-id").value);
            document.dispatchEvent(
                new CustomEvent(
                    "delete",
                    {
                        detail: {
                            code
                        }
                    }
                )
            ); 
        }
        document.getElementById("edit-button").onclick = () => {
            document.getElementById("edit-form").innerHTML = this.editEmploymentToHTML();
        }
    }

    addEmploymentToHTML() {
        return ` 
            <h3>Додати один об'єкт</h3>
            <input type="number" name="code" placeholder="Код">
            <input name="name" placeholder="Прізвище і ініціали"> 
            <input name="sex" placeholder="Стать">
            <input type="number" name="year-of-birth" placeholder="Рік народження">
            <input name="education" placeholder="Освіта">
            <input name="specialty" placeholder="Спеціальність">
            <input name="date-of-reg" placeholder="Дата прийняття на облік">
            <button type="button" onclick="AddNewEmployment()">Зберегти</button>`
    }

    editEmploymentToHTML(){
        return ` 
            <h3>Змінити об'єкт</h3>
            <input type="number" name="code" placeholder="Код">
            <input name="name" placeholder="Прізвище і ініціали"> 
            <input name="sex" placeholder="Стать">
            <input type="number" name="year-of-birth" placeholder="Рік народження">
            <input name="education" placeholder="Освіта">
            <input name="specialty" placeholder="Спеціальність">
            <input name="date-of-reg" placeholder="Дата прийняття на облік">
            <button type="button" onclick="EditEmployment()">Зберегти</button>`
    }

    addEmploymentsToHTML() {
        return `
            <h3>Додати об'єкт в колекцію</h3>
            <input type="number" name="code" placeholder="Код">
            <input name="name" placeholder="Прізвище і ініціали"> 
            <input name="sex" placeholder="Стать">
            <input type="number" name="year-of-birth" placeholder="Рік народження">
            <input name="education" placeholder="Освіта">
            <input name="specialty" placeholder="Спеціальність">
            <input name="date-of-reg" placeholder="Дата прийняття на облік">
            `
    }
}

let employment = new EmploymentCenterCollectionHtml();

document.getElementById("find-by-code").onclick = () => {
    employment.mount(document.getElementById("root"), document.getElementById("input-code").value);
}

document.getElementById("open-add").onclick = () =>{
    document.getElementById("add-object-form").innerHTML = employment.addEmploymentToHTML();
}

document.getElementById("open-adds").onclick = () =>{
    for (let i = 0; i < document.getElementById("number").value; i++){
        let div = document.createElement('div');
        div.id = `input-${i}`;
        document.body.append(div);
        document.getElementById(`input-${i}`).innerHTML = employment.addEmploymentsToHTML();
    }
    document.getElementById(`input-${document.getElementById("number").value-1}`).innerHTML += `<br><button type="button" onclick="AddNewEmployments()">Зберегти</button><br>`
   
}



function AddNewEmployment(){      
        const code = document.getElementsByName("code")[0].value;
        const name = document.getElementsByName("name")[0].value;
        const sex = document.getElementsByName("sex")[0].value;
        const year_of_birth = document.getElementsByName("year-of-birth")[0].value;
        const education = document.getElementsByName("education")[0].value;
        const specialty = document.getElementsByName("specialty")[0].value;
        const date_of_reg = document.getElementsByName("date-of-reg")[0].value;
        document.dispatchEvent(
            new CustomEvent(
                "addEmployment",
                {
                    detail: {
                        code,
                        name,
                        sex,
                        year_of_birth,
                        education,
                        specialty,
                        date_of_reg
                    }
                }
            )
        )
}

function StartEditEmployment() {
    document.getElementsByName("code")[0].value = code;
    document.getElementsByName("name")[0].value = name;
    document.getElementsByName("sex")[0].value = sex;
    document.getElementsByName("year-of-birth")[0].value = year_of_birth;
    document.getElementsByName("education")[0].value = education;
    document.getElementsByName("specialty")[0].value = specialty;
    document.getElementsByName("date-of-reg")[0].value = date_of_reg;
}

function EditEmployment(){
    const code = document.getElementsByName("code")[0].value;
    const name = document.getElementsByName("name")[0].value;
    const sex = document.getElementsByName("sex")[0].value;
    const year_of_birth = document.getElementsByName("year-of-birth")[0].value;
    const education = document.getElementsByName("education")[0].value;
    const specialty = document.getElementsByName("specialty")[0].value;
    const date_of_reg = document.getElementsByName("date-of-reg")[0].value;
    document.dispatchEvent(
        new CustomEvent(
            "editEmployment",
            {
                detail: {
                    code,
                    name,
                    sex,
                    year_of_birth,
                    education,
                    specialty,
                    date_of_reg
                }
            }
        )
    )
}


function AddNewEmployments() {
    for (let i = 0; i < document.getElementById("number").value; i++){
        const code = document.getElementsByName("code")[i].value;
        const name = document.getElementsByName("name")[i].value;
        const sex = document.getElementsByName("sex")[i].value;
        const year_of_birth = document.getElementsByName("year-of-birth")[i].value;
        const education = document.getElementsByName("education")[i].value;
        const specialty = document.getElementsByName("specialty")[i].value;
        const date_of_reg = document.getElementsByName("date-of-reg")[i].value;
        document.dispatchEvent(
            new CustomEvent(
                "addEmployments",
                {
                    detail: {
                        code,
                        name,
                        sex,
                        year_of_birth,
                        education,
                        specialty,
                        date_of_reg
                    }
                }
            )
        )
    }
        
}
