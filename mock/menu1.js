// eslint-disable-next-line no-unused-vars
const ff = [
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
        name: '黑名单管理',
        endItem: false,
        url: '',
        childrenMenuItem: [
          {
            id: 11,
            parentId: 7,
            index: '1-7-1',
            icon: null,
            name: '系统黑名单',
            endItem: true,
            url: '/blacklist/system',
            childrenMenuItem: []
          },
          {
            id: 13,
            parentId: 7,
            index: '1-7-3',
            icon: null,
            name: '通道黑名单',
            endItem: true,
            url: '/blacklist/channel',
            childrenMenuItem: []
          },
          {
            id: 12,
            parentId: 7,
            index: '1-7-2',
            icon: null,
            name: '用户黑名单',
            endItem: true,
            url: '/blacklist/user',
            childrenMenuItem: []
          }
        ]
      },
      {
        id: 8,
        parentId: 1,
        index: '1-2',
        icon: null,
        name: '系统参数管理',
        endItem: true,
        url: '/system/params',
        childrenMenuItem: []
      },
      {
        id: 9,
        parentId: 1,
        index: '1-3',
        icon: null,
        name: '通道管理',
        endItem: true,
        url: '/system/channel',
        childrenMenuItem: []
      },
      {
        id: 10,
        parentId: 1,
        index: '1-4',
        icon: null,
        name: '通讯录管理',
        endItem: true,
        url: '/system/Contacts',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 2,
    parentId: 0,
    index: '2',
    icon: null,
    name: '客户管理',
    endItem: false,
    url: null,
    childrenMenuItem: [
      {
        id: 11,
        parentId: 2,
        index: '2-1',
        icon: null,
        name: '模板制作',
        endItem: true,
        url: '/5G/template',
        childrenMenuItem: []
      },
      {
        id: 13,
        parentId: 2,
        index: '2-1',
        icon: null,
        name: '消息下发',
        endItem: true,
        url: '/5G/send',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 3,
    parentId: 0,
    index: '3',
    icon: null,
    name: 'Sms消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 14,
        parentId: 3,
        index: '3-1',
        icon: null,
        name: '状态查询',
        endItem: true,
        url: '/sms/status',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 4,
    parentId: 0,
    index: '4',
    icon: null,
    name: '5G消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 15,
        parentId: 4,
        index: '4-1',
        icon: null,
        name: '用户查询',
        endItem: true,
        url: '/usr/query',
        childrenMenuItem: []
      }
    ]
  },
  {
    id: 5,
    parentId: 0,
    index: '4',
    icon: null,
    name: 'Mms消息管理',
    endItem: false,
    url: '',
    childrenMenuItem: [
      {
        id: 15,
        parentId: 4,
        index: '4-1',
        icon: null,
        name: '用户查询',
        endItem: true,
        url: '/usr/query',
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
        id: 15,
        parentId: 4,
        index: '4-1',
        icon: null,
        name: '国际短信查询',
        endItem: true,
        url: '/I18n/status',
        childrenMenuItem: []
      }
    ]
  }
]
