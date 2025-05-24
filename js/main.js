document.addEventListener("DOMContentLoaded", () => {
  const properties = [
    {
      title: "130 Acres of Prime Land for Sale on GST Road, Melmarvathur",
      location: "GST Road, before Melmarvathur (right-hand side)",
      Land_Type: "130 acres total - 100 acres dry land and 30 acres wetland",
      Ownership: "Single owner",
      Features: "Fully enclosed with compound wall",
      price: "Rs.35 lakhs per acre",
      images: [
        "./images/property-1/melmaruvathur-property.png",
        "./images/property-1/mel-plot-img-1.jpg",
        "./images/property-1/mel-plot-img-2.jpg",
        "./images/property-1/mel-plot-img-3.jpg",
      ],
      videos: [],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.5491239165194!2d79.78296499999999!3d12.479719000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzQ3LjAiTiA3OcKwNDYnNTguNyJF!5e0!3m2!1sen!2sau!4v1748057039482!5m2!1sen!2sau",
    },

    {
      title: "Prime GST Road Land - 100+ Acres for Sale",
      location: "GST Road, stretch between Chennai and Maduranthakam",
      Land_Type: "100 to 120 acres - combination of wet and dry land",
      Ownership: "3 partners",
      Features: "Suitable for large-scale development or investment",
      price: "Rs.35 lakhs per acre (negotiable)",
      images: [
        "./images/property-2/Maduranthakam-property.png",
        "./images/property-2/mad-plot-img-1.jpg",
        "./images/property-2/mad-plot-img-2.jpg",
      ],
      videos: ["./videos/mad-plot-vid-1.mp4"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3894.8969850461053!2d79.841881!3d12.522983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMxJzIyLjciTiA3OcKwNTAnMzAuOCJF!5e0!3m2!1sen!2sau!4v1748058481786!5m2!1sen!2sau",
    },

    {
      title: "Land for Sale - Mannampoondi & Puliyanur, Tindivanam",
      location:
        "Mannampoondi and Puliyanur Village, Tindivanam Taluk, Villupuram District, Tamil Nadu",
      Land_Type: "104 acres of dry land",
      Ownership: "Single owner",
      Features: "Ideal for agriculture or investment",
      price: "Rs.35 lakhs per acre",
      images: [
        "./images/property-3/Mannampoondi-property.png",
        "./images/property-3/man-plot-img-1.jpg",
        "./images/property-3/man-plot-img-2.jpg",
      ],
      videos: ["./videos/man-plot-vid-1.mp4"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3898.3009766083856!2d79.56160677506509!3d12.295506687961183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDE3JzQzLjgiTiA3OcKwMzMnNTEuMSJF!5e0!3m2!1sen!2sau!4v1748059416034!5m2!1sen!2sau",
    },

    {
      title: "Land for Sale - Elapakkam & Rettamangalam, Kancheepuram",
      location:
        "Elapakkam (V.No. 70) & Rettamangalam (V.No. 71), Uthiramerur Taluk, Kancheepuram District, Tamil Nadu",
      Land_Type: "135 acres of dry land",
      Ownership: "Single owner",
      Features:
        "Large contiguous area, suitable for agriculture or development",
      price: "Rs.40 lakhs per acre (negotiable)",
      images: [
        "./images/property-4/Elapakkam-property.png",
        "./images/property-4/Elapakkam-kootu.png",
        "./images/property-4/ela-plot-img-1.jpg",
      ],
      videos: [],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3892.295531324342!2d79.80082999999999!3d12.694123999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQxJzM4LjkiTiA3OcKwNDgnMDMuMCJF!5e0!3m2!1sen!2sau!4v1748060055225!5m2!1sen!2sau",
    },
  ];

  const container = document.querySelector("main");

  const createLightbox = () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 1000;
    lightbox.style.display = "none";

    const media = document.createElement("div");
    media.id = "lightbox-content";
    lightbox.appendChild(media);

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      media.innerHTML = "";
    });

    document.body.appendChild(lightbox);
    return lightbox;
  };

  const lightbox = createLightbox();

  properties.forEach((property, index) => {
    const section = document.createElement("section");
    section.classList.add("property");

    const propertyLabel = document.createElement("h3");
    propertyLabel.textContent = `Property ${index + 1}`;
    section.appendChild(propertyLabel);

    const gallery = document.createElement("div");
    gallery.classList.add("property-gallery");

    property.images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Image of ${property.title}`;
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightbox.querySelector(
          "#lightbox-content"
        ).innerHTML = `<img src="${src}" style="max-width:90vw; max-height:90vh; border-radius:10px">`;
      });
      gallery.appendChild(img);
    });

    if (property.videos && property.videos.length > 0) {
      property.videos.forEach((src) => {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.style.width = "100%";
        video.style.marginTop = "1em";
        video.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightbox.querySelector(
            "#lightbox-content"
          ).innerHTML = `<video src="${src}" controls autoplay style="max-width:90vw; max-height:90vh; border-radius:10px"></video>`;
        });
        gallery.appendChild(video);
      });
    }

    const heading = document.createElement("h2");
    heading.textContent = property.title;

    const details = document.createElement("div");
    details.innerHTML = `
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Land Type:</strong> ${property.Land_Type}</p>
      <p><strong>Ownership:</strong> ${property.Ownership}</p>
      <p><strong>Features:</strong> ${property.Features}</p>
      <p><strong>Price:</strong> ${property.price}</p>
    `;

    const map = document.createElement("iframe");
    map.src =
      property.mapEmbedUrl ||
      `https://www.google.com/maps?q=${encodeURIComponent(
        property.mapQuery
      )}&output=embed`;
    map.loading = "lazy";

    section.appendChild(gallery);
    section.appendChild(heading);
    section.appendChild(details);
    section.appendChild(map);

    container.insertBefore(section, document.querySelector(".contact"));
  });
});
