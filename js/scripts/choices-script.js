const element = document.querySelector('#gallerySelect');
const choices = new Choices(element, {
	searchEnabled: false,
	allowHTML: true,
});

document.addEventListener('DOMContentLoaded', function() {
  const choicesButton = document.querySelector('.choices');
  const labels = document.querySelector('.gallery__left-bottom');
  const optionsContainer = document.querySelector('[role="listbox"]');

  if (window.innerWidth <= 1430) {
    choicesButton.addEventListener('click', () => {
      if (labels.classList.contains('dnone')) {
        labels.classList.remove('dnone');
      } else {
        labels.classList.add('dnone');
      };
    });

    optionsContainer.addEventListener('click', (event) => {
			console.log('asdsa')
      if (event.target.getAttribute('role') === 'option') {
        if (labels.classList.contains('dnone')) {
          labels.classList.remove('dnone');
        }
      }
    });
  };
});


