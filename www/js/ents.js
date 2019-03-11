var ents = [
	{
		"age": 120,
		"species": "oak",
		"plantYear": 1899,
		"mobile": "yes",
		"nests": { 
				"species": "owl",
				"count": 4
		}
	},
	{
		"age": 99,
		"species": "rowan",
		"plantYear": 1920,
		"mobile": "yes",
		"nests": {
			"species": "swallow",
			"count": 5
		}
	},
	{
		"age": 150,
		"species": "oak",
		"plantYear": 1859,
		"mobile": "no",
		"nests": {
			"species": "eagles",
			"count": 3
		}
	},
	{
		"age": 209,
		"species": "ash",
		"plantYear": 1810,
		"mobile": "yes",
		"nests": {
				"species": "mockingbirds",
				"count": 6
		}
	},
	{
		"age": 189,
		"species": "chestnut",
		"plantYear": 1830,
		"mobile": "no",
		"nests": {
				"species": "ducks",
				"count": 2
		}
	}
];

/**
 * @param {string} container Id of the container where books will be stored.
 */
/* function populateEnts(container){
	var container = "#" + container;
    ent = ents[ent];
    article = $("<article></article>");
    $(container).append(article);

	var entsTable = createEntsTable(ents);
    article.append(entsTable);
} */

function populateEnts(container){
	var url_string = window.location.href;//Get url from browser.
    var url = new URL(url_string);//Make it url object.
    var ent = url.searchParams.get("ent");//Get query param.
	
	var container = "#" + container;
    ent = ents[ent];

	article = $("<article></article>");
    $(container).append(article);
	
	for (var index in ents) {
		ent = ents[index];
		var entsTable = createEntTable(ent);
		article.append(entsTable);
	}
}

function createEntTable(ent) {
    var table = $("<table></table>").append($("<caption></caption>").text("species")).addClass("speciesTable");
	table.append(createSimpleRow("age", ent.age));
	table.append(createSimpleRow("plant year", ent.plantYear));
	table.append(createSimpleRow("mobile", ent.mobile));
    return table;
}

function createSimpleRow(header, value) {
    return $("<tr></tr>").append($("<th></th>").text(header)).append($("<td></td>").text(value));
}

/**
 * Create rows with first header cell spanning through.
 *
 * @param {string} header Value for th.
 * @param {array} value Array value for td.
 * @returns {Array} New 'tr' element.
 */
function createSpanRows(header, value) {
    var trs = [];
    var first = true;
    for (var v in value) {
        if (first) {
            trs.push($("<tr></tr>")
                .append($("<th></th>").attr("rowspan", value.length).text(header))
                .append($("<td></td>").text(value[v])));
            first = false;
        } else {
            trs.push($("<tr></tr>").append($("<td></td>").text(value[v])));
        }
    }
    return trs;
}
function createHeader(h, text) {
    return $("<header></header>").append($(h).text(text));
}






