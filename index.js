function generatePage() {
    const linksTextarea = document.getElementById('socialLinks');
    const links = linksTextarea.value.split('\n').filter(link => link.trim() !== '');
    const concatenatedLinks = links.join(',');
    const encodedLinks = encodeURIComponent(concatenatedLinks);
    window.location.href = `second.html?links=${encodedLinks}`;
}
