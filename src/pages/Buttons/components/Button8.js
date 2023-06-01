import { useEffect } from "react";
import "../scss/button8.scss";
// import $ from "jquery";

export default function Button8() {
  useEffect(() => {
    function flipCover(css, options) {
      var options = options || {}
      if (typeof css === "object") {
        options = css;
      } else {
        options.css = css;
      };
    
      var css = options.css;
      var url = options.url;
      var text = options.text || css;
      var width = options.width;
      var height = options.height;

      var section = document.querySelector('.flip-cover-' + css);
      section.classList.add(css + '-section');
    
      var button = document.createElement('div');
      button.classList.add(css + '-button');
    
      var cover = document.createElement('div');
      cover.classList.add(css + '-cover');
    
      var outer = document.createElement('div');
      outer.classList.add(css + '-outer');
    
      var inner = document.createElement('div');
      inner.classList.add(css + '-inner');

      if (width) {
        section.style.width = width;
      }
    
      if (height) {
        section.style.height = height;
    
        var lineHeight = ':after{ line-height: ' + height + ';}';
        var outerStyle = document.createElement('style');
        outerStyle.textContent = '.' + css + '-outer' + lineHeight;
        outer.appendChild(outerStyle);
        var innerStyle = document.createElement('style');
        innerStyle.textContent = '.' + css + '-inner' + lineHeight;
        inner.appendChild(innerStyle);
      }
    
      cover.appendChild(outer);
      section.appendChild(button);
      button.innerHTML = '<a href="' + url + '">' + text + '</a>';
      cover.appendChild(inner);
      section.appendChild(cover);
    
      // var $section = $(".flip-cover-" + css).addClass(css + "-section");
      // var $button = $("<div>").addClass(css + "-button");
      // var $cover = $("<div>").addClass(css + "-cover");
      // var $outer = $("<div>").addClass(css + "-outer");
      // var $inner = $("<div>").addClass(css + "-inner");
    
      // if (width) {
      //   $section.css("width", width);
      // };
    
      // if (height) {
      //   $section.css("height", height);
    
      //   var lineHeight = ':after{ line-height: ' + height + ';}';
      //   var $outerStyle = $('<style>').text('.' + css + '-outer' + lineHeight);
      //   $outerStyle.appendTo($outer);
      //   var $innerStyle = $('<style>').text('.' + css + '-inner' + lineHeight);
      //   $innerStyle.appendTo($inner);
      // };
    
      // $cover.html($outer);
      // $inner.insertAfter($outer);
    
      // $button.html($("<a>").text(text).attr("href", url));
    
      // $section.html($button);
      // $cover.insertAfter($button);
    };

    flipCover({
      css: 'dribbble',
      url: 'https://dribbble.com/vveleva',
      text: 'vveleva',
      width: '80px',
    });

    flipCover('twiter', {
      url: 'https://twitter.com/vveleva',
      text: 'vveleva',
      width: '80px',
    });

    flipCover('linkedin', {
      url: 'https://linkedin.com/in/vveleva',
      text: 'vveleva',
      width: '80px',
    });

    flipCover('email', {
      text: 'vvveleva @gmail',
      width: '80px',
      height: '50px',
    });

  }, []);

  return (
    <div id="button-8" className="button-8">
      <h6>This is the Button # 8 component.</h6>

      <div className="flip-cover-dribbble"></div>
      <div className="flip-cover-twiter"></div>
      <div className="flip-cover-linkedin"></div>
      <div className="flip-cover-email"></div>

    </div>
  );
}