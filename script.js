var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.brid.tv/apiv3/video/list/18915.json%0A");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer ca3f7b6843ae84b71da64b1d041c867f12b1aa0b");
xhr.setRequestHeader("Cookie", "brid_cms=5kcghr5n0oisrsuofcmghln40f");

xhr.send();

function VideoFile() {
    var video = <script type="text/javascript" src="//services.brid.tv/player/build/brid.min.js"></script> <div id="Brid_11141755" class="brid" style="width:640;height:360;" > </div> <script type="text/javascript"> $bp("Brid_11141755", {"id": "25265","width":"640","height":"360","video":"705458"}); </script>
}