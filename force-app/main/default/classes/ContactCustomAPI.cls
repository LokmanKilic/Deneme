@RestResource(urlMapping='/ContactManeger/*')
global  class ContactCustomAPI {
    //URL           = https://abcd1235-dev-ed.develop.lightning.force.com/lightning/page/home
    //Protokol       = https://
    //Domein         = abcd1235-dev-ed.develop.lightning.force.com
    //Path           = /lightning/page/home

    
    //Protokol       = https://
    //Domein         = Your domein name.my.salesforce.com 
    //Path          = /service/apexrest 
    //Custom Path   = /ContactManeger/
    //Joker karakter = *
    
     //URL           = https://abcd1235-dev-ed.my.salesforce.com /service/apexrest/ContactManeger/*


     /* @HttpGet
     global static List<Contact> getRecords(){

    //URL           = https://abcd1235-dev-ed.my.salesforce.com /service/apexrest/ContactManeger/Id1,Id2,Id3            
            
             RestRequest  request=RestContext.request;
             string url= request.requestURI;
             List<string> splitList=url.split('/');             
             System.debug(splitList);
             List<string> idList=splitList[splitList.size()-1].split(',');
             System.debug(idList);

             return  [SELECT Id,FirstName, LastName,Email,Phone,LeadSource FROM Contact WHERE Id IN : idList];        

     }
 */
     @HttpGet

     global static List<Contact> getRecords2(){
         
         //URL           = https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/Id1,Id2,Id3
         //Parametre     = ?
         // Birden fazla parametre girilecekse "&" ifadesi ile ayrılır
         // https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/?Name=Osman&LeadSource=Web

         RestRequest request=RestContext.request;
         
         Map<string, string> paramMap=request.params;
         string conName=paramMap.get('Name');
         string conLeadSource=paramMap.get('LeadSource');

         conName='%'+conName+'%';

         return  [SELECT Id,FirstName, LastName,Email,Phone,LeadSource FROM Contact WHERE( FirstName LIKE: conName OR LastName LIKE : conName) AND LeadSource =: conLeadSource];  


    }

   /*  @httpPost 
    global static string createRecord(string conFirstName, string conLastName, string conEmail, string conPhone){

        Contact con=new Contact();
        con.FirstName=conFirstName;
        con.LastName=conLastName;
        con.Email=conEmail;
        con.Phone=conPhone;
        RestContext.response.statusCode=201;      
        insert con;

        return 'Contact başarı iel oluşturuldu ID: ' +con.Id;
/* 
        {
            "conFirstName" : "Workbenc Post",
            "conLastName"  : "Create Record",
            "conEmail"     :"workbench@post.com",
            "conPhone"     :12345765
        } 
        
    } */
   /*  @httpPost
    global static string createRecord(Contact con){        
        insert con;
        RestContext.response.statusCode=201;
        return 'Contact başarı iel oluşturuldu ID: ' +con.Id;
        /*    {  "con":{
                        "FirstName" : "Workbenc Post3",
                        "LastName"  : "Create Record3",
                        "Email"     :"workbench@post3.com",
                        "Phone"     :"123457653"
                       } 
              }
        
    } */

    @httpPost
    global static string createRecord(List<Contact> cons){        
        Database.SaveResult[] result=Database.insert(cons, false);

        RestContext.response.statusCode=201;
        return  JSON.serialize(result);


        /*    {  "cons": [
        
                            {
                                "FirstName" : "Workbenc Post4",
                                "LastName"  : "Create Record4",
                                "Email"     :"workbench@post4.com",
                                "Phone"     :"123457655"
                            },
                            {
                                "FirstName" : "Workbenc Post5",
                                "LastName"  : "Create Record5",
                                "Email"     :"workbench@post5.com",
                                "Phone"     :"123457656"
                            }


                       ]
              }
        
    } */
    }

   /*  @HttpDelete 

    global static string deleteRecord(){
         //URL           = https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/Id1

        RestRequest request=RestContext.request;
        string url=request.requestURI;
        integer idStartIndex=url.lastIndexOf('/')+1;
        string contactId=url.substring(idStartIndex);
         System.debug(contactId);

         Contact con= new Contact(Id = contactId);
         delete con;
         return 'Seçilen Contact silindi';
    }
 */
    @HttpDelete 

    global static string deleteRecord(){
         //URL   = https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/Id1,Id2,Id3

        RestRequest request=RestContext.request;
        string url=request.requestURI;
        integer idStartIndex=url.lastIndexOf('/')+1;
        string contactId=url.substring(idStartIndex);
        List<String> conIds=contactId.split(',');
        List<Contact> contacts=[SELECT Id FROM Contact WHERE Id IN :conIds];

        Database.DeleteResult[] results =Database.delete(contacts,false);
        return  JSON.serialize(results);        
        
    }

    @HttpPatch

    global static string updateRecord(string conFirstName, string conLastName, string conEmail, string conPhone){
         //URL   = https://abcd1235-dev-ed.my.salesforce.com /services/apexrest/ContactManeger/Id1
         RestRequest request=RestContext.request;
         string url=request.requestURI;
         integer idStartIndex=url.lastIndexOf('/')+1;
         string contactId=url.substring(idStartIndex);
         List<String> conIds=contactId.split(',');

         Contact con=new Contact();
            con.Id=contactId;
            con.FirstName=conFirstName;
            con.LastName=conLastName;
            con.Email=conEmail;
            con.Phone=conPhone;
            update con;

            return con.Id +'ID\'li contact başarı ile update edildi.';



    }

   /*  @HttpPut
    global static string upSertRecord(){
        RestRequest request = RestContext.request;
        string requestBody = request.requestBody.toString();
        Contact con = (Contact)JSON.deserialize(requestBody, Contact.class);
        string returnString;
    
        if (con.Id == null) {
            returnString = 'Contact başarı ile oluşturuldu. ID: ';
        } else {
            returnString = 'Contact başarı ile update edildi. ID: ';
        }
    
        upsert con;
        return returnString + con.Id;
    } */

    @HttpPut
    global static string upsertRecords(List<Contact> cons){

        Database.UpsertResult[] results =Database.upsert(cons,false);
        return JSON.serialize(results);
    /*    {  "cons": [
        
                            {   "Id"  :"",
                                "FirstName" : "Workbenc Post4",
                                "LastName"  : "Create Record4",
                                "Email"     :"workbench@post4.com",
                                "Phone"     :"123457655"
                            },
                            {
                                "FirstName" : "Workbenc Post5",
                                "LastName"  : "Create Record5",
                                "Email"     :"workbench@post5.com",
                                "Phone"     :"123457656"
                            }


                       ]
              }
        
    } */


    }




}