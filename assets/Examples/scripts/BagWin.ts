const { regClass, property } = Laya;

@regClass()
export class BagWin extends Laya.Script {

    @property(Laya.GList)
    dots: Laya.GList;

    @property(Laya.GLoader)
    img: Laya.GLoader;

    @property(Laya.GTextField)
    label: Laya.GTextField;

    @property(Laya.GList)
    list: Laya.GList;

    onStart() {
        this.list.itemRenderer = this.itemRenderer.bind(this);
        this.list.setVirtual();
        this.list.numItems = 50;
        this.list.on(Laya.UIEvent.Scroll, () => {
            this.dots.selectedIndex = this.list.scroller.pageX;
        });
        this.list.on(Laya.UIEvent.ClickItem, (item: Laya.GWidget) => {
            this.img.icon = item.icon;
            this.label.text = item.text;
        });

        this.dots.numItems = this.list.scroller.pageCountX;
        this.dots.selectedIndex = 0;
    }

    private itemRenderer(index: number, item: Laya.GWidget): void {
        item.text = index.toString();
        item.icon = "Examples/icons/i" + (index % 10) + ".png";
    }
}