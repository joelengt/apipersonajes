import page from 'page'
import renderPersonajes from './renderPersonajes/index'
import renderDetalles from './renderDetalles/index'
import renderEdit from './renderEdit/index'
import './staticInteraction/btn_publicar'
import './staticInteraction/like_buttom'
import './createPersonaje/add_real_time'
// import qs from 'qs'

var formlulario_Create = $('#From_create')


page('/demo', function (ctx, next) {
	$('.Personajes-app__box').find('#From_edit').remove()
	// formlulario_Create.style.display = 'block'
	$.ajax('/api/personajes', {
		success: function (personajes) {
			$('#pj_item').find('.Personajes-app__read__item').remove()
			$('body').find('.loader').remove()
			renderPersonajes(personajes)
		}
	})

})

page('/detalle/:id', function (ctx, next) {
	var id = ctx.params.id
	$.ajax('/api/personajes/' + id , {
		success: function (personaje) {
			$('#pj_item').find('.Personajes-app__read__item').remove() 
			renderDetalles(personaje)
		}
	})
})

page('/delete/:id', function (ctx, next) {
	var id = ctx.params.id

	$.post('/api/personaje/' + id + '?_method=delete', {
		success: function () {
			window.location.href = '/demo'
		}
	})

})

page('/edit/:id', function (ctx, next) {
	var id = ctx.params.id

	$.ajax('/api/personajes/' + id , {
		success: function (personaje) {

			$('.Personajes-app__box').find('.Personajes-app__form').remove()
			$('#pj_item').find('.Personajes-app__read__item').remove()
			console.log('Render Edit')
			renderEdit(personaje)
		}
	})
})



page('/update/:id', function (ctx, next) {
	var id = ctx.params.id
	
	var personaje = {
		id: '',
		name: $('#personaje_name').val(),
		occupation: $('#personaje_occupation').val(),
		group: $('#personaje_group').val(),
		age: $('#personaje_age').val(),
		photo: $('#personaje_photo').val()
	}

	$.ajax({
		data: personaje,
		url: '/api/personaje/' + id + '?_method=put',
		type: 'post',
		success: function (res) {
			console.log(res)
			
			$('.Personajes-app__box').find('#From_edit').remove()

			$.ajax('/api/personajes/' + id , {
				success: function (personaje) {
					$('#pj_item').find('.Personajes-app__read__item').remove() 
					renderDetalles(personaje)
				}
			})

		}
	})


})


page()
