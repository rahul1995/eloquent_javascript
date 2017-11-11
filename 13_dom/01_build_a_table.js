function buildHeader(headers) {
    var row = document.createElement("tr");
    headers.forEach(function(el) {
      var col = document.createElement("th");
      col.textContent = el.name;
      if(el.type === "number") col.style.textAlign = "right";
      row.appendChild(col);
    });
    return row;
  }
  function buildRow(ob, props) {
    var row = document.createElement("tr");
    props.forEach(function(prop) {
      var col = document.createElement("td");
      col.textContent = ob[prop.name];
      if(prop.type === "number") col.style.textAlign = "right";
      row.appendChild(col);
    });
    return row;
  }
  function buildTable(data) {
    // Your code here.
    var colNames = Object.keys(data[0]);
    var table = document.createElement("table");
    colNames = colNames.map(function(el) {
      return {
        "name": el,
        "type": typeof data[0][el]
      };
    });
    table.appendChild(buildHeader(colNames));
    data.forEach(function(el) {
      table.appendChild(buildRow(el, colNames));
    });
    return table;
  }

  console.log(MOUNTAINS);
  document.body.appendChild(buildTable(MOUNTAINS));