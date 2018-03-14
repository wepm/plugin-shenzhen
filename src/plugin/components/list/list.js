Component({
  data: {
    markers: [{
      iconPath: '/resources/location.png',
      id: 0,
      latitude: 22.560927,
      longitude: 114.038868,
      width: 50,
      height: 50,
      callout: {
        content: '国旗美工',
        // display: 'ALWAYS',
        textAlign: 'center',
        padding: 5,
        borderRadius: 2,
        fontSize: 14,
        color: '#ee0000',
        borderColor: 'red'
      }
    }],
    polyline: [{
      points: [{
        longitude: 114.038868,
        latitude: 22.560927
      }, {
        longitude: 114.038888,
        latitude: 22.560927
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/gqmg.png',
      position: {
        left: 10,
        top: 300 - 60,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange (e) {
    console.log(e.type)
  },
  markertap (e) {
    console.log(e.markerId)
  },
  controltap (e) {
    console.log(e.controlId)
  },
  attached: function () {
    // 可以在这里发起网络请求获取插件的数据
    this.setData({

    })
  }
})
