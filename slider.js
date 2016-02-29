$(function () {

  /**
   * Constructor Slider
   * @param container
   * @param options
   * @constructor
   */
  var Slider = function ( container, options ) {
    this._container = $(container);
    this._currentSlide = 0;

    this._defaultOptions = {
      buttons: true,
      pager: true,
      autoplay: false,
      autoplayTime: 3000,
      width: 600,
      height: 400
    };

    if( options ) {
      $.extend( this._defaultOptions, options );
    }

    this._initUp();
    if (this._defaultOptions.buttons){
      this._createButtons();
    }
    if (this._defaultOptions.pager){
      this._createPager();
    }
    if (this._defaultOptions.autoplay){
      this._runAutoplay();
    }
  };

  /**
   * Create slider
   * @private
   */
  Slider.prototype._initUp = function(){

    this._container.wrap('<div class="slider-content"><div class="slider-wrapper"></div></div>');

    this._sliderContent = this._container.parents('.slider-content');
    this._sliderContent.css('width', this._defaultOptions.width);
    this._sliderContent.css('height', this._defaultOptions.height);

    this.outerWidth = this._container.parent().width();
    this.outerHeight = this._container.parent().height();
    this.liCount = this._container.find('li').length;
    this.sumWidth = this.outerWidth * this.liCount;

    this._container.css('width', this.sumWidth);
    this._container.find('li img').css('width', this.outerWidth);
    this._container.find('li img').css('height', this.outerHeight);

    this._container.addClass('slider--translate');

    this._sliderContent.wrap('<div class="slider-wrap-controls"></div>')
  };

  /**
   * Create buttons controls
   * @private
   */
  Slider.prototype._createButtons = function(){
    this.prevButton = $('<div class="prev-btn btn"></div>');
    this.nextButton = $('<div class="next-btn btn"></div>');
    var wrapButton = $('<div class="slider-btn"></div>');
    this.prevButton.hide();
    wrapButton.append(this.prevButton);
    wrapButton.append(this.nextButton);
    this._container.parents('.slider-wrap-controls').append(wrapButton);
    this.prevButton.bind('click', this._prevPic.bind(this));
    this.nextButton.bind('click', this._nextPic.bind(this));
    this.nextButton.css('left', this.outerWidth - this.nextButton.width());
  };

  /**
   * Prev button
   * @private
   */
  Slider.prototype._prevPic = function(){
    var targetSlide = this._currentSlide - 1;
    if (targetSlide >= 0) {
      this._goToSlide(targetSlide);
    }
  };

  /**
   * Next button
   * @private
   */
  Slider.prototype._nextPic = function(){
    var targetSlide = this._currentSlide + 1;
    if (targetSlide < this.liCount) {
      this._goToSlide(targetSlide);
    }
  };

  /**
   * Go to current slide
   * @param i {int}
   * @private
   */
  Slider.prototype._goToSlide = function(i){
    this._currentSlide = i;
    var slidePosition = this.outerWidth * i * (-1);
    this._container.css('left', slidePosition + 'px');
    this._container.parents('.slider-wrap-controls').find('li[data-slide]').removeClass('active');
    this._container.parents('.slider-wrap-controls').find('li[data-slide="'+ this._currentSlide +'"]').addClass('active');

    if(this._defaultOptions.buttons){
      if(i == (this.liCount - 1)){
        this.nextButton.fadeOut();
      } else{
        this.nextButton.fadeIn();
      }

      if( i > 0){
        this.prevButton.fadeIn();
      } else{
        this.prevButton.fadeOut();
      }
    }
  };

  /**
   * Create pager controls
   * @private
   */
  Slider.prototype._createPager = function(){
    var wrapPager = $('<ul class="pager"></ul>');
    for (var i = 0; i < this.liCount; i++) {
      var itemPager = $('<li class="pager-item" data-slide="' + i + '"></li>');
      itemPager.bind('click', this._clickPager.bind(this));
      wrapPager.append(itemPager);
      if(i == 0){
        itemPager.addClass('active');
      }
    }
    this._container.parents('.slider-wrap-controls').append(wrapPager);
    wrapPager.css('width', this.outerWidth + 'px');
  };

  /**
   * Click pager event
   * @private
   */
  Slider.prototype._clickPager = function(e) {
    this.targetPager = parseInt($(e.currentTarget).data('slide'));
    this._goToSlide(this.targetPager);
  };

  /**
   * Autoplay
   * @private
   */
  Slider.prototype._runAutoplay = function() {
    setInterval(function(){
      var targetSlide = this._currentSlide + 1;
      if(targetSlide > this.liCount - 1){
        targetSlide = 0;
      }
      this._goToSlide(targetSlide);
    }.bind(this), this._defaultOptions.autoplayTime);
  };

  window.Slider = Slider;

});