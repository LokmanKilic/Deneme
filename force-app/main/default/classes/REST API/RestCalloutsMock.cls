public class RestCalloutsMock implements HttpCalloutMock{
    
    public HttpResponse respond(HttpRequest request){
    
        HttpResponse response=new HttpResponse();

        if (request.getEndpoint() == IntegrationInfo__mdt.getInstance('GET_USERS').Endpoind__c && request.getMethod()=='GET' )  {
            response.setStatus('OK');
            response.setStatusCode(200);
            response.setBody('[{"id":5807607,"name":"Mohinder Joshi JD","email":"joshi_jd_mohinder@adams.test","gender":"male","status":"active"},{"id":5807606,"name":"Swarnalata Bharadwaj","email":"bharadwaj_swarnalata@collier-hyatt.test","gender":"male","status":"active"},{"id":5807605,"name":"Buddhana Shukla","email":"buddhana_shukla@streich.example","gender":"male","status":"inactive"},{"id":5807604,"name":"Prof. Dinkar Mukhopadhyay","email":"prof_dinkar_mukhopadhyay@thiel-daugherty.test","gender":"female","status":"inactive"},{"id":5807602,"name":"Giriraaj Somayaji","email":"somayaji_giriraaj@trantow-bruen.example","gender":"female","status":"active"},{"id":5807601,"name":"Vedang Patel","email":"patel_vedang@romaguera.example","gender":"male","status":"active"},{"id":5807600,"name":"Aarya Gowda","email":"aarya_gowda@kessler.test","gender":"female","status":"active"},{"id":5807599,"name":"Digambar Sethi III","email":"iii_sethi_digambar@hamill.example","gender":"female","status":"active"},{"id":5807598,"name":"Bhaaswar Banerjee DC","email":"banerjee_bhaaswar_dc@denesik.test","gender":"female","status":"active"},{"id":5807597,"name":"Chitraksh Khatri","email":"chitraksh_khatri@veum.test","gender":"male","status":"active"}]');
            return response;
        } else if (request.getEndpoint() == IntegrationInfo__mdt.getInstance('GET_USERS').Endpoind__c && request.getMethod()=='POST' ) {
            
            response.setStatus('Created');
            response.setStatusCode(201);
            response.setHeader('Accept', 'application/json');
            response.setHeader('Content-Type' , 'application/json');
            response.setHeader('Authorization', 'Bearer ' +IntegrationInfo__mdt.getInstance('GET_USERS').Acces_Token__c);
            response.setBody ('{"id": 5807606,"name": "testFirstName testLastName", "email": "test@Email.com","gender": "male","status": "active"}');
            
            return response; 
        
        
    }
    return null;
    }
}