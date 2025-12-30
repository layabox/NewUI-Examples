import { Window1 } from "./Window1";
import { Window2 } from "./Window2";

const { regClass, property } = Laya;

@regClass()
export class PlayWindow extends Laya.Script {
    @property(Laya.GWidget)
    button1: Laya.GWidget;

    @property(Laya.GWidget)
    button2: Laya.GWidget;

    private _win1: Laya.GWindow;
    private _win2: Laya.GWindow;

    async onStart(): Promise<void> {
        this._win1 = new Window1();
        this.button1.onClick(() => {
            this._win1.show();
            this._win1.center();
        });

        this._win2 = new Window2();
        this.button2.onClick(() => {
            this._win2.show();
            this._win2.center();
        });
    }

    onDestroy(): void {
        this._win1?.destroy();
        this._win2?.destroy();
    }
}