function formattedDescription(description) {
  return description
    .replace(/\n/g, "<br>") // Ganti newline dengan <br>
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Ganti **text** dengan <strong>text</strong>
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Ganti *text* dengan <em>text</em>
    .replace(/([a-zA-Z0-9\- ]+):/g, "<strong>$1:</strong>");
};

export default formattedDescription