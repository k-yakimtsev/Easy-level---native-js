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

            this.textArea.addEventListener('keydown', function(e){
                if (event.keyCode == 8) {
                    setTimeout(function() {
                        var countMessage = that.textArea.value.length;
                        that.writeCount(countMessage);
                    }, 20);
                }
            });
            this.textArea.addEventListener('keypress', function(e){
                var charMessage = that.getChar(e);
                var countMessage = that.textArea.value.length + 1;
                if (charMessage && countMessage <= that.maxChar) {
                    if (countMessage != 1) {
                        that.textArea.innerHTML += charMessage;
                    }
                    that.writeCount(countMessage);
                } else {
                    e.preventDefault();
                }
            });
        },

        getChar: function(event) {
            if (event.keyCode == 13) {
                return String.fromCharCode(event.keyCode)
            }
            if (event.which == null) {
                if (event.keyCode < 32) return null;
                return String.fromCharCode(event.keyCode)
            }
            if (event.which != 0 && event.charCode != 0) {
                if (event.which < 32) return null;
                return String.fromCharCode(event.which);
            }
            return null;
        },

        writeCount: function(number) {
            this.textAreaTotal.innerHTML = number;
            this.textAreaLeft.innerHTML = this.maxChar - number;
        }
    }

    TextCounter.init();
}
