# 20230616_API

## 紹介と使い方

  - 当初、Evil Insultを返すアプリを作ろうとしていたのですが、どうしてもCORS制約が解決できず時間切れとなってしまったため、BingMapを使って地図を表示するものにしました（必要最低限で申し訳ないです）<br>


## 工夫した点

  - NA       

## 苦戦した点

  - Evil Insultのアプリについて、CORSポリシーのエラーを回避するため、以下を試したが解決できなかった<br>
    ・fetch関数を使用してデータを取得する際、モードを'no-cors'にした<br>
    ・fetch関数を使用してデータを取得する際、json形式をjsonp形式にした<br>
    ・次の拡張機能を追加：AAccess-Control-Allow-Origin<br>
    ・次の拡張機能を追加：CORS unblock<br>
    ・指定されているcssファイルが存在しているか確認<br>
    ・URL先のデータがきちんとjson形式で出力されているか確認<br>
    ・エンドポイント（URL）が合っているか確認<br>

## 参考にした web サイトなど
Evil insult API: https://evilinsult.com/api/
CORS unblock（拡張機能）：https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=ja
Access-Control-Allow-Origin（拡張機能）：https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ja-jp
json & jsonp：https://tom2rd.sakura.ne.jp/wp/2020/12/27/post-11871/

# メモ

API準備方法（APIは各社の仕様書によって異なるが、原則以下に従って進められる）
1. APIエンドポイントは？
2. API Keyの取得方法は？
3. POSTか？GETか？
4. クエリパラメータは？（ユーザーがサーバーから情報を取得する際、サーバーに送る情報）

BingMap準備

1. Keyを取得 https://www.bingmapsportal.com/Account <br>
2. HTMLファイルのHeadタグ内に次のURLを貼り付け <script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[*** your key info***]' async defer></script> 
3. HTMLファイルのBodyタグ内の一番下でHTMLとJSファイルを紐付け
4. HTMLファイルのBodyタグ内にマップを入れる要素を準備 
5. JSファイルに以下の関数（マップを表示するための関数）を記載<br>
    function GetMap() { <br>
    const map = new Microsoft.Maps.Map('#myMap', { <br>
        center: new Microsoft.Maps.Location(35.316467, 139.546537), //マップに表示する場所の指定（括弧内は、緯度,経度）<br>
        mapTypeId: Microsoft.Maps.MapTypeId.canvasDark, //マップの種類を指定（左記のcanvasDarkを次に置き換えることで様々な種類を指定することが可能 [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]）<br>
        zoom: 14  // ズームの大きさ（1〜20まで設定可能、数字が大きい程図ズームイン）<br>
    });<br>
}

時間があれば：
https://manage.exchangeratesapi.io/quickstart
https://exchangeratesapi.io/documentation/

専門用語
・fetch関数：外部からデータを引っ張ってくる関数
・fetch関数_非同期処理：JavaScriptは通常上から順番に読み込むが、非同期処理の関数は必ずしも順番通りに処理されない（処理に時間がかかる）


