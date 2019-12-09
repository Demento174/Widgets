$( document ).ready(function() {

    var models=ajaxSend('Models');

    sideWindow(models);

    modalWindow(models);

    parserPrice('a.showroom__cat-item','http://hyundai-planeta-avto.ru/');

    onloadCSS();

    anchor('tradein');

    if($(window).width()<600){
        onloadCSS('Mobile');

    }

    $('.step_2 .ButtonNextStep').on('click',function () {

        yaCounter33192788.reachGoal("car-tradein");

        $('#form_hidden_246')
            .val($(this).siblings('.showroom__cat-item').children('.showroom__cat-item-name').text());

        $('.step_3 h3')
            .html('СДАЙТЕ ВАШ АВТОМОБИЛЬ <span style="font-weight: 500">'+
                $('.step_1 select#calc1').val()+' '+
                $('.step_1 select#calc2').val()+
                '</span> В TRADE-IN И ПРИОБРЕТИТЕ <span style="font-weight: 500">'+
                $(this).siblings('.showroom__cat-item').
                children('.showroom__cat-item-name').text()+ ' '+
                $(this).siblings('.newPrice').text())+'</span>';

        $('.step_3 .quote').text('Сегодня уже '+randomInteger(13,27)+' клиентов оставили заявку');

        eventStep($('.step_2'),$('.step_3'))


    });

});

//-------------------------------------[ create DOM ]
function sideWindow(models=[]) {
    //----------------------[ right fixed widjet ]

   var widjetTradeInSideWindow= $('<div>', {
        class: 'widjetTradeInSideWindow',
        css: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10px 30px',
            background: 'rgb(17, 50, 191)',
            color: '#fff',
            borderRadius: '0px 5px 5px 0px',
            marginBottom: '10px',
            position: 'fixed',
            width: '240px',
            height: 'auto',
            zIndex: '999',
            right: '0',
            top: '16%'
        },

    })
        .append($('<span>',
            {
                text: 'Предложение по TRADE-IN за 1 минуту',
                css: {
                    textAlign: 'center',
                    marginBottom: '10px',
                    fontSize: '14px'
                }
            }));

   var continueToFill =
       $('<button>',{
            class: 'continueToFill',
            text: 'Продолжить',
            css:{
                display:'none',
                background: 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
                borderRadius: '3px',
                width: '100%',
                padding: '5px 10px',
                color: 'rgb(0, 0, 0)',
           },
           on:{
             click:function(event){
                 eventOpenModalWindow(null,'continue');
             }
           },
       });

    var widjetTradeInSideWindowSelect =
        $('<select>', {
            class: 'widjetTradeInSideWindowSelect activeSelect',
            css: {
                background: 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
                borderRadius: '3px',
                width: '100%',
                padding: '5px 10px',
                color: '#000000',
            },
            on: {
                change: function (event) {
                    eventOpenModalWindow($(this).val());
                    yaCounter33192788.reachGoal("open-tradein");
                }
            }
        });

    $('<option>',{
        text:'Модель',
        value:0,
        selected:'selected'
    }).appendTo(widjetTradeInSideWindowSelect);

    $.each(models,function(index,value){

        $('<option>',{
            text:value,
            value:value
        }).appendTo(widjetTradeInSideWindowSelect);

    });

    var widjetTradeInRollUp = $('<div>', {
        class: 'widjetTradeInRollUp',
        text: 'Cвернуть',
        css: {
            position: 'absolute',
            color: 'rgb(0, 0, 0)',
            background: 'rgb(239, 239, 239)',
            bottom: '32%',
            right: '205px',
            padding: '8px 12px',
            fontSize: '13px',
            borderRadius: '0px 0px 5px 5px',
            cursor: 'pointer',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            width: '105px',
            height: '36px',
            overflow:'hidden',
            transform: 'rotate(90deg)',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign:'center',
        },
        on:{
            click: function(event){
                eventClickRollUpClose(event);
            }},
    });

    var widjetTradeInOpenSideWindow =
        $('<div>',{
            class:'widjetTradeInOpenSideWindow',
           css:{
               display:'none',
               position:'absolute',
               width:'100%',
               height:'100%',
               padding:'10px',
               opacity:'0',
               top:'0',
               left:'0',
           },
            on:{click:function(event){
                    eventClickRollUpOpen(event);
                }},
        })
            .append($('<div>',{
                css:{
                    height:'25px',
                    width:'25px',
                    borderTop: '6px solid rgb(239, 239, 239)',
                    borderLeft: '6px solid rgb(239, 239, 239)',
                    transform:'rotate(-45deg)',
                    position:'absolute',
                    top: '25%',
                    left: '20%',
                    cursor:'pointer',
                },
            }))
            .append($('<span>',{
                text:'TRADE-IN',
                class:'widjetTradeInOpenSideWindowText',
                css:{
                    position: 'absolute',
                    right: '10px',
                    top: '16px',
                    cursor:'pointer',
                }
            }));

    widjetTradeInSideWindowSelect.appendTo(widjetTradeInSideWindow);
    continueToFill.appendTo(widjetTradeInSideWindow);
    widjetTradeInRollUp.appendTo(widjetTradeInSideWindow);
    widjetTradeInOpenSideWindow.appendTo(widjetTradeInSideWindow);
    widjetTradeInSideWindow.appendTo('body');

}

function modalWindow(models=[]){
//----------------------[ modal window ]
    var widjetTradeInWrapper =          //---------------[ content ]
        $('<div>',{
            class:'widjetTradeInWrapper',
            css:{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                width: '100%',
                height: '100%',
                zIndex: '9999',
                backgroundColor: 'rgba(0,0,0,0.7)',
                top: '0',
                right: '0',
                opacity:'0',
            }
        });

    var widjetTradeInWrapperContent =
        $('<div>',{
            class:'content',
            css:{
                width: '900px',
                minHeight: '500px',
                backgroundColor: 'rgba(255,255,255,1)',
                borderRadius: '5px',
                position: 'relative',
                display: 'flex',
            },
        });

    var close =
        $('<span>',{
            class:'widjetTradeInClose',
            css:{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: '0.5',
                right: '5px',
                position: 'absolute',
                top: '5px',
                cursor: 'pointer',
                zIndex: '99999',
            },
            on:{
                click:function(event){
                    eventCloseModalWindow(event);
                },
            },
        })
            .append($('<span>',{
                css:{
                    width: '80%',
                    height: '2px',
                    backgroundColor: '#000000',
                    transform: 'rotate(45deg)',
                    borderRadius: '2px',
                    right: '5px',
                    position: 'absolute',
                },
            }))
            .append($('<span>',{
                css:{
                    width: '80%',
                    height: '2px',
                    backgroundColor: '#000000',
                    transform: 'rotate(-45deg)',
                    borderRadius: '2px',
                    right: '5px',
                    position: 'absolute',
                },
            }));
    var backStep =
        $('<span>',{
            class:'backStep',
            css:{
                display:'flex',
                flexDirection:'center',
                alignItems:'center',
                opacity:'0',
                position:'absolute',
                width:'50px',
                height:'50px',
                borderRadius:'50%',
                backgroundColor:'rgba(0,0,0,0.5)',
                top: '40%',
                left: '15%',
                cursor:'pointer',
            },
            on:{
                click:function(event){
                    eventBackStep();
                }
            },
        })
            .append($('<span>',{
                css:{
                    width:'20px',
                    height:'20px',
                    border:'2px solid #ffffff',
                    borderTop:'none',
                    borderRight:'none',
                    transform:'rotate(45deg)',
                    position: 'absolute',
                    left: '16px',
                },
            }));
    var leftColumn =
        $($('<div>',{
            class:'widjetTradeInLeftColumn',
            css:{
                backgroundColor: '#1132bf',
                color: '#ffffff',
                padding: '10px',
                borderRadius: '5px 0 0 5px',
                position: 'relative',
                width: '200px',
            },
        }))
            .append($('<span>',{
                css:{
                    position: 'absolute',
                    border: '10px solid #1132bf',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    right: '-20px',
                    borderRightColor: 'transparent',
                    top: '30px',
                }
            }))
            .append($('<span>',{
                text:'Расчёт по TRADE-IN за 1 минуту',
                css:{
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
            }))

    var rightColumn =
        $('<div>',{
            class:'widjetTradeInRightColumn',
            css:{
                width: '700px',
                overflow: 'hidden',
                position: 'relative',
            },
        });

    var step1Wrapper =
        $('<div>',{
            class:'step_1',
            css:{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                top:0,
                right:0,
            }});

    var step1Form =
        $('<form>',{
            action:'',
        })
            .append($('<h3>',{
                text:'ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ ПО ТРЕЙД-ИН ЗА 1 МИНУТУ БЕЗ ПОЕЗДКИ В АВТОСАЛОН И ОБЩЕНИЯ С МЕНЕДЖЕРОМ',
                css:{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            }))
            .append($('<h4>',{
                text:'УКАЖИТЕ ВАШ АВТОМОБИЛЬ',
                css:{
                    fontSize: '14px',
                    textAlign: 'center',
                    marginBottom: '15px',
                },
            }));

    var inputWrapper =
        $('<div>',{
            class:'widgetTradeInInputWrapper',
            css:{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
        });
//form in step 1
    var select={
        0:{
            'id':'calc1',
            'class':'loading',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Выберите ваш автомобиль'
                },
            }
        },
        1:{
            'id':'calc2',
            'class':'sel_disabled',
            'disabled':true,
            'options':{
                0:{
                    'value':'0',
                    'text':'Модель'
                },
            }
        },
        2:{
            'id':'calc3',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Год выпуска'
                },
            }
        },
        3:{
            'id':'calc4',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Поколение'
                },
            }
        },
        4:{
            'id':'calc5',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Двигатель'
                },
            }
        },
        5:{
            'id':'calc6',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Привод'
                },
            }
        },
        6:{
            'id':'calc7',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Кузов'
                },
            }
        },
        7:{
            'id':'calc8',
            'class':'',
            'disabled':false,
            'options':{
                0:{
                    'value':'0',
                    'text':'Пробег'
                },
                1:{
                    'value':'1',
                    'text':'0-10 тыс. км'
                },
                2:{
                    'value':'10000',
                    'text':'10-30 тыс. км'
                },
                3:{
                    'value':'30000',
                    'text':'30-50 тыс. км'
                },
                4:{
                    'value':'50000',
                    'text':'50-75 тыс. км'
                },
                5:{
                    'value':'75000',
                    'text':'75-100 тыс. км'
                },
                6:{
                    'value':'100000',
                    'text':'100-125 тыс. км'
                },
                7:{
                    'value':'125000',
                    'text':'125-150 тыс. км'
                },
                8:{
                    'value':'150000',
                    'text':'150-200 тыс. км'
                },
                9:{
                    'value':'200000',
                    'text':'более 200 тыс. км'
                },

            }
        },
    };

    $.each(models,function (key,value) {
        var optionItem ={
            'value':value,
            'text':value
        };

        select[0]['options'][key+1]=optionItem;
    });


    $.each(select, function(key, array) {

        var selectItem= $('<select>',{
            id:array.id,
            class:array.class,
            disabled:array.disabled==true?'disabled':'',
            parameter:Number(key)+1,
            css:{
                background: 'rgb(218,218,218)',
                borderRadius: '3px',
                width: '40%',
                padding: '5px 10px',
                display: 'block',
                marginBottom: '12px',
                color:'#000000',
            },
            on:{
              change:function(event){
                  changeSelect($(this).attr('parameter'),$(this).val());
              }
            },
        });
        $.each(array.options,function(key,item){
            $('<option>',{
                value:item.value,
                text:item.text,
            }).appendTo(selectItem);
        });
        selectItem.appendTo(inputWrapper);
    });


    $('<div>',{
        class:'widjetTradeInButtonWrapper',
        css:{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }
    })
        .append($('<div>',{
            id:'widjetTradeInCalculateResult',
            class:'widjetTradeInButtonDisabled',
            text:'Оценить прямо сейчас!',
            css:{
                padding: '10px 40px',
                borderRadius: '5px',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginTop: '10px',
                cursor: 'pointer',
                backgroundColor: '#1132bf',
            },
            on:{
                click:function(event){
                    calculateForm();
                },
            },
        })).appendTo(inputWrapper);

    var step2Wrapper =
        $('<div>',{
            class:'step_2',
            css:{
                position: 'absolute',
                width: '700px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                top:0,
                right:-700,
                padding: '50px',
                paddingBottom: '20px',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                overflowY: 'scroll',
            }});

    var step3Wrapper =
        $('<div>',{
            class:'step_3',
            css:{
                position: 'absolute',
                width: '700px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                top:0,
                right:-700,
                padding: '10px 50px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                overflowY: 'hidden',
            }})
            .append($('<h3>',{
                text:'СДАЙТЕ ВАШ АВТОМОБИЛЬ BMW 3ER В ' +
                    'TRADE-IN И ПРИОБРЕТИТЕ НОВЫЙ TUCSON ' +
                    'от 1255332 ₽',
                css:{
                    fontSize: '19px',
                    fontWeight: '200',
                    textAlign: 'center',
                    textTransform:'uppercase',
                },
            }))
            .append($('<h4>',{
                text:'ОСТАВЬТЕ ТЕЛЕФОН, ЧТОБЫ ПОЛУЧИТЬ ' +
                    'ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ ПО TRADE-IN',
                css:{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                },
            }))
            .append($('<span>',{
                text:'Ваше сообщение отправлено',
                class:'answer',
                css:{
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    height: '40px',
                    margin: '0 auto',
                    backgroundColor: '#0be313',
                    borderRadius: '5px',
                    color: '#ffffff',
                    opacity: '0',
                    padding: '20px',
                },
            }));
    var step3Form=
        $('<form>',{
            css:{
                width: 'auto',
                height: 'auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
        })
            .append($('<span>',{
            text:'📞',
            css:{
                fontSize: '30px',
                position: 'absolute',
                backgroundColor: 'transparent',
                opacity: '0.5',
                top: '16px',
                left: '42px',
                zIndex:999,
            },
        }))
            .append($('<input>',{
            type:'tel',
            required:'required',
            name:'form_text_230',
            css:{
                width: '88%',
                padding: '12px 20px 12px 40px',
                border: '1px solid #1132bf',
                borderRadius: '10px',
                fontSize: '20px',
                margin: '10px 0',
                position: 'relative',
                letterSpacing: '4px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
            }
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_246',
            id:'form_hidden_246',
            value:'',
        }))
            .append($('<input>',{
                type:'hidden',
                name:'form_hidden_238',
                id:'form_hidden_238',
                value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_234',
            id:'form_hidden_234',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_239',
            id:'form_hidden_239',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_240',
            id:'form_hidden_240',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_241',
            id:'form_hidden_241',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_242',
            id:'form_hidden_242',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_243',
            id:'form_hidden_243',
            value:'',
        }))
            .append($('<input>',{
            type:'hidden',
            name:'form_hidden_244',
            id:'form_hidden_244',
            value:'',
        }))
            .append($('<button>',{
                text:'Получить выгодное предложение по Trade-In',
                css:{
                    width:'88%',
                    padding: '16px 50px',
                    borderRadius: '5px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    marginTop: '10px',
                    cursor: 'pointer',
                    backgroundColor: '#1132bf',
                    border: 'none',
                },
                on:{
                  click:function(event){
                      eventSendForm();
                  },
                },
            }))
            .append($('<span>',{
                class:'quote',
                text:'Сегодня уже 27 клиентов оставили заявку',
                css:{
                    display: 'block',
                    textAlign: 'center',
                    fontWeight: 'bold',
                },
            }))
            .append($('<p>',{
                css:{
                    marginTop: '30px',
                },
                text:'При отправке заявки вы соглашаетесь ' +
                    'на использование ваших персональных данных. ' +
                    'Конечная цена автомобиля зависит от состояния' +
                    ' Вашего автомобиля и выбранной комплектации и ' +
                    'опций нового автомобиля Hyundai',
            }));




    inputWrapper.appendTo(step1Form);

    step1Form.appendTo(step1Wrapper);

    step3Form.appendTo(step3Wrapper);

    step1Wrapper.appendTo(rightColumn);

    step2Wrapper.appendTo(rightColumn);

    step3Wrapper.appendTo(rightColumn);

    leftColumn.appendTo(widjetTradeInWrapperContent);

    rightColumn.appendTo(widjetTradeInWrapperContent);

    close.appendTo(widjetTradeInWrapperContent);

    backStep.appendTo(widjetTradeInWrapperContent);

    widjetTradeInWrapperContent.appendTo(widjetTradeInWrapper);

    widjetTradeInWrapper.appendTo('body');
}

function onloadCSS(type=''){

    var mainFont=$('body').eq(0).css('font-family');

    var pFont=$('p').eq(0).css('font-family');

    $('.widjetTradeInRightColumn h3').css({
        'fontFamily':mainFont,
    });

    $('.widjetTradeInRightColumn h4').css({
        'fontFamily':mainFont,
    });

    $('.widjetTradeInRightColumn p').css({
        'fontFamily':pFont,
    });

    $('.widjetTradeInSideWindow select').css({
        'fontFamily':mainFont
    });

    $('.widjetTradeInWrapper select').css({
        'fontFamily':mainFont
    });

    $('.step_2 .showroom__cat-item').mouseover(function(){
        $(this).css({
            'opacity' : 1,
        });
    });

    if(type=='Mobile'){
        setTimeout(function(){
            $('#trade-lightwidget-2169cd1510126889707d').css({
                bottom:'30%'
            });
        },2000)//----------Custom code


        $('.widjetTradeInRollUp').css({
            'bottom': '32px',
            'right': '173px',
            'width': '73px',
            'height': '17px',
        });

        $('.widjetTradeInSideWindow').css({
            height:'77px',
        });

        $('.widjetTradeInSideWindow').css({
            bottom:'40%',
        });


        $('.widjetTradeInOpenSideWindowText').css({
            position: 'absolute',
            right: '45px',
            top: '15px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'block',
        });

        $('.widjetTradeInOpenSideWindow div').css({
            display:'none'
        });

        $('.widjetTradeInSideWindow').css({
            width:'150px',
        });

        $('.widjetTradeInWrapper .content').css({
            width:'80%'
        });

        $('.widjetTradeInLeftColumn').css({
            display:'none'
        });

        $('.widjetTradeInRightColumn .step_1,.widjetTradeInRightColumn .step_2,.widjetTradeInRightColumn .step_3').css({
            width:'100%'
        });

        $('#widjetTradeInCalculateResult').css({
            width:'80%',
            padding:'10px 10px',
            textAlign:'center'

        });

        $('.widjetTradeInRightColumn select').css({
            fontSize:'10px !important'
        });

        $('.widjetTradeInRightColumn .step_1').css({
            justifyContent:'center'
        });

        $('.widjetTradeInRightColumn .step_1 h3').css({
            fontSize:'16px'
        });

        $('.widjetTradeInRightColumn .step_2').css({
            padding:'50px 0 20px',
            justifyContent:'center'
        });

        $('.widjetTradeInRightColumn .step_2_item').css({
            width:'80%'
        });

        $('.widjetTradeInWrapper .backStep').css({
            top: '2%',
            left: '5%',
        });

        $('.widjetTradeInRightColumn .step_3').css({
            padding:'10px 5px',
            justifyContent:'center',
            boxSizing:'border-box'
        });

        $('.widjetTradeInRightColumn form').css({
            width:'80%',
        });

        $('.widjetTradeInRightColumn .step_3 h3').css({
            margin:'0',
            marginTop:'20px'
        });

        $('.widjetTradeInRightColumn .step_3 h4').css({
            margin:'0',
            textAlign:'center',
        });

        $('.step_3 form span:first-child').css({
            top: '10px',
            left: '-14px',

        })

        $('.step_3 form button').css({
            width: '100%',
            padding: '10px',
            marginBottom:'10px',
        })

        $('.step_3 p').css({
            marginTop: '0px',
            fontSize: '10px',
        })

        $('.widjetTradeInRightColumn .step_1').css({
            overflowY:'scroll',
            height: '100%',
            alignItems:'flex-start',
        });

        $('.widgetTradeInInputWrapper select').css({
            width:'80%'
        });

        $('#widjetTradeInCalculateResult').css({
            marginBottom:'20px',
        });

        $('.widjetTradeInRightColumn')
            .children('.step_2')
            .children('.step_2_item')
            .last()
            .css({
            paddingBottom:'40px',

        })

    }

}
//-------------------------------------[ events ]

function eventClickRollUpClose(event){

    if($(window).width()<600){

        var windowWidth = 30;

        var windowHeight = 24;



    }else{
        var windowWidth = 120;

        var windowHeight = 50;

    }

    $('.widjetTradeInSideWindow').animate({
        'width':windowWidth,
        'height':windowHeight,
    },800);

    $('.widjetTradeInRollUp').css({
        padding:0,
    });

    $('.widjetTradeInSideWindow span').not('.widjetTradeInOpenSideWindowText').css({
        'display':'none'
    });

    $('.widjetTradeInSideWindow .activeSelect').css({
        'display':'none'
    });

    $('.widjetTradeInRollUp').animate({
       'height':0,
    },800);

    $('.widjetTradeInOpenSideWindow').css({
        'display':'block',
        'borderRadius':'5px 0 0 5px'
    });

    $('.widjetTradeInSideWindow').css({
        'borderRadius':'5px 0 0 5px',
    });

    $('.widjetTradeInOpenSideWindow').animate({
        'opacity':1,
    },800);
};

function eventClickRollUpOpen(event){

    if($(window).width()<600){

        var windowWidth = 150;
        var windowHeight = 77;
        var rollUpHeight = 15;

    }else{
        var windowWidth = 240;
        var windowHeight = 107;
        var rollUpHeight = 36;
    }

    $('.widjetTradeInOpenSideWindow').animate({
        'opacity':0,
    },800);

    $('.widjetTradeInOpenSideWindow').css({
        'display':'none'
    });

    $('.widjetTradeInSideWindow').animate({
        width:windowWidth,
        height:windowHeight,
    },800);

    $('.widjetTradeInRollUp').css({
        padding:'8px 12px',
        height:rollUpHeight,
    });
    setTimeout(function(){

        $('.widjetTradeInSideWindow').css({
            'borderRadius':'none',
        });


        $('.widjetTradeInSideWindow span').css({
            'display':'block'
        });

        $('.widjetTradeInSideWindow .activeSelect').css({
            'display':'block'
        });

        },800)
};

function eventOpenModalWindow(selectValue=null,event=''){

    $('.widjetTradeInWrapper').css({
        'display':'flex'
    });

    $('.widjetTradeInWrapper').animate({
        'opacity':1
    },800);

    if(event !== 'continue'){
        $('#calc1').val(selectValue);

        $('#calc1').prop('disabled',false);

        $('#calc1').css({
            background:'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))'
        });

        changeSelect('1',selectValue);
    }

};

function eventCloseModalWindow(event=''){
    if(event !== 'end'){
        eventContinueToFill();
    }

    if(event == 'end'){

        $('.widjetTradeInSideWindow .continueToFill').removeClass('activeSelect');

        $('.widjetTradeInSideWindow .continueToFill').css({
            display:'none'
        });

        $('.widjetTradeInSideWindow select').addClass('activeSelect');

        $('.widjetTradeInSideWindow select').css({
            display:'block'
        });
    }

    $('.widjetTradeInWrapper').animate({
        'opacity':0
    },800);

    setTimeout(function () {
    $('.widjetTradeInWrapper').css({
        'display':'none'
    });
    },800);

};

function eventContinueToFill(){
    $('.widjetTradeInSideWindow select').css({
        'display':'none'
    });
    $('.widjetTradeInSideWindow .continueToFill').css({
        'display':'block'
    });

    $('.widjetTradeInSideWindow select').removeClass('activeSelect');

    $('.widjetTradeInSideWindow .continueToFill').addClass('activeSelect');
}

function eventStep(prev,next){

    prev.animate({
        right:-700,
    },800);

    setTimeout(function(){
        if(next.hasClass('step_2') || next.hasClass('step_3')){

            $('.backStep').animate({
                opacity:1
            },800);
        }else if(next.hasClass('step_1')){
            $('.backStep').animate({
                opacity:0
            },800);
        }

        next.animate({
            right:0,
        },800);

    },800)
}

function eventBackStep(){
    var prev;
    var next;
    if($('.step_2').css('right')==0||
        $('.step_2').css('right')=='0px'){
        prev = $('.step_2');
        next = $('.step_1');
    }else if($('.step_3').css('right')==0||
        $('.step_3').css('right')=='0px'){
        prev = $('.step_3');
        next = $('.step_2');
    }

    eventStep(prev,next);
}

function eventSendForm(){
    event.preventDefault();

    if($('.step_3 input[name="form_text_230"]').val()==''){
        alert('Заполните поле');

        return false;
    }

    var form_hidden_238=$('.step_1 form select#calc1').val()//Марка
    var form_hidden_234=$('.step_1 form select#calc2').val()//Модель
    var form_hidden_239=$('.step_1 form select#calc3').val()//Год
    var form_hidden_240=$('.step_1 form select#calc4').val()//Поколениe
    var form_hidden_241=$('.step_1 form select#calc5').val()//Двигатель
    var form_hidden_242=$('.step_1 form select#calc6').val()//Привод
    var form_hidden_243=$('.step_1 form select#calc7').val()//Кузов
    var form_hidden_244=$('.step_1 form select#calc8').val()//Пробег

    $('#form_hidden_238').val(form_hidden_238);
    $('#form_hidden_234').val(form_hidden_234);
    $('#form_hidden_239').val(form_hidden_239);
    $('#form_hidden_240').val(form_hidden_240);
    $('#form_hidden_241').val(form_hidden_241);
    $('#form_hidden_242').val(form_hidden_242);
    $('#form_hidden_243').val(form_hidden_243);
    $('#form_hidden_244').val(form_hidden_244);


    var data = $('.step_3 form').serialize();

    var send = ajaxSend('Form',null,data);


    if(send){
        yaCounter33192788.reachGoal("send-tradein");

        $('.widjetTradeInWrapper .backStep').css({
            'opacity':0
        });

        $('.step_3 .answer').text('Ваше сообщение отправлено');

        $('.step_3 .answer').css({
            'display':'flex',
            'backgroundColor':'#0be313'
        });

        $('.step_3 .answer').animate({
            'opacity':0.8
        },800);

        $('.step_1 select')
            .not('#calc1')
            .not('#calc8')
            .children('option')
            .not('option[value="0"]').remove();

        $('.step_1 select')
            .not('#calc1')
            .prop('disabled',true);

        $('.step_1 select').val(0);

        $('.widjetTradeInSideWindowSelect').val(0);

        setTimeout(function(){

            eventCloseModalWindow('end');

            eventStep($('.step_3'),$('.step_1'));

            $('.step_3 .answer').css({
                'display':'none',

            });
        },2000)


    }
    else{

        $('.step_3 .answer').text('Произошла ошибка');

        $('.step_3 .answer').css({
            'display':'flex',
            'backgroundColor':'#e8092e'
        });

        $('.step_3 .answer').animate({
            'opacity':0.4
        },800);
    }

}

function anchor(anchor=''){
    if(anchor !== ''){

        if(window.location.hash.indexOf(anchor)+1){
            eventOpenModalWindow(null,'continue');
            $('#calc1').prop('disabled',false);
            $('#calc1').css({
                background:'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
                boxShadow: 'rgb(255, 0, 0) 0px 0px 10px'
            });
            // yaCounter33192788.reachGoal("open-tradein");
        }else{
            return;
        }

    }else{
        return;
    }
}
//-------------------------------------[ handlers ]

function ajaxSend(type,parameter=null,value=''){

    var result='';

    var data = {};

    var dataType='json';

    var url='http://technical.demento174.ru/content/widjet/tradeIn/calc.php';

    switch(type){
        case 'Models':
            data={
                'oper':1
            };
            break;

        case 'Select':

            data['oper']=Number(parameter)+1;

            if(parameter== '5') {

                data['param1'] = $('select[parameter="5"] option:selected').attr('fuel');
                data['param2'] = $('select[parameter="5"] option:selected').attr('motor');
            }else{
                data['param1']=value;
            }
            break;

        case 'sendCalculate':
            data['oper']=10;
            data['param1'] = value['param1'];
            data['param2'] = Number(value['param2']);
            yaCounter33192788.reachGoal("finish-tradein");
            break;

        case 'Parser':
            dataType='html';
            url='http://technical.demento174.ru/content/widjet/tradeIn/parser/index.php';
            data['url']=value['url'];
            data['element']=value['element'];
            break;

        case 'Form':
            dataType='';
            url='http://technical.demento174.ru/content/widjet/tradeIn/mail.php';
            data=value;
            break;

        default:
            return false;
    };

    $.ajax({
        url: url,
        type: "POST",
        dataType: dataType,
        data: data,
        async: false,
        success:function(success){
            result =  success;
        },
        error:(function(type, xhr, error){
            console.log(type);

            console.debug(xhr);

            console.debug(error);
        })
    });

    if(type=='sendCalculate'){

        return result['result'];

    }else if(type=='Models' || type=='Select' ){

        return result['values'];
    }

    return result;

}

function changeSelect(parameter=null,value=''){

    if(value == 0){
        return false;
    }

    var nextSelect = $('.widgetTradeInInputWrapper select[parameter="'+(Number(parameter)+1)+'"]');

    var prevSelect=$('.widgetTradeInInputWrapper select[parameter="'+Number(parameter)+'"]');

    if(nextSelect){


        nextSelect.prop('disabled',false);

        prevSelect.css({
            boxShadow:'none',
        });

        nextSelect.css({
            background:'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
            boxShadow:'0 0 10px rgb(255,0,0)',
        });
        if(parameter>=4){
            if($(window).width()<600){

                var positionElementToTop = nextSelect.position().top;

                $('.widjetTradeInRightColumn .step_1').animate({
                    scrollTop:positionElementToTop,

                },800)
            }
        }
    }

    if(parameter < 7){
        var answer =  ajaxSend('Select',parameter,value);

        if(answer == undefined){
            alert('К сожалению, расчет стоимости ' +
                'указанного автомобиля невозможен, выберите ' +
                'ближайшую комплектацию');
            return false;
        }

        nextSelect.children('option').not('option[value="0"]').remove();


        $.each(answer,function(key,value){

            if(nextSelect.is('#calc5')){
                var valueArray = value.split('/');

                valueArray[2] = valueArray[2].replace(/^\s*/,'').replace(/\s*$/,'');

                var transmission='';

                switch (valueArray[2]){
                    case 'автомат':
                        transmission='AT';
                        break;

                    case 'робот':
                        transmission='AMT';
                        break;

                    default:
                        transmission='MT';
                        break;
                }

                var motor=valueArray[1].replace(/^\s*/,'')+transmission+' ('+valueArray[3].replace(/^\s*/,'').replace(/\s*$/,'')+')';

                $('<option>',{
                    text:value,
                    value:value,
                    fuel:valueArray[0].replace(/\s*$/,''),
                    motor:motor,
                }).appendTo(nextSelect);

            }else{

                $('<option>',{
                    text:value,
                    value:value
                }).appendTo(nextSelect);
            }

            if(answer.length == 1){

                nextSelect.css({
                    boxShadow:'none',
                });

                nextSelect.val(value);

                nextSelect.trigger( "change" );
            }
        });
    }

}

function calculateForm(){
    let error = false;

    var select = $('.widgetTradeInInputWrapper  select');

    $.each(select,function(index,value){

        if(select.eq(index).val() == 0){
            alert('Пожайлуста заполните все поля');
            error=true;

            return false;
        }
    });

    if(error==true){
        return false;
    }

    var data=[];

    data['param1']=$('#calc7').val();
    data['param2']=$('#calc8').val();

    var calculateResult=ajaxSend('sendCalculate',null,data);

    var oldPrice=$('.step_2 .showroom__cat-item-price');

    $.each(oldPrice,function (index,value) {

        var newPrice=parseInt(oldPrice.eq(index).text().replace(/\s+/g,''))-calculateResult;

        if(newPrice<0){
            newPrice=0;
        }else{
            newPrice=String(newPrice);

            switch(newPrice.length){
                case 7:
                    newPrice=newPrice.slice(0, 1) + ' ' + newPrice.slice(1,4) + ' ' + newPrice.slice(4,20);
                    break;

                case 6:
                    newPrice=newPrice.slice(0, 3) + ' ' + newPrice.slice(3,6);
                    break;

                case 5:
                    newPrice=newPrice.slice(0, 2) + ' ' + newPrice.slice(2,6);
                    break;

                default:
                    newPrice==newPrice;
            }

        }



        $('.step_2_item').eq(index).children('.newPrice').html('от '+newPrice+' ₽')
    });

    eventStep($('.step_1'),$('.step_2'));
}

function parserPrice(element,url){

    var data =[];
    data['url'] = url;
    data['element'] = element;

    var element=ajaxSend('Parser',null,data);

    $('.step_2').html(element);

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
