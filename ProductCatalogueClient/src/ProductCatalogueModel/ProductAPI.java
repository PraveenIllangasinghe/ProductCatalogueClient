package ProductCatalogueModel;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Scanner;
import java.util.HashMap;
import java.util.Map; 

/**
 * Servlet implementation class ProductAPI
 */
@WebServlet("/ProductAPI")
public class ProductAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Product prod = new Product();
		
		String output = prod.insertProduct(request.getParameter("pr_code"),
				request.getParameter("pr_name"),
				request.getParameter("pr_category"),
				Integer.parseInt(request.getParameter("pr_seller_id")),
				request.getParameter("pr_origin_country"),
				request.getParameter("pr_description"),
				request.getParameter("pr_price"));
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Product prod = new Product();
		
		Map paras = getParasMap(request);
		String output = prod.updateProduct(paras.get("hiddenProductID").toString(),
		paras.get("up_pr_code").toString(),
		paras.get("up_pr_name").toString(),
		paras.get("up_pr_category").toString(),
		paras.get("up_pr_seller_id").toString(),
		paras.get("up_pr_origin_country").toString(),
		paras.get("up_pr_description").toString(),
		paras.get("up_pr_price").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Product prodDel = new Product();
		
		Map paras = getParasMap(request);
		 String output = prodDel.deleteProduct(paras.get("del_pr_id").toString());
		response.getWriter().write(output); 
	}
	
	
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		
		try
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
			scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params)
			{ 
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		 }
		catch (Exception e)
		 {
		 }
		return map;
	}
}
