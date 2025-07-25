const { regClass } = Laya;
import { ScrollerHeaderBase } from "./ScrollerHeader.generated";

@regClass()
export class ScrollerHeader extends ScrollerHeaderBase {
    private _c1: Laya.Controller;

    onConstruct(): void {
        this._c1 = this.getController("c1");
        this.on(Laya.Event.RESIZE, this, this.onSizeChanged);
    }

    private onSizeChanged(): void {
        if (this._c1.selectedIndex == 2 || this._c1.selectedIndex == 3)
            return;

        if (this.height > this.sourceHeight)
            this._c1.selectedIndex = 1;
        else
            this._c1.selectedIndex = 0;
    }

    get readyToRefresh(): boolean {
        return this._c1.selectedIndex == 1;
    }

    setRefreshStatus(value: number): void {
        this._c1.selectedIndex = value;
    }
}