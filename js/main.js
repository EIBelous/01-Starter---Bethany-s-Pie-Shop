let tooltipButton=document.getElementById('tooltipButton')
let popButton=document.getElementById('popButton')
let showMore=document.getElementById('ShowMore')
$(document).ready(function(){

    $('.dropdown-toggle').dropdown({
        "offset":-100,
        "flip":false
    })


    //data tooltip
    $('[data-toggle=tooltip]').tooltip({
        delay: {show:1000, hide:1000},
        html: true,
        placement:'bottom',
        animation: false,
        title:'click to learn more',
        offset:100
    }
    )
    //Pup over
    $('[data-toggle="pupover"]').popover({
        placement:'top',
        trigger:'hover',
        html:true,
        
    })
    

 
    //toast
    $('.toast').toast({
        delay:2000,

    })
    
    //Collapse
    $('.collapse').collapse({
        toggle: false
    })
    
    //carousel
    $('.carousel').carousel({
        interval: 2000,
        pause:false
    })
})
//DropDown methods
function displayCategories(){
    $('#pieCategories').dropdown('show')
    
}
//Dropdown event

$('#pieCategories').on('show.bs.dropdown', function(){
    //alert('It is alive')s
})
//Overs ToolTips
function viewPopOvers(){
$('#pop1').popover('toggle')
if(popButton.innerHTML=="View popovers"){
    popButton.innerHTML="Hide popovers"  
} else{
    popButton.innerHTML="View popovers"
}



}

function showTooltips(){
    $('[data-toggle=tooltip]').tooltip('toggle')
}

$('[data-toggle="tooltip"]').on('show.bs.tooltip', function(){
    tooltipButton.innerHTML=' tooltips'
})

$('[data-toggle="tooltip"]').on('hide.bs.tooltip', function(){
    tooltipButton.innerHTML='Show tooltips'
})

let selesMessage=setInterval(toastNotify, 1000)

function toastNotify(){
    $('.toast').toast('show')

    clearInterval(selesMessage)
}
//Collapse

function expandAll(){
$('#collapseOne, #collapseTwo, #collapse3').collapse('show')



//
}

function closeAll(){
    $('#collapseOne, #collapseTwo, #collapse3').collapse('hide')

}
$('#history').on('show.bs.collapse', function(){
    showMore.innerHTML="Show less"

})

$('#history').on('hide.bs.collapse', function(){
    showMore.innerHTML="Show more "
})