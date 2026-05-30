import { useState, useEffect } from 'react'

const colors = ['#f5e6d3', '#e8d4c4', '#f0e0d0', '#faf0e6', '#f5deb3']

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <rect fill="${colors[i % colors.length]}" width="600" height="800"/>
      <text x="300" y="400" text-anchor="middle" fill="#d4a5a5" font-size="24" font-family="serif">${i + 1}</text>
    </svg>
  `)}`,
  alt: `웨딩 사진 ${i + 1}`
}))

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openImage = (index) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)

  const goPrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setSelectedIndex((p) => (p - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setSelectedIndex((p) => (p + 1) % images.length)
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex])

  return (
    <section id="gallery" className="section gallery">
      <h2 className="section__title">갤러리</h2>
      <div className="gallery__grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery__item"
            onClick={() => openImage(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="gallery__modal" onClick={closeModal}>
          <button className="gallery__close" onClick={closeModal}>×</button>
          <button className="gallery__nav gallery__nav--prev" onClick={goPrev}>&#8249;</button>
          <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
          </div>
          <button className="gallery__nav gallery__nav--next" onClick={goNext}>&#8250;</button>
        </div>
      )}
    </section>
  )
}

export default Gallery