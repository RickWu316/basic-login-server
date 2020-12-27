這是一個基礎登入功能的測試網頁


# 功能表
1. 在登入頁面，使用者輸入正確 email 和對應 password 將登入歡迎頁面
1. 在登入頁面，若使用者輸入錯誤，將顯示錯誤訊息
1. 在登入頁面，使用者勾選記住我，即使下次登入失敗也將保留 email 欄位
1. 使用者在歡迎頁面，可點擊logout，回到登入頁面

測試帳號

| Email  | Password |
| ------------- |:-------------:|
| tony@stark.com| iamironman  |
| captain@hotmail.comr|icandothisallday|
| peter@parker.com|enajyram|
|tony@stark.com|iamironman|
|captain@hotmail.com|icandothisallday|
|natasha@gamil.com|	*parol#@$!|
|nick@shield.com|password|

# 需求環境
* Node.js v10.15.0
* Express v4.17.1
* Express-handlebars v5.2.0
* body-parser: 1.19.0
* mongoose: 5.11.8
 

#Installing
## 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```shell
git clone https://github.com/RickWu316/rstaurant_list.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd phrase_creater
```

3. 安裝 npm 套件，在 Terminal 輸入npm install指令


```shell
 npm install
```
4. 安裝 nodemon 套件(提醒: 若先前在本地開發環境中安裝過可跳至下步驟)

```shell
npm install -g nodemon 
```


5. 啟動伺服器，執行 app.js 檔案

```shell
nodemon app.js
```

6. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
# The Express server is running on http://localhost:3000

```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始進入網頁