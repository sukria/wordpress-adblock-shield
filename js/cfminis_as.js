
function cfminis_createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function cfminis_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function cfminis_as_run() {
    // the beacon doesn't exist: an adblocker prevented ads.js
    if(!document.getElementById('uAHxrdjKXEgb')){
        setTimeout(function() {  
                //document.getElementById('NpQBuHymWPbr').style.display='block';
                $("#NpQBuHymWPbr").fadeIn(700);
                }, 10000);  

        // counting an adblocker guy
        ga('send', 'event', 'adblocker', 'enabled');
        createCookie('adblocker', 'enabled', 3);
    }
    else {
        if ("enabled" == readCookie('adblocker')) {
            // adblocker était actif
            ga('send', 'event', 'adblocker', 'disabled');
            createCookie('adblocker', 'disabled', 3);
            setTimeout(function() {  $("#fynspfun-unblocked").fadeIn(700); }, 1000);  
            setTimeout(function() {  $("#fynspfun-unblocked").fadeOut(700); }, 11000);  
        }
        else {
            ga('send', 'event', 'adblocker', 'inactive');
        }
    }
}
