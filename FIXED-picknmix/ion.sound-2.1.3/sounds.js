
ion.sound({
    sounds: [
        {
            name: "bell_ring.aac"
        },
        {
            name: "notify_sound",
            volume: 0.2
        },
        {
            name: "alert_sound",
            volume: 0.3,
            preload: false
        }
    ],
    volume: 0.5,
    path: "sounds/",
    preload: true
});



ion.sound.play("bell_ring.aac");