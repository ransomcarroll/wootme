var Woot = {
    init: function(){
        this.offers = {};
    },
    me: function(){
        this.init();
        $('html').empty();
        this.requestOffers(Woot.showOffer);
    },
    getWootOfferMarkup: function(){
        var markup = '<div class="woot-offer"><div class="woot-image"><img src="'+Woot.offers[0].Photos[0].Url+'" /></div><div class="woot-name"><a href="'+Woot.offers[0].Url+'">'+Woot.offers[0].Title+'</a></div><div class="woot-price">'+Woot.offers[0].Items[0].SalePrice+'</div></div>';
        return markup;
    },
    requestOffers: function(callback){
        $.ajax({
            url: '//api.woot.com/2/events.json?site=www.woot.com&eventType=Daily&key=b02df0dd1f2d42ebbc67662fac974129',
            dataType: 'jsonp'
        }).done(function(data){
            Woot.offers = data[0].Offers;
            callback();
        });
    },
    showOffer: function(){
        var wootOfferMarkup = Woot.getWootOfferMarkup();
        console.log(wootOfferMarkup);
        $('html').append(wootOfferMarkup);
    }
};
Woot.me();
