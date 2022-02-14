const request = new XMLHttpRequest();
let currency = 'PLN';
request.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currency.toLowerCase(), false);
request.send(null);
let data = JSON.parse(request.responseText);

let cryptocurrencies;
let timerID;
const updateInterval = 30000;
let rows = 10;


/* function descending(a, b) {
    return a.price < b.price ? 1 : -1;
}

function ascending(a, b) {
    return a.price > b.price ? 1 : -1;
} */

/* function reposition() {
    let height = $("#body .crypto").height();
    let y = height;

    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.css("top", y + "px");
        y += height;
    }
} */

/* function resetReposition() {
    const y = 50;
    for(let i=0; i<cryptocurrencies.length; i++) {
        // cryptocurrencies[i].$item.css("margin-top", y + "px");
        cryptocurrencies[i].$item.css("position", "static");
    }
} */

/* function filterReposition() {
    const crypto = document.querySelector('.crypto');
    let height = $("#body .crypto").height();
    let y = height;
    
    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.css("top", y + "px");
        y += height;
    } 
} */

/* function changePositionAbs() {
    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.css("position", "absolute");
    }
} */


/* function updateRank(cryptocurrencies) {
    for(let i=0; i<cryptocurrencies.length; i++) {
        cryptocurrencies[i].$item.find('.rank').text(i+1);
    }
} */

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

function comparePrices() {
    if(newPrice > currentPrice) {
        
    }
}

function getUpdatedData() {
    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currency.toLowerCase(), false);
    newRequest.send(null);
    
    let newData = JSON.parse(newRequest.responseText);

    for(let i=0; i<cryptocurrencies.length; i++) {
        let cryptocurrency = cryptocurrencies[i];
        
        cryptocurrency.price = fetchNewData(newData, 'current_price', cryptocurrency.name);
        cryptocurrency.market_cap = fetchNewData(newData, 'market_cap', cryptocurrency.name);
        cryptocurrency.total_volume = fetchNewData(newData, 'total_volume', cryptocurrency.name);
        cryptocurrency.$item.find(".price").text(parseFloat(cryptocurrency.price.toFixed(2)).toLocaleString() + " " + currency);
        cryptocurrency.$item.find(".total_volume").text(parseFloat(cryptocurrency.total_volume).toLocaleString() + " " + currency);
        cryptocurrency.$item.find(".market_cap").text(parseFloat(cryptocurrency.market_cap).toLocaleString() + " " + currency);
    }

    //cryptocurrencies.sort(descending);
    //updateRank(cryptocurrencies);
    //reposition();
}

function getData() {
    let $currencyList = $("#body"); 
    $currencyList.find(".crypto").remove();

    if(timerID !== undefined) {
        clearInterval(timerID);
    }

    cryptocurrencies = [];
    for(let i=0; i<rows; i++) {
        cryptocurrencies.push({
            name: data[i].name,
            image: data[i].image,
            price: data[i].current_price,
            market_cap: data[i].market_cap,
            total_volume: data[i].total_volume,
            percentage_change_24h: data[i].price_change_percentage_24h,
        })
    }

    for(let i=0; i<cryptocurrencies.length; i++) {
        let $item = $(
            "<tr class='crypto'>" +
                "<th class='rank'>" + (i+1) + "</th>" + 
                "<td class='name'><div class='container'><img src='" + cryptocurrencies[i].image + "'>" + ' ' + cryptocurrencies[i].name + "</div></td>" + 
                "<td class='price'>" + parseFloat(cryptocurrencies[i].price.toFixed(2)).toLocaleString() + " " + currency + "</td>" + 
                "<td class='percentage_change_24h'>" + parseFloat(cryptocurrencies[i].percentage_change_24h.toFixed(1)).toLocaleString() + "%" + "</td>" +
                "<td class='total_volume'>" + cryptocurrencies[i].total_volume.toLocaleString() + " " + currency + "</td>" +
                "<td class='market_cap'>" + cryptocurrencies[i].market_cap.toLocaleString() + " " + currency + "</td>" +
            "</tr>" 
        );
        let currentPrice = cryptocurrencies[i].price.toFixed(9);
        cryptocurrencies[i].$item = $item;
        $currencyList.append($item);
    }

    //cryptocurrencies.sort(descending);
    //updateRank(cryptocurrencies);
    //reposition();
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


/* Sort table */

/* Counter */
let timeLeft = 30;
let timer = setInterval(function() {
    if(timeLeft <= 0) {
        timeLeft = 31;
    } else {
        document.querySelector('span.counter').innerHTML = timeLeft + " sekund";
    }
    timeLeft--;
}, 1000)

/* Currency list */
$('.currencySelect').on('click', function() {
    $('.currenciesList').toggleClass('active');
})

const currencies = document.querySelectorAll('.currenciesSymbols li');
currencies.forEach(element => {
    element.addEventListener('click', function() {
        let symbol = element.getAttribute('data-value');
        currency = symbol;
        getUpdatedData();
        $('.currenciesList').toggleClass('active');
        $('.currencySelect').text(currency);
    })
});

/* Close sorting tabs */
$('.fa-solid').on('click', function() {
    if($('.currenciesList').hasClass('active')) {
        $('.currenciesList').removeClass('active');
    }
    if($('.rowList').hasClass('active')) {
        $('.rowList').removeClass('active');
    }
})

/* Number of rows in table */
$('.rowSelect').on('click', function() {
    $('.rowList').toggleClass('active');
})

const rowOptions = document.querySelectorAll('.rowOptions li');
rowOptions.forEach(element => {
    element.addEventListener('click', function() {
        let selectedOption = element.getAttribute('data-value');
        rows = parseInt(selectedOption, 10);
        getData(); 
        $('.rowList').toggleClass('active');
        $('.rowSelect span').text(" " + rows);
    })
});