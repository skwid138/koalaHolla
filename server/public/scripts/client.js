console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  //listener for delete button
  $('table').on('click', '.deleteButton', deleteKoala);

  // add koala button click
  $( '#addButton' ).on( 'click', function () {
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
    //clear user input
    $('#nameIn').val('');
    $('#ageIn').val('');
    $('#genderIn').val('');
    $('#readyForTransferIn').val('');
    $('#notesIn').val('');
  }); //end addButton on click
}); // end doc ready

function getKoalas(){
  console.log( 'in getKoalas' );
  $('#viewKoalas').empty();
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'GET',
    success: function( data ){
      console.log( 'got some koalas: ', data );
      var $kol = $('#viewKoalas');
      for (i = 0; i < data.length; i++) {
       var $tr = $('<tr data-id="' + data[i].id + '">'); // adds primary id as a .data()
        $tr.append('<td>' + data[i].name + '</td>');
        $tr.append('<td>' + data[i].age + '</td>');
        $tr.append('<td>' + data[i].gender + '</td>');
        $tr.append('<td>' + data[i].transfer + '</td>');
        $tr.append('<td>' + data[i].notes + '</td>');
        $tr.append('<button class="deleteButton">Delete</button>');
        $kol.append($tr);
      }//END for loop
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

function deleteKoala () {
  console.log('in deleteKoala');
  var thisKoala = $(this).parent().data('id');
  console.log('thisKoala ->', thisKoala);
  $.ajax({
    method: 'DELETE',
    url: '/koalas/' + thisKoala,
    success: function (response) {
      console.log('server delete response ->', response);
      getKoalas();
    } // end success
  }); // end ajax
}

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'POST',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
      getKoalas();
    } // end success
  }); //end ajax
}
