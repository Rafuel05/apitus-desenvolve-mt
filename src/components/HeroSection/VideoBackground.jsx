const VideoBackground = () => {
  return (
    <>
      <video
        className="inset-0 w-full h-full object-cover pointer-events-none select-none"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/video-fundo-hero.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default VideoBackground