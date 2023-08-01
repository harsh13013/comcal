document.getElementById('btnCalculate').addEventListener('click', function () {
    // Get user inputs
    const otc = parseInt(document.getElementById('otc').value);
    const targetRenewal = parseInt(document.getElementById('targetRenewal').value);
    const targetUpsell = parseInt(document.getElementById('targetUpsell').value);
    const salesRenewal = parseInt(document.getElementById('salesRenewal').value);
    const salesUpsell = parseInt(document.getElementById('salesUpsell').value);

    // Commission calculation logic
    const renewal = Math.floor(otc * 0.6);
    const upsell = Math.floor(otc * 0.4);

    let com = 0;
    let com1 = 0;
    let total1 = 0;
    
    // Renewal Sales Calculation
    let result = Math.min(salesRenewal, targetRenewal * 0.7);
    console.log("From 0% to 70%: " + result);

    if (salesRenewal > targetRenewal * 0.7) {
        result = Math.min(salesRenewal - targetRenewal * 0.7, targetRenewal * 0.9 - targetRenewal * 0.7);
        com = (result / targetRenewal) * renewal;
    }
    console.log("From 70% to 90%: " + result);

    if (salesRenewal >= targetRenewal * 0.9) {
        result = Math.min(salesRenewal - targetRenewal * 0.9, targetRenewal * 0.95 - targetRenewal * 0.9);
        com += (result / targetRenewal) * renewal * 8;
    }
    console.log("From 90% to 95%: " + result);

    if (salesRenewal >= targetRenewal * 0.95) {
        result = Math.min(salesRenewal - targetRenewal * 0.95, targetRenewal - targetRenewal * 0.95);
        com += (result / targetRenewal) * renewal * 8;
    }
    console.log("From 95% to 100%: " + result);

    // Upsell Sales Calculation
    console.log();

    result = Math.min(salesUpsell, targetUpsell * 0.7);
    console.log("From 0% to 70%: " + result);

    if (salesUpsell > targetUpsell * 0.7) {
        result = Math.min(salesUpsell - targetUpsell * 0.7, targetUpsell * 0.9 - targetUpsell * 0.7);
        com1 = (result / targetUpsell) * upsell;
    }
    console.log("From 70% to 90%: " + result);

    if (salesUpsell >= targetUpsell * 0.9) {
        result = Math.min(salesUpsell - targetUpsell * 0.9, targetUpsell * 0.95 - targetUpsell * 0.9);
        com1 += (result / targetUpsell) * upsell * 8;
    }
    console.log("From 90% to 95%: " + result);

    if (salesUpsell >= targetUpsell * 0.95) {
        result = Math.min(salesUpsell - targetUpsell * 0.95, targetUpsell - targetUpsell * 0.95);
        com1 += (result / targetUpsell) * upsell * 8;
    }
    console.log("From 95% to 100%: " + result);

    console.log("Renewal commission: " + com);
    console.log("Upsell Commission: " + com1);

    total1 = com + com1;
    console.log("Total Commission: " + total1);

    // Display the calculated commission on the web page
    document.getElementById('result').textContent = 'Commission: ' + total1;
});
