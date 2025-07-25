import { EmojiParser } from "./EmojiParser";

const { regClass, property } = Laya;

@regClass()
export class PlayChat extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.GList)
    list: Laya.GList;

    @property(Laya.GButton)
    btnEmoji: Laya.GList;

    @property(Laya.GTextInput)
    input: Laya.GTextInput;

    @property(Laya.GButton)
    btnSend: Laya.GTextField;

    private _emojiSelectUI: Laya.GWidget;
    private _messages: Array<Message>;
    private _emojiParser: EmojiParser;

    async onStart() {

        this._messages = new Array<Message>();
        this._emojiParser = new EmojiParser();

        this.list.setVirtual();
        this.list.itemProvider = this.getListItemResource.bind(this);
        this.list.itemRenderer = this.renderListItem.bind(this);

        this.input.on(Laya.Event.ENTER, this, this.onSubmit);

        this.btnSend.onClick(this, this.onClickSendBtn);
        this.btnEmoji.onClick(this, this.onClickEmojiBtn);

        this._emojiSelectUI = await Laya.Prefab.instantiate("Examples/widgets/EmojiSelectUI.lh");
        this._emojiSelectUI.getChild("list").on(Laya.UIEvent.ClickItem, this, this.onClickEmoji);
    }

    private addMsg(sender: string, senderIcon: string, msg: string, fromMe: boolean) {
        let isScrollBottom: boolean = this.list.scroller.isBottomMost;

        let newMessage: Message = { sender, senderIcon, msg, fromMe };
        this._messages.push(newMessage);

        if (newMessage.fromMe) {
            if (this._messages.length == 1 || Math.random() < 0.5) {
                let replyMessage = {
                    sender: "FairyGUI",
                    senderIcon: "Examples/images/r1.png",
                    msg: "Today is a good day. [:hxiao]",
                    fromMe: false
                };
                this._messages.push(replyMessage);
            }
        }

        if (this._messages.length > 100)
            this._messages.splice(0, this._messages.length - 100);

        this.list.numItems = this._messages.length;

        if (isScrollBottom)
            this.list.scroller.scrollBottom();
    }

    private getListItemResource(index: number): string {
        let msg = this._messages[index];
        if (msg.fromMe)
            return "Examples/widgets/ChatRight.lh";
        else
            return "Examples/widgets/ChatLeft.lh";
    }

    private renderListItem(index: number, item: Laya.GWidget): void {
        let msg = this._messages[index];
        if (!msg.fromMe)
            item.getChild("name").text = msg.sender;
        item.icon = msg.senderIcon;
        item.text = this._emojiParser.parse(msg.msg);
        //设置text后排版不是即时的，这会应该虚拟列表对行高的判断，手动触发立即排版
        item.getChild<Laya.GTextField>("msg").typeset();
    }

    private onClickSendBtn() {
        let msg = this.input.text;
        if (!msg)
            return;

        this.addMsg("User", "Examples/images/r0.png", msg, true);
        this.input.text = "";
    }

    private onClickEmojiBtn(evt: Laya.Event) {
        Laya.GRoot.inst.showPopup(this._emojiSelectUI, evt.currentTarget, Laya.PopupDirection.Up);
    }

    private onClickEmoji(item: Laya.GWidget) {
        this.input.text += "[:" + item.name + "]";
    }

    private onSubmit() {
        this.onClickSendBtn();
    }
}

interface Message {
    sender: string;
    senderIcon: string;
    msg: string;
    fromMe: boolean;
}