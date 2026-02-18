function SubmitComplaintPage() {
  return (
    <div className="submit-complaint-page">
      <form action="http://localhost:8000/complaints" method="POST">
        <label for="category">Category:</label>
        <input type="text" id="category" name="category" />
        <label for="message">Message:</label>
        <input type="text" id="message" name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SubmitComplaintPage;
