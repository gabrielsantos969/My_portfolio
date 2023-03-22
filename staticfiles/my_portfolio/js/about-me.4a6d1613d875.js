const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	const imagemAtual = card.querySelector('.imagem-atual');
	const imagemProxima = card.querySelector('.imagem-proxima');

	card.addEventListener('click', () => {
		imagemAtual.style.transform = 'rotateY(180deg)';
		imagemAtual.style.transform = 'z-index: 2;';
		imagemProxima.style.transform = 'rotateY(0deg)';
		imagemProxima.style.transform = 'z-index: 1;';
	});

	card.addEventListener('mouseleave', () => {
		imagemAtual.style.transform = 'rotateY(0deg)';
		imagemProxima.style.transform = 'rotateY(-180deg)';
	});
});