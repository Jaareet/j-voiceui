const speakShadow = '0 0 0 .14vw';
window.addEventListener('load', () => 
    window.addEventListener('message', (event) => 
        event.data.type === 'update' && startUpdatingVoiceControlsLoop(event.data)
    )
);