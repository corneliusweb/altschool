import PropTypes from 'prop-types'

function Header({ profile, onNewPost, onEditProfile }) {
  return (
    <header>
      <div className="logo">
        <img src="/assets/images/Logo.svg" alt="Insta Spot logo" />
      </div>
      <div className="profile">
        <div className="profile-main-content">
          <div className="avatar">
            <img src={profile.image} alt="profile pic" />
          </div>
          <div className="text-info">
            <div className="profile-heading">
              <h1>{profile.name}</h1>
              <p>{profile.bio}</p>
            </div>
            <button onClick={onEditProfile}>
              <i className="fa-solid fa-pen"></i> Edit Profile
            </button>
          </div>
        </div>
        <button onClick={onNewPost}>
          <i className="fa-solid fa-plus"></i> &nbsp; New Post
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onNewPost: PropTypes.func.isRequired,
  onEditProfile: PropTypes.func.isRequired
}

export default Header 