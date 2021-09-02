Page({
  data: {
    filterData: [
      {
        filterDesc: "工作经验",
        filterValue: "两年"
      },
      {
        filterDesc: "学历要求",
        filterValue: "本科"
      },
      {
        filterDesc: "薪资待遇",
        filterValue: "不限"
      }
    ],
    searchInputValue: "",
    shouldHideCenterHint: false,
    centerAdImageUri: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
    jobDescritionItem: [{
      jobTitle: "huli",
      jobPosition: "yanglaoyuan",
      jobRequirement: [
        "a",
        "b"
      ],
      price: "4-5K",
      hasPost: 1
    }, {
      jobTitle: "huli",
      jobPosition: "yanglaoyuan",
      jobRequirement: [
        "a",
        "b"
      ],
      price: "4-5K",
      hasPost: 1
    }, {
      jobTitle: "huli",
      jobPosition: "yanglaoyuan",
      jobRequirement: [
        "a",
        "b"
      ],
      price: "4-5K",
      hasPost: 1
    }]
  },

  searchBarInput: function(e) {
    this.setData({
      searchInputValue: e.detail.value
    })
    console.log(this.data.searchInputValue)
  }
})