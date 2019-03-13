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
				"birds": "mockingbirds",
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



function populateEnts(container){
	var url_string = window.location.href;//Get url from browser.
    var url = new URL(url_string);//Make it url object.
    var ent = url.searchParams.get("ent");//Get query param.
	
	var container = document.getElementById(container);
	ent = ents[ent];
	article = document.createElement("article");
	container.appendChild(article);
	
	entAside = document.createElement("aside");
	article.appendChild(entAside);
	
	userList = document.createElement("div");
	userList.classList.add("userList");
	entAside.appendChild(userList);
	
	var entsTable = createEntsTable(ent);
	article.appendChild(entsTable);
}

function createEntsTable(ent){
	var table = document.createElement("table");
	
	var caption = document.createElement("caption");
	caption.innerText = "Availlable ents:";
	table.appendChild(caption);
	table.classList.add("entsTable");
	
	table.appendChild(createTableHeaders("species", "age", "plant year", "mobile", "nests", "add"));
	
	for (var index in ents) {
    		ent = ents[index];
    		table.appendChild(createTableRows(ent.species, ent.age, ent.plantYear, ent.mobile, ent.nests, ent.add));
    	}
	
	return table;
}

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
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(td7);
	
	return tr;
}
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
}

function createEntTable(ent) {
    var table = $("<table></table>").append($("<caption></caption>")).addClass("speciesTable");
    table.append(createEntsTableHeader("species", "age", "plant year", "mobile", "nests", "add"));
    	for (var index in ents) {
    		ent = ents[index];
    		table.append(createRowsInEntTable
    		    (ent.species, ent.age, ent.plantYear, ent.mobile, ent.nests, ent.add));
    	}
    return table;
}

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





