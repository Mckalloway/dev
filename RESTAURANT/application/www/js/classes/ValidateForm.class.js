'use strict'


var RecapValidate = function() {

    this.baskets = new JsonShow() ;
    this.loadLocalStorage();
    console.log(this.baskets);
    this.priceHT = 0;
}


RecapValidate.prototype.showRecap = function () {

   
    $('#recapOrder').empty();
    
    for (var i = 0; i < this.baskets.length; i++ ) {
        
        
        var tr = $('<tr>');
        
        tr.append('<td>'+this.baskets[i].basketName+'</td>');
        tr.append('<td class="number">'+this.baskets[i].basketNumber+'</td>');
        tr.append('<td class="number">'+this.baskets[i].basketSalePrice+' € </td>');
        tr.append('<td class="number">'+this.baskets[i].basketNumber*this.baskets[i].basketSalePrice +' €</td>');
        
        $('#recapOrder').append(tr);
    
        this.priceHT += this.baskets[i].basketNumber*this.baskets[i].basketSalePrice;
        //var ttc = 1.2;
    }
        console.log(this.priceHT);
        $('#prixht').html('<span>'+Math.round(this.priceHT)+'</span>');
        $('#prixttc').html('<span>'+Math.round(this.priceHT*1.2)+'</span>')
        
    

}

RecapValidate.prototype.loadLocalStorage = function() {
    this.baskets = loadDataFromDomStorage('panier');
    if (this.baskets == null){
        this.baskets = [];
    }
    //this.showRecap();
}