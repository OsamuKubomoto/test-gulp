# test-gulp

## bowerとは
http://bower.io/

bowerとは、Twitterが開発したフロントエンドライブラリの管理ソフトウェアです。

# 作業手順

GitHubで新規リポジトリを作成

    echo "# test-gulp" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/OsamuKubomoto/test-gulp.git
    git push -u origin master

## フロントエンド側の各種パッケージをインストール

### 初期化

    bower init

bower.jsonが生成されます

### 各種パッケージのインストール

    bower install normalize.css --save
    bower install html5shiv --save
    bower install respond --save
    bower install jquery --save
    bower install bootstrap --save
    bower install font-awsome --save

bower_conponentsフォルダ内に各パッケージが配置され、bower.jsonに適用パッケージが記述されます。

## nodeパッケージのインストール

### 初期化

    npm init

package.jsonが生成されます

## 各種nodeモジュールをインストール

    sudo npm install gulp --save-dev
    sudo npm install browser-sync --save-dev

node_modules内に各モジュールがインストールされ、package.jsonに適用モジュールが追記されます。

## gulpfile.jsを追加

    var gulp = require("gulp");
    var browserSync = require('browser-sync');

    var reload = browserSync.reload;

    gulp.task("browser-sync", function () {
        browserSync({
            server: {
                baseDir: "./"
            }
        });
    });

    gulp.task("watch", function() {
        gulp.watch(["**/*.html", "css/**/*.css"], reload);
    });

    gulp.task("default", ["browser-sync", "watch"]);

## html・css・jsなど必要なファイルを配置する

ファイルパスと内容はGitHubで確認してください。

## BrowserSyncを起動

コンソールでgulpと入力

    gulp

## 動作確認

* htmlやcssを編集し、保存したタイミングでページが自動でリロードします。

* 複数のデバイスで連動します。

同一ネットワークに属するデバイスであれば、操作が連動します。

    localhost:3000
    192.168.xxx.xxx:3000
