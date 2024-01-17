@isTest
public with sharing class TestDataFactoryUtility {
  
    public static List<Contact> createContacts(integer numCom){

        List<Contact> cons = new List<Contact>();

        for (integer i=1;i<=numCom;i++) {

            Contact con=new Contact(FirstName='Test Contact'+i,
                                     LastName='Contact Test'+i,
                                     Email='test@conatct.com'+i,
                                     LeadSource='Web',
                                     Phone='123456'+i);
            cons.add(con);
            
        }
        return cons;


    }
}