local isHudToggled = false;
CreateThread(function()
    while (true) do 
        SendNUIMessage({
            type = 'update',
            isSpeaking = NetworkIsPlayerTalking(PlayerId()) == 1;
            show = not IsPauseMenuActive() and not isHudToggled;
        })
        Wait(1000)
    end
end)
RegisterCommand('togglevoice', function()
    isHudToggled = not isHudToggled;
end)