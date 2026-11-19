/**
 * トレランクラブ【走ったれ】メンバーデータ
 * --------------------------------------------------
 * 新しいメンバーを追加する場合は、配列の末尾に { ... } を追加してください。
 * index.html（トップページ）と members.html（メンバー専用ページ）の両方に自動反映されます。
 */
const HASHITTARE_MEMBERS = [
    {
        id: 'kenji',
        name: 'ケンジ',
        role: 'クラブ代表 / 週末朝ランペーサー',
        badge: 'FOUNDER',
        styleTag: 'pacer', // 'pacer'（運営）, 'mountain'（山岳派）, 'gourmet'（グルメ派）
        pickup: true,      // trueにするとトップページにもピックアップ表示されます
        experience: 'トレラン歴 6年',
        favoriteMountain: '戸隠連峰・高妻山 / 犀川河川敷',
        trailGourmet: '戸隠そば（ざる大盛り）と温泉まんじゅう',
        gearPoint: '軽量ザックとソフトフラスク2本持ちが定番',
        bio: '「信州の山をみんなで楽しく走りたい！」という思いでクラブを立ち上げました。初心者の方のペースメイクはお任せください！',
        avatarColor: 'from-trail-orange to-amber-500',
        avatarInitials: 'KJ',
        imageUrl: '' // 写真URLを入れると写真が表示されます（例: './images/kenji.jpg'）
    },
    {
        id: 'mika',
        name: 'ミカ',
        role: 'トレイルグルメ隊長 / 里山ナビ',
        badge: 'GOURMET',
        styleTag: 'gourmet',
        pickup: true,
        experience: 'トレラン歴 3年',
        favoriteMountain: '飯縄山 / 旭山・地附山トレイル',
        trailGourmet: '下山後のジェラート＆善光寺門前カフェ巡り',
        gearPoint: '行動食は羊羹とドライフルーツを欠かしません',
        bio: '走る目的の8割は「絶景」と「下山後の美味しいご飯」です（笑）。写真撮影や休憩を挟みながらワイワイ楽しく走りましょう！',
        avatarColor: 'from-trail-lime to-emerald-500',
        avatarInitials: 'MK',
        imageUrl: ''
    },
    {
        id: 'daiki',
        name: 'ダイキ',
        role: '北アルプス・ロングトレイル担当',
        badge: 'ALPS',
        styleTag: 'mountain',
        pickup: true,
        experience: 'トレラン歴 5年',
        favoriteMountain: '燕岳〜常念岳縦走 / 白馬三山',
        trailGourmet: '大町市のソースカツ丼とクラフトビール',
        gearPoint: 'レインウェアとエマージェンシーキットは必携',
        bio: '100kmレース完走を目指して日々トレーニング中。稜線から見る北アルプスの朝日は最高のご褒美です。装備相談もいつでもどうぞ！',
        avatarColor: 'from-sky-400 to-indigo-500',
        avatarInitials: 'DK',
        imageUrl: ''
    },
    {
        id: 'sato',
        name: 'サトシ',
        role: '初心者サポート / ロード兼任ランナー',
        badge: 'ROOKIE GUIDE',
        styleTag: 'pacer',
        pickup: false,
        experience: 'トレラン歴 1年',
        favoriteMountain: '茶臼山・篠ノ井里山エリア',
        trailGourmet: '川中島エリアのラーメン＆銭湯セット',
        gearPoint: 'まずはロードシューズから始めてトレラン靴を購入！',
        bio: '半年前にロードランニングからトレランデビューしたばかりです。初参加の緊張感がよく分かるので、初めての方も安心して来てください！',
        avatarColor: 'from-purple-400 to-pink-500',
        avatarInitials: 'ST',
        imageUrl: ''
    }
];
