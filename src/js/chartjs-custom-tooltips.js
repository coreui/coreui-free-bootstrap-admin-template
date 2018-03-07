var customTooltips = function(tooltip) {
  var canvasId = this._chart.canvas.id
  // Tooltip Element
  var tooltipEl = document.getElementById(canvasId + '-tooltip');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = canvasId + '-tooltip';
    tooltipEl.className = 'chartjs-tooltip';
    this._chart.canvas.parentNode.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltip.yAlign) {
    tooltipEl.classList.add(tooltip.yAlign);
  } else {
    tooltipEl.classList.add('no-transform');
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  // Set Text
  if (tooltip.body) {
    var titleLines = tooltip.title || [];
    var bodyLines = tooltip.body.map(getBody);
    console.log(tooltip.body);

    var innerHtml = '<div class="tooltip-header">';

    titleLines.forEach(function(title) {
      innerHtml += '<div class="tooltip-header-item">' + title + '</div>';
    });
    innerHtml += '</div>';
    innerHtml += '<div class="tooltip-body">';

    bodyLines.forEach(function(body, i) {
      var colors = tooltip.labelColors[i];
      var style = 'background:' + colors.backgroundColor;
      style += '; border-color:' + colors.borderColor;
      style += '; border-width: 2px';
      console.log(body[0].split(':').length > 1);
      if (body[0].split(':').length > 1) {
        var text = body[0].split(': ')[0];
        var value = body[0].split(': ').pop();
        var body = [text + '<span class="tooltip-body-item-value">' + value + '</span>'];
      }
      var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
      innerHtml += '<div class="tooltip-body-item">' + span + body + '</div>';
      console.log(body)
    });
    innerHtml += '</div>';

    tooltipEl.innerHTML = innerHtml;
  }

  var positionY = this._chart.canvas.offsetTop;
  var positionX = this._chart.canvas.offsetLeft;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
};

Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false,
Chart.defaults.global.tooltips.mode =  'index',
Chart.defaults.global.tooltips.position = 'nearest',
Chart.defaults.global.tooltips.custom = customTooltips;
