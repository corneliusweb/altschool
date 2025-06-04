import PropTypes from 'prop-types'

function PostGrid({ posts }) {
  return (
    <main id="cardsContainer">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <a href="#fake">
            <img src={post.image} alt={post.caption} />
          </a>
          <div>
            <p><a href="#fake">{post.caption}</a></p>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      ))}
    </main>
  )
}

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PostGrid 