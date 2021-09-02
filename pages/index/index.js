Component({
  data: {
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 1000,
      duration: 500,
    },
    slides: [{
      url: 'https://anhe-care-portal-public.oss-cn-beijing.aliyuncs.com/homepage-slide-01.png',
    }],
    modules: [
      {
        icon: '/assets/homepage/查询机构.png',
        title: '查询机构',
        page: '',
      },
      {
        icon: '/assets/homepage/服务预约.png',
        title: '服务预约',
        page: '',
      },
      {
        icon: '/assets/homepage/问题咨询.png',
        title: '问题咨询',
        page: '',
      },
      {
        icon: '/assets/homepage/我是人才.png',
        title: '我是人才',
        page: '',
      },
    ],
    healthyInfos: [{
      id: 0,
      title: '',
      createdAt: '',
    }],
    elderPolitics: [{
      id: -1,
      title: '',
      createdAt: '',
    }],
  },
});
