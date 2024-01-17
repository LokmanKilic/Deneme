
@isTest
public class TestCalculatorServices {    
    @isTest
    static void duMultiplyTest(){
        Test.startTest();
        calculatorServicesMock cs=new  calculatorServicesMock();
        Test.setMock(WebServiceMock.class,cs);
        Test.stopTest();

       Double result= CalculatorCallout.multiply(3, 5);
       Assert.isTrue (15 == result);

    }
}