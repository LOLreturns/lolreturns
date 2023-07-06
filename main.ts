input.onButtonPressed(Button.A, function () {
    basic.showString("U are")
    basic.showString("GONNA")
    basic.showString("DIE")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showString("LOL")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("LOL")
    basic.showString("KIDDING")
    music.play(music.stringPlayable("C5 C5 A A F D D C ", 277), music.PlaybackMode.LoopingInBackground)
})
basic.showString("SUP")
basic.showIcon(IconNames.Skull)
basic.showString("Shakira")
basic.showIcon(IconNames.Happy)
