const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {
    @property(Laya.GWidget)
    backButton: Laya.GWidget;

    @property(Laya.GWidget)
    container: Laya.GWidget;

    private _activePage: Laya.GWidget;

    onStart(): void {
        this.backButton.onClick(() => {
            this.container.setPage("c1", 0);
            this._activePage.destroy();
            this.backButton.visible = false;
        });
    }

    onDestroy(): void {
        this._activePage?.destroy();
    }

    async openPage(pageRes: string) {
        Laya.GRoot.inst.showModalWait();

        this._activePage = await Laya.Prefab.instantiate(pageRes);
        this._activePage.makeFullSize(this.container, true);
        this.container.removeChildren();
        this.container.addChild(this._activePage);
        this.container.setPage("c1", 1);
        this.backButton.visible = true;

        Laya.GRoot.inst.closeModalWait();
    }
}