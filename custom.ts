let ID = 0
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
//% weight=100 color=#ffa500 icon="R"
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
    //% block
    export function 無線送信(w: way,ID: number): void {
        if(w === 1) {
            radio.setGroup(ID)
            radio.sendString("前")
        }
        if(w === -1) {
            radio.setGroup(ID)
            radio.sendString("後ろ")   
        }
        if(w === 2) {
            radio.setGroup(ID)
            radio.sendString("右")   
        }
        if(w === -2) {
            radio.setGroup(ID)
            radio.sendString("左")   
        }
        if(w === 0) {
            radio.setGroup(ID)
            radio.sendString("停止")
        }
    }
    //% block
    export function 無線受信(w: way,ID: number): void {
        radio.onReceivedString(function(receivedString: string) {   
        if(w === 1 && receivedString  === "前") {
            radio.setGroup(ID)
            }
        if(w === -1 && receivedString  === "後ろ") {
            radio.setGroup(ID)  
            }
        if(w === 2 && receivedString  === "右") {
            radio.setGroup(ID)   
            }
        if(w === -2 && receivedString  === "左") {
            radio.setGroup(ID)
            }
        if(w === 0 && receivedString  === "停止") {
            radio.setGroup(ID)
            }
        })
    }
}