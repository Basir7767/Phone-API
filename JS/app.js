const searchPhone = () => {
    const searchFeild = document.getElementById('search-feild')
    const searchText = searchFeild.value;
    // console.log(searchText);
    searchFeild.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    // console.log(data);
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `   
    <div onclick="loadPhoneDetails(${data.slug})" class="card h-25">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <p class="card-text">Brand Model: ${data.phone_name}</p>
        </div>
    </div>`
        searchResult.appendChild(div);
        console.log(data);
    })
}

const loadPhoneDetails = brandName => {
    const detailsUrl = `https://openapi.programming-hero.com/api/phone/${slug}`;
    console.log(url2);
}
