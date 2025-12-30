const { regClass, property } = Laya;

@regClass()
export class PlayButton extends Laya.Script {
    @property(Laya.GWidget)
    button: Laya.GWidget;

    onStart() {
        this.button.onClick(() => {
            console.log("Button clicked!");
        });
    }
}