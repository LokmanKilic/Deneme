@isTest 
public  class TestParkServices {
    @isTest

    static void getParksCountry(){
        ParkServiceMock mock=new  ParkServiceMock();
        Test.setMock(WebServiceMock.class,mock);
       string[] parks= ParkCallout.getParksCountry('Turkey');
        Assert.isTrue(2 == parks.size());


    }
 
}