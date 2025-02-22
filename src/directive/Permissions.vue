<script>

// Giả lập hàm kiểm tra quyền của người dùng
function checkUserPermissions(requiredPermissions) {
  // Bạn có thể thay thế logic này bằng cách lấy quyền người dùng từ API, Vuex Store hoặc bất kỳ nơi nào
  // Ví dụ: Kiểm tra quyền từ localStorage, sessionStorage hoặc API
  const userPermissions = JSON.parse(
    localStorage.getItem("userPermissions") || "[]"
  ); // Giả sử quyền người dùng được lưu trong localStorage
  return requiredPermissions.every((permission) =>
    userPermissions.includes(permission)
  ); // Kiểm tra xem quyền người dùng có tất cả quyền yêu cầu không
}

const permissionDirective = {
  beforeMount(el, binding) {
    // Kiểm tra quyền người dùng trước khi hiển thị phần tử
    const requiredPermissions = binding.value; // Quyền yêu cầu được truyền vào directive
    const userHasPermission = checkUserPermissions(requiredPermissions); // Kiểm tra quyền người dùng

    if (!userHasPermission) {
      el.style.display = "none"; // Nếu không có quyền, ẩn phần tử
    } else {
      el.style.display = ""; // Nếu có quyền, hiển thị phần tử
    }
  },
  updated(el, binding) {
    // Cập nhật trạng thái hiển thị khi quyền thay đổi
    const requiredPermissions = binding.value;
    const userHasPermission = checkUserPermissions(requiredPermissions);

    if (!userHasPermission) {
      el.style.display = "none"; // Nếu không có quyền, ẩn phần tử
    } else {
      el.style.display = ""; // Nếu có quyền, hiển thị phần tử
    }
  },
};

export default permissionDirective;
</script>
