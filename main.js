fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0d094d12c866404a88f78f270f389808").then((result)=>{
    let myData = result.json();
    return myData;
}).then((currency)=>{
    
    let amount = document.querySelector(".amount input");
    let egpPrice = document.querySelector(".egp span")
    let egpcontent = document.querySelector(".egp")
    let sarPrice = document.querySelector(".sar span")
    let sarcontent = document.querySelector(".sar")
    let usdPrice = document.querySelector(".usd span")
    let usdcontent = document.querySelector(".usd")
    let eurPrice = document.querySelector(".eur span")
    let eurcontent = document.querySelector(".eur")
    let omrPrice = document.querySelector(".omr span")
    let omrcontent = document.querySelector(".omr")
    let qarPrice = document.querySelector(".qar span")
    let qarcontent = document.querySelector(".qar")
    let transfer = document.querySelector(".transfer")
    let currencyType = document.querySelector(".currency ")
    transfer.onclick = function(){
        // transfer USD to other currencies
        if (currencyType.value === "USD") {
            //trnsfer USD to EGP
            egpPrice.innerHTML = (amount.value * currency.rates["EGP"]).toFixed(2)
            egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
            //trnsfer usd to USD
            usdcontent.innerHTML = `${+(amount.value)} USD` 
            //trnsfer USD to SAR
            sarPrice.innerHTML = (amount.value * currency.rates["SAR"]).toFixed(2)
            sarcontent.innerHTML = `${sarPrice.innerHTML} SAR` 
            //trnsfer USD to EUR
            eurPrice.innerHTML = (amount.value * currency.rates["EUR"] ).toFixed(2)
            eurcontent.innerHTML = `${eurPrice.innerHTML} EUR` 
            //trnsfer USD to OMR
            omrPrice.innerHTML = (amount.value * currency.rates["OMR"] ).toFixed(2)
            omrcontent.innerHTML = `${omrPrice.innerHTML} OMR`     
            //trnsfer USD to QAR
            qarPrice.innerHTML = (amount.value * currency.rates["QAR"] ).toFixed(2)
            qarcontent.innerHTML = `${qarPrice.innerHTML} QAR`     
        } 
        // transfer EUR to other currencies
        else if (currencyType.value === "EUR"){
            diffenerce = +( amount.value / currency.rates["EUR"]  )
            //trnsfer EUR to EGP
            egpPrice.innerHTML = (diffenerce * currency.rates["EGP"]).toFixed(2)
            egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
            //trnsfer EUR to SAR
            sarPrice.innerHTML = (diffenerce * currency.rates["SAR"]).toFixed(2)
            sarcontent.innerHTML = `${sarPrice.innerHTML} SAR` 
            //trnsfer EUR to USD
            eurPrice.innerHTML = (diffenerce ).toFixed(2)
            eurcontent.innerHTML = `${eurPrice.innerHTML} USD` 
            //trnsfer EUR to OMR
            omrPrice.innerHTML = (diffenerce * currency.rates["OMR"] ).toFixed(2)
            omrcontent.innerHTML = `${omrPrice.innerHTML} OMR` 
            //trnsfer EUR to QAR
            qarPrice.innerHTML = (diffenerce * currency.rates["QAR"] ).toFixed(2)
            qarcontent.innerHTML = `${qarPrice.innerHTML} QAR`  
        } 
        // transfer OMR to other currencies
        else if (currencyType.value === "OMR"){
            diffenerce = +( amount.value / currency.rates["OMR"]  )
            //trnsfer OMR to EGP
            egpPrice.innerHTML = (diffenerce * currency.rates["EGP"]).toFixed(2)
            egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
            //trnsfer OMR to SAR
            sarPrice.innerHTML = (diffenerce * currency.rates["SAR"]).toFixed(2)
            sarcontent.innerHTML = `${sarPrice.innerHTML} SAR` 
            //trnsfer OMR to USD
            eurPrice.innerHTML = (diffenerce ).toFixed(2)
            eurcontent.innerHTML = `${eurPrice.innerHTML} USD` 
            //trnsfer OMR to EUR
            omrPrice.innerHTML = (diffenerce * currency.rates["EUR"] ).toFixed(2)
            omrcontent.innerHTML = `${omrPrice.innerHTML} EUR` 
            //trnsfer OMR to QAR
            qarPrice.innerHTML = (diffenerce * currency.rates["QAR"] ).toFixed(2)
            qarcontent.innerHTML = `${qarPrice.innerHTML} QAR`  
        }
        // transfer SAR to other currencies
        else if (currencyType.value === "SAR"){
            diffenerce = +( amount.value / currency.rates["SAR"]  )
            //trnsfer SAR to EGP
            egpPrice.innerHTML = (diffenerce * currency.rates["EGP"]).toFixed(2)
            egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
            //trnsfer SAR to SAR
            sarPrice.innerHTML = (diffenerce * currency.rates["SAR"] ).toFixed(2)
            sarcontent.innerHTML = `${sarPrice.innerHTML} SAR`
            //trnsfer SAR to EUR
            eurPrice.innerHTML = (diffenerce * currency.rates["EUR"] ).toFixed(2)
            eurcontent.innerHTML = `${eurPrice.innerHTML} EUR` 
            //trnsfer SAR to USD
            usdPrice.innerHTML = (diffenerce * currency.rates["USD"] ).toFixed(2)
            usdcontent.innerHTML = `${usdPrice.innerHTML} USD` 
            //trnsfer SAR to EUR
            omrPrice.innerHTML = (diffenerce * currency.rates["OMR"] ).toFixed(2)
            omrcontent.innerHTML = `${omrPrice.innerHTML} OMR` 
            //trnsfer SAR to QAR
            qarPrice.innerHTML = (diffenerce * currency.rates["QAR"] ).toFixed(2)
            qarcontent.innerHTML = `${qarPrice.innerHTML} QAR`  
        }
        // transfer SAR to other currencies
        else if (currencyType.value === "QAR"){
            diffenerce = +( amount.value / currency.rates["QAR"]  )
            //trnsfer SAR to EGP
            egpPrice.innerHTML = (diffenerce * currency.rates["EGP"]).toFixed(2)
            egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
            //trnsfer SAR to SAR
            sarPrice.innerHTML = (diffenerce * currency.rates["SAR"] ).toFixed(2)
            sarcontent.innerHTML = `${sarPrice.innerHTML} SAR`
            //trnsfer SAR to EUR
            eurPrice.innerHTML = (diffenerce * currency.rates["EUR"] ).toFixed(2)
            eurcontent.innerHTML = `${eurPrice.innerHTML} EUR` 
            //trnsfer SAR to USD
            usdPrice.innerHTML = (diffenerce * currency.rates["USD"] ).toFixed(2)
            usdcontent.innerHTML = `${usdPrice.innerHTML} USD` 
            //trnsfer SAR to EUR
            omrPrice.innerHTML = (diffenerce * currency.rates["OMR"] ).toFixed(2)
            omrcontent.innerHTML = `${omrPrice.innerHTML} OMR` 
            //trnsfer SAR to QAR
            qarPrice.innerHTML = (diffenerce * currency.rates["QAR"] ).toFixed(2)
            qarcontent.innerHTML = `${qarPrice.innerHTML} QAR`  
        }
        
    } 
})


// fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0d094d12c866404a88f78f270f389808").then((result)=>{
//     let myData = result.json();
//     return myData;
// }).then((currency)=>{
    
//     let amount = document.querySelector(".amount input");
//     let egpPrice = document.querySelector(".egp span")
//     let egpcontent = document.querySelector(".egp")
//     let sarPrice = document.querySelector(".sar span")
//     let sarcontent = document.querySelector(".sar")
//     let eurPrice = document.querySelector(".eur span")
//     let eurcontent = document.querySelector(".eur")
//     let transfer = document.querySelector(".transfer")
//     transfer.onclick = function(){
//         // finalamount = amount.value;
//         diffenerce = +( amount.value / currency.rates["EUR"]  )
//         console.log(diffenerce)
//         egpPrice.innerHTML = (diffenerce * currency.rates["EGP"]).toFixed(2)
//         egpcontent.innerHTML = `${egpPrice.innerHTML} EGP` 
//         sarPrice.innerHTML = (diffenerce * currency.rates["SAR"]).toFixed(2)
//         sarcontent.innerHTML = `${sarPrice.innerHTML} SAR` 
//         eurPrice.innerHTML = (diffenerce ).toFixed(2)
//         eurcontent.innerHTML = `${eurPrice.innerHTML} USD` 
        
//     } 
// })