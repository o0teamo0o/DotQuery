const _Page = require("/__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        showSearchAnimationData: {}, //显示搜索动画
        isShowSearchResultLayout: false,
        searchLayoutTopIndex: 2000,
        latelyStoreInfo: {
            name: "最近距离网点",
            address: "网点地址：最近距离网点地址",
            tel: "联系方式：0731-88888888",
            type: "网点类型：营业网点",
            longitude: "20.126293",
            latitude: "30.274653",
            distance: "200米"
        },
        searchResultList: [
            {
                name: "搜索网点1",
                address: "网点地址：搜索网点地址1",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "200米"
            },
            {
                name: "搜索网点2",
                address: "网点地址：搜索网点地址2",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "200米"
            }
        ],
        storeCityList: [
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "200米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "500米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "700米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "900米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "500米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "700米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "900米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "500米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "700米"
            },
            {
                name: "电城支行",
                address: "网点地址：湘潭县电信局左侧",
                tel: "联系方式：0731-88888888",
                type: "网点类型：营业网点",
                longitude: "20.126293",
                latitude: "30.274653",
                distance: "900米"
            }
        ],
    },
    // 页面加载
    onLoad(query) {
        var that = this;
        that.initView();
    },

    initView: function () {
        var that = this;
        //设置搜索动画开始样式
        var searchAnimation = my.createAnimation({
            duration: 0,
            timingFunction: 'ease-out',
            success: function (res) {
                console.log(res)
            }
        })
        searchAnimation.width("92vw").step();
        that.setData({
            isShowSearchLayout: false,
            showSearchAnimationData: searchAnimation.export(),
        })

        //创建节点选择器
        var query = my.createSelectorQuery();
        query.select('.searchTop').boundingClientRect();
        query.exec(function (res) {
            //res就是 所有标签为mjltest的元素的信息 的数组
            if (res) {
                console.error(res)
                var searchTop = my.getSystemInfoSync().windowHeight - res[0].bottom;
                that.data.searchLayoutTopIndex = res[0].top;
                that.setData({
                    popupSearchHeight: searchTop,
                })
            }
        })

        that.getLocation();
    },

    /**
     * 获取定位信息
     */
    getLocation: function () {
        var that = this;
        my.showLoading();
        my.getLocation({
            success(res) {
                my.hideLoading();
                console.log(res.longitude, res.latitude)
            },
            fail() {
                my.hideLoading();
                my.confirm({
                    title: '定位失败',
                    confirmButtonText: '重新定位',
                    cancelButtonText: '暂不需要',
                    success: (result) => {
                        that.getLocation();
                    },
                    fail: () => {

                    }
                });
            },
        })
    },

    /**
     * 跳转去导航
     */
    jumpNavigationPage: function (e) {
        var that = this;
        var targetInfo = e.currentTarget.dataset.info;
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success(res) {
                const latitude = Number(targetInfo.LATITUDE);
                const longitude = Number(targetInfo.LONGITUDE);
                const name = targetInfo.storeName;
                wx.openLocation({
                    latitude,
                    longitude,
                    name,
                })
            }
        })
    },

    /**
     * 搜索框输入监听
     */
    onSearchInterListener: function () {
        var that = this;
        that.showSearchCancelBtn();
        that.setData({
            isShowSearchLayout: true,
            searchLayoutTop: that.data.searchLayoutTopIndex
        })
    },

    showSearchCancelBtn: function () {
        var that = this;
        var animation = my.createAnimation({
            duration: 300,
            timingFunction: 'ease-out',
            success: function (res) {
                console.log(res)
            }
        })
        // 旋转同时放大
        animation.width("77vw").step();
        that.setData({
            showSearchAnimationData: animation.export(),
        })
    },


    /**
     * 关闭搜索区域
     */
    onCloseSearcyLayout: function () {
        var that = this;
        var animation = my.createAnimation({
            duration: 300,
            timingFunction: 'ease-out',
            success: function (res) {
                console.log(res)
            }
        })
        animation.width("92vw").step();
        that.setData({
            isShowSearchLayout: false,
            searchLayoutTop: 2000,
            showSearchAnimationData: animation.export(),
        })
    },
});
