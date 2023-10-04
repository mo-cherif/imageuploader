export const handleDragEnter = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

export const handleDrop = (e, setImage, setLoading, setPhotoName) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  if (file && file.type.startsWith("image/")) {
    setPhotoName(`htpp://imageupload/${file.name}`);
    setLoading(false);
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setLoading(true);
      };

      reader.readAsDataURL(file);
    }, 2000);
  } else {
    alert("Please drop an image file.");
  }
};
