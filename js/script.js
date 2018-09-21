// Text to console, this works.
console.log('This is alive!');

// Function to change chat title and location, logging to console
// also changes the higlight of tabs
function switchChannel(channelName){
    console.log('Tuning into channel' + '#'+channelName);
    document.getElementById('chat-title').innerHTML= '#'+ channelName;
    document.getElementById('chat-location').innerHTML= 'upgrading.never.helps';
    clearStar();
    selectTab(channelName);
}

// clears star from chat bar
function clearStar(){
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

// fills star from chat bar
function fillStar(){
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

// removes class .selected and add it to clicked item
function selectTab(tabId){
    $('.selected').removeClass('selected');
    $('#'+tabId).addClass('selected');
}

// toggles visibility of #emojis
function emojiBox(){
    $("#emojis").toggle();
}
