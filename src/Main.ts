const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {
    @property({ type: "string", enumSource: Object.keys(Laya.Ease) })
    public easeType: string;

    onAwake(): void {

        this.owner.on(Laya.Event.MOUSE_DOWN, () => {

            console.log("aaa");

        })

    }

    onStart() {
        console.log("Game start");
    }
}