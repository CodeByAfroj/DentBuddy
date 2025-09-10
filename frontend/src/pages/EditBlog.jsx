import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from './BackButton';
const EditBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgUploading, setImgUploading] = useState(false);
  const {id} = useParams();

   useEffect(()=>{
       setLoading(true)
    axios.get(`http://localhost:3000/api/show/${id}`)
    .then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
      setAuthor(res.data.author);
      setImageUrl(res.data.imageUrl);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
   },[id])

  const handleUpdateForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedData = { title, content, author,imageUrl };

    console.log("Updating Data:", updatedData); // Debugging Log

    axios.put(`http://localhost:3000/api/update/${id}`, updatedData)
      .then(() => {
        setLoading(false);
        alert("User updated successfully!");
        navigate("/")
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:3000/api/upload', formData);
      setImageUrl(res.data.url); // <-- Cloudinary image URL
    } catch (err) {
      console.error('Image upload failed:', err);
    } finally {
      setImgUploading(false);
    }
  };

  return (
   <>
     <BackButton/>
    <div className='h-screen w-screen items-center'>
      <div className='h-screen flex justify-center items-center'>
        <form onSubmit={handleUpdateForm} className='p-4 h-auto w-72 outline-2 outline-blue-500 rounded-xl flex flex-col gap-3 text-md'>
          <label>Title:</label>
          <input
            className='p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content:</label>
          <input
            className='p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600'
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label>Author:</label>
          <input
            className='p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600'
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>Insert Image:</label>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
          />

          {imgUploading && <p className='text-sm text-gray-500'>Uploading image...</p>}
          {imageUrl && <img src={imageUrl} alt='preview' className='w-full h-auto rounded-md mt-2' />}

          <button
            type='submit'
            className='mt-4 p-2 outline-1 outline-green-500 rounded-xl hover:outline-2 hover:outline-green-600'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
   
   
   </>
  );
};

export default EditBlog;
