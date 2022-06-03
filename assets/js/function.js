const getItemsFromServer = async () => {
    const response = await axios.get('http://localhost:8000/api/items');
    console.log(response)
    const row_results = document.getElementById('items-list');
    response.data.results.forEach(item => {

        const container = document.createElement('div')

        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const pseudo = document.createElement ('h4');
        const age = document.createElement ('p');
        const genre = document.createElement ('p');
        const region = document.createElement ('p');
        const statut = document.createElement ('p');
        const contact = document.createElement ('p');
        const photo = document.createElement ('p');

        container.classList.add('col-lg-3')
        container.classList.add('my-2')

        card.classList.add('card');
        card.id = `item-${item.id}`;
        cardBody.classList.add('card-body');
        pseudo.classList.add('card-pseudo');
        age.classList.add('card-age');
        genre.classList.add('card-genre');
        region.classList.add('card-region');
        statut.classList.add('card-statut');
        contact.classList.add('card-contact');
        photo.classList.add('card-photo');

        pseudo.innerText = item.pseudo;
        age.innerText = item.age;
        genre.innerText = item.genre;
        region.innerText = item.region;
        statut.innerText = item.statut;
        contact.innerText = item.contact;
        photo.innerText = item.photo;

        cardBody.appendChild(pseudo);
        cardBody.appendChild(age);
        cardBody.appendChild(genre);
        cardBody.appendChild(region);
        cardBody.appendChild(statut);
        cardBody.appendChild(contact);
        cardBody.appendChild(photo);

        card.appendChild(cardBody);
        container.appendChild(card)

        row_results.appendChild(card)
        
    });
}




const getCharacterFromServer = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(response)
    const row_results = document.getElementById('rick-morty-api-list');
    response.data.results.forEach(character => {

        const container = document.createElement('div')

        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const name = document.createElement ('h7');
        const status = document.createElement ('p');
        const species = document.createElement ('p');
        /*const type = document.createElement ('p');
        const gender = document.createElement ('p');
        const origin = document.createElement ('p');
        const location = document.createElement ('p');*/
        const image = document.createElement ('img');


        container.classList.add('col-lg-2')
        container.classList.add('my-1')

        card.classList.add('card');
        card.id = `character-${character.id}`;
        cardBody.classList.add('card-body');
        name.classList.add('card-title');
        status.classList.add('card-text');
       /* species.classList.add('card-text');
        type.classList.add('card-text');
        gender.classList.add('card-text');
        origin.classList.add('card-text');
        location.classList.add('card-text');*/
        image.classList.add('card-img-top');
        console.log(character)

        name.innerText = character.name;
        status.innerText = character.status;
        /*species.innerText = character.species;
        type.innerText = character.type;
        gender.innerText = character.gender;
        origin.innerText = character.origin.name;
        location.innerText = character.location.name;*/
        image.src = character.image;
        image.alt = "une image"

        cardBody.appendChild(image)
        cardBody.appendChild(name);
        cardBody.appendChild(status);
       /* cardBody.appendChild(species);
        cardBody.appendChild(type);
        cardBody.appendChild(gender);
        cardBody.appendChild(origin);
        cardBody.appendChild(location);*/

        card.appendChild(cardBody);
        container.appendChild(card)

        row_results.appendChild(container)
    })
}

const getCharactersFromServer = async () => {
    const response = await axios.get('https://thronesapi.com/api/v2/Characters');
    const row_results = document.getElementById('characters-list');
    response.data.results.forEach(characters => {

        const container = document.createElement('div')

        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const firstname = document.createElement ('h4');
        const lastname = document.createElement ('p');
        const fullname = document.createElement ('p');
        const title = document.createElement ('p');
        const family = document.createElement ('p');
        const image = document.createElement ('p');
        const imageUrl = document.createElement ('img');
        

        container.classList.add('col-lg-3')
        container.classList.add('my-2')

        card.classList.add('card');
        card.id = `item-${item.id}`;
        cardBody.classList.add('card-body');
        firstname.classList.add('card-firstname');
        lastname.classList.add('card-lastname');
        fullname.classList.add('card-fullname');
        title.classList.add('card-title');
        family.classList.add('card-family');
        image.classList.add('card-image');
        imageUrl.classList.add('card-imageUrl');

        firstname.innerText = item.firstname;
        lastname.innerText = item.lastname;
        fullname.innerText = item.fullname;
        title.innerText = item.title;
        family.innerText = item.family;
        image.innerText = item.image;
        imageUrl.innerText = item.imageUrl;

        cardBody.appendChild(firstname);
        cardBody.appendChild(lastname);
        cardBody.appendChild(fullname);
        cardBody.appendChild(title);
        cardBody.appendChild(family);
        cardBody.appendChild(image);
        cardBody.appendChild(imageUrl);

        card.appendChild(cardBody);
        container.appendChild(card)

        row_results.appendChild(card)

    })
}

