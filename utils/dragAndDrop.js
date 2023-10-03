export const handleDragEnter = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

export const handleDrop = (e, setImage, setBorder) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      setBorder(false);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please drop an image file.");
  }
};
