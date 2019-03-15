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
	entAside.setAttribute("id", "aside");
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
		buttons[i].addEventListener("click", function() 
			{ 
				$("#userList").append($(addEntToUserListPlus())); 
			}
		);
	}

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
	
	var itemOnList = $("<li></li>").text(chosenEnt.species);

	return itemOnList;
}

/**
*
* Finds chosen ent and put it on the list
* Additional feature allows removing ens from the list
* @returns New 'li' element
*/
function addEntToUserListPlus(){
	
	var clickedButton = event.srcElement.id;
	
	var index = clickedButton.substr(6,1);
	chosenEnt = ents[index];
	
	var itemOnList = $("<li></li>").text(chosenEnt.species);
	
	$(itemOnList).click(function () 
		{
			removeFromList();
		}
	);

	return itemOnList;
}

/**
*	
* Removes ent from userList
*
*/
function removeFromList(){
	$(event.target).remove();
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
	
	span1 = document.createElement("span");
	span1.innerHTML = "species:"
	span1.classList.add("label");
	fields.appendChild(span1);
	
	selectEnt = document.createElement("select");
	selectEnt.setAttribute("name", "selected");
	selectEnt.setAttribute("required", "true");
	fields.appendChild(selectEnt);
	
	for (var index in ents) {
    		ent = ents[index];
			opt = document.createElement("option");
			opt.setAttribute("value" , "ent"+index);
			opt.innerHTML = ent.species;
			selectEnt.appendChild(opt);
    	}
		
	clear1 = document.createElement("div");
	clear1.setAttribute("style", "clear:both;");
	fields.appendChild(clear1);
	
	span2 = document.createElement("span");
	span2.innerHTML = "e-mail:"
	span2.classList.add("label");
	fields.appendChild(span2);
	
	mail = document.createElement("input");
	mail.classList.add("userInput");
	mail.setAttribute("type", "e-mail");
	mail.setAttribute("required", "true");
	fields.appendChild(mail);
	
	clear1 = document.createElement("div");
	clear1.setAttribute("style", "clear:both;");
	fields.appendChild(clear1);
	
	span3 = document.createElement("span");
	span3.innerHTML = "delivery"
	span3.classList.add("label");
	fields.appendChild(span3);
	
	delivery1 = document.createElement("input");
	delivery1.setAttribute("type", "radio");
	delivery1.setAttribute("name", "delivery");
	delivery1.setAttribute("value", "ship");
	delivery1.setAttribute("checked", "true");
	fields.appendChild(delivery1);
	del1 = document.createElement("span");
	del1.classList.add("delivery");
	del1.innerHTML = "ship";
	fields.appendChild(del1);
	
	delivery2 = document.createElement("input");
	delivery2.setAttribute("type", "radio");
	delivery2.setAttribute("name", "delivery");
	delivery2.setAttribute("value", "post");
	fields.appendChild(delivery2);
	del2 = document.createElement("span");
	del2.classList.add("delivery");
	del2.innerHTML = "post";
	fields.appendChild(del2);
	
	delivery3 = document.createElement("input");
	delivery3.setAttribute("type", "radio");
	delivery3.setAttribute("name", "delivery");
	delivery3.setAttribute("value", "courier");
	fields.appendChild(delivery3);
	del3 = document.createElement("span");
	del3.classList.add("delivery");
	del3.innerHTML = "courier";
	fields.appendChild(del3);
	
	clear2 = document.createElement("div");
	clear2.setAttribute("style", "clear:both;");
	fields.appendChild(clear2);
	
	span4 = document.createElement("span");
	span4.innerHTML = "delivery address:"
	span4.classList.add("label");
	fields.appendChild(span4);
	
	addr = document.createElement("input");
	addr.classList.add("userInput");
	addr.setAttribute("required", "true");
	fields.appendChild(addr);
	
	clear3 = document.createElement("div");
	clear3.setAttribute("style", "clear:both;");
	fields.appendChild(clear3);
	
	span5 = document.createElement("span");
	span5.innerHTML = "package color:"
	span5.classList.add("label");
	fields.appendChild(span5);
	
	packageColor = document.createElement("input");
	addr.classList.add("packageColor");
	packageColor.setAttribute("name", "color");
	packageColor.setAttribute("type", "color");
	fields.appendChild(packageColor);
	
	clear4 = document.createElement("div");
	clear4.setAttribute("style", "clear:both;");
	fields.appendChild(clear4);
	
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
*
* Create ents table
*
* @param {Ent} ent 
* @returns New 'table' element
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
	var td7 = document.createElement("td");

	td1.innerHTML = species;
	td2.innerHTML = age;
	td3.innerHTML = plantYear;
	td4.innerHTML = mobile;
	td5.innerHTML = nest.birds;
	td6.innerHTML = nest.count;
	td7.innerHTML = button;
	
	td5.classList.add("birds");
	td6.classList.add("count");
	td7.classList.add("button");
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(td7);
	
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





