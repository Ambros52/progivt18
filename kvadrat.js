function kvadr() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
    var d = b*b - 4*a*c;
	if (d < 0) {
	    alert("No solutions:((");
	} else if (d == 0) {
	    var x1 = (-b+Math.sqrt(d))/2/a;
	    alert("x1 = " + x1);
	  } else if (d > 0) {
	  	    var x1 = -b/2/a+Math.sqrt(d);
	        var x2 = (-b-Math.sqrt(d))/2/a;
	        alert("D = " + d + "\n" + "x1 = " + x1 + "\n" + "x2 = " + x2);
	    } else {
	    	alert("Enter a number please")
	    }
	    
}

