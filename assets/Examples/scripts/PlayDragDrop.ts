const { regClass, property } = Laya;

@regClass()
export class PlayDragDrop extends Laya.Script {
    @property(Laya.GWidget)
    dragArea: Laya.GWidget;

    @property(Laya.GWidget)
    grid0: Laya.GWidget;

    @property(Laya.GWidget)
    grid1: Laya.GWidget;

    @property(Laya.GWidget)
    grid2: Laya.GWidget;

    @property(Laya.GWidget)
    grid3: Laya.GWidget;

    onStart(): void {
        this.grid0.draggable = true;
        this.grid1.draggable = true;
        this.grid2.draggable = true;
        this.grid3.draggable = true;

        this.grid1.on(Laya.Event.DRAG_START, () => {
            this.grid1.stopDrag();

            Laya.DragDropManager.inst.start(this.grid0, this.grid0.icon, this.grid0.icon);
        });

        this.grid2.on(Laya.Event.DROP, (source: Laya.Sprite, data: any) => {
            this.grid2.icon = data;
        });

        let rect = Laya.SpriteUtils.getRect(this.dragArea);
        Laya.SpriteUtils.transformRect(this.dragArea, rect, this.grid3.parent, rect);
        this.grid3.dragSupport.area = rect;
    }
}