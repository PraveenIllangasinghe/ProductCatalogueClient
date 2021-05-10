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