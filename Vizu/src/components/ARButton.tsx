type Props = {
    glbUrl: string;
    usdzUrl?: string;
  };
  
  export default function ARButton({ glbUrl, usdzUrl }: Props) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
  
    const launchAR = () => {
      if (isAndroid) {
        const sceneViewerUrl = `https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(
          glbUrl
        )}&mode=ar_preferred`;
  
        window.location.href = sceneViewerUrl;
      } 
      else if (isIOS && usdzUrl) {
        window.location.href = usdzUrl;
      } 
      else {
        alert("AR not supported on this device");
      }
    };
  
    return (
      <button
        onClick={launchAR}
        className="px-6 py-3 rounded-xl bg-black text-white text-lg font-semibold"
      >
        View in AR
      </button>
    );
  }
  