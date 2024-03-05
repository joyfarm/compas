let 각도 = 0
basic.forever(function () {
    각도 = input.compassHeading()
    if (각도 > 0 && 각도 < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (각도 > 45 && 각도 < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (각도 > 135 && 각도 < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (각도 > 225 && 각도 < 315) {
        basic.showArrow(ArrowNames.East)
    } else if (각도 > 315 && 각도 < 360) {
        basic.showArrow(ArrowNames.North)
    }
})
