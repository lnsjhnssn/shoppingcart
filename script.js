//Update subtotal
const updateSubTotal = function (arr) {
  let subTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    subTotal += arr[i];
  }
  $(".subtotal").text(subTotal.toFixed(2));
};

//Update table 
const updateProductTotal = function () {
  let subTotalArr = [];

  $("tbody tr").each(function (i, e) {
    let price = parseFloat($(".price", e).text());
    let quantity = $(".input-quantity", e).val();
    let productTotal = price * quantity;

    $(".total", e).text(productTotal.toFixed(2));
    subTotalArr.push(productTotal);
  });
  updateSubTotal(subTotalArr);
};

//Add new row
const addRow = function () {
  let inputProduct = $("#input-product").val();
  let inputPrice = $("#input-price").val();

  if (inputProduct !== "" && inputPrice !== "") {
    $("tbody").append(
      "<tr>" +
        '<td scope="col" class="product">' +
        inputProduct +
        "</td>" +
        '<td scope="col">$<span class="price">' +
        inputPrice +
        "</span></td>" +
        '<td scope="col" class="quantity"><input class="input-quantity" type="number" value="1" min="0"></td>' +
        '<td scope="col"><div><span>$</span><span class="total"></span></div></td>' +
        '<td scope="col"><button class="btn remove">Remove</button></td>' +
        "</tr>"
    );
  }

  updateProductTotal();
  $("#input-product").val("");
  $("#input-price").val("");
};

//HTML loaded
$(document).ready(function () {
  //Update Table
  updateProductTotal();

  //Update total-price
  $(document).on("change", ".input-quantity", function () {
    updateProductTotal();
  });

  //Add new row on click
  $("#btn-add-product").on("click", addRow);

  //Remove row
  $(document).on("click", ".btn.remove", function (event) {
    $(this).closest("tr").remove();
    updateProductTotal();
  });
});
