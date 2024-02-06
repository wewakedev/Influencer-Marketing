// input-enable
const inputBtnenable = () => {
    const inputField = document.querySelector('#socialMediaInput');
    const checkButton = document.querySelector('.checkButton');

    inputField.addEventListener('focus', function () {
        checkButton.removeAttribute('disabled');
    });
}
inputBtnenable();

// logoscroller
const scrollers = document.querySelectorAll(".scroller");
scrollers.forEach((scroller) => {
	const innerScroller = scroller.querySelector(".inner-scroller");
	const innerContent = Array.from(innerScroller.children);

	innerContent.forEach((item) => {
		const itemClone = item.cloneNode(true);
		itemClone.setAttribute("aria-hidden", true);
		innerScroller.appendChild(itemClone);
	});
});

const hamburger = document.querySelector('.hamburgerToggle')
hamburger.addEventListener('click', () => {
    document.body.classList.toggle('mobilemenu-show')
})

const closeicon = document.querySelector('.closeicon');
closeicon.addEventListener('click', () => {
    document.body.classList.remove('mobilemenu-show')
})