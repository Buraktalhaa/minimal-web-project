
const searchForm = document.querySelector('header nav form');
const subscribeForm = document.querySelector('footer form');
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.textContent = 'Tema Değiştir';
document.querySelector('header nav').appendChild(themeToggle);

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input[type="search"]').value.toLowerCase();

    // Sayfa yönlendirmeleri
    const routes = {
        hizmet: 'hizmetler.html',
        hakkımda: 'hakkimda.html',
        iletişim: 'iletisim.html',
        merkez: 'merkezimiz.html',
        konum: 'merkezimiz.html#konum',
        sss: 'sikca-sorulan-sorular.html',
        'sıkça sorulan sorular': 'sikca-sorulan-sorular.html',
        terapi: 'hizmetler.html#dil-terapisi',
        konuşma: 'hizmetler.html#konusma-terapisi',
        gelişim: 'hizmetler.html#cocuk-dil-gelisimi',
        dkt: 'hakkimda.html',
        feyza: 'hakkimda.html',
        şahan: 'hakkimda.html',
        'dil terapisi': 'hizmetler.html#dil-terapisi',
        'konuşma terapisi': 'hizmetler.html#konusma-terapisi',
        'ses terapisi': 'hizmetler.html#ses-terapisi',
        'yutma terapisi': 'hizmetler.html#yutma-terapisi',
        'çocuk gelişimi': 'hizmetler.html#cocuk-dil-gelisimi',
        'erken müdahale': 'hizmetler.html#erken-mudahale',
        kekemelik: 'hizmetler.html#kekemelik',
        afazi: 'hizmetler.html#afazi',
        otizm: 'hizmetler.html#otizm',
        'down sendromu': 'hizmetler.html#down-sendromu',
        'işitme kaybı': 'hizmetler.html#isitme-kaybi',
        'dudak damak yarığı': 'hizmetler.html#dudak-damak-yarigi',
        randevu: 'iletisim.html#randevu',
        'online terapi': 'hizmetler.html#online-terapi',
        'ev programı': 'hizmetler.html#ev-programi',
        'aile eğitimi': 'hizmetler.html#aile-egitimi',
        'okul danışmanlığı': 'hizmetler.html#okul-danismanligi',
        'değerlendirme': 'hizmetler.html#degerlendirme',
        'terapi ücretleri': 'hizmetler.html#ucretler',
        'seans süresi': 'sikca-sorulan-sorular.html#seans-suresi',
        'terapi sıklığı': 'sikca-sorulan-sorular.html#terapi-sikligi',
        'sigorta': 'sikca-sorulan-sorular.html#sigorta',
        'ödeme seçenekleri': 'sikca-sorulan-sorular.html#odeme-secenekleri'
    };

    for (const [key, value] of Object.entries(routes)) {
        if (searchTerm.includes(key)) {
            window.location.href = value;
            return;
        }
    }

    // Eğer eşleşme bulunamazsa
    alert(`"${searchTerm}" için sonuç bulunamadı. Lütfen başka bir arama terimi deneyin.`);
});

// Bülten aboneliği işlevi
subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert(`${email} adresi bültenimize kaydedildi.`);
        this.reset();
    } else {
        alert('Lütfen geçerli bir e-posta adresi girin.');
    }
});

themeToggle.addEventListener('click', function() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        this.textContent = 'Açık Tema';
    } else {
        html.setAttribute('data-theme', 'light');
        this.textContent = 'Koyu Tema';
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const html = document.documentElement;
    themeToggle.textContent = html.getAttribute('data-theme') === 'light' ? 'Koyu Tema' : 'Açık Tema';
});
