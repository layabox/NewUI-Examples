import { MailItem } from "./MailItem";

const { regClass, property } = Laya;

@regClass()
export class PlayVirtualList extends Laya.Script {
    @property(Laya.GList)
    list: Laya.GList;
    @property(Laya.GButton)
    btn0: Laya.GButton;
    @property(Laya.GButton)
    btn1: Laya.GButton;
    @property(Laya.GButton)
    btn2: Laya.GButton;

    onStart(): void {
        this.btn0.onClick(() => { this.list.selection.add(500, true); });
        this.btn1.onClick(() => { this.list.scroller.scrollTop(); });
        this.btn2.onClick(() => { this.list.scroller.scrollBottom(); });

        this.list.itemPool.defaultRuntime = MailItem;
        this.list.itemRenderer = this.renderListItem.bind(this);
        this.list.setVirtual();
        this.list.numItems = 1000;
    }

    private renderListItem(index: number, item: MailItem): void {
        item.setFetched(index % 3 == 0);
        item.setRead(index % 2 == 0);
        item.setTime("5 Nov 2015 16:24:33");
        item.title = index + " Mail title here";
    }
}