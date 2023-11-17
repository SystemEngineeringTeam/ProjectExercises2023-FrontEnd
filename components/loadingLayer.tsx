import React from "react";


export default function LoadingLayer(props: { isLoading: boolean }) {


  //外側のスタイル
  const loadingStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    display: props.isLoading ? "block" : "none",
    zIndex: 100,
  }



  //スタイルを適用
return (
    <div style={loadingStyle}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="loader"></div>
      </div>
    </div>
  )
}
