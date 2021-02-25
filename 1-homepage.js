function createQuoteCarousel(){
    var url = 'https://smileschool-api.hbtn.info/quotes'

    $.get(url, function(res){

        for (var i = 0; i < res.length; i++){
            if (i === 0){
                var carouselItem = $('<div class="carousel-item active flex-sm-row">');
            } else {
                var carouselItem = $('<div class="carousel-item flex-sm-row">');
            }
            var card = $('<div class="row align-items-center justify-content-between">');
            var leftArrow = $('<span class="holberton_school-icon-arrow_4 d-sm-none font-size-arrow" aria-hidden="true">');
            var rightArrow = $('<span class="holberton_school-icon-arrow_3 d-sm-none font-size-arrow" aria-hidden="true">');
            var cardImgTop = $(`<img src="${res[i].pic_url}" class="avatar rounded-circle ml-sm-auto" alt="">`);
            var cardBody = $('<div class="col-12 col-sm-6 m-3 mr-auto">');
            var desc = $(`<p>${res[i].text}</p>`);
            var name = $(`<p>${res[i].name}</p>`);
            var title = $(`<p>${res[i].title}</p>`);

            cardBody.append(desc, name, title);
            card.append(leftArrow, cardImgTop, rightArrow, cardBody);
            carouselItem.append(card);
            $('div.loader').css('display', 'none');
            $('#carouselQuotes').children('.carousel-inner').prepend(carouselItem);
        }
    });
}
createQuoteCarousel();