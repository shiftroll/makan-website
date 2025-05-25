"use client"

import { useEffect, useRef } from "react"

interface HeroVideoProps {
  className?: string
}

export default function HeroVideo({ className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleError = () => {
      console.log("Video failed to load")
      video.style.display = "none"
    }

    const handleLoadStart = () => {
      console.log("Video loading started")
    }

    const handleCanPlay = () => {
      console.log("Video can play")
    }

    video.addEventListener("error", handleError)
    video.addEventListener("loadstart", handleLoadStart)
    video.addEventListener("canplay", handleCanPlay)

    return () => {
      video.removeEventListener("error", handleError)
      video.removeEventListener("loadstart", handleLoadStart)
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  return (
    <video ref={videoRef} autoPlay loop muted playsInline preload="auto" className={className}>
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
