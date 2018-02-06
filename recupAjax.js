


$(function() {


        $('input').click(function(e) {

                e.preventDefault();

            $.ajax({
                url : 'https://www.snacking.fr/robots.txt',
                type : 'GET',
                dataType : 'html', // On désire recevoir du HTML
                success : function(code_html, statut){ // code_html contient le HTML renvoyé
                    $('.zone-recup').append(code_html);
                }
            });

        })

})