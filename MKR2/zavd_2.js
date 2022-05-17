class MusicAlbum{
    constructor(id, performer, name, wrapper_url, list_of_songs, year_of_release, number_of_auditions){
        this.id = id;
        this.performer = performer;
        this.name = name;
        this.wrapper_url = wrapper_url;
        this.list_of_songs = list_of_songs;
        this.year_of_release = year_of_release;
        this.number_of_auditions = number_of_auditions;
    }
}

class ToString extends MusicAlbum {
    toString() {
        return `${super.toString()}{
            id: ${this.id},
            виконацевь: ${this.performer},
            назва: ${this.name},
            URL-обгортки: ${this.wrapper_url},
            список пісень: ${this.list_of_songs},
            рік випуску: ${this.year_of_release},
            кількість прослуховувань: ${this.number_of_auditions}
        }`
    }
}

class MusicAlbumCollection{
    constructor(items = []){
        this.items = items
    }

    getByNumberOfAuditions(){
        let max = this.items[0].number_of_auditions
        for (let i = 0; i < this.items.length; i++){
            max = Math.max(max, this.items[i].number_of_auditions)
        }
        for (let i = 0; i < this.items.length; i++){
            if (max == this.items[i].number_of_auditions){
                return this.items[i]
            }
        }
    }
}

class MusicAlbumCollectionToHTML extends MusicAlbumCollection{
    constructor(items){
        super(items);
        this.mount(parent)
    }


    albumToHtml(album){
        return `   
            <h2> ${album.name} </h2>
            <img src="${album.wrapper_url}" alt="${album.name}">
                <p>Id: ${album.id}
                <p>Автор: ${album.performer}</p>
                <p>Список пісень: ${album.list_of_songs}</p>
                <p>Опубліковано: ${album.year_of_release} </p>
                <p>Кількість прослуховувань: ${album.number_of_auditions}</p>`           
    }

    mount(parent){
        this._parent = parent;
        parent.innerHTML = this.albumToHtml(this.getByNumberOfAuditions());
    }
}

let music1 = new MusicAlbum(
    1,
    "da",
    "da",
    "da",
    "da",
    "da",
    23
)

let music2 = new MusicAlbum(
    2,
    "net",
    "net",
    "net",
    "net",
    "net",
    42
)

let music3 = new MusicAlbum(
    3,
    "da",
    "da",
    "net",
    "da",
    "net",
    50
)

let collection = new MusicAlbumCollection([music1, music2, music3]);


collection.mount(document.getElementById("album"))

