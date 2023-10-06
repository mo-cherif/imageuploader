export const handleDragEnter = (e) => {
  e.preventDefault();
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

const postImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "image_uploader");

  const data = await fetch(
    `https://api.cloudinary.com/v1_1/dnlqnina8/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json());
  return data.secure_url;
};

export const handleDrop = async (e, setImage, setLoading, setPhotoName) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  setLoading(false);

  if (file && file.type.startsWith("image/")) {
    setPhotoName(await postImage(file));

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      setLoading(true);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please drop an image file.");
  }
};

export const handleFileChange = async (
  e,
  setImage,
  setLoading,
  setPhotoName
) => {
  const file = e.target.files[0];
  setLoading(false);

  if (file) {
    setPhotoName(await postImage(file));
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
      setLoading(true);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please drop an image file.");
  }
};
