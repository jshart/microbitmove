input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    PixelArray.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    PixelArray.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    PixelArray.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    PixelArray.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    PixelArray.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        PixelArray.clear()
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    PixelArray.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    PixelArray.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    PixelArray.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    PixelArray.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    PixelArray.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    PixelArray.show()
})
let PixelArray: neopixel.Strip = null
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
