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
    <div class="card h-25">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <p class="card-text">Brand Model: ${data.phone_name}</p>
        </div>
        <div class="d-grid gap-2 w-50">
        <button onclick="loadPhoneDetails('${data.slug}')" class="btn btn-primary" type="button">Button</button>
        
      </div >
    </div > `
        searchResult.appendChild(div);
        console.log(data);
    })
}

const loadPhoneDetails = (details) => {
    console.log(details);
    const phoneUrl = `https://openapi.programming-hero.com/api/phone/{details}`
    fetch(phoneUrl)
        .then(res => res.json())
        .then(data => console.log(data));
}

const setPhoneDetails = (info) => {
    document.getElementById('modal').innerHTML = `<div class="card">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <p><strong>Brand:${info.brand}</strong> <span id="brand"></span></p>
            <p id="released"></p>
        </li>

        <li class="list-group-item">
            <p><strong>Storage:${info.storage}</strong> <span id="storage"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>Display:${info.displaySize}</strong> <span id="display"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>Chipset:${info.chipSet}</strong> <span id="chipset"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>Memory:${info.displaySize}</strong> <span id="memory"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>Sensors:${info.sensors}</strong> <span id="sensors"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>WLAN:${info.WLAN}</strong> <span id="wlan"></span></p>
        </li>
        <li class="list-group-item">
            <p><strong>USB:${info.USB}</strong> <span id="usb"></span></p>
        </li>
    </ul>
</div>`
}