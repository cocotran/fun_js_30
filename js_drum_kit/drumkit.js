window.onload = function() {
	function playing(event) {
	   const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	   const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	   if (!audio) return;
	   audio.currentTime = 0;
	   audio.play();
	   key.classList.add('playing');
	};

	function removeTransition(event) {
	    if (event.propertyName !== 'transform') return;
	    this.classList.remove('playing');
	};

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

	window.addEventListener('keydown', playing);

	function changeImg() {
	    const background = ["bg/bg-1.jpg", "bg/bg-2.jpg", "bg/bg-3.jpg", "bg/bg-4.jpg", "bg/bg-5.jpg", "bg-6.jpg", "bg/bg-7.jpg", "bg/bg-8.jpg", "bg/bg-9.jpg", "bg/bg-10.jpg"]
	    let num = Math.floor(Math.random() * background.length)

	    let bg = document.body.style.backgroundImage
	    document.body.style.backgroundImage = 'url(' + background[num] + ')';
	}

	window.onload = changeImg;
}