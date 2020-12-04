// API

fetch("https://bitpay.com/api/rates")
    .then(result => result.json())
    .then(data => {
        const btc = document.querySelector(".btc");
        const eth = document.querySelector(".eth")
        const bch = document.querySelector(".btCash");
        const xrp = document.querySelector(".ripple")

       data.forEach (
            (crypto) => {
            if(crypto.code == "USD"){
                btc.innerHTML = "$ " + crypto.rate;
            }
            if(crypto.code == "ETH"){
                eth.innerHTML = "$ " + (data[2].rate / crypto.rate).toFixed(2);
            }
            if(crypto.code == "BCH"){
                bch.innerHTML = "$ " + (data[2].rate / crypto.rate).toFixed(2);
            }
            if(crypto.code == "XRP"){
                xrp.innerHTML = "$ " + (data[2].rate / crypto.rate).toFixed(2);
            }
        
        })
})