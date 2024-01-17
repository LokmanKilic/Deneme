public with sharing class getInfosWithApexImpMethodWithParameter{
     @AuraEnabled    
     public static List<Contact> getContacts(String searchedWord){
       
        searchedWord = '%'+searchedWord+'%';

        return [SELECT  FirstName, LastName, Title, Email
        FROM Contact 
        WHERE FirstName LIKE :searchedWord 
        OR LastName LIKE :searchedWord 
        LIMIT 5];

        
    }
}