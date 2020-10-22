import {
    APPNAME,
    GITHUB_REPO_URL,
    CONTENT_TABLE
} from "../setting.js"

// アプリ名の指定
let appName = document.querySelector('#app_name');
appName.text = APPNAME;

//githubのurl設定
let githubRepoUrl = document.querySelector('#github_repo_url');
githubRepoUrl.setAttribute('href', GITHUB_REPO_URL);

//navigationの設定
for (let i of CONTENT_TABLE) {
    createNavChild(i["title"], i["url"]);
}

// navの子要素を作成する関数
function createNavChild(title, url) {
    // create a html template like below :
    // <div class="bd-toc-item">
    //   <a class="bd-toc-link text-reset" href=url>title</a>
    // </div>

    let sideNav = document.querySelector('#side_nav');
    let div = document.createElement('div');
    let a = document.createElement('a');
    div.className = 'bd-toc-item';
    a.className = 'bd-toc-link text-reset';
    a.text = title;
    a.href = url;
    div.appendChild(a);
    sideNav.appendChild(div);
}
