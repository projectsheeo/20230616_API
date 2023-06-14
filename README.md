# 20230616_API

20230616 提出課題（API）























# まとめ

BingMap 操作手順

① Keyを取得 https://www.bingmapsportal.com/Account <br>
② HTMLファイルとJavaScriptファイルを連携 （headタグ内）
③ HTMLファイルとBingMap APIを連携（次のリンクをHeadタグ内に格納）<script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[*** your key info***]' async defer></script>
④ HTMLにマップを入れる要素を準備（<div id="myMap"></div>、等）
⑤ JSファイルに以下のメソッドを準備
    function GetMap() {
    const map = new Microsoft.Maps.Map('#myMap', {
        center: new Microsoft.Maps.Location(35.316467, 139.546537), //マップに表示する場所の指定（括弧内は、緯度,経度）
        mapTypeId: Microsoft.Maps.MapTypeId.canvasDark, //マップの種類を指定（左記のcanvasDarkを次に置き換えることで様々な種類を指定することが可能 [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]）
        zoom: 14  // ズームの大きさ（1〜20まで設定可能、数字が大きい程図ズームイン）
    });
}

