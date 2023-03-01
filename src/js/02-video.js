import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
