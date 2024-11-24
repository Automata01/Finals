// Function to toggle dropdown display
function toggleDropdown(element) {
    let content = element.querySelector('.dropdown-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

// Function to handle payment status update
function updatePaymentStatus(orderNo, newStatus) {
    if (confirm(`Are you sure you want to mark this order as ${newStatus}?`)) {
        // Send AJAX request
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "update_payment_status.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Display response from server
                location.reload(); // Reload the page
            }
        };
        xhr.send("order_no=" + orderNo + "&payment_status=" + newStatus);
    }
}
