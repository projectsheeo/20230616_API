# 20230616_API

20230616 提出課題（API）























# メモ

BingMap準備

1. Keyを取得 https://www.bingmapsportal.com/Account <br>
2. HTMLファイルのHeadタグ内に次のURLを貼り付け <script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[*** your key info***]' async defer></script> 
3. HTMLファイルのBodyタグ内の一番下でHTMLとJSファイルを紐付け
4. HTMLファイルのBodyタグ内にマップを入れる要素を準備 <div id="map"><div>等
5. JSファイルに以下の関数（マップを表示するための関数）を記載<br>
    function GetMap() { <br>
    const map = new Microsoft.Maps.Map('#myMap', { <br>
        center: new Microsoft.Maps.Location(35.316467, 139.546537), //マップに表示する場所の指定（括弧内は、緯度,経度）<br>
        mapTypeId: Microsoft.Maps.MapTypeId.canvasDark, //マップの種類を指定（左記のcanvasDarkを次に置き換えることで様々な種類を指定することが可能 [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]）<br>
        zoom: 14  // ズームの大きさ（1〜20まで設定可能、数字が大きい程図ズームイン）<br>
    });<br>
}

