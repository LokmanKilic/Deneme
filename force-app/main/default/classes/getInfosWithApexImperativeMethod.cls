public class getInfosWithApexImperativeMethod {

    @AuraEnabled(cacheable=true)  
    public static list<Opportunity> getInfoApexImperative () {

        return [SELECT Id,Name,StageName,Type,Amount FROM Opportunity LIMIT 5];
        
    }
}