import { useState } from 'react'
import PropTypes from 'prop-types'

function NewPostModal({ show, onClose, onAddPost }) {
  const [caption, setCaption] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (!imagePreview || !caption) {
      alert('Please select an image and write a caption.')
      return
    }

    onAddPost({
      id: Date.now(),
      image: imagePreview,
      caption
    })

    // Reset form
    setCaption('')
    setImagePreview('')
  }

  if (!show) return null

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Create New Post</h2>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img
            className="preview"
            src={imagePreview}
            alt="Preview"
            style={{ display: 'block' }}
          />
        )}
        <button onClick={handleSubmit}>Add Post</button>
      </div>
    </div>
  )
}

NewPostModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired
}

export default NewPostModal 