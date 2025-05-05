import React, { useEffect, useRef, useState } from "react";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  // Start camera on component mount
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Camera access error:", err);
      });
  }, []);

  // Capture photo from video
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL("image/png");
      setPhoto(imageData);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <video ref={videoRef} autoPlay className="w-full max-w-md rounded-md border" />
      <button onClick={takePhoto} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Take Photo
      </button>
      <canvas ref={canvasRef} className="hidden" />
      {photo && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Captured Photo:</h2>
          <img src={photo} alt="Captured" className="mt-2 border rounded-md" />
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
