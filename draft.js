const URL = "https://cdn.contentful.com/spaces/svw4d0i6i87i/environments/master/entries?access_token=nm9EiV_n2XckXPXr4VDqdfctvj7dvSPuEkK2Er5D9QA&&content_type=triviaq"
$.ajax(URL)
.then((data) => {
    console.log(data)
})