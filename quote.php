<?php
$success = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['full_name'];
    $email   = $_POST['email'];
    $service = $_POST['service'];
    $price   = $_POST['price'];
    $message = $_POST['message'];

    // Database connection
    $conn = new mysqli("localhost", "root", "", "orionstarz");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO quotes (full_name, email, service, price, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $service, $price, $message);

    if ($stmt->execute()) {
        $success = true;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Get a Quote | OrionStarz Web Services</title>
  <link rel="stylesheet" href="quote.css">
  <script defer src="quote.js"></script>
</head>
<body>
  <section class="quote-form-section">
    <h1>Request a Quote</h1>
    <?php if ($success): ?>
      <div class="success-popup">🎉 Quote submitted successfully! We’ll get back to you soon.</div>
    <?php endif; ?>
    <form method="POST" action="quote.php" class="quote-form">
      <input type="text" name="full_name" placeholder="Your Full Name" required>
      <input type="email" name="email" placeholder="Your Email" required>

      <label>Select Service:</label>
      <select name="service" id="serviceSelector" required>
        <option value="">-- Choose a Service --</option>
        <option value="Website Design">Website Design - $200</option>
        <option value="Landing Page">Landing Page - $100</option>
        <option value="Form Integration">Form Integration - $50</option>
        <option value="Website Redesign">Website Redesign - $150</option>
      </select>

      <input type="text" name="price" id="priceOutput" placeholder="Total Price" readonly>

      <textarea name="message" placeholder="Additional info (optional)" rows="5"></textarea>

      <button type="submit">Submit Quote</button>
    </form>
  </section>
</body>
</html>
