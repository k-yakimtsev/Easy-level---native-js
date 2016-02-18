window.onload=function(){

    /**
    * TextCounter
    */
    var TextCounter = {
        maxChar: 140,
        textArea: null,
        textAreaTotal: null,
        textAreaLeft: null,

        init: function() {
            this.textArea = document.querySelector('#js-message');
            this.textAreaTotal = document.querySelector('#js-message-left-total');
            this.textAreaLeft = document.querySelector('#js-message-left-symbols');
            this.events();
        },

        events: function() {
            var that = this;
            this.textArea.addEventListener('keyup', function(e){

                var countMessage = that.textArea.value.length;
                that.textAreaTotal.innerHTML = countMessage;

                that.textAreaLeft.innerHTML = that.maxChar - countMessage;

                if (countMessage > 10) {
                    if (key == 8) {
                        return false;
                    }
                }
            });
        }
    }

    TextCounter.init();
}
