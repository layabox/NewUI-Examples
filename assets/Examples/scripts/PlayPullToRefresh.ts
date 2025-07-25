import { ScrollerHeader } from "./ScrollerHeaader";

const { regClass, property } = Laya;

@regClass()
export class PlayPullToRefresh extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.GList)
    list1: Laya.GList;
    @property(Laya.GList)
    list2: Laya.GList;

    onStart(): void {
        this.list1.itemRenderer = this.renderListItem1.bind(this);
        this.list1.setVirtual();
        this.list1.numItems = 1;
        this.list1.on(Laya.UIEvent.PullDownRelease, this, this.onPullDownToRefresh);

        this.list2.itemRenderer = this.renderListItem2.bind(this);
        this.list2.setVirtual();
        this.list2.numItems = 1;
        this.list2.on(Laya.UIEvent.PullUpRelease, this, this.onPullUpToRefresh);
    }

    private renderListItem1(index: number, item: Laya.GWidget): void {
        item.text = "Item " + (this.list1.numItems - index - 1);
    }

    private renderListItem2(index: number, item: Laya.GWidget): void {
        item.text = "Item " + index;
    }

    private onPullDownToRefresh(): void {
        var header = this.list1.scroller.header as ScrollerHeader;
        if (header.readyToRefresh) {
            header.setRefreshStatus(2);
            this.list1.scroller.lockHeader(header.sourceHeight);

            //Simulate a async resquest
            Laya.timer.once(2000, this, () => {
                if (this.owner.destroyed)
                    return;
                this.list1.numItems += 5;

                //Refresh completed
                header.setRefreshStatus(3);
                this.list1.scroller.lockHeader(35);

                Laya.timer.once(2000, this, () => {
                    header.setRefreshStatus(0);
                    this.list1.scroller.lockHeader(0);
                });
            });
        }
    }

    private onPullUpToRefresh(): void {
        let footer = this.list2.scroller.footer;

        footer.getController("c1").selectedIndex = 1;
        this.list2.scroller.lockFooter(footer.sourceHeight);

        //Simulate a async resquest
        Laya.timer.once(2000, this, () => {
            if (this.owner.destroyed)
                return;
            this.list2.numItems += 5;

            //Refresh completed
            footer.getController("c1").selectedIndex = 0;
            this.list2.scroller.lockFooter(0);
        });
    }
}