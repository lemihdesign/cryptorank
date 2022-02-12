const request = new XMLHttpRequest();
request.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', false);
request.send(null);

let data = JSON.parse(request.responseText);
let cryptocurrencies;
let timerID;
const updateInterval = 30000;

function descending(a, b) {
    return a.price < b.price ? 1 : -1;
}

function ascending(a, b) {
    return a.price > b.price ? 1 : -1;
}

function reposition() {
    let height = $("#body .crypto").height();
    let y = height;
    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.css("top", y + "px");
        y += height;
    }
}

function updateRank(cryptocurrencies) {
    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.find('.rank').text(i+1);
    }
}

function getRandomScoreIncrease() {
    return getRandomBetween(10, 20);
}

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function fetchNewData(data, attrName, name) {
    for(let x in data) {
        if((data[x].name == name) == true) {
            return data[x][attrName];
        } 
    }
    return null;
}

function getUpdatedData() {
    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', false);
    newRequest.send(null);
    
    let newData = JSON.parse(newRequest.responseText);

    for(let i=0; i<cryptocurrencies.length; i++) {
        let cryptocurrency = cryptocurrencies[i];
        
        cryptocurrency.price = fetchNewData(newData, 'current_price', cryptocurrency.name);
        cryptocurrency.$item.find(".price").text(cryptocurrency.price + " USD");
    }

    cryptocurrencies.sort(descending);
    updateRank(cryptocurrencies);
    reposition();
}

function getData() {
    let $currencyList = $("#body"); 
    $currencyList.find(".crypto").remove();

    if(timerID !== undefined) {
        clearInterval(timerID);
    }

    cryptocurrencies = [];
    for(let i=0; i<100; i++) {
        cryptocurrencies.push({
            name: data[i].name,
            image: data[i].image,
            price: data[i].current_price,
            market_cap: data[i].market_cap,
            volume_24h: data[i].total_volume,
            percentage_change_24h: data[i].price_change_percentage_24h,
        })
    }

    for(let i=0; i<cryptocurrencies.length; i++) {
        let $item = $(
            "<tr class='crypto'>" +
                "<th class='rank'>" + (i+1) + "</th>" + 
                "<td class='name'><div class='container'><img src='" + cryptocurrencies[i].image + "'>" + ' ' + cryptocurrencies[i].name + "</div></td>" + 
                "<td class='price'>" + cryptocurrencies[i].price.toFixed(2) + " USD" + "</td>" + 
                "<td class='volume_24h'>" + cryptocurrencies[i].volume_24h + "</td>" +  
                "<td class='percentage_change_24h'>" + cryptocurrencies[i].percentage_change_24h.toFixed(1) + "%" + "</td>" +
            "</tr>" 
        );
        cryptocurrencies[i].$item = $item;
        $currencyList.append($item);
    }

    cryptocurrencies.sort(descending);
    updateRank(cryptocurrencies);
    reposition();
    timerID = setInterval("getUpdatedData();", updateInterval);
}

getData();

$(document).ready(function() {
    $('#searchCoin').on("keyup", function() {
        let inputValue = $(this).val().toLowerCase();
        $("#body tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1);
        })
    })
})