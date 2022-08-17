$(document).ready(function(){

    $('.dropdown-toggle').dropdown({
        "offset":-100,
        "flip":false
    })
})
//DropDown methods
function displayCategories(){
    $('#pieCategories').dropdown('show')
    
}
//Dropdown event

$('#pieCategories').on('show.bs.dropdown', function(){
    //alert('It is alive')
})