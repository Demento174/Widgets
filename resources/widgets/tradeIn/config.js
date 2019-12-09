import EventRollUpClose  from  "./src/Events/EventRollUpClose";
import EventRollUpOpen from "./src/Events/EventRollUpOpen";
import EventOpenModalWindow from "./src/Events/EventOpenModalWindow";
import Animations from "../../js/modules/Animations";
import EventCloseModalWindow from "./src/Events/EventCloseModalWindow";
import SelectChangeController from "./src/Events/SelectChangeController";
import EventBackStep from "./src/Events/EventBackStep";
import EventNextStep from "./src/Events/EventNextStep";
import EventCarSelection from "./src/Events/EventCarSelection";
import EventSendForm from "./src/Events/EventSendForm";

export const AjaxUri = 'http://carsdb/widget/trade-in';

export  const mobileSize = 600;

export  const actions =
    {
        'mark':'getMarks',
        'model':'getModels',
        'year':'getYear',
        'carGeneration':'getCarGeneration',
        'engine':'getEngine',
        'wheelDriveCar':'getWheelDriveCar',
        'body':'getBody',
        'mileage':'getMileage',
        'price':'getPrice',
        'cars':'getParserCars',
        'form':'sendMail'
    };

export  const ElementsConfig =
    {
        classes:
            {
                sideWindowFront :
                    {
                        wrapper:"widjetTradeInSideWindow",
                        select: "widjetTradeInSideWindowSelect",
                        buttonContinue:"continueToFill",
                        buttonTurn:"widjetTradeInRollUp",
                        turnWrapper:"widjetTradeInOpenSideWindow",
                        turnText: "widjetTradeInOpenSideWindowText",
                    },
                modalWindow:
                    {
                        wrapper: 'widjetTradeInWrapper',
                        content: 'content',
                        leftColumn:'widjetTradeInLeftColumn',
                        rightColumn:'widjetTradeInRightColumn',
                        step_1:'step_1',
                        selectWrapper:'widgetTradeInInputWrapper',
                        buttonWrapper:'widjetTradeInButtonWrapper',
                        buttonCalculate:"widjetTradeInButtonDisabled",
                        step_2:'step_2',
                        step_3:'step_3',
                        close:'widjetTradeInClose',
                        backStep:'backStep',
                        answer:'answer',
                        quote:'quote',
                        select:
                            {
                                mark:'mark',
                                model:'model',
                                year:'year',
                                carGeneration:'carGeneration',
                                engine:'engine',
                                wheelDriveCar:'wheelDriveCar',
                                body:'body',
                                mileage:'mileage',
                            },
                        carCard:'tradeIn-carCard',
                        carCardImgWrapper:'tradeIn-carCard-img-wrapper',
                        carCardTitle:'tradeIn-carCard-title',
                        carCardEquipment:'tradeIn-carCard-Equipment',
                        carCardPrice:'tradeIn-carCard-Price',
                        carCardPriceOld:'tradeIn-carCard-PriceOld',
                        carCardPriceNew:'tradeIn-carCard-PriceNew',
                        carCardButton:'tradeIn-carCard-Button',
                        step_3ContentTradeInCar:'titleTradeInCar',
                        step_3ContentParserCar:'titleParserCar',
                        step_3ContentPrice:'tradeInNewPrice',
                    },
            },
        styles:
            {
                selects:
                    {
                        enabled:
                            {
                                background  : 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
                            },
                        disabled:
                            {
                                background: 'rgb(218,218,218)',
                            },
                    },
            },
        settings:
            {
                step:800,
                stepUnit:'px',
            },
        attributes:
            {
                cardPrice:'data-price'
            },
    };

export  const events =
    {
        rollUpClose:
            {
                handler:EventRollUpClose,
                settings          :
                    [
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.buttonTurn}`,
                            styles      :
                                {
                                    display:"none",
                                    padding:"0",
                                    opacity:"0"
                                },
                            events  :
                                [
                                    {
                                        trigger: 'mouseenter',
                                        handler: (options)=>{Animations.prototype.switchOpacity(document.querySelector(options.selector),{opacity:1})},
                                        options:
                                            {
                                                selector:`.${ElementsConfig.classes.sideWindowFront.buttonTurn}`
                                            }
                                    }
                                ]
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.wrapper}`,
                            styles:
                                {
                                    opacity     :'0.3',
                                    borderRadius:'5px 0 0 5px'
                                },
                            events:
                                [
                                    {
                                        trigger:'mouseover',
                                        target:`.${ElementsConfig.classes.sideWindowFront.wrapper}`,
                                        handler:(options)=>{
                                            document.querySelector(options.target).style.opacity = 1},
                                        options:
                                            {
                                                target:`.${ElementsConfig.classes.sideWindowFront.wrapper}`
                                            },
                                    },
                                    {
                                        trigger:'mouseout',
                                        target:`.${ElementsConfig.classes.sideWindowFront.wrapper}`,
                                        handler:(options)=>{
                                            document.querySelector(options.target).style.opacity = 0.3},
                                        options:
                                            {
                                                target:`.${ElementsConfig.classes.sideWindowFront.wrapper}`
                                            },
                                    }
                                ],
                            animates:
                                [
                                    {
                                        title   : 'changeWidthAndHeight',
                                        options :
                                            {
                                                width   : '120px',
                                                height  : '50px'
                                            }
                                    }
                                ]

                        },

                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.wrapper} span:not(.${ElementsConfig.classes.sideWindowFront.turnWrapper})`,
                            styles      :
                                {
                                    display: 'none',
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.select}`,
                            styles      :
                                {
                                    display: 'none'
                                },
                        },
                        {
                        selector    : `.${ElementsConfig.classes.sideWindowFront.turnWrapper}`,
                        styles      :
                            {
                                display:'block',
                            },
                        animates:
                            [
                                {
                                    title   :'switchOpacity',
                                    options :
                                        {
                                            opacity   : '1',
                                        }
                                }
                            ]
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.turnText}`,
                            styles      :
                                {
                                    right   : '50px',
                                    top     : "26px"
                                },
                        },
                    ],
            },

        rollUpOpen:
            {
                handler:EventRollUpOpen,
                settings          :
                    [
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.turnWrapper}`,
                            styles      :
                                {
                                  display:'none'
                                },
                            animates:
                                [
                                    {
                                        title   :'switchOpacity',
                                        options :
                                            {
                                                opacity   : '0',
                                            }
                                    }
                                ]
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.wrapper}`,
                            styles      :
                                {
                                    borderRadius: '0 5px 5px 0',
                                    padding     : '10px 30px',
                                },
                            animates:
                                [
                                    {
                                        title   :'changeWidthAndHeight',
                                        options :
                                            {
                                                width   : '240px',
                                                height  : "85px"
                                            }
                                    },
                                    {
                                        title   :'switchOpacity',
                                        options :
                                            {
                                                opacity   : '1',
                                            }
                                    }
                                ]

                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.wrapper} span:not(.${ElementsConfig.classes.sideWindowFront.buttonTurn})`,
                            styles      :
                                {
                                    display: 'block',
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.select}`,
                            styles      :
                                {
                                    display: 'block',
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.buttonTurn}`,
                            styles      :
                                {
                                    display:'block',
                                    padding:'10px',
                                },
                            animates    :
                                [
                                    {
                                        title   : "switchOpacity",
                                        options :
                                            {
                                                delay   : "300",
                                                opacity : "1"
                                            }
                                    }
                                ],

                        },
                    ],
            },

        openModalWindow:
            {
                handler:EventOpenModalWindow,
                settings          :
                    [
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.wrapper}`,
                            styles      :
                                {
                                    display:'flex'
                                },
                            animates:
                                [
                                    {
                                        title   :'switchOpacity',
                                        options :
                                            {
                                                opacity   : '1',
                                            }
                                    }
                                ]
                        },
                    ],
            },
        closeModalWindow:
            {
                handler:EventCloseModalWindow,
                settings          :
                    [
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.wrapper}`,
                            animates:
                                [
                                    {
                                        title   :'switchOpacity',
                                        options :
                                            {
                                                opacity   : '0',
                                            }
                                    }
                                ]
                        },
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.wrapper}`,
                            styles      :
                                {
                                    display:'none'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.select}`,
                            styles      :
                                {
                                    display:'none'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.buttonContinue}`,
                            styles      :
                                {
                                    display:'block'
                                },
                        }
                    ],
            },
        selectItem:
            {
                handler:SelectChangeController,
                settings:
                    [
                        {

                        }
                    ],
            },
        backStep:
            {
                handler: EventBackStep,
                activeElement:'[data-active="active"]',
                settings:
                    [
                        {

                        }
                    ],
            },
        carSelection:
            {
                trigger:'click',
                handler: (options)=>{ return new EventCarSelection(options)},
                // settings:
                //     [
                //         {
                //
                //         }
                //     ],
                options:{},
            },
        sendForm:
            {
                handler:EventSendForm,
                settings:
                    [
                        {

                        }
                    ]
            },
        clearWidget:
            {
                settings:
                    [
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.wrapper}`,

                            animates:
                                [
                                    {
                                        title   :'switchOpacity',
                                        options :
                                            {
                                                opacity   : '0',
                                            }
                                    }
                                ],
                            styles      :
                                {
                                    display:'none'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.step_1}`,

                            attributes:
                                [
                                    {
                                        title   : 'data-active',
                                        value   : 'active'
                                    }
                                ],
                            styles      :
                                {
                                    transform:'translateX(0px)'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.step_2}`,

                            attributes:
                                [
                                    {
                                        title   : 'data-active',
                                        value   : 'disabled'
                                    }
                                ],
                            styles      :
                                {
                                    transform:'translateX(0px)'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.modalWindow.step_3}`,

                            attributes:
                                [
                                    {
                                        title   : 'data-active',
                                        value   : 'disabled'
                                    }
                                ],
                            styles      :
                                {
                                    transform:'translateX(800px)'
                                },
                        },
                        {
                            selector    : `.${ElementsConfig.classes.sideWindowFront.select}`,

                            settings:
                                {
                                    value:'0'
                                }
                        },
                    ],
            }
    };

export  const Elements =
    {
        sideWindowFront :
            [
                {
                    tag: "div",
                    class: ElementsConfig.classes.sideWindowFront.wrapper,
                    styles:
                        {
                            display         : 'flex',
                            flexDirection   : 'column',
                            justifyContent  : 'center',
                            padding         : '10px 30px',
                            background      : 'rgb(17, 50, 191)',
                            color           : '#fff',
                            borderRadius    : '0px 5px 5px 0px',
                            marginBottom    : '10px',
                            position        : 'fixed',
                            width           : '240px',
                            height          : '85px',
                            zIndex          : '999',
                            right           : '0',
                            top             : '16%'
                        },
                    internalElements:
                        [
                            {
                                tag: "span",
                                styles:
                                    {
                                        textAlign       : 'center',
                                        marginBottom    : '10px',
                                        fontSize        : '14px'
                                    },
                                settings:
                                    {
                                        innerText: "Предложение по TRADE-IN за 1 минуту",
                                    },
                            },
                            {
                                tag: "select",
                                class: ElementsConfig.classes.sideWindowFront.select,
                                styles:
                                    {
                                        background  : ElementsConfig.styles.selects.enabled.background,
                                        borderRadius: '3px',
                                        width       : '100%',
                                        padding     : '5px 10px',
                                        color       : '#000000',
                                    },
                                events:
                                    [
                                        {
                                            trigger:'change',
                                            handler: (options)=>{ return new events.openModalWindow.handler(options)},
                                            options:
                                                {
                                                    settings:events.openModalWindow.settings,
                                                },
                                        }
                                    ],
                                internalElements:
                                    [
                                        {

                                            tag: 'option',
                                            settings:
                                                {
                                                    value: "0",
                                                    innerText: "Модель",
                                                    selected: true,
                                                },

                                        }
                                    ],
                            },
                            {
                                tag: "button",
                                class: ElementsConfig.classes.sideWindowFront.buttonContinue,
                                styles:
                                    {
                                        display     :'none',
                                        background  : 'linear-gradient(rgb(255, 255, 255), rgb(218, 218, 218))',
                                        borderRadius: '3px',
                                        width       : '100%',
                                        padding     : '5px 10px',
                                        color       : 'rgb(0, 0, 0)',
                                    },
                                settings:
                                    {
                                        innerText:"Продолжить",
                                    },
                                events:
                                    [
                                        {
                                            trigger:'click',
                                            handler: (options)=>{ return new events.openModalWindow.handler(options)},
                                            options:
                                                {
                                                    settings:events.openModalWindow.settings,
                                                },
                                        }
                                    ],
                            },
                            {
                                tag: "button",
                                class: ElementsConfig.classes.sideWindowFront.buttonTurn,
                                styles:
                                    {
                                        position        : 'absolute',
                                        color           : 'rgb(0, 0, 0)',
                                        background      : 'rgb(239, 239, 239)',
                                        bottom          : '32%',
                                        right           : '265px',
                                        padding         : '8px 12px',
                                        fontSize        : '13px',
                                        borderRadius    : '0px 0px 5px 5px',
                                        cursor          : 'pointer',
                                        fontFamily      : 'Roboto',
                                        width           : '105px',
                                        height          : '36px',
                                        overflow        :'hidden',
                                        transform       : 'rotate(90deg)',
                                        alignItems      : 'center',
                                        justifyContent  : 'center',
                                        textAlign       :'center',
                                        border          : "none",
                                    },
                                settings:
                                    {
                                        innerText:"Свернуть",
                                    },
                                events:
                                    [
                                        {
                                            trigger: "click",
                                            handler: (options)=>{return new events.rollUpClose.handler(options)},
                                            options: events.rollUpClose.settings
                                        }
                                    ]
                            },
                            {
                                tag: "div",
                                class: ElementsConfig.classes.sideWindowFront.turnWrapper,
                                styles:
                                    {
                                        display :'none',
                                        position:'absolute',
                                        width   :'100%',
                                        height  :'100%',
                                        padding :'10px',
                                        opacity :'0',
                                        top     :'0',
                                        left    :'0',
                                    },

                                internalElements:
                                    [
                                        {
                                            tag: 'div',
                                            styles:
                                                {
                                                    height      : '25px',
                                                    width       : '25px',
                                                    borderTop   : '6px solid rgb(239, 239, 239)',
                                                    borderLeft  : '6px solid rgb(239, 239, 239)',
                                                    transform   : 'rotate(-45deg)',
                                                    position    : 'absolute',
                                                    top         : '25%',
                                                    left        : '20%',
                                                    cursor      : 'pointer',
                                                },
                                            animates:
                                                [
                                                    {
                                                        title   :'moveLeftRight',
                                                        options :
                                                            {
                                                                translateX   : '15%',
                                                            }
                                                    }
                                                ],
                                            events:
                                                [
                                                    {
                                                        trigger:'click',
                                                        handler: (options)=>{return new events.rollUpOpen.handler(options)},
                                                        options: events.rollUpOpen.settings
                                                    }
                                                ],
                                        },
                                        {
                                            tag: 'span',
                                            class: "widjetTradeInOpenSideWindowText",
                                            styles:
                                                {
                                                    position: 'absolute',
                                                    right   : '10px',
                                                    top     : '16px',
                                                    cursor  : 'pointer',
                                                },
                                            settings:
                                                {
                                                    innerText: "TRADE-IN",
                                                },
                                        },

                                    ]
                            },
                        ],
                }
            ],

        modalWindow     :
            [
                {
                    tag     : 'div',
                    class   : ElementsConfig.classes.modalWindow.wrapper,
                    styles  :
                        {
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
                        },
                    internalElements:
                        [
                            {
                                tag:'div',
                                class:ElementsConfig.classes.modalWindow.content,
                                styles:
                                    {
                                        width: '900px',
                                        minHeight: '500px',
                                        backgroundColor: 'rgba(255,255,255,1)',
                                        borderRadius: '5px',
                                        position: 'relative',
                                        display: 'flex',
                                    },
                                internalElements:
                                    [
                                        {
                                            tag:'div',
                                            class:ElementsConfig.classes.modalWindow.leftColumn,
                                            styles:
                                                {
                                                    backgroundColor: '#1132bf',
                                                    color: '#ffffff',
                                                    padding: '10px',
                                                    borderRadius: '5px 0 0 5px',
                                                    position: 'relative',
                                                    width: '200px',
                                                },
                                            internalElements:
                                                [
                                                    {
                                                        tag:'span',
                                                        styles:
                                                            {
                                                                position: 'absolute',
                                                                border: '10px solid #1132bf',
                                                                borderTopColor: 'transparent',
                                                                borderBottomColor: 'transparent',
                                                                right: '-20px',
                                                                borderRightColor: 'transparent',
                                                                top: '30px',
                                                            },
                                                    },
                                                    {
                                                        tag:'span',
                                                        styles:
                                                            {
                                                                textAlign: 'center',
                                                                display: 'block',
                                                                fontSize: '18px',
                                                                fontWeight: 'bold',
                                                            },
                                                        settings:
                                                            {
                                                                innerText:"Расчёт по TRADE-IN за 1 минуту"
                                                            }
                                                    }
                                                ]
                                        },
                                        {
                                            tag:'div',
                                            class:ElementsConfig.classes.modalWindow.rightColumn,
                                            styles:
                                                {
                                                    width: '700px',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                },
                                            internalElements:
                                                [
                                                    {
                                                        tag:'div',
                                                        class:ElementsConfig.classes.modalWindow.step_1,
                                                        styles:
                                                            {
                                                                position: 'absolute',
                                                                width: '100%',
                                                                height: '100%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                top:0,
                                                                right:0,
                                                            },
                                                        attributes:
                                                            [
                                                                {
                                                                    title:'data-active',
                                                                    value:'active'
                                                                }
                                                            ],
                                                        internalElements:
                                                            [
                                                                {
                                                                    tag:'form',
                                                                    internalElements:
                                                                        [
                                                                            {
                                                                                tag:'h3',
                                                                                styles:
                                                                                    {
                                                                                        fontSize: '20px',
                                                                                        fontWeight: 'bold',
                                                                                        textAlign: 'center',
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:"ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ ПО ТРЕЙД-ИН ЗА 1 МИНУТУ БЕЗ ПОЕЗДКИ В АВТОСАЛОН И ОБЩЕНИЯ С МЕНЕДЖЕРОМ"
                                                                                    }

                                                                            },
                                                                            {
                                                                                tag:"h4",
                                                                                styles:
                                                                                    {
                                                                                        fontSize: '14px',
                                                                                        textAlign: 'center',
                                                                                        marginBottom: '15px',
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:'ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ ПО ТРЕЙД-ИН ЗА 1 МИНУТУ БЕЗ ПОЕЗДКИ В АВТОСАЛОН И ОБЩЕНИЯ С МЕНЕДЖЕРОМ'
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'div',
                                                                                class:ElementsConfig.classes.modalWindow.selectWrapper,
                                                                                styles:
                                                                                    {
                                                                                        display: 'flex',
                                                                                        flexWrap: 'wrap',
                                                                                        justifyContent: 'space-around',
                                                                                    },
                                                                                internalElements:
                                                                                    [
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.mark,
                                                                                            styles:
                                                                                                {
                                                                                                    background: ElementsConfig.styles.selects.disabled.background,
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'model',
                                                                                                    disabled:'disabled',
                                                                                                    title:"mark",
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Марка',
                                                                                                                value:'0'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.model,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'year',
                                                                                                    disabled:'disabled',
                                                                                                    title:"model",
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Модель',
                                                                                                                value:'0'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.year,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'carGeneration',
                                                                                                    disabled:'disabled',
                                                                                                    title:"year",
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Год',
                                                                                                                value:'0',

                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.carGeneration,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'engine',
                                                                                                    disabled:'disabled',
                                                                                                    title:"carGeneration",
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Поколение',
                                                                                                                value:'0',

                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.engine,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'wheelDriveCar',
                                                                                                    disabled:'disabled',
                                                                                                    title:'engine'
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Двигатель',
                                                                                                                value:'0',

                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.wheelDriveCar,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'body',
                                                                                                    disabled:'disabled',
                                                                                                    title:"wheelDriveCar",
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Привод',
                                                                                                                value:'0'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.body,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'mileage',
                                                                                                    disabled:'disabled',
                                                                                                    title:'body'
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Кузов',
                                                                                                                value:'0'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'select',
                                                                                            class:ElementsConfig.classes.modalWindow.select.mileage,
                                                                                            styles:
                                                                                                {
                                                                                                    background: 'rgb(218,218,218)',
                                                                                                    borderRadius: '3px',
                                                                                                    width: '40%',
                                                                                                    padding: '5px 10px',
                                                                                                    display: 'block',
                                                                                                    marginBottom: '12px',
                                                                                                    color:'#000000',
                                                                                                },
                                                                                            settings:
                                                                                                {
                                                                                                    value:0,
                                                                                                    action:'price',
                                                                                                    disabled:'disabled',
                                                                                                    title:'mileage'
                                                                                                },
                                                                                            events:
                                                                                                [
                                                                                                    {
                                                                                                        trigger:'change',
                                                                                                        handler: (options)=>{ return new events.selectItem.handler(options)},
                                                                                                        options:
                                                                                                            {
                                                                                                                settings:events.selectItem.settings,
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'option',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:'Пробег',
                                                                                                                value:'0'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'div',
                                                                                            class:ElementsConfig.classes.modalWindow.buttonWrapper,
                                                                                            styles:
                                                                                                {
                                                                                                    width: '100%',
                                                                                                    display: 'flex',
                                                                                                    justifyContent: 'center',
                                                                                                },
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:"div",
                                                                                                        id:"widjetTradeInCalculateResult",
                                                                                                        class:ElementsConfig.classes.modalWindow.buttonCalculate,
                                                                                                        styles:
                                                                                                            {
                                                                                                                padding: '10px 40px',
                                                                                                                borderRadius: '5px',
                                                                                                                color: '#ffffff',
                                                                                                                textTransform: 'uppercase',
                                                                                                                marginTop: '10px',
                                                                                                                cursor: 'pointer',
                                                                                                                backgroundColor: '#1132bf',
                                                                                                            },
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:"Оценить прямо сейчас!"
                                                                                                            }
                                                                                                    }
                                                                                                ]
                                                                                        }
                                                                                    ]
                                                                            }
                                                                        ]
                                                                }
                                                            ]
                                                    },
                                                    {
                                                        tag:"div",
                                                        class:ElementsConfig.classes.modalWindow.step_2,
                                                        styles:
                                                            {
                                                                position: 'absolute',
                                                                // width: '585px',
                                                                width: '85%',
                                                                height: '85%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                top:0,
                                                                right:'-800px',
                                                                padding: '50px',
                                                                paddingBottom: '20px',
                                                                flexWrap: 'wrap',
                                                                justifyContent: 'space-around',
                                                                overflowY: 'scroll',
                                                            },
                                                        attributes:
                                                            [
                                                                {
                                                                    title:'data-active',
                                                                    value:'disabled'
                                                                }
                                                            ],
                                                        internalElements:
                                                            [
                                                                {
                                                                    tag: "div",
                                                                    class:ElementsConfig.classes.modalWindow.carCard,
                                                                    styles:
                                                                        {
                                                                            display         : 'flex',
                                                                            flexDirection    : 'column',
                                                                            width           : '20%',
                                                                            height          : 'auto',
                                                                            padding         : '5%'
                                                                        },
                                                                    internalElements:
                                                                        [
                                                                            {
                                                                                tag:'div',
                                                                                class:ElementsConfig.classes.modalWindow.carCardImgWrapper,
                                                                                styles:
                                                                                    {
                                                                                        overflow:'hidden',
                                                                                    },
                                                                                internalElements:
                                                                                    [
                                                                                        {
                                                                                            tag: "img",
                                                                                            settings:
                                                                                                {
                                                                                                    src:''
                                                                                                },
                                                                                            styles:
                                                                                                {
                                                                                                    maxWidth:'100%'
                                                                                                }
                                                                                        },
                                                                                    ]
                                                                            },

                                                                            {
                                                                                tag: "span",
                                                                                class:ElementsConfig.classes.modalWindow.carCardTitle,
                                                                                styles:
                                                                                    {
                                                                                        textAlign:'center'
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:'Car'
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag: "span",
                                                                                class:ElementsConfig.classes.modalWindow.carCardEquipment,
                                                                                styles:
                                                                                    {
                                                                                        textAlign:'center'
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:'equipment'
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag: "div",
                                                                                class:ElementsConfig.classes.modalWindow.carCardPrice,
                                                                                styles:
                                                                                    {
                                                                                        display:'flex',
                                                                                        flexDirection:'column',
                                                                                        alignItems:'center'
                                                                                    },
                                                                                internalElements:
                                                                                    [
                                                                                        {
                                                                                            tag:'div',
                                                                                            class:ElementsConfig.classes.modalWindow.carCardPriceOld,
                                                                                            styles:
                                                                                                {
                                                                                                    textDecoration:'line-through',
                                                                                                    textAlign:'center',
                                                                                                },
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'span',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:''
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        tag:'span',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:' руб'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                        {
                                                                                            tag:'div',
                                                                                            class:ElementsConfig.classes.modalWindow.carCardPriceNew,
                                                                                            styles:
                                                                                                {
                                                                                                    textAlign:'center',
                                                                                                    fontWeight:'bold',
                                                                                                },
                                                                                            internalElements:
                                                                                                [
                                                                                                    {
                                                                                                        tag:'span',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:''
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        tag:'span',
                                                                                                        settings:
                                                                                                            {
                                                                                                                innerText:' руб'
                                                                                                            },
                                                                                                    }
                                                                                                ],
                                                                                        },
                                                                                    ],
                                                                            },
                                                                            {
                                                                                tag: "button",
                                                                                class:ElementsConfig.classes.modalWindow.carCardButton,
                                                                                styles:
                                                                                    {
                                                                                        width:'90%',
                                                                                        margin:'2px auto',
                                                                                        textAlign:'center',
                                                                                        background:'#1132bf',
                                                                                        border  : '0',
                                                                                        padding: '8px',
                                                                                        color: '#ffffff',
                                                                                        borderRadius: '8px',
                                                                                        cursor: 'pointer',
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:'Обменять',
                                                                                    },
                                                                            }
                                                                        ],
                                                                },
                                                            ],
                                                    },
                                                    {
                                                        tag:"div",
                                                        class:ElementsConfig.classes.modalWindow.step_3,
                                                        styles:
                                                            {
                                                                position: 'absolute',
                                                                // width: '700px',
                                                                width: '85%',
                                                                height: '100%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                top:0,
                                                                right:'-800px',
                                                                padding: '10px 50px',
                                                                flexWrap: 'wrap',
                                                                justifyContent: 'center',
                                                                overflowY: 'hidden',
                                                            },
                                                        attributes:
                                                            [
                                                                {
                                                                    title:'data-active',
                                                                    value:'disabled'
                                                                }
                                                            ],
                                                        internalElements:
                                                            [
                                                                {
                                                                    tag:'h3',
                                                                    styles:
                                                                        {
                                                                            fontSize: '19px',
                                                                            fontWeight: '200',
                                                                            textAlign: 'center',
                                                                            textTransform:'uppercase',
                                                                        },
                                                                    settings:
                                                                        {
                                                                            innerHTML:`СДАЙТЕ ВАШ АВТОМОБИЛЬ <span class="${ElementsConfig.classes.modalWindow.step_3ContentTradeInCar}"></span> В TRADE-IN И ПРИОБРЕТИТЕ НОВЫЙ <span class="${ElementsConfig.classes.modalWindow.step_3ContentParserCar}"></span> от <span class="${ElementsConfig.classes.modalWindow.step_3ContentPrice}"></span>`,
                                                                        },
                                                                },
                                                                {
                                                                tag:'h4',
                                                                    styles:
                                                                        {
                                                                            fontSize: '14px',
                                                                            fontWeight: 'bold',
                                                                            marginBottom: '15px',
                                                                        },
                                                                settings:
                                                                    {
                                                                        innerText:"ОСТАВЬТЕ ТЕЛЕФОН, ЧТОБЫ ПОЛУЧИТЬ ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ ПО TRADE-IN",
                                                                    },
                                                                },
                                                                {
                                                                    tag:'span',
                                                                    class:ElementsConfig.classes.modalWindow.answer,
                                                                    styles:
                                                                        {
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
                                                                    settings:
                                                                        {
                                                                            innerText:"Ваше сообщение отправлено",
                                                                        },
                                                                },
                                                                {
                                                                    tag:'form',
                                                                    styles:
                                                                        {
                                                                            width: 'auto',
                                                                            height: 'auto',
                                                                            position: 'relative',
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                        },
                                                                    internalElements:
                                                                        [
                                                                            {
                                                                                tag:'span',
                                                                                styles:
                                                                                    {
                                                                                        fontSize: '30px',
                                                                                        position: 'absolute',
                                                                                        backgroundColor: 'transparent',
                                                                                        opacity: '0.5',
                                                                                        top: '16px',
                                                                                        left: '42px',
                                                                                        zIndex:999,
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        innerText:"📞"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                styles:
                                                                                    {
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
                                                                                    },
                                                                                settings:
                                                                                    {
                                                                                        type:"tel",
                                                                                        required:"required",
                                                                                        name:"form_text_230"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_mark"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_model"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_year"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_carGeneration"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_engine"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_wheelDriveCar"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_body"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'input',
                                                                                settings:
                                                                                    {
                                                                                        type:"hidden",
                                                                                        name:"_mileage"
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'button',
                                                                                styles:
                                                                                    {
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
                                                                                settings:
                                                                                    {
                                                                                        innerText:"Получить выгодное предложение по Trade-In",
                                                                                    },
                                                                                events:
                                                                                    [
                                                                                        {
                                                                                            trigger:'click',
                                                                                            handler: (options)=>{ return new events.sendForm.handler(options)},
                                                                                            options:
                                                                                                {
                                                                                                    settings:events.sendForm.settings,
                                                                                                },
                                                                                        }
                                                                                    ],
                                                                            },
                                                                            {
                                                                                tag:'span',
                                                                                class:'quote',
                                                                                styles:{
                                                                                    display: 'block',
                                                                                    textAlign: 'center',
                                                                                    fontWeight: 'bold',
                                                                                },
                                                                                settings:
                                                                                    {
                                                                                        innerText:"Сегодня уже 27 клиентов оставили заявку",
                                                                                    }
                                                                            },
                                                                            {
                                                                                tag:'p',
                                                                                styles:{
                                                                                    marginTop: '30px',
                                                                                },
                                                                                settings:
                                                                                    {
                                                                                        innerText:"При отправке заявки вы соглашаетесь на использование ваших персональных данных. Конечная цена автомобиля зависит от состояния Вашего автомобиля и выбранной комплектации и опций нового автомобиля Hyundai",
                                                                                    }
                                                                            },
                                                                        ]
                                                                }
                                                            ]
                                                    }
                                                ]
                                        },
                                        {
                                            tag:"span",
                                            class:ElementsConfig.classes.modalWindow.close,
                                            styles:
                                                {
                                                    borderRadius: '50%',
                                                    width: '40px',
                                                    height: '40px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    opacity: '0.5',
                                                    right: '20px',
                                                    position: 'absolute',
                                                    top: '5px',
                                                    cursor: 'pointer',
                                                    zIndex: '99999',
                                                },
                                            events:
                                                [
                                                    {
                                                        trigger:'click',
                                                        handler: (options)=>{ return new events.closeModalWindow.handler(options)},
                                                        options:
                                                            {
                                                                settings:events.closeModalWindow.settings,
                                                            },
                                                    }
                                                ],
                                            internalElements:
                                                [
                                                    {
                                                        tag:"span",
                                                        styles:
                                                            {
                                                                width: '80%',
                                                                height: '2px',
                                                                backgroundColor: '#000000',
                                                                transform: 'rotate(45deg)',
                                                                borderRadius: '2px',
                                                                right: '5px',
                                                                position: 'absolute',
                                                            },
                                                    },
                                                    {
                                                        tag:"span",
                                                        styles:
                                                            {
                                                                width: '80%',
                                                                height: '2px',
                                                                backgroundColor: '#000000',
                                                                transform: 'rotate(-45deg)',
                                                                borderRadius: '2px',
                                                                right: '5px',
                                                                position: 'absolute',
                                                            },
                                                    }
                                                ]
                                        },
                                        {
                                            tag:"span",
                                            class:ElementsConfig.classes.modalWindow.backStep,
                                            styles:
                                                {
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
                                            events:
                                                [
                                                    {
                                                        trigger:'click',
                                                        handler: (options)=>{ return new events.backStep.handler(options)},
                                                        options:
                                                            {
                                                                element:events.backStep.activeElement,
                                                            },
                                                    }
                                                ],
                                            internalElements:
                                                [
                                                    {
                                                        tag:"span",
                                                        styles:
                                                            {
                                                                width:'20px',
                                                                height:'20px',
                                                                border:'2px solid #ffffff',
                                                                borderTop:'none',
                                                                borderRight:'none',
                                                                transform:'rotate(45deg)',
                                                                position: 'absolute',
                                                                left: '16px',
                                                            },
                                                    },
                                                ]
                                        }
                                    ]
                            }
                        ]
                }
            ],

    };

export  const mobileSettings =
    {
        sideWindowFront:
            [
                {
                    // selector    :`.${Elements.sideWindowFront.class}`,
                    styles      :
                        [
                            {
                                style   : 'width',
                                value   : '120px'
                            },
                            {
                                style   : 'height',
                                value   : '50px'
                            },
                            {
                                style   : 'padding',
                                value   : 0
                            },
                            {
                                style   : 'borderRadius',
                                value   : '5px 0 0 5px'
                            },
                        ]
                },
                {
                    // selector    :`.${Elements.sideWindowFront.select.class}`,
                    styles      :
                        [
                            {
                                style   : "display",
                                value   : "none"
                            },
                        ],
                    settings    :
                        [
                            {
                                title   : 'innerText',
                                // value   : Elements.sideWindowFront.RollUp.close.innerInnerSpan.text
                            }
                        ]
                },
                {
                    selector    :`.${Elements.sideWindowFront.class}>span`,
                    settings    :
                        [
                            {
                                title   : 'innerText',
                                // value   : Elements.sideWindowFront.RollUp.close.innerInnerSpan.text
                            }
                        ],
                    styles      :
                        [
                            {
                                style   : 'margin',
                                value   : "0"
                            }
                        ]
                },
                {
                    // selector    :`.${Elements.sideWindowFront.RollUp.open.class}`,
                    styles      :
                        [
                            {
                                style   : 'display',
                                value   : "none"
                            }
                        ]
                },
            ]

    };

// module.exports = {AjaxUri,actions,Elements,ElementsConfig,mobileSettings,events,mobileSize};


