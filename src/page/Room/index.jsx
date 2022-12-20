import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();
    const myMeetings = async (element) => {
        const appID = 1655567683;
        const serverSecret = "19edce8e0526a43567123000ad9c0a04";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Hammad sheikh")
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name : 'Copy Link Here',
                    url : `http://localhost:3001/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall
            },
            showScreenSharingButton: true,
        })
    }
    return <div>
        <div ref={myMeetings} style={{ width: '100vw', height: '100vh' }} />
    </div>
}
export default RoomPage;
