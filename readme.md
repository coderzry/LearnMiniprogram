### 一、项目的结构

#### 1.1 目录的结构

- pages 页面
- components 公共组件
- assets 静态资源
- service  网络请求
- utils 工具

#### 1.2 项目的页面结构

在app.json中划分好页面结构

```json
{
  "pages": [
    "pages/home/home",
    "pages/category/category",
    "pages/cart/cart",
    "pages/profile/profile"
  ],
  "tabBar": {
    "selectedColor": "#ff5777",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "首页",
        "iconPath": "/assets/tabbar/home.png",
        "selectedIconPath": "/assets/tabbar/home_active.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "分类",
        "iconPath": "/assets/tabbar/category.png",
        "selectedIconPath": "/assets/tabbar/category_active.png"
      },
      {
        "pagePath": "pages/cart/cart",
        "text": "购物车",
        "iconPath": "/assets/tabbar/cart.png",
        "selectedIconPath": "/assets/tabbar/cart_active.png"
      },
      {
        "pagePath": "pages/profile/profile",
        "text": "我的",
        "iconPath": "/assets/tabbar/profile.png",
        "selectedIconPath": "/assets/tabbar/profile_active.png"
      }
    ]
  },
  "sitemapLocation": "sitemap.json"
}
```



### 二、首页开发

#### 2.1 顶部导航栏的开发

在app.json中添加window字段，只设置这两个属性即可，标题在相关页面单独设置

```json
"window": {
    "navigationBarBackgroundColor": "#ff5777",
    "navigationBarTextStyle": "white"
  },
```

#### 2.2 轮播图

1. 请求轮播图相关的数据

