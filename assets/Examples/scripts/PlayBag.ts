const { regClass, property } = Laya;

@regClass()
export class PlayBag extends Laya.Script {
    @property(Laya.GWidget)
    btn: Laya.GWidget;

    private _win: Laya.GWindow;

    async onStart() {
        this._win = new Laya.GWindow();
        this._win.contentPane = await Laya.Prefab.instantiate("Examples/windows/BagWin.lh");

        this.btn.onClick(() => {
            this._win.show();
            this._win.center();
        });
    }

    onDestroy(): void {
        this._win?.destroy();
    }
}