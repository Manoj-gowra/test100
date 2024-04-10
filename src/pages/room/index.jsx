import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate, useParams } from "react-router-dom";

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  

const RoomPage = () => {
    // const { roomId } = useParams();
    const navigate = useNavigate();

    const myMeeting = async (element) => {
        const appID = 64349956
        const serverSecret = "b1ae61d5df9d4afa8ab219af520fdd88"
        // const kitToken = ZegoUIKitPrebuilt.generateToken(appId, serverSecret, roomId, "host","sh");
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, "roomId",  randomID(5),  randomID(5));
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
            onLeaveRoom: () => {
                navigate("/");
            },
            showPreJoinView: false,
            showLeavingView: false,
            showLeaveRoomConfirmDialog: false,
            maxUsers:2,
          });
    }


    return <div ref={myMeeting}>Manoj</div>;
    }

export default RoomPage;