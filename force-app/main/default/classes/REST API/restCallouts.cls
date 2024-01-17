public  class restCallouts {

    static final string HTTP_GET ='GET';
    static final string HTTP_POST ='POST';

    public static HttpResponse getAnimals(){ 
        //1. Requestin hazırlanması
        HttpRequest request= new HttpRequest();
        /* I. yol => request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals'); */
        // II. yol : önce orgda "Custom Metadata Type" kısmında yeni typler oluşturduk
        request.setEndpoint(IntegrationInfo__mdt.getInstance('GET_ANIMALS').Endpoind__c); // org üzerinden "Remote site settings" ten access verilmeli
        /*  I. yol-> request.setMethod('GET'); */
        request.setMethod(HTTP_GET);
        /* System.debug(request);    */   
        
        //2.Http protokoli ile Requestin gönderilmesi
        Http http = new Http(); 
        //2.1 Requestin gönderilmesi ve responsun alınması
        HttpResponse response = http.send(request);
        //3 Response sonrası gerekli işlerin yürütülmesi
        /* System.debug('Status: '+ response.getStatus());
        System.debug('Status Code: '+ response.getStatusCode()); */
        if (response.getStatusCode()==200) {
            //Request başarılı olamsı durumunda yürütülecek işlem
            string jsonstring= response.getBody();
           /*  System.debug(jsonstring); */
            Map<String, Object> result = (Map<String, Object>) Json.deserializeUntyped(jsonstring);
            /* System.debug(result); */
            List<Object> animals =(List<Object>) result.get('animals');
          /*   System.debug(animals); */
            for (Object animal : animals) {
                System.debug(animal);
            }            
        }else {
            //Request başarılı olmaması durumunda yürütülecek işlem
            System.debug ('Hata mesajı : ' + response.getStatus());
            System.debug ('Hata codu : ' + response.getStatusCode());            
        }
        return response;
    }
    public static HttpResponse getUsers(){        
        //1. Requestin hazırlanması
        HttpRequest request= new HttpRequest();
        /* I. yol  :request.setEndpoint('https://gorest.co.in/public/v2/users'); */
        // II. yol : önce orgda "Custom Metadata Type" kısmında yeni typler oluşturduk
        request.setEndpoint(IntegrationInfo__mdt.getInstance('GET_USERS').Endpoind__c);      
       /* I. yol -> request.setMethod('GET'); */        
        request.setMethod(HTTP_GET);
        System.debug(request);       
        //2.Http protokoli ile Requestin gönderilmesi
        Http http = new Http(); 
        //2.1 Requestin gönderilmesi ve responsun alınması
        HttpResponse response = http.send(request);
        //3 Response sonrası gerekli işlerin yürütülmesi
        System.debug('Status: '+ response.getStatus());
        System.debug('Status Code: '+ response.getStatusCode());

        if (response.getStatusCode()==200) {
            //Request başarılı olamsı durumunda yürütülecek işlem
            string jsonstring= response.getBody();
            System.debug(jsonstring);
            List<ContactResponse> contactResponses = ( List<ContactResponse>) Json.deserialize(jsonstring, List<ContactResponse>.class);
            System.debug(contactResponses);
            processContacts(contactResponses);
           
        }else {
            //Request başarılı olmaması durumunda yürütülecek işlem
            System.debug ('Hata mesajı : ' + response.getStatus());
            System.debug ('Hata codu : ' + response.getStatusCode());            
        }
        return response;
            }

    private static void processContacts(List<ContactResponse> contactResponses){
        List<contact> conList = new List<contact>();
        for (ContactResponse cr : contactResponses) {
            contact con=new contact();
            string[]  names=cr.name.split(' ');
            con.FirstName=names[0];
            con.LastName=names[1];
            con.Email=cr.email;
            con.Gender__c=cr.gender;
            con.Status__c=cr.status;
            conList.add(con);            
        }
        System.debug('son contactlar :'+ conList);
        if (!conList.isEmpty()) {
            insert conList;            
        }
        System.debug('son contactlar :'+ conList);
    }
    /* public static void sil(){
        List<contact> listNamesil = [Select id,name, status__c from Contact WHERE status__c = 'Inactive' OR status__c = 'Active'];
        System.debug('son contactlar :'+ listNamesil);
        delete listNamesil;    } */


    public static HttpResponse postanimals(){        
        //1. Requestin hazırlanması
        HttpRequest request= new HttpRequest();
        /* I. yol => request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals'); */
        // II. yol : önce orgda "Custom Metadata Type" kısmında yeni typler oluşturduk
        request.setEndpoint(IntegrationInfo__mdt.getInstance('POST_ANIMALS').Endpoind__c); // org üzerinden "Remote site settings" ten access verilmeli
        /*  I. yol-> request.setMethod('GET'); */
        request.setMethod(HTTP_POST);
        request.setHeader('Content-Type','application/json;charset=UTF-8');
        request.setBody('{"name": "Yugin"}');         
        //2.Http protokoli ile Requestin gönderilmesi
        Http http = new Http(); 
        //2.1 Requestin gönderilmesi ve responsun alınması
        HttpResponse response = http.send(request);
        //3 Response sonrası gerekli işlerin yürütülmesi
        System.debug('Status: '+ response.getStatus());
        System.debug('Status Code: '+ response.getStatusCode());

        if (response.getStatusCode() == 201) {
             //Request başarılı olamsı durumunda yürütülecek işlem
            string jsonstring= response.getBody();
            System.debug(jsonstring);
            
        } else {
            //Request başarılı olmaması durumunda yürütülecek işlem
            System.debug ('Hata mesajı : ' + response.getStatus());
            System.debug ('Hata codu : ' + response.getStatusCode());             
        }
        return response;
    }

    public static HttpResponse postUsers(){

        // endpoint : https://reqres.in/api/users
        // body  {"name": "morpheus", "job": "leader"
            //1. Requestin hazırlanması
            HttpRequest request= new HttpRequest();
            /* I. yol => request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals'); */
            // II. yol : önce orgda "Custom Metadata Type" kısmında yeni typler oluşturduk
            request.setEndpoint(IntegrationInfo__mdt.getInstance('POST_USERS').Endpoind__c); // org üzerinden "Remote site settings" ten access verilmeli
            /*  I. yol-> request.setMethod('GET'); */
            request.setMethod(HTTP_POST);
            request.setHeader('Content-Type','application/json;charset=UTF-8');
            request.setBody('{"name": "Lokman", "job": "Developer"}'); 
            
            //2.Http protokoli ile Requestin gönderilmesi
            Http http = new Http(); 
            //2.1 Requestin gönderilmesi ve responsun alınması
            HttpResponse response = http.send(request);
            //3 Response sonrası gerekli işlerin yürütülmesi
            if (response.getStatusCode() == 201) {
                 //Request başarılı olamsı durumunda yürütülecek işlem
                string jsonstring= response.getBody();
                System.debug(jsonstring);
                Map<String, Object> results = (Map<String, Object>) Json.deserializeUntyped(jsonstring);
                System.debug(results);
                string userId= string.valueOf(results.get('id'));                
                System.debug('User başarılı bir şekilde oluşturuldu User Id:'+ userId);
                
            } else {
                //Request başarılı olmaması durumunda yürütülecek işlem
                System.debug ('Hata mesajı : ' + response.getStatus());
                System.debug ('Hata codu : ' + response.getStatusCode());                 
            }
            return response;

    }

    public static HttpResponse basicAuth(){
        //http://postman-echo.com/basic-auth
        //Username : postman
        //Password :password

          //1. Requestin hazırlanması
     
        HttpRequest request= new HttpRequest();
        request.setEndpoint(IntegrationInfo__mdt.getInstance('Basic_Postman').Endpoind__c);
         request.setMethod(HTTP_GET);
         string userName=IntegrationInfo__mdt.getInstance('Basic_Postman').UserName__c;
         string password=IntegrationInfo__mdt.getInstance('Basic_Postman').Password__c;

         string  auth=EncodingUtil.base64Encode(Blob.valueOf(userName + ':' + password ));

         System.debug(auth);

         request.setHeader('Authorization', 'Basic ' + auth);
         
 

        //2.Http protokoli ile Requestin gönderilmesi
        Http http = new Http();

         //2.1 Requestin gönderilmesi ve responsun alınması
         HttpResponse response = http.send(request);

        //3 Response sonrası gerekli işlerin yürütülmesi
            if (response.getStatusCode() == 200) {
                 //Request başarılı olamsı durumunda yürütülecek işlem
                string jsonstring= response.getBody();
                System.debug(jsonstring);
               
            } else {
                //Request başarılı olmaması durumunda yürütülecek işlem
                System.debug ('Hata mesajı : ' + response.getStatus());
                System.debug ('Hata codu : ' + response.getStatusCode());                 
            }
            return response;

    }

    public static HttpResponse bearerAuth(){

    //https://gorest.co.in/public/v2/users
    // Access Token: 55a5ad9863da660cd224d5cc0b25fed8465478979e06d1e45a46ed0c1d20fc7c
    // curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}'

        //1. Requestin hazırlanması
        HttpRequest request=new HttpRequest();
      /*   request.setEndpoint('https://gorest.co.in/public/v2/users'); */
      request.setEndpoint(IntegrationInfo__mdt.getInstance('GET_USERS').Endpoind__c); 
        request.setMethod(HTTP_POST);
        request.setHeader('Accept', 'application/json');
        request.setHeader('Content-Type' , 'application/json');
        request.setHeader('Authorization', 'Bearer ' +IntegrationInfo__mdt.getInstance('GET_USERS').Acces_Token__c);


        Contact con=[SELECT Firstname, LastName, Email, Gender__c, Status__c FROM Contact ORDER By CreatedDate DESC LIMIT 1];
              
        ContactResponse cr=new contactResponse();

        cr.name=con.FirstName +' '+ con.LastName;
        cr.email=con.Email;
        cr.gender=con.Gender__c;
        cr.status=con.Status__c;

        string jsonString=JSON.serialize(cr);
        /* System.debug(jsonString); */
        request.setBody(jsonString);
         //2.Http protokoli ile Requestin gönderilmesi
         Http http = new Http();

         //2.1 Requestin gönderilmesi ve responsun alınması
        HttpResponse response = http.send(request);

        //3 Response sonrası gerekli işlerin yürütülmesi
        if (response.getStatusCode() == 201) {
                 //Request başarılı olamsı durumunda yürütülecek işlem
               jsonString= response.getBody();
                ContactResponse conRes=(ContactResponse)JSON.deserialize(jsonString,contactResponse.class);
                System.debug('User başarı ile oluşturuldu :'+ conRes.id);
               
            } else {
                //Request başarılı olmaması durumunda yürütülecek işlem
                System.debug ('Hata mesajı : ' + response.getStatus());
                System.debug ('Hata codu : ' + response.getStatusCode());                 
            }
            return response;




            

        }


}
