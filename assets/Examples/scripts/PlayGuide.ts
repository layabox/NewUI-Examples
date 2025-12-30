const { regClass, property } = Laya;

@regClass()
export class PlayGuide extends Laya.Script {
    @property(Laya.GWidget)
    public btnBag: Laya.GWidget;

    @property(Laya.GWidget)
    public btnStart: Laya.GWidget;

    private _guideLayer: Laya.GWidget;

    async onStart() {
        this._guideLayer = await Laya.Prefab.instantiate("Examples/widgets/GuideLayer.lh");
        this._guideLayer.makeFullSize(Laya.GRoot.inst, true);

        this.btnStart.onClick(() => {
            Laya.GRoot.inst.addChild(this._guideLayer);
            let rect = Laya.SpriteUtils.getRect(this.btnBag);
            Laya.SpriteUtils.transformRect(this.btnBag, rect, this._guideLayer, rect);
            let cx = rect.x + rect.width / 2;
            let cy = rect.y + rect.height / 2;

            let win = this._guideLayer.getChild("window");
            win.size(rect.width, rect.height);
            (this._guideLayer.hitArea as Laya.HitArea).moveTo(cx, cy, false, true);
            Laya.Tween.create(win).to("x", cx).to("y", cy).duration(500);
        });

        this.btnBag.onClick(() => {
            this._guideLayer.removeSelf();
        });
    }

    onDestroy(): void {
        this._guideLayer?.destroy();
    }
}