const loadPage = (function() {

	const _content = document.querySelector("#content");

	function home() {
	
		const header = document.createElement("h1");
		const description = document.createElement("p");
		const burgerImage = document.createElement("img");
	
		header.textContent = "Beefy Sleezy's";
		description.textContent = "Beefy Sleezy's captures" +
		" the essence of Sydney from its amazing location on the" + 
		" rooftop of Customs House with spectacular harbour views," +
		" delicious burgers, an outdoor terrace, cocktail lounge and" +
		" a relaxed, contemporary interior.";
		description.classList.add("description");
	
		document.body.style.backgroundImage = "url(" +
			"https://copperhillsinn.com/wp-content/uploads" +
			"/sites/20/2020/04/burger-globe-az.jpg)";
	
		_content.appendChild(header);
		_content.appendChild(description);
		_content.appendChild(burgerImage);
	
	}

	return { home };

})();

export { loadPage };