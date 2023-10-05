export const handleDragEnter = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

const fetchData = async (file) => {
  const data = await fetch(
    `https://api.cloudinary.com/v1_1/dnlqnina8/image/upload`
  ).then((response) => response.json());

  console.log("data : ", data);
};

export const handleDrop = (e, setImage, setLoading, setPhotoName) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  if (file && file.type.startsWith("image/")) {
    fetchData(file);
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
