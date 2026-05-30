import { useState, useEffect } from 'react'

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/wedding${i + 1}/600/800`,
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