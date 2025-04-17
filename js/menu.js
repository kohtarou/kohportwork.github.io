function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// モーダルデータ
const modalData = {
    html: {
        title: "HTML",
        description: "中学3年生の時に学校の授業で学習しました。その後様々なサイトを検証でのぞいて自己学習を続けました。",
        image: "images/プログラミング言語/HTML.png"
    },
    css: {
        title: "CSS",
        description: "プログラミングの授業で学習しました。その他、サイト作成時に自己学習しました。",
        image: "images/プログラミング言語/CSS3_logo.png"
    },
    java: {
        title: "Java",
        description: "パソコン甲子園に挑戦した際、Javaを使用しました。",
        image: "images/プログラミング言語/Java.png"
    },
    python: {
        title: "Python",
        description: "主に授業、また個人でもGoogle Colaboratoryで学習しました。",
        image: "images/プログラミング言語/Python2.png"
    },

    javascript: {
        title: "JavaScript",
        description: "授業と自己学習を通してJavaScript及びJavaScriptに関連する技術についての解説をまとめたサイトを作成しました。",
        image: "images/プログラミング言語/JavaScript.png"
    },
    github: {
        title: "GitHub",
        description: "1年生の頃の実験実習、また2年生のプログラミングの授業で学習しました。",
        image: "images/環境技術/GitHub.png"
    }
};

// モーダルを開く
function openModal(key) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    const data = modalData[key];
    if (data) {
        modalImage.src = data.image;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.style.display = "flex";
    }
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}