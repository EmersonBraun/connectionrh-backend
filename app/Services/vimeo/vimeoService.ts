import Env from '@ioc:Adonis/Core/Env'
var Vimeo = require('vimeo').Vimeo
var CLIENT_ID = Env.get('VIMEO_CLIENT_ID')
var CLIENT_SECRET = Env.get('VIMEO_CLIENT_SECRET')
var ACCESS_TOKEN = Env.get('VIMEO_ACCESS_TOKEN')
var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)

const uploadVimeo = async (userId, fileName, filePath, video) => {
  client.upload(
    filePath,
    function (uri) {
      console.log('File upload completed. Your Vimeo URI is:', uri)
      return uri
    },
    function (bytesUploaded, bytesTotal) {
      var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
      console.log(bytesUploaded, bytesTotal, percentage + '%')
    },
    function (error) {
      console.log('Failed because: ' + error)
    }
  )
}
