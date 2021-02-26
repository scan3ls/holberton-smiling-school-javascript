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
            $('#carouselQuotes').children('.carousel-inner').prepend(carouselItem);
        }
        $('#carouselQuotes .loader').css('display', 'none');
    });
}

function loadPopularVideo(){
    // Load video items
    var url = 'https://smileschool-api.hbtn.info/popular-tutorials';
    $.get(url, function(res){

        for (var i = 0; i < res.length; i++){
            if (i === 0){
                var carouselItem = $('<div class="carousel-item active">');
            } else {
                var carouselItem = $('<div class="carousel-item">');
            }
            var divContainer = $('<div class="col-12 col-md-6 col-lg-4 col-xl-3">');
            var card = $('<div class="card m-1">');
            var cardImgTop = $(`<img src="./images/play.png" class="card-img-top" alt="">`);
            
            var cardBody = $('<div class="m-3 mr-auto">');
            var title = $(`<p>${res[i].title}</p>`);
            var subTitle = $(`<p class="col-12">${res[i]["sub-title"]}</p>`);

            var authorDiv = $('<div class="d-flex">');
            var authorPic = $(`<img src="${res[i].author_pic_url}" alt="" class="card-sm-img rounded-circle>`);
            var authorName = $(`<p class="text-purple mx-2">${res[i].author}</p>`);
            
            authorDiv.append(authorPic, authorName);

            var ratingDiv = $('<div class="d-flex justify-content-between mt-3">');
            var rating = $('<div id="rating" class="d-flex">');
            var time = $('<div id="time" class="pr-1">');

            time.append(`<p class="card-text text-purple">${res[i].duration}</p>`);

            for (var stars = 1; stars <= 5; stars++){
                if (stars <= res[i].star) rating.append($('<img class="img-star mr-2" src="./images/star_on.png" alt="">'));
                else rating.append('<img class="img-star mr-2" src="./images/star_off.png" alt="">');
            }
            ratingDiv.append(rating, time);

            cardBody.append(title, subTitle, authorDiv, ratingDiv);

            var top = $('<div class="thumb-0">')
            top.css('background-image', `url(${res[i].thumb_url})`)
            top.append(cardImgTop);

            card.append(top, cardBody);
            divContainer.append(card);
            carouselItem.append(divContainer);
            $(`div#carousel-pop-vids-sm`).children('.carousel-inner').prepend(carouselItem);
        }

        $('#carousel-pop-vids-sm .loader').css('display', 'none');

        // Format videos in carousel
        $(`div#carousel-pop-vids-sm .carousel-item`).each(function(){

            var minPerSlide = 4;
            var next = $(this).next();

            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo( $(this) );

            for (var i = 0;i  <minPerSlide; i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo( $(this) );
            }
        });
    });
}

function loadLatestVideo(){
    // Load video items
    var url = 'https://smileschool-api.hbtn.info/latest-videos';
    $.get(url, function(res){

        for (var i = 0; i < res.length; i++){
            if (i === 0){
                var carouselItem = $('<div class="carousel-item active">');
            } else {
                var carouselItem = $('<div class="carousel-item">');
            }
            var divContainer = $('<div class="col-12 col-md-6 col-lg-4 col-xl-3">');
            var card = $('<div class="card m-1">');
            var cardImgTop = $(`<img src="./images/play.png" class="card-img-top" alt="">`);
            
            var cardBody = $('<div class="m-3 mr-auto">');
            var title = $(`<p>${res[i].title}</p>`);
            var subTitle = $(`<p class="col-12">${res[i]["sub-title"]}</p>`);

            var authorDiv = $('<div class="d-flex">');
            var authorPic = $(`<img src="${res[i].author_pic_url}" alt="" class="card-sm-img rounded-circle>`);
            var authorName = $(`<p class="text-purple mx-2">${res[i].author}</p>`);
            
            authorDiv.append(authorPic, authorName);

            var ratingDiv = $('<div class="d-flex justify-content-between mt-3">');
            var rating = $('<div id="rating" class="d-flex">');
            var time = $('<div id="time" class="pr-1">');

            time.append(`<p class="card-text text-purple">${res[i].duration}</p>`);

            for (var stars = 1; stars <= 5; stars++){
                if (stars <= res[i].star) rating.append($('<img class="img-star mr-2" src="./images/star_on.png" alt="">'));
                else rating.append('<img class="img-star mr-2" src="./images/star_off.png" alt="">');
            }
            ratingDiv.append(rating, time);

            cardBody.append(title, subTitle, authorDiv, ratingDiv);

            var top = $('<div class="thumb-0">')
            top.css('background-image', `url(${res[i].thumb_url})`)
            top.append(cardImgTop);

            card.append(top, cardBody);
            divContainer.append(card);
            carouselItem.append(divContainer);
            $(`div#carousel-latest-vids-sm`).children('.carousel-inner').prepend(carouselItem);
        }

        $('#carousel-latest-vids-sm .loader').css('display', 'none');

        // Format videos in carousel
        $(`div#carousel-latest-vids-sm .carousel-item`).each(function(){

            var minPerSlide = 4;
            var next = $(this).next();

            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo( $(this) );

            for (var i = 0;i  <minPerSlide; i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo( $(this) );
            }
        });
    });
}

createQuoteCarousel();
loadPopularVideo();
loadLatestVideo();
