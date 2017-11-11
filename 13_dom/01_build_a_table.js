function buildHeader(headers) {
    const row = document.createElement("tr");
    headers.forEach(el => {
      const col = document.createElement("th");
      col.textContent = el.name;
      if(el.type === "number") {
        col.style.textAlign = "right";
      }
      row.appendChild(col);
    });
    return row;
  }
  function buildRow(ob, props) {
    const row = document.createElement("tr");
    props.forEach(prop => {
      const col = document.createElement("td");
      col.textContent = ob[prop.name];
      if(prop.type === "number") {
        col.style.textAlign = "right";
      }
      row.appendChild(col);
    });
    return row;
  }
  function buildTable(data) {
    // Your code here.
    const colNames = Object.keys(data[0]).map(function(el) {
      return {
        "name": el,
        "type": typeof data[0][el]
      };
    });
    const table = document.createElement("table");
    table.appendChild(buildHeader(colNames));
    data.forEach(function(el) {
      table.appendChild(buildRow(el, colNames));
    });
    return table;
  }

  console.log(MOUNTAINS);
  document.body.appendChild(buildTable(MOUNTAINS));