const japanese = [
    // あ
    { Japanese: 'あした', Chinese: '明天', Lesson: '1' },
    { Japanese: 'あなた', Chinese: '你', Lesson: '1', Kanji: '貴方' },
    { Japanese: 'あのひと', Chinese: '他,她,那個人', Lesson: '1' },
    { Japanese: 'あのかた', Chinese: '他,她,那個人（「あのひと」的禮貌說法）', Lesson: '1', Kanji: 'あの方' },
    { Japanese: 'アメリカ', Chinese: '美國', Lesson: '1' },

    // い
    { Japanese: 'いいえ', Chinese: '不,不是', Lesson: '1' },
    { Japanese: 'いしゃ', Chinese: '醫生', Lesson: '1', Kanji: '医者' },
    { Japanese: 'イギリス', Chinese: '英國', Lesson: '1' },
    { Japanese: 'インド', Chinese: '印度', Lesson: '1' },
    { Japanese: 'インドネシア', Chinese: '印度尼西亞,印尼', Lesson: '1' },

    // う
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // え
    { Japanese: 'エアー', Chinese: 'Air', Lesson: '1' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // お
    { Japanese: 'おいくつ', Chinese: '幾歲(「なんさい」的禮貌說法)', Lesson: '1' },
    { Japanese: 'おなまえは?', Chinese: '您貴姓? 您叫什麼名字?', Lesson: '1', Kanji: 'お名前は？' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // か
    { Japanese: 'かいしゃいん', Chinese: '公司職員', Lesson: '1', Kanji: '会社員' },
    { Japanese: 'がくせい', Chinese: '學生', Lesson: '1', Kanji: '学生' },
    { Japanese: 'から', Chinese: '從...', Lesson: '1' },
    { Japanese: 'かんこく', Chinese: '韓國', Lesson: '1', Kanji: '韓国' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // き
    { Japanese: 'きょうし', Chinese: '教師', Lesson: '1', Kanji: '教師' },
    { Japanese: 'ぎんこういん', Chinese: '銀行行員', Lesson: '1', Kanji: '銀行員' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // く
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // け
    { Japanese: 'けんきゅうしゃ', Chinese: '研究人員', Lesson: '1', Kanji: '研究者' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // こ
    { Japanese: 'こうべ', Chinese: '神戶', Lesson: '1', Kanji: '神戸' },
    { Japanese: 'こちら', Chinese: '這位', Lesson: '1' },

    // さ
    { Japanese: 'さい', Chinese: '歲', Lesson: '1', Kanji: '歳' },
    { Japanese: 'さん', Chinese: '先生,小姐,女士', Lesson: '1' },
    { Japanese: 'さくら', Chinese: '櫻花', Lesson: '1' },
    // し
    { Japanese: 'じん', Chinese: '人', Lesson: '1', Kanji: '人' },
    { Japanese: 'しゃいん', Chinese: '公司職員', Lesson: '1', Kanji: '社員' },
    { Japanese: 'しつれいですが', Chinese: '抱歉,請問...', Lesson: '1', Kanji: '失礼ですが' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // す
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // せ
    { Japanese: 'せんせい', Chinese: '老師', Lesson: '1', Kanji: '先生' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // そ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // た
    { Japanese: 'だいがく', Chinese: '大學', Lesson: '1', Kanji: '大学' },
    { Japanese: 'だれ', Chinese: '誰', Lesson: '1', Kanji: '誰' },
    { Japanese: 'タイ', Chinese: '泰國', Lesson: '1' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // ち
    { Japanese: 'ちゃん', Chinese: '接在小孩子名字後面', Lesson: '1' },
    { Japanese: 'ちゅうごく', Chinese: '中國', Lesson: '1', Kanji: '中国' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // つ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // て
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // と
    { Japanese: 'どうぞ', Chinese: '請', Lesson: '1' },
    { Japanese: 'どなた', Chinese: '誰（「だれ」的禮貌說法）', Lesson: '1' },
    { Japanese: 'ドイツ', Chinese: '德國', Lesson: '1' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },


    // な
    { Japanese: 'なんさい', Chinese: '幾歲', Lesson: '1', Kanji: '何歳' },
    { Japanese: 'なまえ', Chinese: '名字', Lesson: '1', Kanji: '名前' },
    // に
    { Japanese: 'にほん', Chinese: '日本', Lesson: '1', Kanji: '日本' },
    // ぬ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // ね
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // の
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // は
    { Japanese: 'はい', Chinese: '是,對', Lesson: '1' },
    { Japanese: 'はじめまして', Chinese: '初次見面', Lesson: '1' },
    // ひ
    { Japanese: 'びょういん', Chinese: '醫院', Lesson: '1', Kanji: '病院' },
    // ふ
    { Japanese: 'ブラジル', Chinese: '巴西', Lesson: '1' },
    { Japanese: 'ふじ', Chinese: '富士', Lesson: '1', Kanji: '富士' },

    // へ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // ほ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // ま
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // み
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // む
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // め
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // も
    { Japanese: 'もじ', Chinese: '文字', Lesson: '' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // や
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // ゆ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // よ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // ら
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // り
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // る
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // れ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // ろ
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },

    // わ
    { Japanese: 'わたし', Chinese: '我', Lesson: '1', Kanji: '私' },
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // を
    { Japanese: '', Chinese: '', Lesson: '', Kanji: '' },
    // ん
    { Japanese: 'ん', Chinese: '', Lesson: '' },
];