const table = document.querySelector('table');
const tableRow = document.querySelectorAll('tr');
const symbol = document.querySelector('.symbol');
const price = document.querySelector('.price');
const volume = document.querySelector('.volume');
const change = document.querySelector('.change');

let ws = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

/* data = []; */
let currencyType = [];
let currencyPrice = [];
let currencyVolume = [];
let currencyChangePercent = [];

let insertRowsStatus = true;
let data = [];

ws.onmessage = (e) => {
    let stockObject = JSON.parse(e.data);
    
    for(let i=0; i<stockObject.length; i++) {    
        data = stockObject;   
        let status = true;
        const arrayLength = data.length;

        let currencyTypes = [data[i].s];
        let currencyPrices = [data[i].c];
        let currencyVolumes = [data[i].v];
        let currencyChangePercents = [data[i].P];

        for(let j=0; j<currencyTypes.length; j++) {
            currencyType = [currencyTypes[j]];
            currencyPrice = [currencyPrices[j]];
            currencyVolume = [currencyVolumes[j]];
            currencyChangePercent = [currencyChangePercents[j]];
            
            /* tableRow.forEach(element => {
                if(element.classList.contains('BTCUSDT')) {
                    symbol.innerHTML = currencyType;
                        price.innerHTML = currencyPrice;
                        volume.innerHTML = currencyVolume;
                        change.innerHTML = currencyChangePercent;
                    
                }
            }); */

            tableRow.forEach(element => {
                if(element.classList.contains('BTCUSDT')) {
                    
                }
            })
            
            //console.log("ID: " + j + " " + currencyTypes[j] + "("  + currencyType + ")" +  " aktualna cena: " + currencyPrice + " , Volume(24h): " + currencyVolume, ", Change 24h (%): " + currencyChangePercent);
        }


        //console.log(data)
    }
}









