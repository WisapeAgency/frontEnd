(function(){
    var win_w = $(window).width();
    var win_h = $(window).height();
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    $.fn.iScroll = function(options){
        function set_wrap_width(dom){
            var wid = 0;
            var ul = dom.find('ul');
            var li = dom.find('li');
            li.each(function(){
                wid += $(this).outerWidth()
            });
            ul.css('width',wid+10);
        }
        return this.each(function(){
            set_wrap_width($(this));
            this.iScroll = new IScroll(this,options);
        });
    };

    var View = Class.create({
        initialize:function(root){
            this.root = root;
        },
        on:function(type,callback){
            this.root.on(type,callback);
        },
        trigger:function(type){
            this.root.trigger(type);
        },
        show:function(){
            this.root.addClass('page-active');
        },
        hide:function(){
            this.root.removeClass('page-active');
        }
    });
    window.View = View.prototype.constructor;

    var MainEditorView = View.extend({
        initialize:function(root){
            MainEditorView.superclass.initialize.call(this, root);
            this.btn_back = root.find('.header .icon-arrow-left');
            this.btn_play = root.find('.header .icon-play');
            this.btn_layout = root.find('.header .icon-layout');
            this.btn_list = root.find('.header .icon-list');
            this.btn_settings = root.find('.header .icon-settings');
            this.btn_addStage = root.find('.icon-add-stage');
        }
    });

    var StageSelectView = View.extend({
        initialize: function(root) {
            StageSelectView.superclass.initialize.call(this, root);
            var tabnav = this.tabnav = root.find('.tabnav');
            var tabnav_item = this.tabnav_item = root.find('.tabnav a');
            var tabcon_item = this.tabcon_item = root.find('.tabcon-item');
            var divRels = this.divRels = tabcon_item.find('div.rel');
            tabnav.iScroll({
                scrollX:true,
                scrollY:false
            });
            tabcon_item.iScroll({
                scrollX:true,
                scrollY:false
            });
            tabnav_item.each(function(){
                var This = $(this);
                var hammer = new Hammer(this);
                hammer.on('tap',function(){
                    tabnav_item.removeClass('active');
                    This.addClass('active');
                    var idx = tabnav_item.index(This);
                    var target = tabcon_item.eq(idx);
                    tabcon_item.hide();
                    if(target.size()!=0){
                        target.show();
                    }
                });
            });
            divRels.each(function(){
                var This = $(this);
                var hammer = new Hammer(this);
                hammer.on('tap',function(){
                    divRels.removeClass('active');
                    This.addClass('active');
                });
            });
        }
    });
    window.StageSelectView = StageSelectView.prototype.constructor;

    var StoryContainerView = View.extend({
        initialize:function(root){
            StoryContainerView.superclass.initialize.call(this, root);
            var me = this;
            var story = this.story = root.find('story');
            var stages = this.stages = root.find('stage');
            var symbols = this.symbols = root.find('symbol');
            story.css({
                width:win_w*this.stages.size(),
                height:win_h
            });
            stages.css({
                width:win_w,
                height:win_h
            });
            symbols.each(function(){
                var symbol = $(this);
                var type = $(this).attr('type');
                var hammerable = $(this).attr('hammerable');
                if(hammerable == 'true'){
                    if(type == 'text'){
                        symbol.append('<a class="icon-enter-edit-text"></a>');
                    }else if(type == 'image'){
                        symbol.append('<a class="icon-enter-edit-image"></a>');
                    }
                }
            });
            symbols.click(function(e){
                e.stopPropagation();
                var symbol = $(this);
                if(symbol.hasClass('select')){
                    var type = symbol.attr('type');
                    if(type == 'text'){
                        alert('进入文字编辑界面');
                    }else if(type == 'image'){
                        alert('进入图片编辑界面');
                    }
                }else{
                    symbols.removeClass('select');
                    symbol.addClass('select');
                }
            });
            root.click(function(){
                symbols.removeClass('select');
            });
            this.on('resize',function(){
                story.css({
                    width:win_w*me.stages.size(),
                    height:win_h
                });
                story.css('left',0);
            });
            this.current = 0;
            this.left_dis = 82.5; //73;

            function iniSwipe(){
                var hammer = new Hammer(story.get(0));
                hammer.get('swipe').set({
                    velocity:0.2
                });
                hammer.on('swipeleft',function(){
                    _swipe(1);
                });
                hammer.on('swiperight',function(){
                    _swipe(-1);
                });
                function _swipe(dire){
                    var cur = me.current + dire;
                    var left_dis = me.left_dis;
                    if(cur>-1&&cur<stages.size()){
                        me.current = cur;
                        story.css('left',-cur*left_dis+'%');
                    }
                }
            }
            iniSwipe();
        }
    });
    var storyStageManaView = View.extend({
        initialize:function(root){
            storyStageManaView.superclass.initialize.call(this, root);
            var me = this;
            this.btn_back = root.find('.icon-arrow-left');
            var story = this.story = root.find('story');
            var dustbin = root.find('.icon-dustbin');
            dustbin.click(function(){
                story.find('.select').remove();
                me.stages = story.find('stage');
            });
        },
        load:function(view){
            var stages = this.stages = view.stages.clone();
            var story = this.story;
            story.html(stages);
            stages.each(function(idx){
                var This = $(this);
                This.find('[class*=icon-]').remove();
                This.find('[symbol]').removeClass('select');
                This.attr('stageIndex',idx);
                This.append('<a class="icon-correct"></a>');
                This.click(function(){
                    if($(this).hasClass('select')) {
                        $(this).removeClass('select');
                    }else{
                        $(this).addClass('select');
                    }
                });
            });
        },
        save:function(view){
            var me = this;
            view.stages.each(function(idx){
                if(me.stages.filter('[stageIndex='+idx+']').size() == 0){
                    var tempStages = view.stages;
                    var re = tempStages.eq(idx).remove();
                    view.stages = view.stages.not(re);
                }
            });
            view.trigger('resize');
        }
    });

    var view_main = new MainEditorView($('#main'));
    var view_ssv = new StageSelectView($('#stageSelect'));
    var view_scv = new StoryContainerView($('#storyContainer'));
    var view_ssmv = new storyStageManaView($('#storyStageMana'));
    view_main.btn_back.click(function(){
        alert('回到刚才进入编辑页面的界面');
    });
    view_main.btn_play.click(function(){
        alert('进入预览页面');
    });
    view_main.btn_settings.click(function(){
        alert('进入故事设置');
    });
    view_main.btn_addStage.click(function(){
        alert('添加默认模版页');
    });
    view_main.btn_layout.click(function(){
        if($(this).hasClass('icon-layout')){
            view_ssv.trigger('open');
        }else{
            view_ssv.trigger('close');
        }
    });
    view_ssv.on('open',function(){
        view_main.btn_layout.removeClass('icon-layout').addClass('icon-layout-active');
        view_ssv.root.addClass('opened');
        view_scv.root.addClass('smaller');
        view_scv.left_dis = 73;
        view_scv.story.css('left',-view_scv.left_dis*view_scv.current+'%');
    });
    view_ssv.on('close',function(){
        view_main.btn_layout.removeClass('icon-layout-active').addClass('icon-layout');
        view_ssv.root.removeClass('opened');
        view_scv.root.removeClass('smaller');
        view_scv.left_dis = 82.5;
        view_scv.story.css('left',-view_scv.left_dis*view_scv.current+'%');
    });
    view_scv.on('click',function(){
        view_ssv.trigger('close');
    });
    view_main.btn_list.click(function(){
        view_main.hide();
        view_ssmv.show();
        view_ssmv.load(view_scv);
    });
    view_ssmv.btn_back.click(function(){
        view_main.show();
        view_ssmv.hide();
        view_ssmv.save(view_scv);
    });
    /*
    function loadViews(){
        $('[html-include]').each(function(){
            var This = $(this);
            var filepath = This.attr('html-include');
            var de = new DirectoryEntry(VIEWSPATH.substring(VIEWSPATH.lastIndexOf('/')+1), VIEWSPATH);
            de.getFile(filepath,null,function(fileEntry){
                fileEntry.file(function(file){
                    var reader = new FileReader();
                    reader.onloadend = function(evt) {
                        var html = evt.target.result;
                    };
                    reader.readAsText(file);
                }, fail);
            }, fail);
        });
    }
    function fail(evt) {
        console.log(evt.target.error.code);
    }
    function getRootPath(data){
        window.ROOTPATH = data;
        window.VIEWSPATH = window.ROOTPATH + '/views';
    }
    */
})();