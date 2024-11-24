const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const toggleIcon = sidebarToggle.querySelector('i');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    toggleIcon.classList.toggle('fa-chevron-left');
    toggleIcon.classList.toggle('fa-chevron-right');
});

//infor 
let isEditing = false;

        function toggleEdit() {
            isEditing = !isEditing;
            const inputs = document.querySelectorAll('.form-section input');
            const editButton = document.querySelector('.btn-edit');
            
            inputs.forEach(input => {
                // Không cho phép chỉnh sửa tên đăng nhập và email đăng nhập
                if (input.previousElementSibling.textContent !== 'Tên đăng nhập' && 
                    input.previousElementSibling.textContent !== 'Email đăng nhập') {
                    input.disabled = !isEditing;
                }
            });

            // Thay đổi style của nút edit khi đang trong chế độ chỉnh sửa
            if (isEditing) {
                editButton.style.backgroundColor = '#00b894';
                editButton.querySelector('img').style.filter = 'brightness(0) invert(1)';
            } else {
                editButton.style.backgroundColor = '#f1f1f1';
                editButton.querySelector('img').style.filter = 'none';
            }
        }

        // Xử lý nút Lưu
        document.querySelector('.btn-save').addEventListener('click', function() {
            if (isEditing) {
                // Thực hiện lưu dữ liệu ở đây
                toggleEdit(); // Tắt chế độ chỉnh sửa
                alert('Đã lưu thông tin thành công!');
            }
        });

        // Xử lý nút Đăng xuất
        document.querySelector('.btn-logout').addEventListener('click', function() {
            alert('Đăng xuất thành công!');
        });

        // Xử lý nút Thay đổi mật khẩu
        // document.querySelector('.btn-change-password').addEventListener('click', function() {
        //     alert('Chuyển đến trang thay đổi mật khẩu');
        // });


//changePass

function openModal() {
    document.getElementById('passwordModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const eyeOpen = button.querySelector('.eye-open');
    const eyeClosed = button.querySelector('.eye-closed');
    
    if (input.type === 'password') {
        input.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        input.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

function savePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
        alert('Mật khẩu mới và nhập lại mật khẩu mới không khớp!');
        return;
    }
    
    // Thực hiện lưu mật khẩu ở đây
    alert('Đổi mật khẩu thành công!');
    closeModal();
}

// Đóng modal khi click bên ngoài
// window.onclick = function(event) {
//     const modal = document.getElementById('passwordModal');
//     if (event.target === modal) {
//         closeModal();
//     }
// }



//detail
// const projectContainer = document.getElementById('projectContainer');
// const detailPage = document.getElementById('detailPage');
// const backButton = document.getElementById('backButton');

// backButton.addEventListener('click', function() {
//     detailPage.style.display = 'none';
//     projectContainer.style.display = 'block';
//     window.scrollTo(0, 0);
// });

function showDetail() {
    document.getElementById('projectContainer').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
}

// Thêm nút back vào lịch sử duyệt web
window.onpopstate = function(event) {
    if (document.getElementById('detailPage').style.display === 'block') {
        document.getElementById('detailPage').style.display = 'none';
        document.getElementById('projectContainer').style.display = 'block';
    }
};

// Thêm state mới vào history khi chuyển sang trang chi tiết
function showDetail() {
    document.getElementById('projectContainer').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
    history.pushState({page: 'detail'}, '', '?page=detail');
}
