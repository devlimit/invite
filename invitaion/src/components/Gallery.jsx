import { useState } from 'react'

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/wedding${i + 1}/600/800`,
  alt: `웨딩 사진 ${i + 1}`
}))

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="section gallery">
      <h2 className="section__title">갤러리</h2>
      <div className="gallery__grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery__item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery__modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery__modal-content">
            <button
              className="gallery__close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
