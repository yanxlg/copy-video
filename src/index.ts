/**
 * @disc:copy video element to other video element
 * @author:yanxinaliang
 * @time：2018/6/9 13:23
 */
class CopyVideo{
    /**
     *
     * @param {HTMLVideoElement} video
     * @param {boolean} supportAudio 是否支持音频复制，默认为false
     * @returns {HTMLVideoElement}
     */
    static startClone(video:HTMLVideoElement,supportAudio?:boolean){
        const cpVideo=document.createElement("video");
        if(!supportAudio){cpVideo.muted=true}
        video.oncanplay = ()=>{
            if((video as any).captureStream){
                cpVideo.srcObject=(video as any).captureStream();
            }else if((video as any).mozCaptureStream){
                cpVideo.srcObject=(video as any).mozCaptureStream();
            }else{
                throw "captureStream() not supported";
            }
        };
        if (video.readyState >= 3) {
            if((video as any).captureStream){
                cpVideo.srcObject=(video as any).captureStream();
            }else if((video as any).mozCaptureStream){
                cpVideo.srcObject=(video as any).mozCaptureStream();
            }else{
                throw "captureStream() not supported";
            }
        }
        return cpVideo;
    }
}

export default CopyVideo;