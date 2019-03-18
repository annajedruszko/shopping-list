
function addNewItem(itemName) {

  // Create var with string (all element html)

  var id = uuidv4(); 

  let elementHtml = $('<div class="list-element" id = "list-element' + id +  '"> ' +
  '<div class = text id="text'+ id +'">' +
    itemName +
  '</div>' +
  '<div class = icons id="icons' + id + '">' +
    '<div class = delete id="delete' + id + '"></div>' +
    '<div class = done id="done' + id + '">' +
      '<input type="checkbox" class = checkbox id="checkbox' + id + '">'+
    '</div>' +
  '</div>' +

'</div>');

  
  $('#list').prepend(elementHtml);

  $('#delete'+id+'').click(function () {
    $('#list-element'+id+'').remove();
  });

  $('#checkbox'+id+'').on("change", function () {
    if ($(this).prop("checked")) {
        $('#text'+id+'').css("text-decoration", "line-through");
        $('#list-element'+id+'').insertAfter('.list-element');

        
    }
    else {
        $('#text'+id+'').css("text-decoration", "");
        $('#list-element'+id+'').insertBefore('.list-element');
    }
  });

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };


  }

// document is ready
$(function () {
  $('#add-button').click(function () {
    addNewItem($('#new-item').val());
  });
});
