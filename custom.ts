
let speed = 0

enum way {
    //% block="前"
    前 = 1,
    //% block="後ろ"
    後ろ = -1,
    //% block="右"
    右 = 2,
    //%　block="左"
    左 = -2,
    //% block="停止"
    停止 = 0
}

namespace こうかにんじゃロボコン{
    //% block
    export function 進む方向(w: way,speed: number): void {
        if(w === 1) {
            servos.P1.run(-speed)
            servos.P2.run(speed)   
        }
        if(w === -1) {
            servos.P1.run(speed)
            servos.P2.run(-speed)   
        }
        if(w === 2) {
            servos.P1.stop()
            servos.P2.run(speed)   
        }
        if(w === -2) {
            servos.P1.run(-speed)
            servos.P2.stop()   
        }
        if(w === 0) {
            servos.P1.stop()
            servos.P2.stop()
        }
    }
}