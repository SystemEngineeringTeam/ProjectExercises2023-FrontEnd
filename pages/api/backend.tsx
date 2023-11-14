import axios from "axios";

type BoardSurface = {
    "FinishTIme": string;
    "StartTime": string;
}
type HeartRateData = {
    "id": Number;
    "board_surface_id": Number;
    "time": string;
    "azimuth": string;
    "bpm": Number;
}

type UserStatus = {
    "Azimuth": string;
    "BoardSurfaceId": Number;
    "status": string;
    "UsersStatusId": Number;
    "time": string;
}

export class Backend {
    //コンストラクタを定義
    async start() {
        //送るだけ
        const res = await axios.post<BoardSurface>("https://heartbeat.sysken.net/api/v1/start");
    }

    //データの取得
    async getData(azimuth: string) {
        let bpm = 0;
        let emotion: string = "";
        try {
            //取得
            const resHeartRateData = await axios.get<HeartRateData>("https://heartbeat.sysken.net/api/v1/get_bpm/" + azimuth);
            const resUserStatus = await axios.get<UserStatus>("https://heartbeat.sysken.net/api/v1/get/user_status/" + azimuth);

            //取り出し
            bpm = Number(resHeartRateData.data.bpm);
            emotion = resUserStatus.data.status;
            console.log(emotion);
        } catch (e) {
            bpm = 0;
            emotion = "normal";
        }


        return { bpm, emotion };

    }

}