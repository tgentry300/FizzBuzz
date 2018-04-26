for (i = 0; i <= 1000; i++) {
    if (i % 2 == i % 3) {
        document.write("<p style='color:red'><strong>" + i + "</strong></p>")
    } else if (i % 2 == 0) {
        document.write("<p><strong>" + i + "</strong></p>")
    } else if (i % 3 == 0) {
        document.write("<p style='color:red'>" + i + "</p>")
    } else if (i) {
        document.write(i)

    }
}