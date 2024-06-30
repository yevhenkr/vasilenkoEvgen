import React, { useRef } from 'react'

import './ParallaxImage.css' // Подключаем стили

const ParallaxImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    const element = imageRef.current

    if (element) {
      const { height, left, top, width } = element.getBoundingClientRect()
      const x = ((event.clientX - left) / width) * 2 - 1
      const y = ((event.clientY - top) / height) * 2 - 1

      element.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`
    }
  }

  const handleMouseLeave = () => {
    const element = imageRef.current

    if (element) {
      element.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <div
      className={'parallax-container'}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    >
      <img alt={'Parallax'} className={'parallax-image'} src={'https://via.placeholder.com/400'} />
    </div>
  )
}

export default ParallaxImage
