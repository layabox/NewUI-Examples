const { regClass, property } = Laya;

@regClass()
export class PlayText extends Laya.Script {
    @property(Laya.GWidget)
    GetInputButton: Laya.GWidget;

    @property(Laya.GTextInput)
    InputResultText: Laya.GTextField;

    @property(Laya.GTextInput)
    InputText: Laya.GTextInput;

    @property(Laya.GTextField)
    RichText: Laya.GTextField;

    onStart(): void {
        this.RichText.on(Laya.Event.LINK, (href: string) => {
            this.RichText.text = "[img]Examples/images/plus_smile_png.png[/img][color=#FF0000]You click the link:[/color] ";
        });

        this.GetInputButton.onClick(() => {
            this.InputResultText.text = this.InputText.text;
        });
    }
}