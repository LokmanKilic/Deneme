@isTest
public with sharing class TestContactCustomAPI {
    @isTest
   static void getRecords2Test() {
    insert TestDataFactoryUtility.createContacts(100);
   
    //1.RestRequest ---> Requestin hazırlanması

    RestRequest request=new RestRequest();
    request.httpMethod='GET';
    request.requestURI='https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/?Name=ntac&LeadSource=Web';
    request.addParameter('Name','ntac');
    request.addParameter('LeadSource','Web');


    //2.RestContext.request --> Hazırlanan requestin iletilmesi
    
    RestContext.request = request;

    //3. Test Edilecek metodun çağırılması

    Test.startTest();
   List<Contact> cons=ContactCustomAPI.getRecords2();
    Test.stopTest();

    //4. Assertion işlemi
    Assert.isTrue(cons.size() == 100);
    }

    @isTest
    static void createRecordTest(){
        RestResponse response=new RestResponse();
        RestContext.response = response;

        List<Contact> cons =TestDataFactoryUtility.createContacts(50);
        Test.startTest();
        ContactCustomAPI.createRecord(cons);
        Test.stopTest();

        integer countContact=[SELECT COUNT() FROM Contact];
        Assert.isTrue(countContact == 50);

    }

    @isTest
    static void deleteRecordTest() {
        List<Contact> cons= TestDataFactoryUtility.createContacts(100);
        insert cons;
   
        //1.RestRequest ---> Requestin hazırlanması
    
        RestRequest request=new RestRequest();
        request.httpMethod='DELETE';
        request.requestURI='https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/'+cons[0].id+ ','+cons[1].id+ ','+cons[2].id;
        
    
        //2.RestContext.request --> Hazırlanan requestin iletilmesi
        
        RestContext.request = request;
    
        //3. Test Edilecek metodun çağırılması
    
        Test.startTest();
      ContactCustomAPI.deleteRecord();
        Test.stopTest();
    
        //4. Assertion işlemi

        integer countContact=[SELECT COUNT() FROM Contact];
        Assert.isTrue(countContact == 97);
        
    }

    
    @IsTest
    static void updateRecordTest(){
        List<Contact> cons= TestDataFactoryUtility.createContacts(100);
        insert cons;
   
    //1.RestRequest ---> Requestin hazırlanması

    RestRequest request=new RestRequest();
    request.httpMethod='PATCH';
    request.requestURI='https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/'+ cons[65].id;
  
    //2.RestContext.request --> Hazırlanan requestin iletilmesi
    
    RestContext.request = request;

    //3. Test Edilecek metodun çağırılması
    Test.startTest();
    ContactCustomAPI.updateRecord('Osman','K.','osmank@com.com','987867');   
    Test.stopTest();

    //4. Assertion işlemi
    cons=[SELECT id FROM Contact WHERE FirstName='Osman'];
    Assert.isTrue(cons.size() == 1);    
        
    }
    @IsTest
     static void upsertRecordTest() {

        List<Contact> cons= TestDataFactoryUtility.createContacts(100);
        insert cons;
   
        //1.RestRequest ---> Requestin hazırlanması
    
        RestRequest request=new RestRequest();
        request.httpMethod='PUT';
        request.requestURI ='https://abcd1235-dev-ed.my.salesforce.com/services/apexrest/ContactManeger';
        string  requestBody = '{"Id":"' + cons[45].Id + '","FirstName":"PutUpdate","LastName":"upsert","Email":"puth@update.com","Phone":12345795}';
        request.requestBody = Blob.valueOf(requestBody);
    
        //2.RestContext.request --> Hazırlanan requestin iletilmesi
        
        RestContext.request = request;
    
        //3. Test Edilecek metodun çağırılması
    
       
      ContactCustomAPI.upSertRecord();
        
    
        //4. Assertion işlemi

        cons=[SELECT Id FROM Contact WHERE FirstName ='PutUpdate'];
        Assert.isTrue(cons.size() == 1); 

        request.requestURI ='https://abcd1235-dev-ed.my.salesforce.com/services/apexrest/ContactManeger';
        requestBody = '{"FirstName":"PutInsert","LastName":"Insert","Email":"puth@insert.com","Phone":12345795}';
        request.requestBody = Blob.valueOf(requestBody);
    
        //2.RestContext.request --> Hazırlanan requestin iletilmesi
        
        RestContext.request = request;
    
        //3. Test Edilecek metodun çağırılması
    
        Test.startTest();
      ContactCustomAPI.upSertRecord();
        Test.stopTest();
        integer countContact=[SELECT COUNT() FROM Contact];
        Assert.isTrue(countContact == 101);
        
    

       
    }
}