
   parksServices.ParksImplPort ps= new parksServices.ParksImplPort();
   String[] parkList = ps.byCountry('United States');
   System.debug(parkList); 
    System.debug(ParkCallout.getParksCountry('Japan'));


calculatorServices.CalculatorImplPort cs=new calculatorServices.CalculatorImplPort();
double result=cs.doDivide(25,7);
System.debug(result);
System.debug(cs.doDivide(25,6));

System.debug( CalculatorCallout.addition(12, 6));
System.debug( CalculatorCallout.subtraction(12, 6));
System.debug( CalculatorCallout.divition(12, 6));
System.debug( CalculatorCallout.multiply(12, 6));



 

 