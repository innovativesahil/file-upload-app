const  arr = [
  1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,50
]
module.exports = {
  columns : [
    {
      dataField : "id",
      text : "Product ID",
      sort : true
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true
    },
    {
      dataField: "price",
      text: "Product Price",
      sort: true
    }
  ],
  //Column options
  columnsTemp: [
    {
      dataField: "id", // ley in the data list
      text: "Product ID", // column header
      sort: true, // sort option available
      editable: false, // make the column non editable
      //validator for colun
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: "Price should be numeric"
          };
        }
        if (newValue < 2000) {
          return {
            valid: false,
            message: "Price should bigger than 2000"
          };
        }
        return true;
      },

      title: true, // Hover title
      //hidden: true, // Hide the column in the view
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          alert("Click on Product ID field");
        },
        onMouseEnter: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          console.log("onMouseEnter on Product ID field");
        }
      }
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true
    },
    {
      dataField: "price",
      text: "Product Price",
      sort: true
    }
  ],

  //default sorted on column and order
  defaultSorted: [
    {
      dataField: "name",
      order: "desc"
    }
  ],

  // Data to display when there is no data
  indication: () => "No data to display",

  //Array of indexes to produce data

  // data to be rendered in the table
  products: arr.map(index => { return {id : index, name : "Product" + index, price : "$100" + index}}),
  data: [{ id: "1", name: "Product 1", price: "$23" }],
  // selectRow prop to enable selecting rows
  selectRow: {
    mode: "checkbox",
    clickToSelect: true,
    clickToEdit: true
  }
};
