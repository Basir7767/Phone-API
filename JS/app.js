document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
    const searchFeild = document.getElementById('search-feild')
    const searchText = searchFeild.value;

    // clear data
    searchFeild.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        // console.log('please write something to display');
    }
    else {
        // load data
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
            .catch(error => displayError(error));
    }
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.length == 0) {
        // console.log('No result found');
    }
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `   
    <div  onclick="loadPhoneDetails('${data.slug}')" class="card h-100">
        <img src="${data.image}" class="card-img-top " alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <p class="card-text">Brand Model: ${data.phone_name}</p>
        </div>
        </div >`
        searchResult.appendChild(div);
        // console.log(data);
    })
}

const loadPhoneDetails = (phoneId) => {
    // console.log(details);
    const phoneUrl = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    console.log(phoneUrl);
    fetch(phoneUrl)
        .then(res => res.json())
        .then(data => displayPhonedetail(data.data));
}

const displayPhonedetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class="card-img-top " src="${phone.image}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Brand: ${phone.brand}</h5>
        <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
        <p class="card-text">Display: ${phone.mainFeatures.displaySize}</p>
        <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
        <p class="card-text">Relese-Date: ${phone.releaseDate}</p>
        </div>`
    phoneDetails.appendChild(div);
    // console.log(phoneDetails);
}