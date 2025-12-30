const { regClass, property } = Laya;

@regClass()
export class PlayPopup extends Laya.Script {
    @property(Laya.GWidget)
    button1: Laya.GWidget;

    @property(Laya.GWidget)
    button2: Laya.GWidget;

    private _popupMenu: Laya.PopupMenu;
    private _popupPanel: Laya.GWidget;

    onStart() {
        this.button1.onClick(async () => {
            if (this._popupPanel == null)
                this._popupPanel = await Laya.Prefab.instantiate("Examples/widgets/PopupWin.lh");
            Laya.GRoot.inst.showPopup(this._popupPanel, this.button1);
        });

        this.button2.onClick(() => {
            if (this._popupMenu == null) {
                this._popupMenu = new Laya.PopupMenu();
                for (let i = 0; i < 4; i++)
                    this._popupMenu.addItem("Item" + i);
            }
            this._popupMenu.show(this.button2);
        });
    }

    onDestroy(): void {
        this._popupMenu?.destroy();
        this._popupPanel?.destroy();
    }
}