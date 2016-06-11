function loader() {
    $("button").each(
        function(){
            var file = $(this).data('file');
            var audio = '<audio preload="auto" id="'+file +'"><source src="audio/'+ file +'.mp3"><span>'+ +'</span></audio>';
            var dure = '<span>'+ $('#'+ file)+'</span>';

            var b = $('#'+ file);
            console.log(b);
            console.log(b['context']['all']['8']);

            $(this).append(audio);
        }

    )
}



function playSound(id) {
    var audioClick = $('#'+ id)[0];
    var a = audioClick.duration;
    console.log(audioClick);
    console.log(a);
    audioClick.play();
}
