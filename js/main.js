import {
    APPNAME,
    GITHUB_REPO_URL,
    CONTENT_TABLE
} from "../setting.js"

// アプリ名の指定
let appName = document.querySelector('#app_name');
let githubRepoUrl = document.querySelector('#github_repo_url');
let sideNav = document.querySelector('#side_nav');

let indexTitle = document.querySelector('#index_title');
let indexUl = document.querySelector('#index_list');

appName.text = APPNAME;
indexTitle.text = APPNAME;
githubRepoUrl.setAttribute('href', GITHUB_REPO_URL);

//navigationの設定
for (let i of CONTENT_TABLE) {
    createNavChild(i["title"], i["path"], sideNav);
    createIndexList(i["title"], i["path"], indexUl);
}

// navの子要素を作成する関数
function createNavChild(title, link, nav) {
    // create a html template like below :
    // <div class="bd-toc-item">
    //   <a class="bd-toc-link text-reset" href=url>title</a>
    // </div>
    let div = document.createElement('div');
    let a = document.createElement('a');
    div.className = 'bd-toc-item';
    a.className = 'bd-toc-link text-reset';
    a.text = title;
    a.href = "/" + link;
    div.appendChild(a);
    nav.appendChild(div);
}

function createIndexList(title, link, nav) {
    let li = document.createElement('li');
    li.className = 'h5';

    let a = document.createElement('a');
    a.text = title;
    a.href = "/"+ link;
    li.appendChild(a);
    nav.appendChild(li);
}

function ones(fn, context) {
    let result; 
    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = context = null;
        }
        return result;
    };
}