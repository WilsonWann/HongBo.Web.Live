const PlatFormMap = new Map([
    [0, 'xiaojin'],
    [2, 'bbin'],
    [5, 'mgplus'],
    [8, 'ag'],
    [17, 'pt'],
    [78, 'saba'],
    [85, 'xiaojin'],
    [1000, 'kaiyuan'],
    [1002, 'vr'],
    [1050, 'fastbet'],
    [1060, 'jdb'],
    [1070, 'sa'],
    [1080, 'bg'],
    [1090, 'wm'],
    [1100, 'betlink'],
    [1110, 'avia'],
    [1120, 'imsb'],
    [1130, 'threesing'],
    [1140, 'fbesp'],
    [1150, 'cmd'],
    [1160, 'mabu'],
    [1170, 'ae'],
    [1180, 'funky'],

])

const GetGameName = (platform) => PlatFormMap.get(platform)

export default GetGameName