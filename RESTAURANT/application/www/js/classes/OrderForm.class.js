'use strict'

var JsonShow = function() {
    this.baskets = [];
    this.loadLocalStorage();
    $('#meal').on('change', this.onChangeShow.bind(this));
    $('#addMeal').on('click', this.onClickAddMeal.bind(this));
    $(document).on('click', '.button-delete-product',this.deleteItem.bind(this));
    
}

JsonShow.prototype.onChangeShow = function () {

    var valeur = $('#meal').val();
    //console.log(valeur);
    $.getJSON(getRequestUrl()+'/meal?id='+valeur, this.onAjaxChange);

}

JsonShow.prototype.onAjaxChange = function (response) {
    //console.log(response);

    $('#mealDetails h3').html(response.Name);
    $('#mealDetails img').attr('src', getWwwUrl()+'/images/meals/'+response.Photo+'');
    $('#mealDetails p').html(response.Description);
    $('#mealDetails span strong').html(response.SalePrice);
}

JsonShow.prototype.onClickAddMeal = function(event) {
    event.preventDefault();

    //console.log('hello');
    var basket = {

        basketId : $('#meal').val(),
        basketName : $('#mealDetails h3').text(),
        basketSalePrice : $('#mealDetails span strong').text(),
        basketNumber : parseInt($('#quantity').val())

    }

    for (var i = 0; i < this.baskets.length; i++ ) {

        if (this.baskets[i].basketId == basket.basketId) {

            this.baskets[i].basketNumber += basket.basketNumber;
            
            saveDataToDomStorage('panier', this.baskets);
            this.showAllCommand();
            return;
        }
        
    }
    this.baskets.push(basket);
    saveDataToDomStorage('panier', this.baskets);
    this.showAllCommand();
        
    
}


JsonShow.prototype.loadLocalStorage = function() {
    this.baskets = loadDataFromDomStorage('panier');
    if (this.baskets == null){
        this.baskets = [];
    }
    this.showAllCommand();
}



JsonShow.prototype.showAllCommand = function() {
    

   

    $('#orderShow').empty();

    for (var i = 0; i < this.baskets.length; i++ ) {
        var tr = $('<tr>');
        //$('#orderShow').append('<tr>');
        tr.append('<td class="number">'+this.baskets[i].basketNumber+'</td>');
        tr.append('<td>'+this.baskets[i].basketName+'</td>');
        tr.append('<td class="number">'+this.baskets[i].basketSalePrice+' € </td>');
        tr.append('<td class="number">'+this.baskets[i].basketNumber*this.baskets[i].basketSalePrice +' €</td>')
        tr.append('<td><button class="button-delete-product button button-cancel small" data-mealId="'+i+'"><i class="fa fa-trash"></i></button></td>');
        $('#orderShow').append(tr);
        
        //console.log(this.baskets);


    }
}


JsonShow.prototype.deleteItem = function(event) {

   event.preventDefault();

    var i = event.currentTarget.dataset.mealid;
    console.log(i);
    this.baskets.splice(i,1);

    saveDataToDomStorage('panier', this.baskets);
    this.showAllCommand();

    
    
}