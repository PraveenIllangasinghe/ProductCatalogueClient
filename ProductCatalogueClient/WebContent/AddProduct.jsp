<%@page import="ProductCatalogueModel.Product"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Products</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/AddProduct.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/productCatalogue.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet">
</head>
<body>

	<form action="ViewProductCatalogue.jsp" method="POST">
		<input type="submit" value="View Product Catalogue" id="NavBtn">
	</form>

	<center>
	<h1 id="heading"><span id="partOne">Gadget</span> <span id="partTwo">Badget.</span></h1>
	</center>

	<center>
	<div class="container">
	
		<div class="row">
		
			<div class="col-8">
			
				<h3 class="m-3">Add Product Details</h3>
				
				<form id="addNewProductForm" name="addNewProductForm">
				
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_code_label">Product Code: </span>
						</div>
						<input type="text" id="pr_code" name="pr_code">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_name_label">Product Name: </span>
						</div>
						<input type="text" id="pr_name" name="pr_name">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_category_label">Product Category: </span>
						</div>
						<input type="text" id="pr_category" name="pr_category">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_seller_id_label">Seller ID: </span>
						</div>
						<input type="text" id="pr_seller_id" name="pr_seller_id">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_origin_country_label">Origin Country: </span>
						</div>
						<input type="text" id="pr_origin_country" name="pr_origin_country">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_description_label">Product Description: </span>
						</div>
						<input type="text" id="pr_description" name="pr_description">
					</div>
					
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
 							<span class="input-group-text" id="pr_price_label">Product Price: </span>
						</div>
						<input type="text" id="pr_price" name="pr_price">
					</div>
					
					<div id="alertSuccess" class="alert alert-success"></div>
 					<div id="alertError" class="alert alert-danger"></div>
 					
					<input type="button" id="add_btn" value="Add" class="btn btn-primary">
				
				</form>
			
			</div>
		
		</div>
		
		<br>

		<div class="row">
			<div class="col-12" id="colProds">

			</div>
		</div>
		
	
	</div>
	</center>
</body>
</html>