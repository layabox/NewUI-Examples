const { regClass, property } = Laya;

@regClass()
export class PlayProgressBar extends Laya.Script {
    @property([Laya.GProgressBar])
    pbs: Laya.GProgressBar[];

    onUpdate(): void {
        for (let pb of this.pbs) {
            pb.value++;
            if (pb.value > pb.max)
                pb.value = pb.min;
        }
    }
}