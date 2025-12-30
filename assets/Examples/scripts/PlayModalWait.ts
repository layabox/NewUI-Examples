const { regClass, property } = Laya;

@regClass()
export class PlayModalWait extends Laya.Script {
    @property(Laya.GWidget)
    btnOpenWin: Laya.GWidget;

    private _testWin: Laya.GWindow;

    async onStart() {
        this._testWin = new Laya.GWindow();
        this._testWin.contentPane = await Laya.Prefab.instantiate("Examples/windows/TestWin.lh");
        this._testWin.contentPane.getChild("btnRefresh").onClick(() => {
            this._testWin.showModalWait();
            Laya.Utils.sleep(3000).then(() => {
                this._testWin.closeModalWait();
            });
        });

        this.btnOpenWin.onClick(() => {
            this._testWin.show();
            this._testWin.center();
        });


        Laya.GRoot.inst.showModalWait();
        await Laya.Utils.sleep(3000);
        Laya.GRoot.inst.closeModalWait();
    }

    onDestroy(): void {
        this._testWin?.destroy();
    }
}