import axios from "axios";

type BoardSurface = {
    "FinishTIme": String;
    "StartTime": String;
}
// type BoardSurface = {
//     "FinishTIme": String;
//     "StartTime": String;
// }

// type BoardSurface = {
//     "FinishTIme": String;
//     "StartTime": String;
// }

export class Backend {
    //コンストラクタを定義
    async start() {
        //送るだけ
        const res = await axios.post<BoardSurface>("https://heartbeat.sysken.net/api/v1/start");
    }


}