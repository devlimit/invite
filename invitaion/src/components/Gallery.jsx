import { useState, useEffect } from 'react'

const imageFiles = [
  'gallery_1.jpg', 'gallery_2.JPG', 'gallery_3.JPG', 'gallery_4.JPG',
  'gallery_5.JPG', 'gallery_6.JPG', 'gallery_7.JPG', 'gallery_8.JPG',
  'gallery_9.jpg', 'gallery_10.jpg', 'gallery_11.jpg','gallery_12.jpg',
  'gallery_13.jpg'
]

const images = imageFiles.map((file, i) => ({
  id: i + 1,
  src: `${import.meta.env.BASE_URL}gallery/${file}`,
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
          <button className="gallery__nav gallery__nav--prev" onClick={goPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
          </div>
          <button className="gallery__nav gallery__nav--next" onClick={goNext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery