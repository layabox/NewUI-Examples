@BP.bpClass({ name: "Window2", extends: "GWindow" })
export class Window2 extends Laya.GWindow {
    private _ani: Laya.Animator2D;

    protected async onInit() {
        this.anchor(0.5, 0.5);
        this.contentPane = await Laya.Prefab.instantiate("Examples/windows/Window2.lh");
        this.center();

        this._ani = this.contentPane.getChild("img").getComponent(Laya.Animator2D);
    }

    protected doShowAnimation(): void {
        this.scale(0.1, 0.1);
        Laya.Tween.create(this).to("scaleX", 1).to("scaleY", 1).duration(300).then(() => this.onShown());
    }

    protected doHideAnimation(): void {
        Laya.Tween.create(this).to("scaleX", 0.1).to("scaleY", 0.1).duration(300).then(() => this.hideImmediately());
    }

    protected onShown(): void {
        this._ani.play();
    }
}