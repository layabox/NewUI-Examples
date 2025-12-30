
export class Window1 extends Laya.GWindow {
    private _list1: Laya.GList;

    protected async onInit() {
        this.contentPane = await Laya.Prefab.instantiate("Examples/windows/Window1.lh");
        this._list1 = this.contentPane.getChild("list");
        this.center();
    }

    protected onShown(): void {
        this._list1.removeChildrenToPool();
        for (let i = 0; i < 6; i++) {
            let btn = this._list1.addItemFromPool();
            btn.text = i.toString();
            btn.icon = "Examples/images/r4.png";
        }
    }
}