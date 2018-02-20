# A Weekend Project - Duvel Page
日本語は下に書かれております。

A demo page for a hypothetical new beer. This page was created for a test where I had a weekend to get it done. It can be viewed [here](http://duvelproject-hosting-mobilehub-1893700403.s3-website-ap-northeast-1.amazonaws.com/).

## Usage

For Development, run `yarn serve`, which runs multiple development-related tasks, then launches your default browser and listens for changes.

For Production code, run `yarn build` and the code will appear in the `/prod` folder.

## Installation
```zsh
  yarn install
```

## Testing
I have tested this using IE10, 11, Edge, Safari(mobile and desktop), Chrome, and Firefox.

## Known Issues
* Polyfill for smooth scrolling in Safari is likely buggy. While it scrolls the first time, if you click the element again it moves slightly another time.

* Smooth scrolling to the anchors is off by a few increments on all devices.

## Future Improvements
* I'd like to add a hamburger dropdown navigation for all forms of mobile.

* The animations are lacking on desktop so I'd like to improve them.

* Integration of Instagram API.

## License
MIT

-
# A Weekend Project - Duvel Page
English is above.

自分自身で訳したのでご了承ください。

デモンストレーションサイトです。「もしもDuvelが新たなビールを開発したら」の話です。一つの週末に作り切ったものです。[こちら](http://duvelproject-hosting-mobilehub-1893700403.s3-website-ap-northeast-1.amazonaws.com/)にご覧いただけます。

## 実行の仕方
開発環境は｀yarn serve`を実行し、いくつかのビルドが自動に始まり既定のブラウザーが開きます。

ビルドするには`yarn build`を実行し、コードが`/prod`というフォルダーに表示されます。

## Installation
```zsh
  yarn install
```

## テスティング
IE10、IE11、Edge、Safari(モバイル版も含め)、Chrome、Firefoxに対応しています。

## 既知の問題
* Smooth ScrollingはSafariでちゃんと動いていないようです。一回メニューのものをクリックしてみるとアンコアにちょんと飛びますが、またクリックするとまた下に。

* 全てのアンコアタグは数ピクセル外れています。
 
## 将来の改良
* ナビゲーションをハンバーガーメニューにする。

* デスクトップ版のアニメーションを改善。

* InstagramAPIを対応。

## License
MIT

