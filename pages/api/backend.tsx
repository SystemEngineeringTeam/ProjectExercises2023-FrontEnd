import axios from "axios";

type BoardSurface = {
    "finish_time": string;
    "start_time": string;
}
type HeartRateData = {
    "id": Number;
    "board_surface_id": Number;
    "time": string;
    "azimuth": string;
    "bpm": Number;
}

type UserStatus = {
    "azimuth": string;
    "board_surface_id": Number;
    "status": string;
    "users_status_id": Number;
    "time": string;
}

export class Backend {
    //バックエンドにスタートを送る
    async start() : Promise<boolean> {
        try {
            //送るだけ
            const res = await axios.post<BoardSurface>("https://heartbeat.sysken.net/api/v1/start");
        } catch (e) {
            //送信に失敗したとき、フィニッシュを送信してから再度スタートの送信を試みる
            try {
                const finishRes = await axios.post<BoardSurface>("https://heartbeat.sysken.net/api/v1/finish");
                const startRes = await axios.post<BoardSurface>("https://heartbeat.sysken.net/api/v1/start");
            } catch (e) {
                //それでもダメならfalseを返す
                return false;
            }
        }
        return true;
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