function loader() {
    $("button").each(function(){
        var file = $(this).data('file');
        $(this).append(
            '<audio preload="auto" id="'+file +'"><source src="audio/'+ file +'.mp3"></audio >'
        )
    })
}

function playSound(id) {
    var audioClick = document.getElementById(id);
    audioClick.play();
}
