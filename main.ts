function playMountainKingHigh (tempo: number) {
    music.setTempo(tempo)
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(415, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(0, music.beat(BeatFraction.Quarter))
}
function speedUp (pitch: string) {
    tempo_list = [
    30,
    40,
    50,
    60
    ]
    if (pitch == "low" || pitch == "LOW") {
        for (let t of tempo_list) {
            playMountainKingLow(t)
        }
    } else if (pitch == "high" || pitch == "HIGH") {
        for (let t of tempo_list) {
            playMountainKingHigh(t)
        }
    } else {
        serial.writeLine("Set pitch variable to high or low to use this function.")
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start") {
        if (team == "A" || team == "a") {
            speedUp("low")
        } else if (team == "B" || team == "b") {
            speedUp("high")
        } else {
            serial.writeLine("You must join team A or B to play.")
        }
    }
})
function playMountainKingLow (tempo: number) {
    music.setTempo(tempo)
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(220, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Eighth))
    music.playTone(220, music.beat(BeatFraction.Eighth))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(208, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(220, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(0, music.beat(BeatFraction.Quarter))
}
let tempo_list: number[] = []
let team = ""
radio.setGroup(1)
team = "A"
music.setVolume(150)
playMountainKingLow(30)
playMountainKingHigh(30)
speedUp("low")
speedUp("high")
basic.forever(function () {
	
})
