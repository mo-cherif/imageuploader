export const handleDragEnter = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

export const handleDrop = (e, setImage, setBorder, setLoading) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  if (file && file.type.startsWith("image/")) {
    setLoading(false);
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setBorder(false);
        setLoading(true);
      };

      reader.readAsDataURL(file);
    }, 2000);
  } else {
    alert("Please drop an image file.");
  }
};
