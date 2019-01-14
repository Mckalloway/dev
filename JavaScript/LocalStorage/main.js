$('#add-contact').on('click', onClickAddContact); //la fonction "onClickAddContact" s'appliquera au click
$('#save-contact').on('click', onClickSaveContact);//la fonction "onClickSaveContact" s'appliquera au click
$(document).on('click',  '#address-book li', onClickShowContactDetails);