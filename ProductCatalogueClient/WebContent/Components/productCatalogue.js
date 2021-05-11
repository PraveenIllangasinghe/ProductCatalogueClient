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
	
	/*$.ajax(
	{
		url: "ProductAPI",
		type: "POST",
		data: $("#addNewProductForm").serialize(),
		dataType: "text",
		complete: function(response, status)
		{
			onItemSaveComplete(response.responseText, status);
		}
	});*/
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
 		$("#alertError").text("Error while saving.");
 		$("#alertError").show();
 	} else
 	{
 		$("#alertError").text("Unknown error while saving..");
 		$("#alertError").show();
 	} 
	//$("#hidItemIDSave").val("");
	//$("#formItem")[0].reset();
	}