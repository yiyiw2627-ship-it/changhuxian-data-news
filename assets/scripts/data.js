window.CHANGHUXIAN_DATA = {
  "metrics": [
    {
      "label": "失能、半失能老人规模",
      "value": 4500,
      "unit": "万人",
      "qualifier": "超",
      "source": "新闻稿原文引用国家统计局最新数据",
      "note": "截至2025年底，约每6位老人中1位无法独立完成基本生活动作"
    },
    {
      "label": "2035年预测规模",
      "value": 6200,
      "unit": "万人",
      "qualifier": "预计",
      "source": "新闻稿原文引用中国老龄科学研究中心预测",
      "note": "预测数据，与现状分开标注"
    },
    {
      "label": "家庭照护者日均照料时长",
      "value": 15.7,
      "unit": "小时",
      "qualifier": "约",
      "source": "新闻稿原文引用中国人民大学老年学研究所调查"
    },
    {
      "label": "2026年4月全失能护理费用均值",
      "value": 4707.88,
      "unit": "元/人/月",
      "source": "新闻稿原文引用国家发改委价格监测中心数据"
    },
    {
      "label": "小宇外婆基础养老金",
      "value": 100,
      "unit": "元/月",
      "qualifier": "仅靠",
      "source": "新闻稿采访案例"
    },
    {
      "label": "截至2025年底参保人数",
      "value": 3.08,
      "unit": "亿人",
      "qualifier": "约",
      "source": "新闻稿原文引用国家医保局数据"
    },
    {
      "label": "累计惠及失能群众",
      "value": 330,
      "unit": "万人",
      "qualifier": "超",
      "source": "新闻稿原文"
    },
    {
      "label": "基金支出",
      "value": 1000,
      "unit": "亿元",
      "qualifier": "超",
      "source": "新闻稿原文"
    },
    {
      "label": "全国定点服务机构",
      "value": 1.2,
      "unit": "万家",
      "qualifier": "约",
      "source": "新闻稿原文，截至2025年底"
    },
    {
      "label": "长护险从业人员",
      "value": 37,
      "unit": "万人",
      "qualifier": "约",
      "source": "新闻稿原文，截至2026年3月"
    }
  ],
  "disabledTrend": [
    {
      "year": 2020,
      "value": 3800,
      "type": "估算"
    },
    {
      "year": 2025,
      "value": 4500,
      "type": "现状"
    },
    {
      "year": 2030,
      "value": 5400,
      "type": "预测"
    },
    {
      "year": 2035,
      "value": 6200,
      "type": "预测"
    }
  ],
  "agingSpeed": [
    {
      "country": "法国",
      "years": 115
    },
    {
      "country": "美国",
      "years": 69
    },
    {
      "country": "英国",
      "years": 45
    },
    {
      "country": "中国",
      "years": 21
    }
  ],
  "healthGap": [
    {
      "label": "人均预期寿命",
      "value": 78.6
    },
    {
      "label": "健康预期寿命",
      "value": 68.6
    },
    {
      "label": "非健康状态时间",
      "value": 10
    }
  ],
  "careGap": [
    {
      "label": "养老护理员实际需求",
      "value": 600,
      "unit": "万人",
      "qualifier": "超"
    },
    {
      "label": "全国长护险从业人员",
      "value": 37,
      "unit": "万人",
      "qualifier": "约"
    },
    {
      "label": "50岁以上从业主体占比",
      "value": 70,
      "unit": "%",
      "qualifier": "以上"
    }
  ],
  "cityCoverage": [
    {
      "year": 2016,
      "cities": 15,
      "label": "首批试点"
    },
    {
      "year": 2020,
      "cities": 49,
      "label": "试点扩围"
    },
    {
      "year": 2025,
      "cities": 92,
      "label": "覆盖扩展"
    },
    {
      "year": 2028,
      "cities": 300,
      "label": "基本全覆盖（示意）",
      "note": "全国全覆盖用示意值表示，不作为城市数量统计"
    }
  ],
  "cityEfficiency": [
    {
      "city": "山东烟台",
      "before": "30个工作日内",
      "after": "短至12个工作日",
      "beforeDays": 30,
      "afterDays": 12
    },
    {
      "city": "山东崂山",
      "before": "30日",
      "after": "10-15个工作日",
      "beforeDays": 30,
      "afterDays": 12.5
    },
    {
      "city": "重庆",
      "before": "60日",
      "after": "30个工作日",
      "beforeDays": 60,
      "afterDays": 30
    }
  ],
  "calculator": [
    {
      "id": "worker",
      "name": "在职职工",
      "rate": 0.0015,
      "baseLabel": "月工资基数",
      "hint": "总费率0.3%，单位和个人各0.15%。"
    },
    {
      "id": "retired",
      "name": "退休人员",
      "rate": 0.0015,
      "baseLabel": "月养老金",
      "hint": "0.15%，按养老金由个人承担。"
    },
    {
      "id": "flex",
      "name": "灵活就业",
      "rate": 0.003,
      "baseLabel": "月缴费基数",
      "hint": "可按职工标准全额0.3%，或按居民年缴费模式。"
    },
    {
      "id": "resident",
      "name": "城乡居民",
      "rate": 0.0015,
      "baseLabel": "当地人均月可支配收入",
      "hint": "0.15%起步，个人与财政1:1分担，5年过渡至0.3%。"
    },
    {
      "id": "student",
      "name": "学生",
      "rate": 0,
      "baseLabel": "无需输入",
      "hint": "18周岁以下学生不单独筹资，随父母参保。"
    }
  ],
  "dailyTracks": {
    "mother": [
      {
        "time": "06:30",
        "text": "起床、买菜、准备外婆早饭"
      },
      {
        "time": "09:00",
        "text": "上班前电话确认用药和饮水"
      },
      {
        "time": "12:30",
        "text": "午休赶回家翻身、喂饭"
      },
      {
        "time": "18:30",
        "text": "下班后护理、清洁、整理"
      },
      {
        "time": "22:30",
        "text": "夜间查看，担心突发状况"
      }
    ],
    "grandma": [
      {
        "time": "07:00",
        "text": "等待家人协助起身和进食"
      },
      {
        "time": "10:00",
        "text": "卧床休息，行动依赖他人"
      },
      {
        "time": "14:00",
        "text": "需要翻身、清洁和陪伴"
      },
      {
        "time": "19:00",
        "text": "晚饭后由家人照护"
      },
      {
        "time": "23:00",
        "text": "夜间照护仍牵动全家"
      }
    ]
  },
  "countryCompare": [
    {
      "country": "德国",
      "mode": "强制性社会保险",
      "scope": "长期护理需求者",
      "funding": "缴费率持续调整，财政压力上升"
    },
    {
      "country": "日本",
      "mode": "社会保险与地方服务结合",
      "scope": "面向老龄照护需求",
      "funding": "缴费与财政共同支撑，随老龄化承压"
    },
    {
      "country": "中国",
      "mode": "政府主导、社会保险、多元筹资、渐进推开",
      "scope": "重度失能等符合条件人员，目标全国覆盖",
      "funding": "起步阶段费率约0.3%，强调低成本、广覆盖"
    },
    {
      "country": "美国",
      "mode": "商业保险为主",
      "scope": "覆盖率较低，中低收入群体可及性不足",
      "funding": "私人长护险保费高昂"
    },
    {
      "country": "荷兰",
      "mode": "公共长期照护保障体系",
      "scope": "较广泛的长期照护需求",
      "funding": "高福利伴随较高公共筹资压力"
    }
  ],
  "sources": [
    {
      "id": "news-docx",
      "title": "用户上传新闻稿《被温柔兜底的晚年》",
      "file": "sources/source_news.txt",
      "note": "页面正文与数据主要来源；其中若为新闻稿转述机构数据，页面保留“约、超、截至、预计”等限定。"
    },
    {
      "id": "layout-docx",
      "title": "用户上传《网页排版》说明",
      "file": "sources/layout_requirements.txt",
      "note": "页面动效、交互与视觉叙事要求来源。"
    },
    {
      "id": "datawrapper",
      "title": "新闻稿中出现的 Datawrapper 参考链接",
      "url": "https://datawrapper.dwcdn.net/iLHkk/1/",
      "note": "不作为核心外链嵌入，仅列为参考来源。"
    }
  ]
};
