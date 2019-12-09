import anime from "animejs";


export default class Animations {

    changeWidthAndHeight(targets,options)
   {
       anime({
          targets: targets,
          width: options.width,
          height: options.height,
       });
   }

   changeWidth(targets,options)
   {
       anime({
           targets: targets,
           width: options.width,
       });
   }

   changeHeight(targets,height)
   {
       anime({
           targets: targets,
           height: height,
       });
   }

   switchOpacity(targets,options,delay = 0)
   {
       anime({
           targets:targets,
           opacity:options.opacity,
           delay:options.delay,
       },delay);
   }

   moveLeftRight(targets,options,delay = 0)
   {
       anime({
           targets: targets,
           translateX: options.translateX,
           direction: 'alternate',
           loop: true,
           easing: 'easeInOutSine'
       },delay);
   }

    horizontalMixing(targets,options,delay = 0)
    {

        anime({
            targets: targets,
            translateX: options.translateX,
            // direction: 'alternate',
            // loop: false,
            // easing: 'easeInOutSine'
        },delay);
    }
}
