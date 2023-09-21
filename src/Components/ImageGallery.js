import React, { useState, useEffect } from "react";
import "./ImageGallery.css";
import image1 from "../Assets/Images/image1.jpg";
import image2 from "../Assets/Images/image2.jpg";
import image3 from "../Assets/Images/image3.jpg";
import image4 from "../Assets/Images/image4.jpg";
import image5 from "../Assets/Images/image5.jpg";
import image6 from "../Assets/Images/image6.jpg";
import image7 from "../Assets/Images/image7.jpg";
import image8 from "../Assets/Images/image8.jpg";
import Footer from "./Footer.js";

const initialImages = [
  {
    id: 1,
    src: image1,
    tags: ["art", "collection", "frames"],
  },
  {
    id: 2,
    src: image2,
    tags: ["art", "structure", "architecture"],
  },
  {
    id: 3,
    src: image5,
    tags: ["art", "minimalist", "frames"],
  },
  {
    id: 4,
    src: image3,
    tags: ["girl", "fashion", "kid"],
  },
  {
    id: 5,
    src: image4,
    tags: ["art", "minimalist", "collection"],
  },
  {
    id: 6,
    src: image6,
    tags: ["korea", "travel", "seoul"],
  },
  {
    id: 7,
    src: image7,
    tags: ["skyscrapper", "girl", "street"],
  },
  {
    id: 8,
    src: image8,
    tags: ["water color", "art", "turtle"],
  },
  {
    id: 9,
    src: image2,
    tags: ["art", "travel", "street"],
  },
  {
    id: 10,
    src: image7,
    tags: ["street", "photography", "summer"],
  },
  {
    id: 11,
    src: image4,
    tags: ["art", "minimalist", "frames"],
  },
  {
    id: 12,
    src: image5,
    tags: ["art", "designer", "pictures"],
  },
  {
    id: 13,
    src: image6,
    tags: ["south korea", "city", "night"],
  },
];

function ImageGallery() {
  const [images, setImages] = useState(initialImages);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
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
