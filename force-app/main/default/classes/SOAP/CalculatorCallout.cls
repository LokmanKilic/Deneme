public class CalculatorCallout {

    public static Double  addition(Double num1, Double num2) {
        calculatorServices.CalculatorImplPort cs=new calculatorServices.CalculatorImplPort();
         return cs.doAdd(num1, num2);

    }
    public static Double  subtraction(double num1, double num2) {
        calculatorServices.CalculatorImplPort cs=new calculatorServices.CalculatorImplPort();
         return cs.doSubtract(num1,num2);

    }public static Double  divition(Double num1, Double num2) {
        calculatorServices.CalculatorImplPort cs=new calculatorServices.CalculatorImplPort();
         return cs.doDivide(num1,num2);

    }public static Double  multiply(Double num1, Double num2) {
        calculatorServices.CalculatorImplPort cs=new calculatorServices.CalculatorImplPort();
         return cs.doMultiply(num1,num2);

    }
}