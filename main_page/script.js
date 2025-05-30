document.addEventListener("keydown", function(e) {
    
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return; 
    }

    const quote = document.getElementById("quote");
    const about = document.getElementById("about");
    const about_header = document.getElementById("about_header");
    const project_header = document.getElementById("project_header");
    const project_section = document.getElementById("project_section");
    const ascii_art = document.getElementById("ascii_art");
    const aboutme_para = document.getElementById("aboutme_para");
    const links_header = document.getElementById("links_header");
    const links = document.getElementById("links");
    const blogs = document.getElementById("blogs");
    const blogs_header = document.getElementById("blogs_header");
    const leave_note_header = document.getElementById("leave_note_header");
    const leave_a_note = document.getElementById("leave_a_note");

    if (e.key === "a") {
        quote.style.display = "none";
        about.style.display = "flex";
        project_section.style.display = "none";
        ascii_art.style.display = "none";
        about_header.style.textDecoration = "underline";
        project_header.style.textDecoration = "none";
        aboutme_para.style.display = "flex";
        links_header.style.textDecoration = "none";
        links.style.display = "none";
        blogs_header.style.textDecoration = "none";
        blogs.style.display = "none";
        leave_note_header.style.textDecoration = "none";
        leave_a_note.style.display = "none";
    }

    if (e.key === "p") {
        quote.style.display = "none";
        about.style.display = "none";
        project_section.style.display = "flex";
        ascii_art.style.display = "none";
        about_header.style.textDecoration = "none";
        project_header.style.textDecoration = "underline";
        aboutme_para.style.display = "none";
        links_header.style.textDecoration = "none";
        links.style.display = "none";
        blogs_header.style.textDecoration = "none";
        blogs.style.display = "none";
        leave_note_header.style.textDecoration = "none";
        leave_a_note.style.display = "none";
    }

    if (e.key === "q") {
        about.style.display = "none";
        project_section.style.display = "none";
        quote.style.display = "flex";
        ascii_art.style.display = "flex";
        about_header.style.textDecoration = "none";
        project_header.style.textDecoration = "none";
        aboutme_para.style.display = "none";
        links_header.style.textDecoration = "none";
        links.style.display = "none";
        blogs_header.style.textDecoration = "none";
        blogs.style.display = "none";
        leave_note_header.style.textDecoration = "none";
        leave_a_note.style.display = "none";
    }

    if (e.key === "l") {
        about.style.display = "none";
        project_section.style.display = "none";
        quote.style.display = "none";
        ascii_art.style.display = "none";
        about_header.style.textDecoration = "none";
        project_header.style.textDecoration = "none";
        aboutme_para.style.display = "none";
        links_header.style.textDecoration = "underline";
        links.style.display = "flex";
        blogs_header.style.textDecoration = "none";
        blogs.style.display = "none";
        leave_note_header.style.textDecoration = "none";
        leave_a_note.style.display = "none";
    }

    if (e.key === "b") {
        about.style.display = "none";
        project_section.style.display = "none";
        quote.style.display = "none";
        ascii_art.style.display = "none";
        about_header.style.textDecoration = "none";
        project_header.style.textDecoration = "none";
        aboutme_para.style.display = "none";
        links_header.style.textDecoration = "none";
        links.style.display = "none";
        blogs_header.style.textDecoration = "underline";
        blogs.style.display = "flex";
        leave_note_header.style.textDecoration = "none";
        leave_a_note.style.display = "none";
    }

    if (e.key === "n") {
        about.style.display = "none";
        project_section.style.display = "none";
        quote.style.display = "none";
        ascii_art.style.display = "none";
        about_header.style.textDecoration = "none";
        project_header.style.textDecoration = "none";
        aboutme_para.style.display = "none";
        links_header.style.textDecoration = "none";
        links.style.display = "none";
        blogs_header.style.textDecoration = "none";
        blogs.style.display = "none";
        leave_note_header.style.textDecoration = "underline";
        leave_a_note.style.display = "flex";
    }
});