/**
    Inner Text
        innerText trả về hoặc thiết lập văn bản hiển thị của một phần tử, không bao gồm các thẻ HTML bên trong.
        Nó sẽ loại bỏ các thẻ HTML và chỉ trả về văn bản đơn giản.
    
    Inner Html
        innerHTML trả về hoặc thiết lập nội dung của một phần tử, bao gồm cả các thẻ HTML bên trong.
        Nó trả về chuỗi HTML của nội dung phần tử.
        Nếu bạn gán giá trị mới cho innerHTML, nó sẽ thay thế hoàn toàn nội dung hiện tại của phần tử.
 */
const music = new Audio('audio/lovestory.mp3');

// create array
// gan phan tu bang arr
const songs = [
    {
        id: '1',
        songname: `Love Story <div class="subtitle">Taylor Swift</div>`,
        poster: "img/taylor.jpg"
    },
    {
        id: '2',
        songname: `Die for you <div class="subtitle">The Weeknd</div>`,
        poster: "img/theweeknd.jpg"
    },
    {
        id: '3',
        songname: `Hãy Trao Cho Anh <div class="subtitle">Sơn Tùng MTP</div>`,
        poster: "img/taylor.jpg"
    },
    {
        id: '4',
        songname: `What do you mean? <div class="subtitle">Justin</div>`,
        poster: "img/taylor.jpg"
    }
]

// Array.from(document.getElementsByClassName("song_item")).forEach((element , i)=>{
//     // lay phan tu dau tien co tag la img
//     element.getElementsByTagName('img')[0].src = songs[i].poster;
//     // lay phan tu dau tien co tag la h5
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
// })


const albums = [
    {
        id:'1',
        songAlbum: `Sky Tour <div class="detail">Sơn Tùng MTP</div>`,
        posterAlbum: 'img/1.jpg'
    },
    {
        id:'2',
        songAlbum: `Reputation <div class="detail">Taylor Swift</div>`,
        posterAlbum: 'img/2.jpg'
    },
    {
        id:'3',
        songAlbum: `Star Boy <div class="detail">The Weeknd</div>`,
        posterAlbum: 'img/3.jpg'
    },
    {
        id:'4',
        songAlbum: `Born Pink <div class="detail">Blacpink</div>`,
        posterAlbum: 'img/4.jpg'
    },
    {
        id:'5',
        songAlbum: `Views <div class="detail">Drake</div>`,
        posterAlbum: 'img/5.jpg'
    },
    {
        id:'6',
        songAlbum: `Freedom <div class="detail">Justin Bieber</div>`,
        posterAlbum: 'img/6.jpg'
    },
    {
        id:'7',
        songAlbum: `Superache <div class="detail">Conan Gray</div>`,
        posterAlbum: 'img/7.jpg'
    },
    {
        id:'8',
        songAlbum: `Sour <div class="detail">Olivia Rodrigo</div>`,
        posterAlbum: 'img/8.jpg'
    },
    {
        id:'9',
        songAlbum: `Happier Than Ever <div class="detail">Billie Eilish</div>`,
        posterAlbum: 'img/9.jpg'
    },
    {
        id:'10',
        songAlbum: `R <div class="detail">Rosie</div>`,
        posterAlbum: 'img/10.jpg'
    }
]

Array.from(document.getElementsByClassName("albumItem")).forEach((element , i)=>{
    element.getElementsByTagName('img')[0].src = albums[i].posterAlbum;
    element.getElementsByTagName('h5')[0].innerHTML = albums[i].songAlbum;
})



let playMusic = document.getElementById('playMusic');
let wave = document.getElementsByClassName('wave')[0];

// classList là một đối tượng DOMTokenList, nơi bạn có thể thêm, xóa hoặc kiểm tra sự tồn tại của các lớp CSS.

playMusic.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        playMusic.classList.remove('bi-play-fill');
        playMusic.classList.add('bi-pause-fill');
        wave.classList.add('active_wave');
    } else {
        music.pause();
        playMusic.classList.remove('bi-pause-fill');
        playMusic.classList.add('bi-play-fill');
        wave.classList.remove('active_wave');
    }
})

const justOneMusicPlaying = () => {
    Array.from(document.getElementsByClassName('recommendedPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

const justOneMusicPlayingTwo = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((ele) => {
        ele.style.background = "rgb(105,105,170 ,0)";
    })
}

let posterMasterPlay = document.getElementById('posterMasterPlay');
let titleMaster = document.getElementById('titleMaster');

let index = 0;
Array.from(document.getElementsByClassName('recommendedPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //target tro den su kien dang xay ra
        index = e.target.id; // set index = id
        justOneMusicPlaying();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        // ${} de truy xuat phan tu trong src
        // `${} để gán phần tử cho các phần tử trên giao diện

        if (index == 1) {
            music.src = 'audio/lovestory.mp3';
            posterMasterPlay.src = 'img/taylor.jpg';
        }
        if (index == 2) {
            music.src = 'audio/dieforyou.mp3';
            posterMasterPlay.src = 'img/theweeknd.jpg';
        }
        if (index == 3) {
            music.src = 'audio/haytraochoanh.mp3';
            posterMasterPlay.src = 'img/sontung.jpg';
        }
        if (index == 4) {
            music.src = 'audio/whatdoyoumean.mp3';
            posterMasterPlay.src = 'img/justin.jpg';
        }

        let title = songs.filter((ele) => {
            return ele.id == index;
        })

        title.forEach((ele) => {
            let { songname } = ele; // trích xuất thuộc tính songname từ phần tử ele và gán vào biến cùng tên
            // neu khong muon gan vao bien cung ten => let {songname : songTitle} = ele
            titleMaster.innerHTML = songname;
        })

        music.play();
        playMusic.classList.remove('bi-play-fill');
        playMusic.classList.add('bi-pause-fill');
        wave.classList.add('active_wave');
        // when the music is finished playing
        music.addEventListener('ended', () => {
            playMusic.classList.remove('bi-pause-fill');
            playMusic.classList.add('bi-play-fill');
            wave.classList.remove('active_wave');
        })
        justOneMusicPlayingTwo();
        Array.from(document.getElementsByClassName('song_item'))[`${index-1}`].style.background = "rgb(135,206,230 ,.15)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

// current time of music
music.addEventListener('timeupdate' , () => {
    let musicCurr = music.currentTime; // thoi gian hien tai
    let timeMusic = music.duration; // tra ve second

    // floor lam tron xuong 
    // round lam tron len
    let minutes = Math.floor(timeMusic/60);
    let second = Math.floor(timeMusic%60);

    if (second >= 10){
        currentEnd.innerText = `${minutes} : ${second}`;
    }else{
        currentEnd.innerText = `${minutes} : 0${second}`;
    }

    let minutes2 = Math.floor(musicCurr/60);
    let second2 = Math.floor(musicCurr%60);

    if (second2 >= 10){
        currentStart.innerText = `${minutes2} : ${second2}`;
    }else{
        currentStart.innerText = `${minutes2} : 0${second2}`;
    }

    // (music.currentTime / music.duration)*100 => tỉ lệ theo % 
    let progressbar = parseInt((music.currentTime / music.duration)*100);
    // thay doi gia tri value cua thanh seek
    seek.value = progressbar;
    bar2.style.width = `${progressbar}%`;
    dot.style.left =   `${progressbar}%`;
})


// di chuyển bài hát đến 1 thời gian nào đó
seek.addEventListener('change' , () =>{
    // khi di chuyen => gia tri value cua thanh seek thay doi
    music.currentTime = (seek.value * music.duration)/100;
})

music.addEventListener('ended', () => {
    playMusic.classList.remove('bi-pause-fill');
    playMusic.classList.add('bi-play-fill');
    wave.classList.remove('active_wave');
})

let vol_icon = document.getElementById('vol_icon');
let volume = document.getElementById('volume');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

volume.addEventListener('change', () =>{
    if (volume.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (volume.value >0 && volume.value < 50){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (volume.value >= 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    vol_bar.style.width =  `${volume.value}%`;
    vol_dot.style.left = `${volume.value}%`;
    music.volume = volume.value / 100;
})

let prevMusic = document.getElementById('prevMusic');
let nextMusic = document.getElementById('nextMusic');
prevMusic.addEventListener('click' , () =>{
    index -=1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('song_item')).length;
    }

    if (index == 1) {
        music.src = 'audio/lovestory.mp3';
        posterMasterPlay.src = 'img/taylor.jpg';
    }
    if (index == 2) {
        music.src = 'audio/dieforyou.mp3';
        posterMasterPlay.src = 'img/theweeknd.jpg';
    }
    if (index == 3) {
        music.src = 'audio/haytraochoanh.mp3';
        posterMasterPlay.src = 'img/sontung.jpg';
    }
    if (index == 4) {
        music.src = 'audio/whatdoyoumean.mp3';
        posterMasterPlay.src = 'img/justin.jpg';
    }

    let title = songs.filter((ele) => {
        return ele.id == index;
    })

    title.forEach((ele) => {
        let { songname } = ele; 
        titleMaster.innerHTML = songname;
    })
    justOneMusicPlaying();
    music.play();
    
    wave.classList.add('active_wave');
})

nextMusic.addEventListener('click' , () =>{
    index +=1;
    if (index > Array.from(document.getElementsByClassName('song_item')).length){
        index =1;
    }

    if (index == 1) {
        music.src = 'audio/lovestory.mp3';
        posterMasterPlay.src = 'img/taylor.jpg';
    }
    if (index == 2) {
        music.src = 'audio/dieforyou.mp3';
        posterMasterPlay.src = 'img/theweeknd.jpg';
    }
    if (index == 3) {
        music.src = 'audio/haytraochoanh.mp3';
        posterMasterPlay.src = 'img/sontung.jpg';
    }
    if (index == 4) {
        music.src = 'audio/whatdoyoumean.mp3';
        posterMasterPlay.src = 'img/justin.jpg';
    }

    let title = songs.filter((ele) => {
        return ele.id == index;
    })

    title.forEach((ele) => {
        let { songname } = ele; 
        titleMaster.innerHTML = songname;
    })
    justOneMusicPlaying();
    music.play();
    wave.classList.add('active_wave');
})
