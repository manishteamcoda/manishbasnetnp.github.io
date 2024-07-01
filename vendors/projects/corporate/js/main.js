jQuery(document).ready(function(){
    
    "use-strict"; // means javascript should be executed in strict mode
     
     $('#slider-carousel').carouFredSel({
                       
           responsive:true, // To make slider responsive  
           width:'100%',
            circular:true,
            scroll:{
                    items:1,
                    duration:500,
                    pauseOnHover: true
                    },
                    auto:true,
                    items: {
                       visible:{
                            min:1,  //only one slider image is shown
                            max:1
                       },
                       height:"variable"
                       },
         pagination:{
             container:".sliderpager",
             anchorBuilder: false
         }
      });
    
    
    
//    carousel for portfolio work section
    
    
    $('.portfolio-carousel').carouFredSel({
                       
           responsive:true, // To make slider responsive  
           width:'100%',
            circular:true,
            prev:'#prev',
            next:'#next', 
            scroll:{
                    items:1,
                    duration:500,
                    pauseOnHover: true
                    },
                    auto:true,
                    items: {
                       visible:{
                            min:1,  //only 4 slider image is shown
                            max:4
                       },
                       height:"variable"
                       }
         
      });
    
    
    
      $('.team-carousel').carouFredSel({
                       
           responsive:true, // To make slider responsive  
           width:'100%',
            circular:true,
            prev:'#team-prev',
            next:'#team-next', 
            scroll:{
                    items:1,
                    duration:500,
                    pauseOnHover: true
                    },
                    auto:true,
                    items: {
                       visible:{
                            min:1,  
                            max:4
                       },
                       height:"variable"
                       }
                  });
    
    
    
    $('.testimonial-carousel').carouFredSel({
                       
           responsive:true, // To make slider responsive  
           width:'100%',
            circular:true,
            scroll:{
                    items:1,
                    duration:500,
                    pauseOnHover: true
                    },
                    auto:true,
          items: {
                    visible:{
                    min:1,  //only one slider image is shown
                     max:1
                    },
                      height:"variable"
                 },
                  pagination:{
                            container:".testipager",
                            anchorBuilder: false
                          }
         

                });
    
    
    
    $(window).scroll(function(){
        
         var top = $(window).scrollTop();
        if(top>=60){
            
            $("header").addClass('secondary-dark-blue-bg');
        }
        else
            if($("header").hasClass('secondary-dark-blue-bg')){
                $("header").removeClass('secondary-dark-blue-bg');   
            }
        
    }); 

    $('#menu').slicknav({

      label:'',


    })
    
    $('#main').stellar();  


    $('.animation').each(function(){
        var waypoint = new Waypoint({
        element: this,
        handler: function(direction) {
          var animation = $(this.element).attr('data-animation'); 
          $(this.element).css('opacity', '1')
          $(this.element).addClass("animated " + animation);
      },
      offset: '75%'
      })

    });
  
});


