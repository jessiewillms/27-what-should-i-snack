var app = {

};

var recipes = [{
    "recipe": "vegan cheez its",
    "excitment": "3",
    "howHealthy": "1",
    "howManyPeople": "6",
    "image":"images/vegan-cheez-its.jpg",
    "link": "http://minimalistbaker.com/vegan-cheez-its/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+MinimalistBaker+(Minimalist+Baker)"
}, {
    "recipe": "open PB + J",
    "excitment": "2",
    "howHealthy": "2",
    "howManyPeople": "2",
    "image":"images/",
    "link": "http://talesofakitchen.com/breakfast/the-best-pbj-open-sandwich-how-to-make-pecan-butter-and-basic-raw-jam/"
}, {
    "recipe": "apples and peanut butter",
    "excitment": "3",
    "howHealthy": "1",
    "howManyPeople": "3",
    "image":"images/",
    "link": ""
}, {
    "recipe": "terry loves yogurt",
    "excitment": "4",
    "howHealthy": "2",
    "howManyPeople": "4",
    "image":"images/",
    "link": ""
}, {
    "recipe": "turkey on rye",
    "excitment": "4",
    "howHealthy": "1",
    "howManyPeople": "5",
    "image":"images/",
    "link": ""
}, {
    "recipe": "ants on a log",
    "excitment": "5",
    "howHealthy": "2",
    "howManyPeople": "2",
    "image":"images/",
    "link": ""
}, {
    "recipe": "your spanish eyes on rye",
    "excitment": "4",
    "howHealthy": "1",
    "howManyPeople": "2",
    "image":"images/",
    "link": ""
}];

var getsLevelofInerest = "";
$('.excitment li').click(function() {
    getsLevelofInerest = $(this).attr('data-excitment');
    $('.how-jazzed').html(getsLevelofInerest)
});


var getsIfHealthyOrNot = "";
$('.healthy li').click(function() {
    getsIfHealthyOrNot = $(this).attr('data-healthy');
    $('.rabbit-food-level').html(getsIfHealthyOrNot)
});

var getsServingSize = "";
// $('.serving li').click(function() {
//     getsServingSize = $(this).attr('data-serving');
//     $('.how-many-people').html(getsServingSize)
// });

$('input').change(function() {
    var getsServingSize = $(this).val();
    console.log(getsServingSize)
});

$('li').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
})


var createWrapper = "";

$('.submit').click(function() {
    for (var i = 0; i < recipes.length; i++) {
        
        var aRecipe 				= recipes[i].recipe,
            servesInterestLevel 	= recipes[i].excitment,
            servesHealthLevel 		= recipes[i].howHealthy,
            servesNumberofServing 	= recipes[i].howManyPeople;

        createWrapper = '<div class="wrap" data-apple="' + servesInterestLevel + '" data-rabbit="' + servesHealthLevel + '" data-elephant="' + servesNumberofServing + '">' + aRecipe + '<br>' + servesInterestLevel + '</div>';


        $(createWrapper).each(function() {

            console.log(createWrapper)
            var apple = $(this).attr('data-apple');
            var bunny = $(this).attr('data-rabbit');
            var elephant = $(this).attr('data-elephant');
            if (apple == getsLevelofInerest && bunny == getsIfHealthyOrNot && elephant == servesNumberofServing) {
                $(this).appendTo('.snacks')
            } else if (apple == getsLevelofInerest && bunny == getsIfHealthyOrNot) {
                $(this).appendTo('.snacks');
                console.log('no matches for servesNumberofServing')
            } else if (apple == getsLevelofInerest && elephant == servesNumberofServing) {
                $(this).appendTo('.snacks')
                console.log('no matches for servesNumberofServing')
            };
        });

    };

});



app.init = function() {
    var $columns = $('.excitment li');
    var height = 0;
    $columns.each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });
    $columns.height(height);
}
