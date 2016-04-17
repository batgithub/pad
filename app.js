function loader() {
    $("button").each(
        function(){
            var file = $(this).data('file');

            var audio = '<audio preload="auto" id="'+file +'"><source src="audio/'+ file +'.mp3"><span>'+ +'</span></audio>';

            var dure = '<span>'+ $('#'+ file)+'</span>';

            console.log( $('#'+ file) );

            $(this).append(audio,dure)
        }

    )
}



function playSound(id) {
    var audioClick = $('#'+ id)[0];
    console.log($('#'+ id));
    audioClick.play();
}
