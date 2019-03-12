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
    table.append(createEntsTableHeader("species", "age", "plant year", "mobile", "nests"));
    	for (var index in ents) {
    		ent = ents[index];
    		//var nest = ent.nests;
    		table.append(createRowsInEntTable
    		    (ent.species, ent.age, ent.plantYear, ent.mobile, ent.nests));
    	}
    return table;
}

function createEntsTableHeader (species, age, plantYear, mobile, nests){
    return $("<tr></tr>").append($("<th></th>").text(species))
        .append($("<th></th>").text(age))
        .append($("<th></th>").text(plantYear))
        .append($("<th></th>").text(mobile))
        .append($("<th></th>").attr("colspan", 2).text(nests));
}

function createRowsInEntTable(species, age, plantYear, mobile, nest) {
    return $("<tr></tr>").append($("<td></td>").text(species))
        .append($("<td></td>").text(age))
        .append($("<td></td>").text(plantYear))
        .append($("<td></td>").text(mobile))
        .append($("<td></td>").attr("colspan", 2).text("birds")
            .append($("<td></td>").text(nest.birds)))
        .append($("<td></td>").attr("colspan", 2).text("count")
             .append($("<td></td>").text(nest.count)));
        //nests = createNestTable(nest);
        //table.append(nests);

}

function createNestTable(nest) {
	var table = $("<table></table>").append($("<caption></caption>")).addClass("nestTable");
	table.append($("<th></th>").attr("rowspan", value.length).text(birds)).append($("<td></td>").text(nest.birds))
    table.append($("<th></th>").attr("rowspan", value.length).text(count).append($("<td></td>").text(nest.count)));
	return table;
}








