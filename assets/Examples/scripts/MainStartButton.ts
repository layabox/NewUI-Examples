import { Main } from "./Main";

const { regClass, property } = Laya;

@regClass()
export class MainStartButton extends Laya.Script {
    @property({ type: "string", isAsset: true, assetTypeFilter: "Prefab" })
    PageRes: string;

    onMouseClick(): void {
        this.owner.scene.getComponent(Main).openPage(this.PageRes);
    }
}