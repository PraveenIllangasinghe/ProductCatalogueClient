/**
 * 
 */

$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

$(document).on("click", "#add_btn", function(event)
{
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	var status = validateInfo();
	
	if (status != true)
		{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
		}
	
	
	$.ajax(
	{
		url: "ProductAPI",
		type: 'POST',
		data: $("#addNewProductForm").serialize(),
		dataType: "text",
		complete: function(response, status)
		{
			onItemSaveComplete(response.responseText, status);
		}
	});
	
	
	// If valid-----------------------
	 // Generate the card and append
	var pr = getProductCard($("#pr_code").val().trim(),
			$("#pr_name").val().trim(),
			$("#pr_category").val().trim(),
			$("#pr_seller_id").val().trim(),
			$("#pr_origin_country").val().trim(),
			$("#pr_description").val().trim(),
			$("#pr_price").val().trim());
	 		$("#colStudents").append(pr);

	 $("#alertSuccess").text("Saved successfully.");
	 $("#alertSuccess").show();

	 $("#addNewProductForm")[0].reset();
});


$(document).on("click", ".Select_BTN", function(event)
{
	$("#hiddenProductID").val($(this).data("productid"));
	$("#up_pr_code").val($(this).closest("tr").find('td:eq(0)').text());
	$("#up_pr_name").val($(this).closest("tr").find('td:eq(1)').text());
	$("#up_pr_category").val($(this).closest("tr").find('td:eq(2)').text());
	$("#up_pr_seller_id").val($(this).closest("tr").find('td:eq(3)').text());
	$("#up_pr_origin_country").val($(this).closest("tr").find('td:eq(4)').text());
	$("#up_pr_description").val($(this).closest("tr").find('td:eq(5)').text());
	$("#up_pr_price").val($(this).closest("tr").find('td:eq(6)').text());
});


$(document).on("click", "#update_btn", function(event)
{
	$("#up_alertSuccess").text("");
	$("#up_alertSuccess").hide();
	$("#up_alertError").text("");
	$("#up_alertError").hide();
			
	/*var status = validateInfo();
			
	if (status != true)
	{
		$("#up_alertError").text(status);
		$("#up_alertError").show();
		return;
	}*/
			
			
	$.ajax(
	{
		url: "ProductAPI",
		type: 'PUT',
		data: $("#updateProductForm").serialize(),
		dataType: "text",
		complete: function(response, status)
			{
				onItemSaveComplete(response.responseText, status);
			}
	});
});


$(document).on("click", ".Delete_BTN", function(event)
{
	$.ajax(
	{
		url : "ProductAPI",
		type : "DELETE",
		data : "del_pr_id=" + $(this).data("productid"),
		dataType : "text",
		complete : function(response, status)
			{
				onProductDeleteComplete(response.responseText, status);
			}
	});
});



//validations

function validateInfo()
{
	//Product Code
	if ($("#pr_code").val().trim() == "")
		{
			return "Please enter the Code.";
		}
	
	//Product Name
	if ($("#pr_name").val().trim() == "")
		{
			return "Please enter the Product Name.";
		}
	
	//Product Category
	if ($("#pr_category").val().trim() == "")
		{
			return "Please enter the Category.";
		}
	
	//Seller ID
	if ($("#pr_seller_id").val().trim() == "")
		{
			return "Please enter the Seller ID.";
		}
	
	//Origin Country
	if ($("#pr_origin_country").val().trim() == "")
		{
			return "Please enter the Country of Origin.";
		}
	
	//Product Description
	if ($("#pr_description").val().trim() == "")
		{
			return "Please enter a Description.";
		}
	
	//Product Price
	if ($("#pr_price").val().trim() == "")
		{
			return "Please enter the Price.";
		}
	
	return true;
}


function onItemSaveComplete(response, status)
{
if (status == "success")
{
	var resultSet = JSON.parse(response);
	if (resultSet.status.trim() == "success")
	{
		$("#alertSuccess").text("Successfully saved.");
		$("#alertSuccess").show();
		$("#divItemsGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error")
	{
		$("#alertError").text(resultSet.data);
		$("#alertError").show();
	}
 	} else if (status == "error")
 	{
 		$("#alertError").text("Error! Insert or Update Operation Failed.");
 		$("#alertError").show();
 	} else
 	{
 		$("#alertError").text("Unknown error! Insert or Update Operation Failed.");
 		$("#alertError").show();
 	} 
	//$("#hiddenProductID").val("");
	//$("#addNewProductForm")[0].reset();
	}

function getProductCard(code, name, category, sellerId, country, description, price)
{
	
	var prod = "";
	prod += "<div class=\"product card bg-light m-2\" style=\"max-width: 10rem; float: left;\">";
	prod += "<div class=\"card-body\">";
	prod += code + " " + name + ",";
	prod += "<br>";
	prod += price + " .00";
	prod += "</div>";
	prod += "<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">";
	prod += "</div>";
 	return prod;
}

function onProductDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#up_alertSuccess").text("Successfully deleted.");
			$("#up_alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#up_alertError").text(resultSet.data);
			$("#up_alertError").show();
		}
	} else if (status == "error")
	{
		$("#up_alertError").text("Error! delete operation failed.");
		$("#up_alertError").show();
	} else
	{
		$("#up_alertError").text("Unknown error! delete operation failed.");
		$("#up_alertError").show();
	}
}