# 範例

整個專案資料夾分為

  - Games - 各個遊戲存放位置
  - Template - 針對某些有共用性或性質相同的遊戲所製成的公版或套版
  - SDK - 一個泛用且有擴充性並能使開發速度加快的Software Development Kit


### 目標

請嘗試瞭解範例中的一些設計方式用途:
 - ResourceManager
 - TableInfoPresenter
 - TableInfoAdapter
 - TableInfoView
 - ObserverLite (可以不用看懂source code，嘗試理解用途即可）
 
 ================================
    
請將此example clone下來並修改，之後上傳至自己的githubg，修改範例如下：

原始程式碼:
```js
if (! _adapter instanceof TableInfoAdapter){
    cc.error("[TableInfoPresenter] _adapter should be TableInfoAdapter");
}
```

加以註解已說明此部分的作用:
```js
if (! _adapter instanceof TableInfoAdapter){ //判斷_adpater是否為TableInfoAdapter的實體（物件）
    cc.error("[TableInfoPresenter] _adapter should be TableInfoAdapter"); 
    //透過cocos2d-x提供的api，拋出runtime error，且為TableInfoPresenter發出的錯誤
}
```

### P.S.
###### 此為一簡單範例，有缺少某些資源檔為正常，請直接忽略 :)
=======
# exampleForMono

