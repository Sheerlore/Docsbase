// index.html用デフォルト設定ファイル
import {
    APPNAME,
    GITHUB_REPO_URL,
    CONTENT_TABLE,
} from "../setting.js"

let ul = document.querySelector('#content_list');

let title = document.querySelector('#content_title');
title.innerText = APPNAME;

for (let i of CONTENT_TABLE) {
    createList(i["title"], i["path"]);
}


function createList(title, link) {
    let li = document.createElement('li');
    li.className = 'h5';

    let a = document.createElement('a');
    a.text = title;
    a.href = "content/" + link;
    li.appendChild(a);
    ul.appendChild(li);
}