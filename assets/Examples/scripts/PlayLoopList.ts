const { regClass, property } = Laya;

@regClass()
export class PlayLoopList extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.GList)
    list: Laya.GList;
    @property(Laya.GTextField)
    label: Laya.GTextField;

    onStart(): void {
        this.list.itemRenderer = this.renderListItem.bind(this);
        this.list.setVirtualAndLoop();
        this.list.numItems = 5;
        this.list.on(Laya.UIEvent.Scroll, this, this.doSpecialEffect);
        this.doSpecialEffect();
    }

    private doSpecialEffect(): void {
        let midX = this.list.scroller.posX + this.list.viewWidth / 2;
        let cnt = this.list.numChildren;
        for (let i = 0; i < cnt; i++) {
            let obj: Laya.GButton = this.list.getChildAt(i);
            let dist = Math.abs(midX - obj.x);
            if (dist > obj.width)
                obj.scale(1, 1);
            else {
                let ss: number = 1 + (1 - dist / obj.width) * 0.15;
                obj.scale(ss, ss);
            }
        }

        this.label.text = "" + ((this.list.childIndexToItemIndex(this.list.scroller.getFirstChildInView()) + 1) % this.list.numItems);
    }

    private renderListItem(index: number, item: Laya.GButton): void {
        item.icon = `Examples/images/n${index + 1}.png`;
    }
}