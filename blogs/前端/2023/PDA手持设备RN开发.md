---
title: PDA手持设备-RN开发安卓apk
date: 2023-12-25 21:00:54
tags:
 - React Native 
 - android
categories:
 - android
---

   ## 场景介绍
   
  纯h5的项目，做的识别二维码功能有缺陷，就是响应时间太慢，进而升所以要求安卓app来做二维码识别。主要是实现pda设备的红外扫描功能
  
  ## 思路分析
  
  h5的功能是，input输入框来承接设备扫描结果。即将红外扫描当作一种输入识别功能。导致的问题是，识别效率需要两三。纯h5的效率本来在移动端效率能接受，但是迁移到PDA手持设备上时，识别时间大概有4-5秒响应时间。
  
  会议上不知道是谁向领导提交了一个RN打包成原生安卓apk安装到PDA手持设备的方案。于是又一次到了前端发挥余热的时候，(这不纯纯浪费我摸鱼学习的时间嘛)。遂掏出了我的RN的祖传老项目进行了开发。

欻欻欻，一会儿功夫就成功改造了祖传RN老项目。此处就不泄露公司代码了。贴个样式吧
  


![tutieshi_576x1280_6s.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ceb92169c9a549228a89d5b3f564e985~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=576&h=1280&s=1767808&e=gif&f=60&b=f4eeed.png#pic_center)
  
  大概功能就是出入库，扫描商品和货架号，识别并提交，并且设置中可以配置服务器接口和操作员可选。
  
  识别和监听PDA的红外扫描功能，直接上代码有注释
  ##  安卓原生代码
  
  在android文件夹 android/app/src/main/java/com/xxx(项目名)/xxModule.java
  
    // xxModule.java
    package com.xxx;

    import android.content.BroadcastReceiver;
    import android.content.Context;
    import android.content.Intent;
    import android.content.IntentFilter;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.bridge.ReactContextBaseJavaModule;
    import com.facebook.react.bridge.ReactMethod;
    import com.facebook.react.modules.core.DeviceEventManagerModule;

    public class xxModule extends ReactContextBaseJavaModule {
        private static final String BROADCAST_ACTION = "xxxx"; // 用于指定广播的 action 字符串，这里设置为你要监听的广播code
      

        private final ReactApplicationContext reactContext;

        public xxxnModule(ReactApplicationContext reactContext) {
            super(reactContext);
            this.reactContext = reactContext; //React Native 上下文，提供了与 JavaScript 端通信的接口

            // 注册广播接收器
            registerReceiver();// 注册一个广播接收器，监听扫描仪的广播事件
        }

        @Override
        public String getName() {
            return "xxModule";
        }

        @ReactMethod
        public void myMethod(String message) {// JavaScript 调用的方法，这里定义了一个方法，用于在 Java 控制台打印接收到的消息
            System.out.println("Received message: " + message);
        }

        // 注册广播接收器
        private void registerReceiver() {
            BroadcastReceiver receiver = new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {

                    // 收到广播后发送事件到 JavaScript
                    reactContext
                            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                            .emit("onBroadcastReceived", intent.getStringExtra("SCAN_BARCODE1"));
                }
            };

            IntentFilter filter = new IntentFilter(BROADCAST_ACTION);
            reactContext.registerReceiver(receiver, filter);
        }

        // 发送事件到 JavaScript
        private void sendEvent(String data) {
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("onBroadcastReceived", data);
        }
    }


解释如下：

1、`xxModule`创建是为了创造一个广播监听器。监听的是广播的`BROADCAST_ACTION`的`code`监听

2、`registerReceiver`是注册广播接收器

3、`sendEvent`发送事件，并且约定`onBroadcastReceived`作为承接data的字段名。

监听模块创建好了之后，因为在android/app/src/main/java/com/xxx(项目名)/MainApplication.java中

    //...
     protected List<ReactPackage> getPackages() {
              @SuppressWarnings("UnnecessaryLocalVariable")
              List<ReactPackage> packages = new PackageList(this).getPackages();
              // Packages that cannot be autolinked yet can be added manually here, for example:
             // packages.add(new Package()); //添加我的红外监听模块
              return packages;
            }
     //...
  
  因为这里是以package的形式来添加autoLinked的，所以还需要创建包类
 在android/app/src/main/java/com/xxx(项目名)/MyCustomerPackage.java


    // MyCustomerPackage.java
    package com.xxx;

    import com.facebook.react.ReactPackage;
    import com.facebook.react.bridge.JavaScriptModule;
    import com.facebook.react.bridge.NativeModule;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.uimanager.ViewManager;
    import com.xxx.xxModule;
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.List;

    public class MyCustomerPackage implements ReactPackage {
        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            List<NativeModule> modules = new ArrayList<>();
            modules.add(new xxModule(reactContext));
            return modules;
        }

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }

    }


以上代码的意思：

1、包名定义模块，并引入xxxModule.java的类


最后在MainApplication.java中


ss

        // ...
        import com.xxx.MyCustomerPackage;
        // ...
     
       @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          packages.add(new MyCustomerPackage()); //添加我的红外监听模块
          return packages;
        }

      // ...


这样原生的底层监听广播事件，就完成了，重新打包并发布。


那么就是在react中开始监听这个扫描事件喽，作为一个前端，这就是随便写了啊

因为是祖传原始项目，react还是用的class写法，版本在16.18.0之前的版本，新版酌情修改：

直接上js代码，使用方法

    //...
    import { NativeEventEmitter, NativeModules } from 'react-native';
    const { xxScanModule } = NativeModules;
    const xxEventEmitter = new NativeEventEmitter(xxScanModule);
    //...
    
    componentDidMount() {
        // 添加事件监听器
        this.xxListener = xxxEventEmitter.addListener(
          'onBroadcastReceived',
          this.handlexxxResult
        );
      }

      componentWillUnmount() {
        // 移除事件监听器
        this.xxListener.remove();
      }

以上代码，生命周期中添加监听和移除监听

1、`onBroadcastReceived`这个一定要跟自己添加的返回值匹配

2、`handlexxxResult`在这个方法里面就可以处理监听器返回的结果。

大概内容就是这样，很久没写博客了，心血来潮，纪念一下



