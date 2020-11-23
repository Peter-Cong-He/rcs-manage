import Mock from 'mockjs'
Mock.mock('/login', {

})
Mock.mock('/menu', [
  {
    id: 1,
    parentId: 0,
    index: '1',
    icon: null,
    name: '系统管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 7,
        parentId: 1,
        index: '1-1',
        icon: null,
        name: '系统参数',
        endItem: true,
        url: '/systemparameter',
        childrenMenuItem: []
      },
      {
        id: 8,
        parentId: 1,
        index: '1-2',
        icon: null,
        name: '黑名单',
        endItem: false,
        url: '',
        childrenMenuItem: [
          {
            id: 21,
            parentId: 8,
            index: '1-2-1',
            icon: null,
            name: '系统黑名单',
            endItem: true,
            url: '',
            childrenMenuItem: []
          },
          {
            id: 22,
            parentId: 8,
            index: '1-2-2',
            icon: null,
            name: '用户黑名单',
            endItem: true,
            url: '',
            childrenMenuItem: []
          },
          {
            id: 23,
            parentId: 8,
            index: '1-2-3',
            icon: null,
            name: '通道黑名单',
            endItem: true,
            url: '',
            childrenMenuItem: []
          }
        ]
      },
      {
        id: 9,
        parentId: 1,
        index: '1-3',
        icon: null,
        name: '通道管理',
        endItem: true,
        url: '/channel',
        childrenMenuItem: []
      },
      {
        id: 10,
        parentId: 1,
        index: '1-4',
        icon: null,
        name: '白名单',
        endItem: true,
        url: '/whitelist',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 2,
    parentId: 0,
    index: '2',
    icon: null,
    name: '用户管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 11,
        parentId: 2,
        index: '2-1',
        icon: null,
        name: '直接用户',
        endItem: true,
        url: '/user',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 3,
    parentId: 0,
    index: '3',
    icon: null,
    name: '5G消息管理',
    endItem: false,
    url: null,
    childrenMenuItem: [
      {
        id: 12,
        parentId: 3,
        index: '3-1',
        icon: null,
        name: '模版制作',
        endItem: true,
        url: '/template',
        childrenMenuItem: []
      },
      {
        id: 13,
        parentId: 3,
        index: '3-2',
        icon: null,
        name: '消息明细',
        endItem: true,
        url: '/details',
        childrenMenuItem: []
      },
      {
        id: 14,
        parentId: 3,
        index: '3-3',
        icon: null,
        name: '消息下发',
        endItem: true,
        url: '/send5g',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 4,
    parentId: 0,
    index: '4',
    icon: null,
    name: 'Sms消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 15,
        parentId: 4,
        index: '4-1',
        icon: null,
        name: '消息下发',
        endItem: true,
        url: '/sendsms',
        childrenMenuItem: []
      },
      {
        id: 16,
        parentId: 4,
        index: '4-2',
        icon: null,
        name: '消息明细',
        endItem: true,
        url: '/smsdetails',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 5,
    parentId: 0,
    index: '5',
    icon: null,
    name: 'Mms消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 17,
        parentId: 5,
        index: '5-1',
        icon: null,
        name: '消息下发',
        endItem: true,
        url: '/sendmms',
        childrenMenuItem: []
      },
      {
        id: 18,
        parentId: 5,
        index: '5-2',
        icon: null,
        name: '消息明细',
        endItem: true,
        url: '/mmsdetails',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 6,
    parentId: 0,
    index: '6',
    icon: null,
    name: 'I18n消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 19,
        parentId: 6,
        index: '6-1',
        icon: null,
        name: '消息下发',
        endItem: true,
        url: '/sendI18n',
        childrenMenuItem: []
      },
      {
        id: 20,
        parentId: 6,
        index: '6-2',
        icon: null,
        name: '消息明细',
        endItem: true,
        url: '/I18ndetails',
        childrenMenuItem: []
      }
    ]
  }
])
