var priceMatrix = {100: {basic: [100,125], premium: [0,0], enterprise: [0,0]},
    500: {basic: [150,187.5], premium: [250,312.5], enterprise: [0,0]},
    1000: {basic: [250,312.5], premium: [400,500], enterprise: [500,625]},
    1500: {basic: [350,437.5], premium: [560,700], enterprise: [700,875]},
    2000: {basic: [400,500], premium: [640,800], enterprise: [800,1000]},
    2500: {basic: [500,625], premium: [800,1000], enterprise: [1000,1250]},
    3000: {basic: [600,750], premium: [960,1200], enterprise: [1200,1500]},
    4000: {basic: [750,937.5], premium: [1200,1500], enterprise: [1500,1875]},
    5000: {basic: [875,1093.75], premium: [1400,1750], enterprise: [1750,2187.5]},
    6000: {basic: [1000,1250], premium: [1600,2000], enterprise: [2000,2500]},
    7000: {basic: [1125,1406.25], premium: [1800,2250], enterprise: [2250,2812.5]},
    8000: {basic: [1250,1562.5], premium: [2000,2500], enterprise: [2500,3125]},
    9000: {basic: [1375,1718.75], premium: [2200,2750], enterprise: [2750,3437.5]},
    10000: {basic: [1500,1875], premium: [2400,3000], enterprise: [3000,3750]},

    /* 12-22 removing these for now
     15000: {basic: [2000,2500], premium: [3200,4000], enterprise: [4000,5000]},
     20000: {basic: [2500,3125], premium: [4000,5000], enterprise: [5000,6250]},
     25000: {basic: [3000,3750], premium: [4800,6000], enterprise: [6000,7500]},
     30000: {basic: [3500,4375], premium: [5600,7000], enterprise: [7000,8750]},
     35000: {basic: [4000,5000], premium: [6400,8000], enterprise: [8000,10000]},
     40000: {basic: [4500,5625], premium: [7200,9000], enterprise: [9000,11250]},
     45000: {basic: [5000,6250], premium: [8000,10000], enterprise: [10000,12500]},
     50000: {basic: [5500,6875], premium: [8800,11000], enterprise: [11000,13750]},
     60000: {basic: [6000,7500], premium: [9600,12000], enterprise: [12000,15000]},
     70000: {basic: [6500,8125], premium: [10400,13000], enterprise: [13000,16250]},
     80000: {basic: [7000,8750], premium: [11200,14000], enterprise: [14000,17500]},
     90000: {basic: [7500,9375], premium: [12000,15000], enterprise: [15000,18750]},
     100000: {basic: [8000,10000], premium: [12800,16000], enterprise: [16000,20000]}
     */
};

var currentPriceRow = priceMatrix[100];
var currentTimeframeIdx = 1; //0 is annual, 1 is monthly [12-22 no annual option for now]
var currentTier = 'basic';

$(document).ready(function () {

    // TODO so this variable subscriptionInfo was loaded in the html page like var subscriptionInfo = {"rule_count": 0}
    // so for now we just comment all code relating to it

    // $('#lblSubscriptionSummary').html(subscriptionInfo.tier.toUpperCase() + ' ' + subscriptionInfo.max_listings);
    // $('#lblActiveListings').html(subscriptionInfo.rule_count + ' OUT OF ' + subscriptionInfo.max_listings);

    $('#selNumListings').on('change', function() {
        var numListings = $('#selNumListings option:selected').val();

        $('.table-box td').css('background-color', 'white');
        $('.table-box th').css('background-color', 'white');
        $('.btn.active').html('Current Plan');
        // $('#btnSelect' + firstUpper(subscriptionInfo.tier)).css('pointer-events', 'auto');

        // if (parseInt(numListings) == subscriptionInfo.max_listings) {
        //     var tiers = ['', '', 'basic', 'premium', 'enterprise'];
        //
        //     //$('.table-box td:nth-child(' + tiers.indexOf(subscriptionInfo.tier) + ')').css('background-color', '#fdfd96');
        //     //$('.table-box th:nth-child(' + tiers.indexOf(subscriptionInfo.tier) + ')').css('background-color', '#fdfd96');
        //
        //     // $('#btnSelect' + firstUpper(subscriptionInfo.tier)).html('Current Plan');
        //     // $('#btnSelect' + firstUpper(subscriptionInfo.tier)).parent().css('pointer-events', 'none');
        // }

        currentPriceRow = priceMatrix[numListings];

        updatePrices();
    });

    // $('#selNumListings').val(subscriptionInfo.max_listings);
    $('#selNumListings').change();

    $('#lnkAnnual').on('click', function() {
        currentTimeframeIdx = 0;
        updatePrices();
        return false;
    });

    $('#lnkMonthly').on('click', function() {
        currentTimeframeIdx = 1;
        updatePrices();
        return false;
    });

    updatePrices();


    // TODO - I commented the code related to stripeHandler because is not needed for the subscription page for now
    // var stripeHandler = StripeCheckout.configure({
    //     key: 'pk_test_zXaADh6MDYtiKSKIDqFlcJe9',
    //     image: 'https://s3.amazonaws.com/stripe-uploads/acct_161hVMFsQ3HXQDDamerchant-icon-1475946651013-SM%20Favicon%20-%2032%20px.png',
    //     locale: 'auto',
    //     token: function(token) {
    //         // You can access the token ID with `token.id`.
    //         // Get the token ID to your server-side code for use.
    //
    //         saveStripeToken(token.id);
    //
    //     }
    // });

    // // Close Checkout on page navigation:
    // window.addEventListener('popstate', function() {
    //     stripeHandler.close();
    // });
    //
    // $('#btnSelectBasic').on('click', function(e) {
    //     showStripe('Basic');
    //     e.preventDefault();
    // });
    //
    // $('#btnSelectPremium').on('click', function(e) {
    //     showStripe('Premium');
    //     e.preventDefault();
    // });
    //
    // $('#btnSelectEnterprise').on('click', function(e) {
    //     showStripe('Enterprise');
    //     e.preventDefault();
    // });

    // function showStripe(tierFormatted) {
    //
    //     var numListings = $('#selNumListings option:selected').val();
    //     var desc = numListings + ' Listings, ' + tierFormatted + ' Tier, ' + (currentTimeframeIdx === 0 ? 'Annual' : 'Monthly');
    //
    //     currentTier = tierFormatted.toLowerCase();
    //
    //     var currentPrice = currentPriceRow[currentTier][currentTimeframeIdx];
    //     if (currentTimeframeIdx === 0) {
    //         currentPrice *= 12;
    //     }
    //
    //     stripeHandler.open({
    //         name: 'SeatMetrics LLC',
    //         description: desc,
    //         amount: currentPrice * 100, //in cents
    //         //billingAddress: true,
    //         //zipCode: true,
    //         panelLabel: 'Subscribe',
    //         email: userEmail
    //     });
    // }


});

function saveStripeToken(token) {
    var numListings = parseInt($('#selNumListings option:selected').val());

    $.ajax({
        type: "POST",
        url: '../assets/logic/php/ajax_stripe.php',
        data: {stripeToken: token,
            listings: numListings,
            tier: currentTier,
            cycle: (currentTimeframeIdx === 0 ? 'annual' : 'monthly')},
        success: function(response) {
            if (response.success) {
                console.log('Success! Customer: ' + response.customer_id + ' Subscription ' + response.subscription_id);

                toastr.success('Your subscription was successful!', 'Subscription');

                location.reload();
            } else {
                console.log('Failure: ' + response.error);

                toastr.error('An error occurred: ' + response.error);
            }
        }
    });
}

function updatePrices() {
    $('#lblBasicPrice').html(formatNumber(currentPriceRow.basic[currentTimeframeIdx]));
    if (currentPriceRow.basic[currentTimeframeIdx] === 0) {
        $('#btnSelectBasic').css('display', 'none');
    } else {
        $('#btnSelectBasic').css('display', '');
    }

    $('#lblPremiumPrice').html(formatNumber(currentPriceRow.premium[currentTimeframeIdx]));
    if (currentPriceRow.premium[currentTimeframeIdx] === 0) {
        $('#btnSelectPremium').css('display', 'none');
    } else {
        $('#btnSelectPremium').css('display', '');
    }

    $('#lblEnterprisePrice').html(formatNumber(currentPriceRow.enterprise[currentTimeframeIdx]));
    if (currentPriceRow.enterprise[currentTimeframeIdx] === 0) {
        $('#btnSelectEnterprise').css('display', 'none');
    } else {
        $('#btnSelectEnterprise').css('display', '');
    }
}

function formatNumber(num) {
    if (num === 0) {
        return "N/A";
    }
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + '/Month';
}

function firstUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}