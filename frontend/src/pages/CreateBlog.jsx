import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [imgUploading, setImgUploading] = useState(false);

  // Create product
  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { title, description, price, imageUrl };

    axios
      .post("http://localhost:3000/api/create", data)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  // Image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:3000/api/upload", formData);
      setImageUrl(res.data.url); // Cloudinary image URL
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      setImgUploading(false);
    }
  };

  return (
    <>
      <BackButton />
      <div className=" dark:text-gray-300 dark:bg-gray-900 h-screen w-screen items-center">
        <div className="h-screen flex justify-center items-center">
          <form
            onSubmit={handleForm}
            className="p-4 h-auto w-80 outline-2 outline-blue-500 rounded-xl flex flex-col gap-3 text-md bg-white shadow"
          >
            <label>Title:</label>
            <input
              className="p-2 outline-1 outline-blue-500 rounded-xl"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label>Description:</label>
            <textarea
              className="p-2 outline-1 outline-blue-500 rounded-xl"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <label>Price:</label>
            <input
              className="p-2 outline-1 outline-blue-500 rounded-xl"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <label>Insert Image:</label>
            <input type="file" onChange={handleImageUpload} />
            {imgUploading && (
              <p className="text-sm text-gray-500">Uploading image...</p>
            )}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="preview"
                className="w-full h-auto rounded-md mt-2"
              />
            )}

            

            <button
              type="submit"
              className="mt-4 p-2 outline-1 outline-green-500 rounded-xl hover:outline-2 hover:outline-green-600"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
