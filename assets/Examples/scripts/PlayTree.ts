const { regClass, property } = Laya;

@regClass()
export class PLayTree extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.GTree)
    tree1: Laya.GTree;
    @property(Laya.GTree)
    tree2: Laya.GTree;

    onStart(): void {
        this.tree1.on(Laya.UIEvent.ClickItem, this, this._clickNode);
        this.tree2.on(Laya.UIEvent.ClickItem, this, this._clickNode);
        this.tree2.treeNodeRender = this.renderTreeNode.bind(this);

        let topNode = new Laya.GTreeNode(true);
        topNode.data = "I'm a top node";
        this.tree2.rootNode.addChild(topNode);
        for (let i = 0; i < 5; i++) {
            let node = new Laya.GTreeNode(false);
            node.data = "Hello " + i;
            topNode.addChild(node);
        }

        let aFolderNode = new Laya.GTreeNode(true);
        aFolderNode.data = "A folder node";
        topNode.addChild(aFolderNode);
        for (let i = 0; i < 5; i++) {
            let node = new Laya.GTreeNode(false);
            node.data = "Good " + i;
            aFolderNode.addChild(node);
        }

        for (let i = 0; i < 3; i++) {
            let node = new Laya.GTreeNode(false);
            node.data = "World " + i;
            topNode.addChild(node);
        }

        let anotherTopNode = new Laya.GTreeNode(false);
        anotherTopNode.data = ["I'm a top node too", "Examples/animations/heart.atlas"];
        this.tree2.rootNode.addChild(anotherTopNode);
    }

    private renderTreeNode(node: Laya.GTreeNode, obj: Laya.GWidget) {
        if (node.isFolder) {
            obj.text = node.data;
        }
        else if (node.data instanceof Array) {
            obj.icon = node.data[1];
            obj.text = node.data[0];
        }
        else {
            obj.icon = "Examples/images/file.png";
            obj.text = node.data;
        }
    }

    private _clickNode(item: Laya.GWidget) {
        let node = item.treeNode;
        console.log(node.text);
    }
}