<%@page import="ProductCatalogueModel.Product"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Product Catalogue</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/AddProduct.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/productCatalogue.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet">
</head>
<body>

	<form action="AddProduct.jsp" method="POST">
		<input type="submit" value="Add Product" id="NavBtn">
	</form>

	<center>
	<h1 id="heading"><span id="partOne">Gadget</span> <span id="partTwo">Badget.</span></h1>
	</center>

	<center>
	<div class="container">
	
		<div class="row">
		
			<div class="col-8">
			
				<div id="divItemsGrid">
 					<%
 						Product product = new Product();
						out.print(product.readProducts());
 					%>
				</div>
				
				
				<h1 class="m-3">Update Product Details</h1>
				
				<form id="updateProductForm" name="updateProductForm">
				
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_code_label">Product Code: </span>
						</div>
						<input type="text" id="up_pr_code" name="up_pr_code">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_name_label">Product Name: </span>
						</div>
						<input type="text" id="up_pr_name" name="up_pr_name">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_category_label">Product Category: </span>
						</div>
						<input type="text" id="up_pr_category" name="up_pr_category">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_seller_id_label">Seller ID: </span>
						</div>
						<input type="text" id="up_pr_seller_id" name="up_pr_seller_id">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_origin_country_label">Origin Country: </span>
						</div>
						<input type="text" id="up_pr_origin_country" name="up_pr_origin_country">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_description_label">Product Description: </span>
						</div>
						<input type="text" id="up_pr_description" name="up_pr_description">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="up_pr_price_label">Product Price: </span>
						</div>
						<input type="text" id="up_pr_price" name="up_pr_price">
					</div>
					
					<div id="up_alertSuccess" class="alert alert-success"></div>
 					<div id="up_alertError" class="alert alert-danger"></div>
 					
					<input type="button" id="update_btn" value="Update" class="btn btn-primary">
					
					<input type="hidden" id="hiddenProductID" name="hiddenProductID" value="">
				
				</form>
				
			
			</div>
		
		</div>
	
	</div>

	</center>
</body>
</html>