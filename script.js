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
