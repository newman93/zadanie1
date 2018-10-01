$( document ).ready(function() {
		$.LoadingOverlay("show");
		var emails;
		
		function fillForm(i) {
			$("#name").val(emails[i]['name']);
			$("#mail").val(emails[i]['email']);
			$("#phone").val(emails[i]['phone']);
			$("#address").val(emails[i]['address']);
		}
		
		$.ajax({
			type: 'GET',
			url: 'https://cors-anywhere.herokuapp.com/http://test.projets.pl/rekrutacja/php/data.json',
			datatype: "json",
			success: function (data) { 
				var select = $('#receiver');
				select.empty();
				emails = data;
				for(var i = 0; i < data.length; i++) {
					$("#receiver").append("<option value='" +data[i]['email']+ "'>" +data[i]['email']+ "     </option>");
					if (i == 0) {
						fillForm(i);
					}
				}
				$.LoadingOverlay("hide");
			}
		});
		
		$('#receiver').on('change', function() {
			for(var i = 0; i < emails.length; i++) {
				if (emails[i]['email'] == this.value) {
					fillForm(i);
					break;
				}
			}
		});
		
		$(document).on("click", "#send", function() {
			var error = false;
			if (!$.trim($("#exampleFormControlTextarea1").val())) {
				if (!($("#messageHint").length)) {
					$("#messageLabel").after('<p id="messageHint" ><small class="red">Fill this field!</small></p>');
				}
				error = true;
			}
			
			if (!($("#acceptTerms").is(':checked'))) {
				if (!($("#acceptHint").length)) {
					$("#acceptLabel").after('<p id="acceptHint" ><small class="red">Check this!</small></p>');
				}
				error = true;
			}
			
			if (error == false) {
				$("#modal .modal-body").append("<p>Name and Surname: "+$("#name").val()+"<br />Email address: "+$("#mail").val()+"<br />Phone number: "+$("#phone").val()+"<br />Address: "+$("#address").val()+"<br />Message: "+$("#exampleFormControlTextarea1").val()+"<p>");
				$('#modal').modal();
			}
		});
		
		$('#acceptTerms').change(function() {
			if (this.checked) {
				$("#acceptHint").remove();
			}    
		});
		
		 $('#exampleFormControlTextarea1').keyup(function(){
			if (!($.trim($(this).val()) == '')){
				$("#messageHint").remove();;
			}
		});
		
		$(document).on("click", "#submitForm", function() {
			$("#form").submit();
		});
});