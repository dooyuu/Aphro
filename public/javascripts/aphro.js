$(document).ready(function() {

    $('.movies .card .description .rating').each(function() {

        var rating = $(this).data('original-rating');
        var displayRating = Math.round(rating / 2);
        
        $(this).rating({
            initialRating: displayRating,
            maxRating: 5
        });
    });

    $('.movies .card .description .dropdown').each(function() {
        
        $(this).dropdown({
            action: 'hide',
            transition: 'drop'
        });
    });
});
