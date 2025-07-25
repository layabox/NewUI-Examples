
export class JoystickModule extends Laya.EventDispatcher {
    private _centerX: number;
    private _centerY: number;
    private _button: Laya.GButton;
    private _area: Laya.GWidget;
    private _thumb: Laya.GWidget;
    private _center: Laya.GWidget;
    private _tweener: Laya.Tween;

    static readonly JoystickMoving: string = "JoystickMoving";
    static readonly JoystickUp: string = "JoystickUp";

    radius: number = 150;

    constructor(area: Laya.GWidget) {
        super();

        this._area = area;
        this._button = area.getChild("button");
        this._button.changeStateOnClick = false;
        this._thumb = this._button.getChild("thumb");
        this._center = area.getChild("center");

        this._centerX = this._center.x;
        this._centerY = this._center.y;

        this._area.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
        this._button.on(Laya.Event.DRAG_MOVE, this, this.onDragMove);
        this._button.on(Laya.Event.DRAG_END, this, this.onDragEnd);
    }

    trigger(evt: Laya.Event): void {
        this.onTouchDown();
    }

    private onTouchDown() {
        let dragSupport = this._button.dragSupport;
        if (dragSupport.dragging)
            return;

        if (this._tweener != null) {
            this._tweener.kill();
            this._tweener = null;
        }

        let pt = this._area.globalToLocal(Laya.Point.TEMP.setTo(Laya.stage.mouseX, Laya.stage.mouseY));
        this._center.visible = true;
        this._center.pos(pt.x, pt.y);

        this._button.selected = true;
        this._button.pos(pt.x, pt.y);
        dragSupport.area.setTo(pt.x - this.radius - this._button.width / 2, pt.y - this.radius - this._button.width / 2,
            this.radius * 2 + this._button.width, this.radius * 2 + this._button.width);
        dragSupport.start();

        let degrees: number = Math.atan2(pt.y - this._centerY, pt.x - this._centerX) * 180 / Math.PI;
        this._thumb.rotation = degrees + 90;
    }

    private onDragEnd(): void {
        this._thumb.rotation = this._thumb.rotation + 180;
        this._center.visible = false;
        this._tweener = Laya.Tween.create(this._button).to("x", this._centerX).to("y", this._centerY)
            .duration(300)
            .ease(Laya.Ease.circOut)
            .then(this.onTweenComplete, this);
        this.event(JoystickModule.JoystickUp);
    }

    private onTweenComplete(): void {
        this._tweener = null;
        this._button.selected = false;
        this._thumb.rotation = 0;
        this._center.visible = true;
        this._center.pos(this._centerX, this._centerY);
    }

    private onDragMove(evt: Laya.Event): void {
        let degrees: number = Math.atan2(this._button.y - this._center.y, this._button.x - this._center.x) * 180 / Math.PI;
        this._thumb.rotation = degrees + 90;

        this.event(JoystickModule.JoystickMoving, degrees);
    }
}
