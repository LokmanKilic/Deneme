
@isTest
public  class TestRestCallouts {
    @isTest
    static void testGetUsers() {

        /* I. yol: RestCalloutsMock mock =new RestCalloutsMock();
        Test.setMock(HttpCalloutMock.class,mock); */
        
      Test.setMock(HttpCalloutMock.class, new RestCalloutsMock());

      HttpResponse response= restCallouts.getUsers();
      
      Assert.isTrue(response.getStatus() == 'OK');
      Assert.isTrue(response.getStatusCode() == 200);
      integer countContact=[SELECT count() from Contact];
      Assert.isTrue(countContact == 10);

    }

    @isTest

    static void testBearerAuth(){
      Test.setMock(HttpCalloutMock.class, new RestCalloutsMock());

      Contact con=new Contact();
      con.FirstName='testFirstName';
      con.LastName='testLastName';
      con.Email='test@Email.com';
      con.Gender__c='male';
      con.Status__c='active';
      insert con;

      Test.startTest();
      HttpResponse response=restCallouts.bearerAuth();
      Test.stopTest();

      List<Contact>  con1=[SELECT id, Email FROM Contact];

      Assert.isTrue(response.getStatus() == 'Created');
      Assert.isTrue(response.getStatusCode() == 201);

      string jsonString=response.getbody();

      Assert.isTrue(jsonString.contains(con.FirstName +' '+ con.LastName) == true);

      System.assertEquals(con1[0].Email,'test@Email.com');
 


    }


}