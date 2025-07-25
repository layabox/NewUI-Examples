const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {
    onAwake(): void {
    }

    onStart() {
        console.log("Game start");
    }
}