/* Hàm xử lý khi di chuột VÀO ảnh nhỏ */
function upDate(previewPic) {
    // 1. Kiểm tra xem event có kích hoạt không
    console.log("upDate function has been triggered successfully!");
    
    // 2. In ra thông tin alt và source (src) của biến previewPic
    console.log("Preview Image Alt: " + previewPic.alt);
    console.log("Preview Image Source: " + previewPic.src);
    
    // Lấy phần tử div có id="image"
    const imageDiv = document.getElementById("image");
    
    // 3. Thay đổi text của phần tử id="image" thành nội dung thẻ alt
    imageDiv.innerHTML = previewPic.alt;
    
    // 4. Thay đổi background image của phần tử id="image" thành src của ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Thêm class 'active' để đổi màu chữ sang trắng và tạo bóng đổ cho dễ đọc trên nền ảnh
    imageDiv.classList.add("active");
}

/* Hàm xử lý khi RỜI chuột khỏi ảnh nhỏ */
function undo() {
    console.log("undo function has been triggered!");
    
    const imageDiv = document.getElementById("image");
    
    // 1. Cập nhật lại url background-image về giá trị gốc (url trống)
    imageDiv.style.backgroundImage = "url('')";
    
    // 2. Cập nhật lại text về dòng chữ mặc định ban đầu
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    // Xóa class 'active' đưa định dạng viền và chữ về lại mặc định ban đầu
    imageDiv.classList.remove("active");
}
