import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PostGrid from './components/PostGrid'
import Footer from './components/Footer'
import NewPostModal from './components/NewPostModal'
import EditProfileModal from './components/EditProfileModal'

function App() {
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Bessie Coleman',
    bio: 'Civil Avatar',
    image: '/assets/images/profile.png'
  })
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: '/assets/images/val-thorens.png',
      caption: 'Val Thorens'
    },
    {
      id: 2,
      image: '/assets/images/terrace.png',
      caption: 'Restaurant Terrace'
    },
    {
      id: 3,
      image: '/assets/images/restaurant.png',
      caption: 'An outdoor cafe'
    },
    {
      id: 4,
      image: '/assets/images/bridge.png',
      caption: 'A very long bridge, over the forest...'
    },
    {
      id: 5,
      image: '/assets/images/tunnel.png',
      caption: 'Tunnel with morning light'
    },
    {
      id: 6,
      image: '/assets/images/mountain-house.png',
      caption: 'Mountain house'
    }
  ])

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts])
    setShowNewPostModal(false)
  }

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile)
    setShowEditProfileModal(false)
  }

  return (
    <div className="page-wrapper">
      <Header 
        profile={profile}
        onNewPost={() => setShowNewPostModal(true)}
        onEditProfile={() => setShowEditProfileModal(true)}
      />
      <PostGrid posts={posts} />
      <Footer />
      
      <NewPostModal 
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        onAddPost={handleNewPost}
      />
      
      <EditProfileModal
        show={showEditProfileModal}
        onClose={() => setShowEditProfileModal(false)}
        onSave={handleProfileUpdate}
        currentProfile={profile}
      />
    </div>
  )
}

export default App
