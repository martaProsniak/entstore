var ents = [
	{
		"age": 120,
		"species": "maple",
		"plantYear": 1899,
		"mobile": "yes",
		"nests": { 
				"birds": "owl",
				"count": 4
		}
	},
	{
		"age": 99,
		"species": "rowan",
		"plantYear": 1920,
		"mobile": "yes",
		"nests": {
			"birds": "swallow",
			"count": 5
		}
	},
	{
		"age": 150,
		"species": "oak",
		"plantYear": 1859,
		"mobile": "no",
		"nests": {
			"birds": "eagles",
			"count": 3
		}
	},
	{
		"age": 209,
		"species": "ash",
		"plantYear": 1810,
		"mobile": "yes",
		"nests": {
				"birds": "crows",
				"count": 6
		}
	},
	{
    	"age": 115,
    	"species": "poplar",
    	"plantYear": 1904,
    	"mobile": "yes",
    	"nests": {
    			"birds": "sparrows",
    			"count": 8
    	}
    },
	{
		"age": 189,
		"species": "chestnut",
		"plantYear": 1830,
		"mobile": "no",
		"nests": {
				"birds": "ducks",
				"count": 2
		}
	}
];


/**
*
* Creates elements in section
*/
function populateEnts(container){
	var url_string = window.location.href;//Get url from browser.
    var url = new URL(url_string);//Make it url object.
    var ent = url.searchParams.get("ent");//Get query param.
	
	var container = document.getElementById(container);
	ent = ents[ent];
	article = document.createElement("article");
	container.appendChild(article);
	
	entAside = document.createElement("aside");
	entAside.setAttribute("id", "userPlace");
	article.appendChild(entAside);
	
	asideHeader = document.createElement("caption");
	asideHeader.innerHTML = "Your list: ";
	asideHeader.setAttribute("id", "listHeader");
	entAside.appendChild(asideHeader);
	
	userList = document.createElement("ul");
	userList.setAttribute("id", "userList");
	entAside.appendChild(userList);
	
	var entsTable = createEntsTable(ent);
	article.appendChild(entsTable);
	
	var buttons = document.getElementsByClassName("button");
	
	
	for (var i=0; i<buttons.length; i++) {
		var buttonId = "button" + i;
		buttons[i].setAttribute("id", buttonId);
		buttons[i].setAttribute("onclick", "addEntToUserListWithRemoveOption("+i+")")
	}

}

function addEntToUserListWithRemoveOption (i){

    var buttonClicked = "#button"+i;
    var species = $(buttonClicked)[0].name;
    var itemOnList = $("<li></li>").text(species);

    	$(itemOnList).click(function ()
    		{
    			removeFromList();
    		}
    	);

    $("#userList").append($(itemOnList));
}

/**
*
* Finds chosen ent and put it on the list
*
* @returns New 'li' element
*/
function addEntToUserList(){
	
	var clickedButton = event.srcElement.id;
	
	var index = clickedButton.substr(6,1);
	chosenEnt = ents[index];
	var species = chosenEnt.species;
	
	var itemOnList = $("<li></li>").text(species);

	return itemOnList;
}

/**
*
* Finds chosen ent and put it on the list
* Additional feature allows removing ens from the list
* @returns New 'li' element
*/
function chooseItemToBeShownOnList(){
	
	var clickedButton = event.srcElement.id;
	
	var index = clickedButton.substr(6,1);
	chosenEnt = ents[index];
	var species = chosenEnt.species;
	
	var itemOnList = $("<li></li>").text(species);

	return itemOnList;
}


/**
*	
* Creates contact form
*
*/
function createForm(container){
	var container = document.getElementById(container);
	var article = document.createElement("article");
	article.setAttribute("id", "contactContainer");
	container.appendChild(article);
	
	var formHeader = document.createElement("header");
	formHeader.setAttribute("id", "formHeader");
	formHeader.innerHTML = "Contact";
	article.appendChild(formHeader);
	
	contactForm = document.createElement("form");
	contactForm.setAttribute("id", "contactForm");
	contactForm.setAttribute("action", "contact_form_sent.html");
	contactForm.setAttribute("Method", "=\"get\"");
	article.appendChild(contactForm);
	
	fields = document.createElement("fieldset");
	fields.setAttribute("id", "fields");
	contactForm.appendChild(fields);
	
	createSpan("species:", "label");
	
	selectEnt = document.createElement("select");
	selectEnt.setAttribute("name", "selected");
	selectEnt.setAttribute("required", "true");
	fields.appendChild(selectEnt);
	
	for (var index in ents) {
    		ent = ents[index];
			opt = document.createElement("option");
			entSpecies = ent.species;
			opt.setAttribute("value" , entSpecies);
			opt.setAttribute("id", "opt");
			opt.innerHTML = entSpecies;
			selectEnt.appendChild(opt);
    	}
		
	fields.appendChild(createClearDiv());
	
	createSpan("e-mail:", "label");
	createInputFieldWithType ("userInput", "email", "email");
	fields.appendChild(createClearDiv());
	createSpan("delivery:", "label");
	createDeliveryInput ("ship");
	createSpan("ship", "delivery");
	createDeliveryInput ("post");
	createSpan("post", "delivery");
	createDeliveryInput ("courier");
	createSpan("courier", "delivery");
	fields.appendChild(createClearDiv());
	createSpan("address:", "label");
	createInputField("userInput", "address");
	fields.appendChild(createClearDiv());
	createSpan("package color:", "label");
	createInputFieldWithType ("packageColor", "color", "color");
	fields.appendChild(createClearDiv());
	
	res = document.createElement("input");
	res.setAttribute("type", "reset");
	res.setAttribute("value", "reset form");
	fields.appendChild(res);
	
	subform = document.createElement("input");
	subform.setAttribute("type", "submit");
	subform.setAttribute("value", "send form");
	fields.appendChild(subform);
}

/**
 * Creates div to arrange form
 * @returns div
 */
function createClearDiv(){
	clearDiv = document.createElement("div");
	clearDiv.setAttribute("style", "clear:both;");
	return clearDiv;
}
/**
 * Creates span with form headers
 * 
 */
function createSpan(text, className){
	fSpan = document.createElement("span");
	fSpan.innerHTML = text;
	fSpan.classList.add(className);
	fields.appendChild(fSpan);
}
/**
 * 
 * Creates radio inputs
 * 
 */
function createDeliveryInput (value){
	deliveryIn = document.createElement("input");
	deliveryIn.setAttribute("type", "radio");
	deliveryIn.setAttribute("name", "delivery");
	deliveryIn.setAttribute("value", value);
	deliveryIn.setAttribute("checked", "true");
	fields.appendChild(deliveryIn);
}
/**
 * 
 * Creates input with attributes: class, name and type
 * 
 */
function createInputFieldWithType (className, name, type){
	inputField = document.createElement("input");
	inputField.classList.add(className);
	inputField.setAttribute("name", name);
	inputField.setAttribute("type", type);
	inputField.setAttribute("required", "true");
	fields.appendChild(inputField);
}
/**
 * 
 * Creates input with attributes: class, name
 */
function createInputField (className, name){
	inputField = document.createElement("input");
	inputField.classList.add(className);
	inputField.setAttribute("name", name);
	inputField.setAttribute("required", "true");
	fields.appendChild(inputField);
}

/**
*	
* Creates contact form sent information (using jQuery)
*
*/
function showFormData(){

	$("#main").append($("<article id=\"dataContainer\"></article>"));
	$("#dataContainer").append($("<header id=\"formHeader\"></header").text("Your order:"));
	$("#dataContainer").append($("<ul id=\"userInfo\"></ul>"));
	$("#userInfo").append($("<li></li>").text("ent: " + getUrlParams('selected')));
	$("#userInfo").append($("<li></li>").text("mail: " + getUrlParams('email')));
	$("#userInfo").append($("<li></li>").text("delivery: " + getUrlParams('delivery')));
	$("#userInfo").append($("<li></li>").text("address: " + getUrlParams('address').replace("+", " ")));
	$("#userInfo").append($("<li></li>").text("color: "+getUrlParams('color')));
	$("#userInfo").append($("<span id=\"userColor\"; style=\"background-color:"+getUrlParams('color')+"; \"></span>"));
}
/**
*	
* Gets info data contact form
*
*@returns parameter
*
*/
function getUrlParams( prop ) {
    var params = {};
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    var definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : params;
}

/**
*
* Create ents table
* @param {Ent} ent 
* @returns New 'table' element
*
*/
function createEntsTable(ent){
	var table = document.createElement("table");
	
	var caption = document.createElement("caption");
	caption.setAttribute("id", "title");
	caption.innerText = "Availlable ents:";
	table.appendChild(caption);
	table.classList.add("entsTable");
	
	table.appendChild(createTableHeaders("species", "age", "plant year", "mobile", "nests", "your list:"));
	
	for (var index in ents) {
    		ent = ents[index];
			var trEnt = createTableRows(ent.species, ent.age, ent.plantYear, ent.mobile, ent.nests, "add")
    		table.appendChild(trEnt);
    	}
	
	return table;
}

/**
*
* Creates header in ents table
*
* @returns New 'tr' element
*/

function createTableHeaders (species, age, plantYear, mobile, nests, button) {
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	var th4 = document.createElement("th");
	var th5 = document.createElement("th");
	var th6 = document.createElement("th");
	
	th1.innerHTML = species;
	th2.innerHTML = age;
	th3.innerHTML = plantYear;
	th4.innerHTML = mobile;
	th5.innerHTML = nests;
	th6.innerHTML = button;
	
	th5.setAttribute("id", "nestsCol");
	th5.setAttribute("colspan", 2);

	var thBirds = document.createElement("th");
	thBirds.innerHTML = "birds";
	
	var thCount = document.createElement("th");
	thCount.innerHTML = "count";
	
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	tr.appendChild(th5);
	th5.appendChild(thBirds);
	th5.appendChild(thCount);
	tr.appendChild(th6);
	
	th5.classList.add("birds");
	th6.classList.add("count");
	
	return tr;
}

/**
*
* Creates rows with ents in ents table
*
* @returns New 'tr' element
*/

function createTableRows(species, age, plantYear, mobile, nest, button){
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	var td5 = document.createElement("td");
	var td6 = document.createElement("td");
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "add");
	button.setAttribute("name", species);

	td1.innerHTML = species;
	td2.innerHTML = age;
	td3.innerHTML = plantYear;
	td4.innerHTML = mobile;
	td5.innerHTML = nest.birds;
	td6.innerHTML = nest.count;
	button.innerHTML = button;
	
	td5.classList.add("birds");
	td6.classList.add("count");
	button.classList.add("button");
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(button);
	
	return tr;
}

// ***************************** JQuery *****************

/*
function populateEnts(container){
	var url_string = window.location.href;//Get url from browser.
    var url = new URL(url_string);//Make it url object.
    var ent = url.searchParams.get("ent");//Get query param.
	
	var container = "#" + container;
    ent = ents[ent];

	article = $("<article></article>");
    $(container).append(article);
	
	entAside = $("<aside></aside>");
    article.append(entAside);
	
	entList = $("<div id=\"entList\"></div>");
	entAside.append(entList);
	entList.append(createListHeader("<h4></h4>", "Your list:"));

    var entsTable = createEntTable(ent);
    article.append(entsTable);
} */

/*
function createEntTable(ent) {
    var table = $("<table></table>").append($("<caption></caption>")).addClass("speciesTable");
    table.append(createEntsTableHeader("species", "age", "plant year", "mobile", "nests", "add"));
    	for (var index in ents) {
    		ent = ents[index];
    		table.append(createRowsInEntTable
    		    (ent.species, ent.age, ent.plantYear, ent.mobile, ent.nests, ent.add));
    	}
    return table;
}*/
/*
function createEntsTableHeader (species, age, plantYear, mobile, nests, button){
    return $("<tr></tr>").append($("<th></th>").text(species))
        .append($("<th></th>").text(age))
        .append($("<th></th>").text(plantYear))
        .append($("<th></th>").text(mobile))
        .append($("<th id=\"nestsCol\"></th>").attr("colspan", 2).text(nests)
            .append($("<th class=\"birds\"></th>").text("birds"))
            .append($("<th class=\"count\"></th>").text("count")))
		.append($("<th></th>").text(button));
}*/

/*
function createRowsInEntTable(species, age, plantYear, mobile, nest, add) {
    return $("<tr></tr>").append($("<td></td>").text(species))
        .append($("<td></td>").text(age))
        .append($("<td></td>").text(plantYear))
        .append($("<td></td>").text(mobile))
        .append($("<td class=\"birds\"></td>").text(nest.birds))
        .append($("<td class=\"count\"></td>").text(nest.count))
		.append($("<td class=\"button\"></td>")
			.append($("<input type=\"checkbox\" id=\"checkbox\" value=add/>")));
}*/

/*
function createListHeader(h, text) {
    return $("<div></div>").append($(h).text(text));
}

*/





