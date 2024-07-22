(function () {
    "use strict";

    var timer = null;
    var animationArea;
    var animationArray = [];
    var start = 0;
    var end = 0;
    var interval = 500;
    var i;
    var animationType;

    window.onload = function () {
        var btnPlay = document.getElementById('btnPlay');
        var btnStop = document.getElementById('btnStop');
        var turboCheckbox = document.getElementById('turboCheckbox');
        var animationSize = document.getElementById('animationSize');
        animationArea = document.getElementById("animationArea");
        animationType = document.getElementById('animationType');

        btnStop.display = 'none';

        animationType.onchange = function () {
            play();
        };


        btnPlay.onclick = function () {
            play();
        };

        btnStop.onclick = function () {
            timer = null;          
            animationArea.innerHTML = "";
            btnPlay.display = 'block';
            btnStop.display = 'none';
            clearInterval(timer);
            
        };

        turboCheckbox.onchange = function () {
            if (turboCheckbox.checked) {
                interval = interval / 2;
            } else {
                interval = interval * 2;
            }
            regenerate();
        };

        animationSize.onchange = function () {
            animationArea.style.fontSize = this.options[this.selectedIndex].value + "px";
            regenerate();
        };

       
    };

    function regenerate() {
        clearInterval(timer);
        timer = setInterval(animate, interval);
    }

    function play() {
        var selectedIndex = animationType.options[animationType.selectedIndex].value;
        if (selectedIndex < 0) return;
        animationArray = animationsList[selectedIndex].split("=====\n");
        i = start;
        end = animationArray.length;
        if (timer === null) {
            timer = setInterval(animate, interval);
        }
        btnPlay.display = 'none';
        btnStop.display = 'block';
    }

    function animate() {
        if (i < end) {
            animationArea.value = animationArray[i];
            i++;
        }
        else {
            i = start;
            animationArea.value = animationArray[i];
        }
    }

})();
