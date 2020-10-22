# プログラミングのドキュメント用セット

[Demo](https://sheerlore.github.io/Docsbase/)

## 使い方
1. `setting.js`に必要事項を書き込む  
`APPNAME`: アプリ名  
`GITHUB_REPO_URL`: githubのrepositoryのURL  
`CONTENT_TABEL`: サイドバーに表示するものの設定。配列の中にjson形式で指定  
      `"title"` : サイドバーの表示名  
      `"url"` : contentディレクトリからhtmlのパス

2. `template.html`をコピーしてルートディレクトリにペースト。名前を変更して内容を書く。  
おすすめは好きなmarkdown editorを使って記事を作成し、htmlにフォーマットしてコピペして貼ることです。
> 注意: `index.html`をコピーしないでください

3. `setting.js`に作成したhtmlまでのパスを追記する。  

4. [Github Pages](github.io)で公開してください。

## その他
- デフォルトで`h1~h3`タグを用いた場合、下に下線が付きます。これを取り消したい場合はcssの中のstyle.cssを変更してください。
- code blockのすぐ上に下記のように`class="filename"`をいれた`strong`タグを使うといい感じにファイル名が挿入されます。
```html
<strong class="filename">index.js<strong>
```
- `index.html`は本のタイトルのように扱ってください。デフォルトではタイトルが挿入されています。適宜編集追記してください。