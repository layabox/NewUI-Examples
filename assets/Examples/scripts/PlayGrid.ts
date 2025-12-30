const { regClass, property } = Laya;

@regClass()
export class PlayGrid extends Laya.Script {
    @property(String)
    list1: Laya.GList;

    @property(String)
    list2: Laya.GList;

    onStart(): void {
        this.list1.removeChildrenToPool();

        const colors = [
            "#ffff00",
            "#ff0000",
            "#ffffff",
            "#00ffff"
        ];
        for (let i = 0; i < 20; i++) {
            let btn = this.list1.addItemFromPool();
            btn.getChild("t0").text = (i + 1).toString();
            btn.getChild("t1").text = "Item" + i;
            btn.getChild("t2", Laya.GTextField).color = colors[Math.floor(Math.random() * 4)];
            btn.getChild("star", Laya.GProgressBar).value = Math.floor(1 + Math.random() * 3) * 33;
        }

        this.list2.removeChildrenToPool();
        for (let i = 0; i < 20; i++) {
            let btn = this.list2.addItemFromPool();
            btn.getChild("cb", Laya.GButton).selected = false;
            btn.getChild("t1").text = "Item" + i;
            btn.getChild("mc", Laya.GMovieClip).autoPlay = i % 2 === 0;
            btn.getChild("t3").text = Math.floor(Math.random() * 10000).toString();
        }
    }
}