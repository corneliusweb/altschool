const newPostBtn = document.getElementById('newPostBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const addPostBtn = document.getElementById('addPostBtn');
const captionInput = document.getElementById('captionInput');
const cardsContainer = document.getElementById('cardsContainer');

newPostBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
	resetForm();
});

imageInput.addEventListener('change', () => {
	const file = imageInput.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			imagePreview.src = e.target.result;
			imagePreview.style.display = 'block';
		};
		reader.readAsDataURL(file);
	}
});

addPostBtn.addEventListener('click', () => {
	const caption = captionInput.value;
	const imageSrc = imagePreview.src;

	if (!imageSrc || !caption) {
		alert('Please select an image and write a caption.');
		return;
	}

	const card = document.createElement('div');
	card.className = 'card';
	card.innerHTML = `
  <a href="#fake"><img src="${imageSrc}" alt="Post Image" /></a>
  <div class="details">
    <p><a href="#fake">${caption}</a></p>
    <i class="fa-regular fa-heart"></i>
  </div>
`;

	cardsContainer.prepend(card);
	modal.style.display = 'none';
	resetForm();
});

function resetForm() {
	captionInput.value = '';
	imageInput.value = '';
	imagePreview.src = '';
	imagePreview.style.display = 'none';
}

// Profile modal elements
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileModal = document.getElementById('editProfileModal');
const closeEditProfile = document.getElementById('closeEditProfile');
const profileNameInput = document.getElementById('profileNameInput');
const profileBioInput = document.getElementById('profileBioInput');
const profileImageInput = document.getElementById('profileImageInput');
const saveProfileBtn = document.getElementById('saveProfileBtn');

const profileName = document.querySelector('.profile-heading h1');
const profileBio = document.querySelector('.profile-heading p');
const profileImage = document.querySelector('.avatar img');

editProfileBtn.addEventListener('click', () => {
	editProfileModal.style.display = 'flex';
});

closeEditProfile.addEventListener('click', () => {
	editProfileModal.style.display = 'none';
});

saveProfileBtn.addEventListener('click', () => {
	const newName = profileNameInput.value;
	const newBio = profileBioInput.value;
	const file = profileImageInput.files[0];

	if (newName) {
		profileName.textContent = newName;
   }
   if (newBio) {
		profileBio.textContent = newBio;
	}

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			profileImage.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}

	editProfileModal.style.display = 'none';
	resetEditModal();
});

function resetEditModal() {
	profileNameInput.value = '';
	profileBioInput.value = '';
	profileImageInput.value = '';
}
