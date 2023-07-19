/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  "APP_ID": "wx13330cedbe59d7b9",
  "APP_SECRET": "f9863bd8e309dee47d7494cf8bca611b",
  "IS_SHOW_COLOR": true,
  "CALLBACK_TEMPLATE_ID": "AK65VwwXQCkYwnupSCUnBKSrH5Zh04H7nMMHqNr3MD4",
  "CALLBACK_USERS": [{
    "name": "自己",
    "id": "okB8l6WuEdxK7yCmOOlQjMSibWc8"
  }],
  "USERS": [
    {
      "name": "文琪宝贝",
      "id": "okB8l6RyODQV-dJYs-cSvGYWp6AA",
      "useTemplateId": "RUzkBIkzuC8kGXlIW1fxB3IyLKjSg-qBnRndXRaO7ns",
      "province": "江西省",
      "city": "上饶市",
      "horoscopeDate": "03-03",
      "horoscopeDateType": "今日",
      "openUrl": "https://s.weibo.com/top/summary?cate=realtimehot",
      "festivals": [{
        "type": "生日",
        "name": "宝贝",
        "date": "03-03",
        "year": "2000"
      }, {
        "type": "节日",
        "name": "恋爱纪念日",
        "date": "07-16",
        "year": "2023"
      }],
      "customizedDateList": [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-16' },
      ]
    },
    {
      "name": "自己",
      "id": "okB8l6WuEdxK7yCmOOlQjMSibWc8",
      "useTemplateId": "RUzkBIkzuC8kGXlIW1fxB3IyLKjSg-qBnRndXRaO7ns",
      "province": "江西省",
      "city": "上饶市",
      "horoscopeDate": "02-14",
      "horoscopeDateType": "今日",
      "openUrl": "https://s.weibo.com/top/summary?cate=realtimehot",
      "festivals": [{
        "type": "生日",
        "name": "自己",
        "date": "02-14",
        "year": "1995"
      }, {
        "type": "节日",
        "name": "恋爱纪念日",
        "date": "07-16",
        "year": "2023"
      }],
      "customizedDateList": [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-16' },
      ]
    }
  ],
  "SWITCH": {
    "weather": true,
    "holidaytts": false,
    "CIBA": true,
    "oneTalk": false,
    "earthyLoveWords": true,
    "momentCopyrighting": false,
    "poisonChickenSoup": false,
    "poetry": false,
    "horoscope": true,
    "birthdayMessage": true
  }
}

module.exports = USER_CONFIG
