$(document).ready(function() {
    $('.play').on('click', function() {
        var videoUrl = $(this).data('video-url');
        var iframe = '<iframe width="100%" height="100%" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
        $(this).siblings('.video-container').html(iframe).show(); 
    });
});