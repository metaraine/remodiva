chrome.identity.getAuthToken({
  interactive: true
}, function(token) {
  if (chrome.runtime.lastError) {
    alert(chrome.runtime.lastError.message)
    return
  }
  var x = new XMLHttpRequest()
  x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
  x.onload = function() {
    alert(x.response)
  }
  x.send()
})

chrome.contextMenus.create({
  title: "Save to RemoDiva",
  contexts:["image"],
  onclick: function(info) {
    handleImageURL(info.pageUrl, info.srcUrl)
  }
})

function handleImageURL(page, img) {
  alert('You clicked ' + img + ' on ' + page)
}