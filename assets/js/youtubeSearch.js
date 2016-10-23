function init() {
    gapi.client.setApiKey("AIzaSyBx4OVnRKhXRdb7LxdeM4FkWDqNKlRN_fw");
    gapi.client.load("youtube", v3, function() {});
}
$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        var request = gapi.client.youtube.list({
            part: "snippet",
            type: "video",
            q: encondeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "relevance",
        });
        request.execute(function(response) {
            console.log(response);
        });
    });
});
