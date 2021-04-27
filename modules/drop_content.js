function dropContent(selector, type) {

    if (type === "menu") {
        selector.innerHTML = 
        "<h3>The Boring Bacon</h3>" +
        "<p>A bacon burger topped with bacon and cheese.</p>" +
        "<img src='https://www.readersdigest.ca" +
        "/wp-content/uploads/2015/11/gourmet-burger.jpg'>" +
        "<h3>Cripsy Smelly Breath</h3>" +
        "<p>Filled with authentic slavic medicine.</p>" +
        "<img src='http://media.cntraveler.com/photos/" +
        "5707d1de3f3075e85c9a71fd/master/pass/" +
        "nashville-burger-republic-cr-courtesy.jpg'>" +
        "<h3>The Supa Fresh</h3>" +
        "<p>Plant-based burger with lots of plant.</p>" +
        "<img src='https://lh3.googleusercontent.com/" +
        "J-VXfbGvaZ-YxKjMhh4zAEPVilkB3hUWCqAphTExHwwUaJ8OEC94eWOkmBZUTUcJ62-rbtwZ5" +
        "_3O15h8K1S1CMktOWgmWpsSKOM=s1000'>";
    } else {
        selector.innerHTML =
        "<div class='dropdown-contact'>" +
        "<div id='adress'>" +
        "<h4>Adress:</h4>" +
        "<p>Street: Bigstreet 20<br>" +
        "Postcode: 5109 RT<br>" +
        "City: Innsbruck</p>" +
        "</div>" +
        "<div id='contact'>" +
        "<h4>Contact:</h4>" +
        "<p>Phone: 020 9384 3728<br>" +
        "Email: beefysleezys@bigbeef.com</p>";
        "</div>" +
        "</div>"
    }

}

export { dropContent };