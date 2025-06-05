const apiUrl = "https://dragonball-api.com/api/characters";


function fetchCharacters(page = 1, race = "", affiliation = "") {
    let url = `${apiUrl}?page=${page}&limit=10`;
    if (race) url += `&race=${race}`;
    if (affiliation) url += `&affiliation=${affiliation}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCharacters(data.items);
            displayPagination(data.meta);
        });
}


function displayCharacters(characters) {
    const charactersList = document.getElementById("charactersList");
    charactersList.innerHTML = "";
    
    characters.forEach(character => {
        const characterCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">${character.description}</p>
                        <a href="view.html?id=${character.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        charactersList.innerHTML += characterCard;
    });
}


function displayPagination(meta) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    
    if (meta.totalPages > 1) {
        for (let i = 1; i <= meta.totalPages; i++) {
            const pageLink = `<a href="#" class="btn btn-secondary mx-1" onclick="fetchCharacters(${i})">${i}</a>`;
            pagination.innerHTML += pageLink;
        }
    }
}


function fetchCharacterDetails(id) {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
        .then(response => response.json())
        .then(character => {
            const characterDetails = document.getElementById("characterDetails");
            characterDetails.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" class="img-fluid" alt="${character.name}">
                <p>${character.description}</p>
                <a href="list.html" class="btn btn-primary">Back to List</a>
            `;
        });
}


function searchCharacter(query) {
    fetch(`${apiUrl}?search=${query}`)
        .then(response => response.json())
        .then(data => {
            displayCharacters(data);
        });
}


fetchCharacters();
