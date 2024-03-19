function generatePage() {
    const linksTextarea = document.getElementById('socialLinks');
    const links = linksTextarea.value.split('\n').filter(link => link.trim() !== '');
    const encodedLinks = links.map(link => encodeURIComponent(link.trim())).join(',');
    window.location.href = `second.html?links=${encodedLinks}`;
    
}
