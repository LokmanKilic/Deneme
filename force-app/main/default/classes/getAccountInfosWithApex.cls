public  class getAccountInfosWithApex {

    @AuraEnabled(cacheable=true)
    public static List<account> getAccountInfoWithApex(){
        try {

      List<account> listAccount=[SELECT Id, Name, AnnualRevenue,Industry,Phone,Website FROM Account where Type !=null AND Industry !=null LIMIT 5];

      return listAccount;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static List<account> getAccInfosApexWithParameter(string paramater){
        try {

      List<account> listAccount2=[SELECT Id, Name,Type, AnnualRevenue,Industry,Phone  FROM Account WHERE Type =: paramater LIMIT 10];

      return listAccount2;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}