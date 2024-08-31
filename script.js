var arr = [
    {dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://media.istockphoto.com/id/2150132151/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=612x612&w=0&k=20&c=X3fXrQ512RqjhbkUCiONanNOTpHhlIjZFfcz9vouE7I=",story:"https://media.istockphoto.com/id/1336654290/photo/young-woman-on-purple-background.jpg?s=612x612&w=0&k=20&c=9jB22b_hVUm47NzyctUQfi7yFOqu999kOmDZNySExKg="},
    {dp: "https://media.istockphoto.com/id/944588388/photo/beautiful-indian-young-women-portrait-with-indian-traditional-jewelry.jpg?s=612x612&w=0&k=20&c=nzYNQmp6__7-Nwd2JTOrx0cOS33klBjM-YCfH7R6bFo=",story:"https://media.istockphoto.com/id/522356639/photo/cross-processed-vintage-fashion-portrait.jpg?s=612x612&w=0&k=20&c=Gyli4lFqmifC1ktMjMcg2SM_VbdIkJLkExDWxx23-Cs="},
    {dp: "https://media.istockphoto.com/id/691870832/photo/behind-the-palm-leaf.jpg?s=612x612&w=0&k=20&c=vuZu26_Tl5YNfyBWr2gpl66gNdXNpx2cO_A7x80PQXw=",story:"https://media.istockphoto.com/id/1285357293/photo/portrait-of-gorgeous-young-woman-joy-and-happiness-stock-photo.jpg?s=612x612&w=0&k=20&c=dZyVcTztLcFxEQMSHxl5lravk9eFLW7LNoJwbpuN8cY="},
    {dp: "https://media.istockphoto.com/id/1514823313/photo/male-model-posing-in-orange-suit.jpg?s=612x612&w=0&k=20&c=Kn7djtFM--fIz1w3YVoqSfhD9tNkhGcoZb2z1hLneQE=",story:"https://media.istockphoto.com/id/1614454660/photo/male-model-posing-in-green-kurta.jpg?s=612x612&w=0&k=20&c=XN-4lHZ3MCT69pUm5hGyPllw94OJ0JsZbSosYSwnXOU="},
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function(elem, idx) {
    clutter += `
        <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="" >
        </div>
    `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    var fullScreen = document.querySelector("#full-screen");
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function() {
        fullScreen.style.display = "none";
    }, 3000);
});