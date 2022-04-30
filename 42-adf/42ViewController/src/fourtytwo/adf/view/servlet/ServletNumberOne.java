package fourtytwo.adf.view.servlet;

import java.io.IOException;

import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletNumberOne extends HttpServlet {

    public ServletNumberOne() {
        super();
    }

    @Override
    public void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/javascript");
        PrintWriter out = response.getWriter();
        writeJS(out);
        out.close();
    }
    
    private void writeJS(PrintWriter out){
        out.println("var observer = new MutationObserver(function(mutations) {");
        out.println("   if (document.contains(document.body)) {");
        out.println("        var myElem = document.createElement('div');");
        out.println("        myElem.innerHTML = 'Hello world';");
        out.println("        myElem.classList.add('superbclass');");
        out.println("        document.body.appendChild(myElem);");
        out.println("        observer.disconnect();");
        out.println("    }");
        out.println("});");
        out.println("observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});");
    }
}
