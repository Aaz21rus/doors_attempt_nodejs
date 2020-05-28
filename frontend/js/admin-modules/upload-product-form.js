import $ from 'jquery'

let fileExt

//On select product image
$('.upload-product .form-control-file')
  .change(e => fileExt = e.target.files[0].name.split('.')[1])

//Upload product to server
$('.upload-product').submit(e => {
  e.preventDefault()

  const body = new FormData

  $('.upload-product [name]').each((_, field) => {
    if(!field.value) {
      $('.upload-product .alert-danger').show()
      notAllField = true
    }
    body.append(field.name, field.value)
  })

  let reader = new FileReader()
  reader.onload = e => {
    body.append('imageExt', fileExt)
    body.append('imageData', e.target.result)
    fetch('/api/product/add', { method: 'POST', body })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'ok') {
        $('.upload-product .alert-success').show()
      } else {
        $('.upload-product .alert-danger').show()
      }
    })
  }

  if($('.upload-product .form-control-file').get(0).files[0]) {
    reader.readAsBinaryString($('.upload-product .form-control-file').get(0).files[0])
  }
})


