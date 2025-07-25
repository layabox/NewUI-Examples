
export class MailItem extends Laya.GButton {

    private _timeText: Laya.GTextField;
    private _readController: Laya.Controller;
    private _fetchController: Laya.Controller;

    constructor() {
        super();
    }

    onConstruct(): void {
        this._timeText = this.getChild("timeText");
        this._readController = this.getController("IsRead");
        this._fetchController = this.getController("c1");
    }

    setTime(value: string): void {
        this._timeText.text = value;
    }

    setRead(value: boolean): void {
        this._readController.selectedIndex = value ? 1 : 0;
    }

    setFetched(value: boolean): void {
        this._fetchController.selectedIndex = value ? 1 : 0;
    }
}
