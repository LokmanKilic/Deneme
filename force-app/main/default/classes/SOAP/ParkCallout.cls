public class ParkCallout {
    public static String[] getParksCountry(String country){
        parksServices.ParksImplPort ps= new parksServices.ParksImplPort();
    return ps.byCountry(country);

    }
}