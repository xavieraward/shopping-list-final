

$(function() {
    ('#js-shopping-list-form').submit(function(event) { 
    event.preventDefault();
    var text = $('#shopping-list-entry').val();
    ('#shopping-item').append(`<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    
})

});
