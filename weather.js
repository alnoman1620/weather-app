const line = document.getElementById('line').style.display = 'block'
const getCityName = () =>{
    const searchText = document.getElementById('search-value')
    const searchValue = searchText.value;
    searchText.value = " ";

    if(searchValue == ""){
        alert("Enter a City name")
    }

    else{
        const line = document.getElementById('line').style.display = 'none'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=8a2dcd41fe69bae6fe20ed4f5aa05a43`
    fetch(url)
    .then(res => res.json())
    .then(data => showTemp(data))
    }
}

const showTemp = temp => {
    //date start
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    //date Ends
    const degree = temp.main.temp - 273;
    const roundDegree = Math.round(degree)
    const tempDiv = document.getElementById('info-div')
    tempDiv.textContent = "";
    const div = document.createElement('div')
    div.classList.add('div')
    div.innerHTML = `
    <p class="date">Date: ${cDay}-${cMonth}-${cYear}</p>
    <h1 class="city-name">${temp.name},${temp.sys.country}</h1>
    <p class="temp-no">${roundDegree} °C</p>
    <p class="feels">Feels like: ${Math.round(temp.main.feels_like - 273)}°C </p>
    
    `
    tempDiv.appendChild(div)
}