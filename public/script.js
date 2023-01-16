
JSC.fetch('./google.csv')
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          var data = JSC.csv2Json(text);

          initChart(
            data.map(function(entry) {
              return { x: entry.Date, open: entry.Open, high: entry.High, low: entry.Low, close: entry.Close };
            }),
            data.map(function(entry) {
              return { x: entry.Date, y: entry.Volume };
            })
          );
        });

      function initChart(points, volumePoints) {
        var chart = JSC.chart('chartDiv', {
          debug: true,
          type: 'candlestick',
          axisToZoom: 'x',
          legend: { template: '%icon %name', position: 'inside top left' },
          palette: 1,
          yAxis: [
            {
              id: 'yMain',
              formatString: 'c',
              crosshair_enabled: true,
              orientation: 'opposite',
              scale: { range_padding: 0.1 }
            },
            {
              id: 'yVol',
              visible: false,
              scale: {
                syncWith: 'none',
                range: { padding: 1.5, min: 0 }
              }
            }
          ],
          xAxis: { scale_type: 'time' },
          defaultPoint_radius: 100,
          series: [
            {
              name: 'Volume',
              type: 'column',
              yAxis: 'yVol',
              defaultPoint: { opacity: 0.2 },
              points: volumePoints
            },
            {
              yAxis: 'yMain',
              name: 'GOOGL Weekly',
              points: points
            }
          ]
        });
      }

      function tooltip(point) {
        var color = point.options('close') > point.options('open') ? 'green' : 'red';
        return (
          'Change: <span style="color:' +
          color +
          '"><b>{%close-%open}</b></span><br>Open: %open<br/>High: %high<br/>Low: %low<br/>Close: %close'
        );
      }