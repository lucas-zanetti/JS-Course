class Utils {

    static dateFormat(date){
        if (date.getMinutes() < 10){
            return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':0'+date.getMinutes();
        } else {
        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
        }
    }

}