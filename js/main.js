// JavaScript Document

$(document).ready(function () {
            //collapsible panel jquery expand all
            var active = false;
            $('.fa-arrows-alt').click(function () {
                if (active) {
                    active = false;
                    $('.panel-collapse').collapse('show');
                    $('.panel-title').attr('data-toggle', '');
                    
                } else {
                    active = true;
                    $('.panel-collapse').collapse('hide');
                    $('.panel-title').attr('data-toggle', 'collapse');
                    
                }
            });
            $('#accordion').on('show.bs.collapse', function () {
                if (active) $('#accordion.in').collapse('hide');
            });
               
				
            
        });
		
$(function () {
	$('.tlt').textillate({ in: { effect: 'fadeInDownBig', delay:100 } });
		
});




     //Single Box slide toggle
        var head = $('#content').find('.category-head');
        var status = 'open';

        head.addClass('add-border');

        head.click(function() {
          $(this).siblings('ul').slideToggle(300, function() {
            $(this).siblings('div').toggleClass('remove-border');
          });
        });

document.addEventListener("DOMContentLoaded", function(event) { 

// Uses sharer.js 
//  https://ellisonleao.github.io/sharer.js/#twitter	
   var url = window.location.href;
   var title = document.title;
   var subject = "Read this good article";
   var via = "bootstrapC";
   console.log( url );
    console.log( title );


//facebook
$('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
//twitter
$('#share-tw').attr('data-url', url).attr('data-sharer', 'twitter');
//linkedin
$('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
// google plus
$('#share-gp').attr('data-url', url).attr('data-sharer', 'googleplus');
  // email
  $('#share-em').attr('data-url', url).attr('data-subject', subject).attr('data-sharer', 'email');
	//whatsapp
	$('#share-wa').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'whatsapp');

//Prevent basic click behavior
$( ".sharer button" ).click(function() {
  event.preventDefault();
});


});





     
$(function() {
  // the input field
  var $input = $("input[type='search']"),
    // the context where to search
    $content = $(".list-group-item"),
    // jQuery object to save <mark> elements
    $results,
    // the class that will be appended to the current
    // focused element
    currentClass = "current",
    // top offset for the jump (the search bar)
    offsetTop = 600,
    // the current index of the focused element
    currentIndex = 0;

  /**
   * Jumps to the element matching the currentIndex
   */
  function jumpTo() {
    if ($results.length) {
      var position,
        $current = $results.eq(currentIndex-1);
      $results.removeClass(currentClass);
      if ($current.length) {
        $current.addClass(currentClass);
        position = $current.offset().top - offsetTop;
        window.scrollTo(0, position);
      }
    }
  }

  /**
   * Searches for the entered keyword in the
   * specified context on input
   */
  $input.on("input", function() {
    var searchVal = this.value;
    $content.unmark({
      done: function() {
        $content.mark(searchVal, {
          separateWordSearch: true,
          done: function() {
            $results = $content.find("mark");
            currentIndex = 0;
            jumpTo();
          }
        });
      }
    });
  });

  /**
   * Clears the search
   */

  /**
   * Next and previous search jump to
   */
  $input.add($input).on("keyup", function() {
    if ($results.length) {
      currentIndex -= $(this).is($input) ? -1 : 1;
      if (currentIndex < 0) {
        currentIndex = $results.length - 1;
      }
      if (currentIndex > $results.length - 1) {
        currentIndex = 0;
      }

      jumpTo();
    }
  });
});
