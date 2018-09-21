console.log('This is alive!');

function switchChannel(channelName){
    console.log('Tuning into channel' + '#'+channelName);
    document.getElementById('chat-title').innerHTML= '#'+ channelName;
    document.getElementById('chat-location').innerHTML= 'upgrading.never.helps';
    clearStar();
    selectTab(channelName);
}

function clearStar(){
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillStar(){
    $('#chat-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId){
    $('.selected').removeClass('selected');
    $('#'+tabId).addClass('selected');
}

function emojiBox(){
    $("#emojis").toggle();
}
