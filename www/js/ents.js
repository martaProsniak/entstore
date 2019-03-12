var ents = [
	{
		"age": 120,
		"species": "oak",
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
	
	var container = "#" + container;
    ent = ents[ent];

	article = $("<article></article>");
    $(container).append(article);

    var entsTable = createEntTable(ent);
    article.append(entsTable);

}

function createEntTable(ent) {
    var table = $("<table></table>").append($("<caption></caption>")).addClass("speciesTable");
    table.append(createHeader('<h2>', "species"));
    table.append(createHeader('<h2>', "age"));
    table.append(createHeader('<h2>', "plant year"));
    table.append(createHeader('<h2>', "mobile"));
    table.append(createHeader('<h2>', "nests"));

    	for (var index in ents) {
    		ent = ents[index];
    		    table.append(createSimpleRow(ent.species));
            	table.append(createSimpleRow(ent.age));
            	table.append(createSimpleRow(ent.plantYear));
            	table.append(createSimpleRow(ent.mobile));
            	var nest = ent.nests;
            	table.append(createNestTable(nest));
    	}

    return table;
}

function createNestTable(nest) {
	var table = $("<table></table>").append($("<caption></caption>")).addClass("nestTable");
	table.append(createSimpleRow(nest.birds));
	table.append(createSimpleRow(nest.count));
	return table;
}

function createSimpleRow(value) {
    return $("<tr></tr>").append($("<td></td>").text(value));
	return table;
}

function createHeader(h, text) {
    return $("<header></header>").append($(h).text(text));
}






