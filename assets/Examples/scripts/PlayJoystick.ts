import { JoystickModule } from "./JoystickModule";

@Laya.regClass()
export class JoystickScript extends Laya.Script {
    private _joystick: JoystickModule;

    @Laya.property(Laya.GWidget)
    label: Laya.GWidget;

    onEnable(): void {
        this._joystick = new JoystickModule(this.owner.getChild("joystick"));
        this._joystick.on(JoystickModule.JoystickMoving, this, this.onJoystickMoving);
        this._joystick.on(JoystickModule.JoystickUp, this, this.onJoystickUp);
    }

    private onJoystickMoving(degree: number): void {
        this.label.text = "" + degree;
    }

    private onJoystickUp(): void {
        this.label.text = "";
    }
}