/*!
  * CoreUI Plugins - Chart.js for CoreUI 4  v3.0.0 (https://coreui.io)
  * Copyright 2021 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io/license/)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.coreui = global.coreui || {}, global.coreui.ChartJS = factory()));
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Custom Tooltips for Chart.js (v3.0.0): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/plugins/chart.js)
   * --------------------------------------------------------------------------
   */
  const ClassName = {
    TOOLTIP: 'chartjs-tooltip',
    TOOLTIP_BODY: 'chartjs-tooltip-body',
    TOOLTIP_BODY_ITEM: 'chartjs-tooltip-body-item',
    TOOLTIP_HEADER: 'chartjs-tooltip-header',
    TOOLTIP_HEADER_ITEM: 'chartjs-tooltip-header-item'
  };

  const getOrCreateTooltip = chart => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.classList.add(ClassName.TOOLTIP);
      const table = document.createElement('table');
      table.style.margin = '0px';
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  };

  const customTooltips = context => {
    // Tooltip Element
    const {
      chart,
      tooltip
    } = context;
    const tooltipEl = getOrCreateTooltip(chart); // Hide if no tooltip

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    } // Set Text


    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(b => b.lines);
      const tableHead = document.createElement('thead');
      tableHead.classList.add(ClassName.TOOLTIP_HEADER);
      titleLines.forEach(title => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = 0;
        tr.classList.add(ClassName.TOOLTIP_HEADER_ITEM);
        const th = document.createElement('th');
        th.style.borderWidth = 0;
        const text = document.createTextNode(title);
        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });
      const tableBody = document.createElement('tbody');
      tableBody.classList.add(ClassName.TOOLTIP_BODY);
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];
        const span = document.createElement('span');
        span.style.background = colors.backgroundColor;
        span.style.borderColor = colors.borderColor;
        span.style.borderWidth = '2px';
        span.style.marginRight = '10px';
        span.style.height = '10px';
        span.style.width = '10px';
        span.style.display = 'inline-block';
        const tr = document.createElement('tr');
        tr.classList.add(ClassName.TOOLTIP_BODY_ITEM);
        const td = document.createElement('td');
        td.style.borderWidth = 0;
        const text = document.createTextNode(body);
        td.appendChild(span);
        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });
      const tableRoot = tooltipEl.querySelector('table'); // Remove old children

      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      } // Add new children


      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }

    const {
      offsetLeft: positionX,
      offsetTop: positionY
    } = chart.canvas; // Display, position, and set styles for font

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.padding + 'px ' + tooltip.padding + 'px';
  };

  /**
   * --------------------------------------------------------------------------
   * Custom Tooltips for Chart.js (v3.0.0): index.umd.js
   * Licensed under MIT (https://github.com/@coreui/coreui-chartjs/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    customTooltips
  };

  return index_umd;

})));
//# sourceMappingURL=coreui-chartjs.js.map
