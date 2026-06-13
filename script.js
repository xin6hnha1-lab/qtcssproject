/* Hàm xử lý khi di chuột VÀO ảnh nhỏ */
function upDate(previewPic) {
    // 1. Dùng console.log để kiểm tra xem event có kích hoạt không
    console.log("upDate function has been triggered successfully!");
    
    // 2. Dùng console.log để in ra thông tin alt và src của ảnh nhỏ
    console.log("Image Alt: " + previewPic.alt);
    console.log("Image Source: " + previewPic.src);
    
    // Lấy phần tử div có id="image"
    const imageDiv = document.getElementById("image");
    
    // 3. Thay đổi text của phần tử id="image" thành nội dung thẻ alt
    imageDiv.innerHTML = previewPic.alt;
    
    // 4. Thay đổi background-image của phần tử id="image" thành src của ảnh
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Thêm class 'active' để kích hoạt style chữ trắng dễ nhìn trên nền ảnh
    imageDiv.classList.add("active");
}

/* Hàm xử lý khi RỜI chuột khỏi ảnh nhỏ */
function undo() {
    console.log("undo function has been triggered!");
    
    const imageDiv = document.getElementById("image");
    
    // 1. Cập nhật lại background-image về giá trị gốc (url trống)
    imageDiv.style.backgroundImage = "url('')";
    
    // 2. Cập nhật lại text về dòng chữ mặc định ban đầu
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    // Xóa class 'active' để trả viền và màu chữ về mặc định
    imageDiv.classList.remove("active");
}
