import { useState } from 'react'
import PropTypes from 'prop-types'

function EditProfileModal({ show, onClose, onSave, currentProfile }) {
  const [name, setName] = useState(currentProfile.name)
  const [bio, setBio] = useState(currentProfile.bio)
  const [imagePreview, setImagePreview] = useState(currentProfile.image)

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
    onSave({
      name: name || currentProfile.name,
      bio: bio || currentProfile.bio,
      image: imagePreview
    })
  }

  if (!show) return null

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Edit Profile</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter your bio"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}

EditProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  currentProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default EditProfileModal 