import React from "react";

import axios, { AxiosResponse } from "axios";

// モックサーバーのURL db.json
const membersUrl = "https://heartbeat.sysken.net/api/v1/get_bpm/north";

type Member = {
    id: number;
    board_surface_id: number;
    time: string;
    azimuth: string;
    bpm: number;
};

/**
 * APIモックサーバーへのaxiosでのhttp通信テスト用コンポーネント
 */
export const Http: React.VFC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  const onFetchClick = async () => {
    const response: AxiosResponse<Member[]> = await axios.get(membersUrl);
    setMembers(response.data);
  };

  return (
    <>
      <button onClick={onFetchClick}>
        APIモックサーバーより、membersデータ取得
      </button>
      {members.length != 0 && (
        <>
          <ul>
            {members.map((member) => (
              <li
                key={member.id}
              >{`[id]=${member.id} [azimuth]=${member.azimuth} [bpm]=${member.bpm} [time]=${member.time}`}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};