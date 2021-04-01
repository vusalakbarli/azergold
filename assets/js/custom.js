updateList = function() {
    var input = document.getElementById('file');
    var output = document.getElementById('fileList');
    var children = "";
    for (var i = 0; i < input.files.length; ++i) {
        children += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML = '<ul>'+children+'</ul>';
}


$(function () {
     $('#timenow').datetimepicker({
         locale: 'az',
         format: 'HH:mm'
     });
 });

/*
$(function () {
     $('#kt_daterangepicker_1').kt_daterangepicker_1({
         dateFormat: 'DD.MM.YYYY'
     });
 });



*/

function CC_noErrors() {
return true;
}
window.onerror = CC_noErrors;

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});


document.querySelector(".bookmarked").addEventListener('click', function(){
  Swal.fire("Əlavə edildi!", "Seçdiyiniz sənəd seçilmişlər siyahısına əlavə edildi!", "success");
});

document.querySelector(".bookmarked1").addEventListener('click', function(){
  Swal.fire("Əlavə edildi!", "Seçdiyiniz sənəd seçilmişlər siyahısına əlavə edildi!", "success");
});


document.querySelector(".bookmarked2").addEventListener('click', function(){
  Swal.fire("Əlavə edildi!", "Seçdiyiniz sənəd seçilmişlər siyahısına əlavə edildi!", "success");
});

document.querySelector(".bookmarked3").addEventListener('click', function(){
  Swal.fire("Əlavə edildi!", "Seçdiyiniz sənəd seçilmişlər siyahısına əlavə edildi!", "success");
});

document.querySelector(".bookmarked4").addEventListener('click', function(){
  Swal.fire("Əlavə edildi!", "Seçdiyiniz sənəd seçilmişlər siyahısına əlavə edildi!", "success");
});

document.querySelector(".delete").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete1").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete2").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete3").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete4").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete5").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});

document.querySelector(".delete6").addEventListener('click', function(){
  Swal.fire({
    title: "Diqqət!",
    text: "Seçdiyiniz sənədi silmək istədyinizə əminsiniz?",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "Sil",
    confirmButtonColor: "#f64e60",
    cancelButtonText: "İmtina",
    cancelButtonColor: "#7e8299",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  });
});


/*
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td class="p-10 date"><input class="form-control" type="date" value="" ></td>' +
            '<td class="p-10 time"><input class="form-control" type="time" value="" ></td>' +
            '<td class="p-10 text" colspan="5"><input class="form-control" type="text" ></td>' +
            '<td class="p-10 text"><input type="checkbox" name="select" /><span></span></label></td>' +
            '<td class="p-10 text" colspan="5"><input class="form-control" type="text" ></td>' +
            '<td class="p-10"><input type="checkbox" name="select" /><span></span></label></td>' +
			'<td class="text-center">' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td.date:not(:last-child)").each(function(){
			$(this).html('<input class="form-control" type="date" value="" >');
		});
		$(this).parents("tr").find("td.time:not(:last-child)").each(function(){
			$(this).html('<input class="form-control" type="time" value="" >');
		});
		$(this).parents("tr").find("td.text:not(:last-child)").each(function(){
			$(this).html('<input class="form-control" type="text" name="">');
		});
		$(this).parents("tr").find("td.check:not(:last-child)").each(function(){
			$(this).html('<input type="checkbox" name="select" /><span></span></label>');
		});





		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});
*/