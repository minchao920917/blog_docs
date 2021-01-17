---
title: H5如何通过app调用微信分享
date: 2019-08-12 23:00:54
tags:
 - H5
categories:
 - 前端
---

#   H5如何通过app调用微信分享

##  背景
    
    当产品被运营推广控制，被动增加分享到微信功能时。幸好有原生和后端大神同事的协助，最后还是顺利解决了这个问题。

##  前端代码
    
    methods:{
        ...
        toShare() {
          var obj = {
            activeName: "分享标题",
            comments: "分享描述",
            urlImg:"分享图片",
            shareUrl:"分享链接（用户点进去）"
          };
          if (Until.isAndroid()) {
            if (!!window.xxApp) {
              //安卓传参不能是object，顺序约定好不能传错 by minchao 20180727
              window.xxApp.WebviewShare(
                obj.activeName,
                obj.comments,
                obj.urlImg,
                obj.shareUrl
              );
            } else {
              Toast("请在XX-APP中打开");
            }
          }
          if (Until.isiOS()) {
            console.log(obj.shareUrl);
            if (typeof webViewShare === "function") {
              webViewShare(obj);
            } else {
              Toast("请在XX-APP中打开");
            }
          }
        }
      },
      ...
      }
      

####      前端H5机型判断
    
    /**
      * 判断是否是安卓
      */
      isAndroid() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      },
      /**
       * 判断是否是ios
       */
      isiOS() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
      
      
####   分享地址

    地址是https://open.weixin.qq.com/connect/oauth2/authorize
    拼接参数是：
        appid：xxxxxxxx //你的appid
        redirect_uri: //你的重定向页面，必须是encode的url
        response_type：code //返回值类型，
        scope:snsapi_userinfo //请查阅公众号开发平台api
        state:1#wechat_redirect //返回状态 

     结果这个url就是："https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx36f214fd47xxx" +"&redirect_uri=" + encodeURIComponent(local) + "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
     
     
     
##  原生端方法

###     iOS端

    //h5交互部分
    - (void)javaScriptHandle{
        ...
        JSContext *context = [self.HtmlWebView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
        WEAKSELF
        context[@"webViewShare"] = ^() {
            dispatch_async(dispatch_get_main_queue(), ^{
                NSArray *args = [JSContext currentArguments];
                for (JSValue *jsVal in args) {
                    weakSelf_SC.shareDic = jsVal.toObject;
                }
                [weakSelf_SC shareBtnClick];
            });
        };
        ...
    }


###     安卓端


    webView.addJavascriptInterface(new JsInterface(), "xxApp");

    public class JsInterface {

        @JavascriptInterface
        public void WebviewShare(String activeName, String comments, String urlImg, String shareUrl) {

        // showSafeToast("吊起分享+activeName=" + activeName + ";comments=" + comments + ";urlImg=" + urlImg + ";shareUrl=" + shareUrl);
            title = activeName;
            content = comments;
            narrowImageUrl = urlImg;
            redirectUrl = shareUrl;
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (bmp == null) {
                        dowimage();//下载缩略图，微信官方设置低于32K，40X40
                    }
                    showDialog();//选择分享类型，调用微信分享SDK
                }
            });
        }
     }
     
     
注：原生端的具体代码的方法，咱没全懂，咱也没敢问啊！总之先记着吧