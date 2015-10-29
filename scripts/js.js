var app = {

};
// console.log(recipes.length)
var recipes = [{
    "recipe": "grilled cheese",
    "excitment": "1",
    "howHealthy": "1",
    "howManyPeople": "1"
}, {
    "recipe": "avacado toast",
    "excitment": "2",
    "howHealthy": "2",
    "howManyPeople": "2"
}, {
    "recipe": "apples and peanut butter",
    "excitment": "3",
    "howHealthy": "1",
    "howManyPeople": "3"
}, {
    "recipe": "terry loves yogurt",
    "excitment": "4",
    "howHealthy": "2",
    "howManyPeople": "4"
}, {
    "recipe": "turkey on rye",
    "excitment": "4",
    "howHealthy": "1",
    "howManyPeople": "5"
}, {
    "recipe": "ants on a log",
    "excitment": "5",
    "howHealthy": "2",
    "howManyPeople": "2"
}, {
    "recipe": "your spanish eyes on rye",
    "excitment": "4",
    "howHealthy": "1",
    "howManyPeople": "2"
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
$('.serving li').click(function() {
    getsServingSize = $(this).attr('data-serving');
    $('.how-many-people').html(getsServingSize)
});

$('li').click(function() {
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
            } else {
                // console.log('sorry no snacks for you!')
            };
        });

    };

});
