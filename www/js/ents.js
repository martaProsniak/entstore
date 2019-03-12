var ents = [
	{
		"age": 120,
		"species": "maple",
		"plantYear": 1899,
		"mobile": "yes",
		"nests": { 
				"birds": "owl",
				"count": 4
		},
		"add": 0,
	},
	{
		"age": 99,
		"species": "rowan",
		"plantYear": 1920,
		"mobile": "yes",
		"nests": {
			"birds": "swallow",
			"count": 5
		},
		"add": 0,
	},
	{
		"age": 150,
		"species": "oak",
		"plantYear": 1859,
		"mobile": "no",
		"nests": {
			"birds": "eagles",
			"count": 3
		},
		"add": 0,
	},
	{
		"age": 209,
		"species": "ash",
		"plantYear": 1810,
		"mobile": "yes",
		"nests": {
				"birds": "mockingbirds",
				"count": 6
		},
		"add": 0,
	},
	{
    	"age": 115,
    	"species": "poplar",
    	"plantYear": 1904,
    	"mobile": "yes",
    	"nests": {
    			"birds": "sparrows",
    			"count": 8
    	},
		"add": 0,
    	},
	{
		"age": 189,
		"species": "chestnut",
		"plantYear": 1830,
		"mobile": "no",
		"nests": {
				"birds": "ducks",
				"count": 2
		},
		"add": 0,
	}
];


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
}

function createRowsInEntTable(species, age, plantYear, mobile, nest, add) {
    return $("<tr></tr>").append($("<td></td>").text(species))
        .append($("<td></td>").text(age))
        .append($("<td></td>").text(plantYear))
        .append($("<td></td>").text(mobile))
        .append($("<td class=\"birds\"></td>").text(nest.birds))
        .append($("<td class=\"count\"></td>").text(nest.count))
		.append($("<td class=\"button\"></td>")
			.append($("<input type=\"checkbox\" name=\"ifAdd\" value=add/>")));
}

function createListHeader(h, text) {
    return $("<div></div>").append($(h).text(text));
}

function addEntToList(container){
	
}





