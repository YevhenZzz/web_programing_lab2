document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];

    document.getElementById("addImageButton").addEventListener("click", addImage);
    document.getElementById("sendNewsButton").addEventListener("click", sendNews);
    window.addEventListener("online", function (event) {
        provider.get("news", (news) => {
            if (news) {
                allNews = news;
            }
            sendNewsToServer(allNews);
            provider.remove("news");
            allNews = [];
        });
    });

    provider.get("news", (news) => {
        if (news) {
            allNews = news;
        }
    });

    function addImage() {
        const input = document.querySelector("input[type=file]");
        const uploadedImage = document.getElementById("uploadedImage");
        if (input.files[0] != null) {
            uploadedImage.setAttribute("src", window.URL.createObjectURL(input.files[0]));
        }
        document.getElementById("addImageButton").blur();
    }

    function sendNews() {
        let newsImageSrc, newsTitle, newsBody;

        newsImageSrc = document.getElementById("uploadedImage").getAttribute("src");
        newsTitle = document.getElementById("newsTitle").value.trim();
        if (newsTitle === "" || newsTitle == null) {
            alert("News title is incorrect!");
            document.getElementById("sendNewsButton").blur();
            return;
        }
        newsBody = document.getElementById("newsBody").value.trim();
        if (newsBody === "" || newsBody == null) {
            alert("News body is incorrect!");
            document.getElementById("sendNewsButton").blur();
            return;
        }

        if (isOnline()) {
            alert("Successfully sent to server");
        } else {
            allNews.push({imgSrc: newsImageSrc, title: newsTitle, body: newsBody});
            provider.add("news", allNews);
            alert("Saved to storage");
        }

        document.getElementById("newsTitle").value = "";
        document.getElementById("newsBody").value = "";
        document.getElementById("sendNewsButton").blur();
    }

    function sendNewsToServer(allNews) {
        if (allNews.length) {
            alert("Successfully sent to server!")
        }
    }
});