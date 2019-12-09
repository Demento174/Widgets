// import EventPopUpBanner from "./Events/EventPopUpBanner";
export const UTMSearch =
    [
        'utm_campaign',
        'utm_content'
    ];

export const ElementConfig =
    {
        classes:
            {
                wrapper:'widgetUtmAdvertising-wrapper',
                content:'widgetUtmAdvertising-content',
                close:'widgetUtmAdvertising-close'
            },
    };
export const Events =
    {
        popUpBanner:
            {
                // handler:EventPopUpBanner,
                settings:
                    [
                        {
                            selector:`.${ElementConfig.classes.wrapper}`,
                            styles:
                                {
                                    display:'flex'
                                },
                            animates:
                                [
                                    {
                                        title   : 'switchOpacity',
                                        options :
                                            {
                                                opacity   : '1',
                                            }
                                    }
                                ]
                        },
                    ],
            },
    };

export const Elements =
    [
        {
            tag:'div',
            class:ElementConfig.classes.wrapper,
            styles:
                {
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    opacity:'0',
                    display:'none',
                },
            internalElements:
                [
                    {
                        tag:'div',
                        class:ElementConfig.classes.content,
                        styles:
                            {
                                padding: '2rem',
                                width: '25rem',
                                height: '5rem',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '15%',
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                fontStyle:'italic',
                                fontWeight: 'bold',
                                borderRadius: '20px',
                            },
                        settings:
                            {
                                innerText:'Какой то рекламный баннер'
                            }
                    },
                    {
                        tag:'span',
                        class:ElementConfig.classes.close,
                        styles:
                            {
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                opacity: '0.5',
                                right: '35%',
                                position: 'absolute',
                                top: '40%',
                                cursor: 'pointer',
                                zIndex: '99999',
                            },
                        internalElements:
                            [
                                {
                                    tag:'span',
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
                                    tag:'span',
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
                                },
                            ],
                    }
                ],
        }
    ];
