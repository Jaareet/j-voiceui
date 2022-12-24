function startUpdatingVoiceControlsLoop(data){
    const { isSpeaking, show } = data;
    isSpeaking ? $('.mic-box').css({'box-shadow': `${speakShadow} skyblue`}) : $('.mic-box').css({'box-shadow': '0 0 0 0 transparent, 0 0 .4vw #000'});
    isSpeaking ? $('.mic-box i').addClass('mic-speak-anim') : $('.mic-box i').removeClass('mic-speak-anim');
    show ? $('.mic-box').css({'opacity': '1'}) : $('.mic-box').css({'opacity': '0'});
}