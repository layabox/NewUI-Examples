const { regClass, property } = Laya;

@regClass()
export class PlayDualScroll extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.GList)
    list: Laya.GList;
    @property(Laya.GTextField)
    label: Laya.GTextField;

    onStart(): void {
        this.list.itemRenderer = this.renderListItem.bind(this);
        this.list.setVirtual();
        this.list.numItems = 1000;
        this.list.on(Laya.Event.MOUSE_DOWN, this, this.onClickList);
    }

    private renderListItem(index: number, item: Laya.GButton) {
        item.title = "Item " + index;
        let panel = item.getChildAt<Laya.GPanel>(0);
        panel.scroller.posX = 0; //reset scroll pos

        panel.getChild("b0").onClick(this, this.onClickStick);
        panel.getChild("b1").onClick(this, this.onClickDelete);
    }

    private onClickList(evt: Laya.Event) {
        //点击列表时，查找是否有项目处于编辑状态， 如果有就归位
        let touchTarget = evt.target;
        let cnt = this.list.numChildren;
        for (let i: number = 0; i < cnt; i++) {
            let item: Laya.GButton = this.list.getChildAt(i);
            let panel = item.getChildAt<Laya.GPanel>(0);
            if (panel.scroller.posX != 0) {
                //Check if clicked on the button
                if (touchTarget.name == "b0" || touchTarget.name == "b1") {
                    return;
                }
                panel.scroller.setPosX(0, true);

                //取消滚动面板可能发生的拉动。
                panel.scroller.cancelDragging();
                this.list.scroller.cancelDragging();
                break;
            }
        }
    }

    private onClickStick(evt: Laya.Event) {
        this.label.text = "Stick " + evt.currentTarget.parent.parent.text;
    }

    private onClickDelete(evt: Laya.Event) {
        this.label.text = "Delete " + evt.currentTarget.parent.parent.text;
    }
}