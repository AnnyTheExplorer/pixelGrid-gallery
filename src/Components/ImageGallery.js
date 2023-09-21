import React, { useState, useEffect } from "react";
import "./ImageGallery.css";
import image1 from "../Assets/Images/image1.jpg";
import image7 from "../Assets/Images/image7.jpg";
import Footer from "./Footer.js";

const initialImages = [
  {
    id: 1,
    src: image1,
    tags: ["art", "collection"],
  },
  {
    id: 2,
    src: image7,
    tags: ["art", "structure", "architecture"],
  },
  {
    id: 3,
    src: image1,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 4,
    src: image7,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 5,
    src: image1,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 6,
    src: image7,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 7,
    src: image1,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 8,
    src: image7,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 9,
    src: image1,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 10,
    src: image7,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 11,
    src: image1,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 12,
    src: image7,
    tags: ["art", "minimalist", "collection"],
  },
];

function ImageGallery() {
  const [images, setImages] = useState(initialImages);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove in production)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleDragStart = (e, image) => {
    e.dataTransfer.setData("imageId", image.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const imageId = e.dataTransfer.getData("imageId");
    const updatedImages = [...images];
    const draggedImageIndex = updatedImages.findIndex(
      (img) => img.id.toString() === imageId
    );
    const targetImageIndex = updatedImages.findIndex(
      (img) => img.id.toString() === e.target.id
    );

    if (draggedImageIndex !== -1 && targetImageIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedImageIndex, 1);
      updatedImages.splice(targetImageIndex, 0, draggedImage);
      setImages(updatedImages);
    }
  };

  const filteredImages = images.filter((image) =>
    image.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="image-gallery">
      <div className="hero-section">
        <div className="navbar">
          <div className="logo">pixelGrids</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div
              className="loading-spinner"
              style={{ fontSize: "18px", color: "white" }}
            >
              Loading...
            </div>
          ) : null}
        </div>
        <h1>
          Let's get artsy! <br /> Peek glimpses of perfection through our
          carefully curated collection.
        </h1>
      </div>

      <div className="my-gallery">
        <h1>Our Collection</h1>
        <div className="image-container">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="image-card"
              draggable
              onDragStart={(e) => handleDragStart(e, image)}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              id={image.id.toString()}
            >
              <img src={image.src} alt={`Image ${image.id}`} />
              <div className="image-tags">
                {image.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImageGallery;
