const { regClass, property } = Laya;

@regClass()
export class PlayDepth extends Laya.Script {
    @property(Laya.GWidget)
    button1: Laya.GWidget;

    @property(Laya.GWidget)
    button2: Laya.GWidget;

    @property(Laya.GWidget)
    container: Laya.GWidget;

    private _pos: Laya.Point = new Laya.Point();

    onStart() {
        this.button1.onClick(() => {
            let sprite = new Laya.Sprite();
            sprite.size(150, 150);
            sprite.pos(this._pos.x, this._pos.y);
            sprite.graphics.drawRect(0, 0, 1, 1, "#fff", "#000", 1, true);
            this.container.addChild(sprite);

            this._pos.x += 20;
            this._pos.y += 20;
        });

        this.button2.onClick(() => {
            let sprite = new Laya.Sprite();
            sprite.size(150, 150);
            sprite.pos(this._pos.x, this._pos.y);
            sprite.graphics.drawRect(0, 0, 1, 1, "#ff0", "#000", 1, true);
            sprite.zOrder = 200;
            this.container.addChild(sprite);

            this._pos.x += 20;
            this._pos.y += 20;
        });
    }
}