export const FamilyRankings = [
    "Корпоративная элита",
    "Корпоративные менеджеры",
    "Копоративные инженеры",
    "Кочевое племя",
    "Пираты",
    "Преступники",
    "Криминальные бароны",
    "Беженцы",
    "Бездомные",
    "Археологи"
]

export const ParentStatuses = [
    "Оба родители живы и здоровы",
    "Родители погибли во время военных действий",
    "Родители погибли в результате несчастного случая",
    "Родители были убиты",
    "Родители страдают от амнезии и не помнят тебя",
    "Ты никогда не помнил своих родителей",
    "Твои родители скрываются, чтобы защитить тебя",
    "Тебя оставили жить с твоими родственниками, чтобы защитить тебя",
    "Ты вырос на улице и никогда не знал своих родителей",
    "В детстве тебя взяли к себе приёмные родители",
    "Твои родители продали тебя"
]

export const FamilyTragedies = [
    "Сейчас твоей семье ничто не угрожает",
    "Твоя семья потеряла всё из-за предательства",
    "Твоя семья потеряла всё из-за своих ошибок",
    "Твоя семья была изгнана",
    "Твоя семья находится в заключении и лишь тебе удалось его избежать",
    "Твоя семья исчезла и ты единственный оставшийся",
    "Все члены твоей семьи, кроме тебя, были убиты",
    "Твоя семья вовлечена в некое сообщество заговорщиков",
    "Волей судьбы члены твоей семьи разбросаны по миру",
    "Твоя семья уже несколько поколений страдает от постоянных междоусобиц",
    "Ты унаследовал большой семейный долг и теперь обязан его выплатить"
]

export const ChildhoodTypes = [
    "Ты провёл своё детство на улице без опеки взрослых",
    "Твоё детство прошло в безопасном корпоративном пригороде",
    "Твоё детство прошло в постоянных кочевых скитаниях",
    "Твоё детство прошло в трущобах",
    "Твоё детство прошло в охраняемой корпоративной зоне в центре города",
    "В детстве ты жил посреди боевой зоны",
    "Ты провёл детство в небольшой деревушке вдали от крупных городов",
    "Твоё детство прошло в огромной аркологии",
    "Детство ты провёл на пиратском флоте",
    "Ты провёл своё детство на одной из корпоративных ферм"
]

export enum RelationType {
    LIKES,
    LIKE_VERY_MUCH,
    DISLIKES,
    DISLIKES_VERY_MUCH,
    NEUTRAL
}

export const RelationTypes: Map<RelationType, String> = new Map([
    [RelationType.LIKES, "Хорошо относится"],
    [RelationType.LIKE_VERY_MUCH, "Обожает"],
    [RelationType.DISLIKES, "Недолюбливает"],
    [RelationType.DISLIKES_VERY_MUCH, "Ненавидит"],
    [RelationType.NEUTRAL, "Безразличен"]
]);

export enum LifeEventType {
    BigProblemsBigWins,
    FriendsAndEnemies,
    RomanticInvolvement,
    Nothing
}

export const LifeEventTexts: Map<LifeEventType, String> = new Map([
    [LifeEventType.BigProblemsBigWins, "Большие проблемы, большие победы"],
    [LifeEventType.FriendsAndEnemies, "Друзья и враги"],
    [LifeEventType.RomanticInvolvement, "Влюблённость"],
    [LifeEventType.Nothing, "Ничего не произошло"]
])

export enum DisasterStrike {
    FinancialLost = "FinancialLost",
    Imprisonment = "Imprisonment",
    IllnessOrAddiction = "IllnessOrAddiction",
    Betrayal = "Betrayal",
    Accident = "Accident",
    ClosePersonKilled = "ClosePersonKilled",
    FalseAccusation = "FalseAccusation",
    HuntedByTheLaw = "HuntedByTheLaw",
    HuntedByACorp = "HuntedByACorp",
    Incapacitation = "Incapacitation"
}

export const DisasterStrikes: DisasterStrike[] = [
    DisasterStrike.FinancialLost,
    DisasterStrike.Imprisonment,
    DisasterStrike.IllnessOrAddiction,
    DisasterStrike.Betrayal,
    DisasterStrike.Accident,
    DisasterStrike.ClosePersonKilled,
    DisasterStrike.FalseAccusation,
    DisasterStrike.HuntedByTheLaw,
    DisasterStrike.HuntedByACorp,
    DisasterStrike.Incapacitation
]

export const DisasterStrikeTexts: Map<string, string> = new Map([
    [DisasterStrike.FinancialLost, "Вы потеряли деньги"],
    [DisasterStrike.Imprisonment, "Тюремное заключение"],
    [DisasterStrike.IllnessOrAddiction, "Болезнь или зависимость"],
    [DisasterStrike.Betrayal, "Предательство"],
    [DisasterStrike.Accident, "Вы попали в аварию"],
    [DisasterStrike.ClosePersonKilled, "Близкий Вам человек был убит"],
    [DisasterStrike.FalseAccusation, "Ложное обвинение"],
    [DisasterStrike.HuntedByTheLaw, "Вас преследует полиция"],
    [DisasterStrike.HuntedByACorp, "Вас преследует одна из корпораций"],
    [DisasterStrike.Incapacitation, "Вы получили травму"]
])

export enum LuckyEvent {
    CityGovernmentConnection = "CityGovernmentConnection",
    FinancialWindFall = "FinancialWindFall",
    BigScore = "BigScore",
    FindSensei = "FindSensei",
    FindTeacher = "FindTeacher",
    FindCombatTeacher = "FindCombatTeacher",
    ExecOwes = "ExecOwes",
    NomadPackBefriends = "NomadPackBefriends",
    PoliceForceFriend = "PoliceForceFriend",
    BoosterGangFriend = "BoosterGangFriend",
}

export const LuckyEvents: LuckyEvent[] = [
    LuckyEvent.CityGovernmentConnection,
    LuckyEvent.FinancialWindFall,
    LuckyEvent.BigScore,
    LuckyEvent.FindSensei,
    LuckyEvent.FindTeacher,
    LuckyEvent.FindCombatTeacher,
    LuckyEvent.ExecOwes,
    LuckyEvent.NomadPackBefriends,
    LuckyEvent.PoliceForceFriend,
    LuckyEvent.BoosterGangFriend,
]

export const LuckyEventTexts: Map<string, string> = new Map([
    [LuckyEvent.CityGovernmentConnection, "Связи в городском правительстве"],
    [LuckyEvent.FinancialWindFall, "Вы заработали деньги"],
    [LuckyEvent.BigScore, "Большой доход"],
    [LuckyEvent.FindSensei, "Вы нашли учителя боевых искусств"],
    [LuckyEvent.FindTeacher, "Вы нашли академического преподавателя"],
    [LuckyEvent.FindCombatTeacher, "Вы нашли учителя оружейника"],
    [LuckyEvent.ExecOwes, "Один из корпоративных директоров в долгу перед вами"],
    [LuckyEvent.NomadPackBefriends, "Вы подружились со стаей кочевников"],
    [LuckyEvent.PoliceForceFriend, "У вас появился друг в полиции"],
    [LuckyEvent.BoosterGangFriend, "У вас появился друг в банде"]
])

export const FriendType = {
    LikeBigSibling: "LikeBigSibling",
    LikeLittleSibling: "LikeLittleSibling",
    Mentor: "Mentor",
    OldLover: "OldLover",
    OldEnemy: "OldEnemy",
    Coworker: "Coworker",
    LikeFosterParent: "LikeFosterParent",
    Relative: "Relative",
    ChildhoodFriend: "ChildhoodFriend",
    CommonInterest: "CommonInterest"
}

export const FriendTypes: string[] = [
    FriendType.LikeBigSibling,
    FriendType.LikeLittleSibling,
    FriendType.Mentor,
    FriendType.OldLover,
    FriendType.OldEnemy,
    FriendType.Coworker,
    FriendType.LikeFosterParent,
    FriendType.Relative,
    FriendType.ChildhoodFriend,
    FriendType.CommonInterest
]

export const FriendTypeTexts: Map<string, string> = new Map([
    [FriendType.LikeBigSibling, "Как старший брат/сестра"],
    [FriendType.LikeLittleSibling, "Как младший брат/сестра"],
    [FriendType.Mentor, "Наставник"],
    [FriendType.OldLover, "Бывший любовник"],
    [FriendType.OldEnemy, "Бывший враг"],
    [FriendType.Coworker, "Коллега"],
    [FriendType.LikeFosterParent, "Словно приёмный родитель"],
    [FriendType.Relative, "Родственник"],
    [FriendType.ChildhoodFriend, "Друг детства"],
    [FriendType.CommonInterest, "Единомышленник"]
])

export const EnemyType = {
    ExFriend: "ExFriend",
    ExLover: "ExLover",
    Relative: "EnemyRelative",
    ChildhoodEnemy: "ChildhoodEnemy",
    PersonWorkingForYou: "PersonWorkingForYou",
    PersonYouWorkFor: "PersonYouWorkFor",
    CoWorker: "EnemyCoworker",
    BoosterGangMember: "BoosterGangMember",
    CorporateExecutive: "CorporateExecutive",
    GovernmentOfficial: "GovernmentOfficial",
}

export const EnemyTypes: string[] = [
    EnemyType.ExFriend,
    EnemyType.ExLover,
    EnemyType.Relative,
    EnemyType.ChildhoodEnemy,
    EnemyType.PersonWorkingForYou,
    EnemyType.PersonYouWorkFor,
    EnemyType.CoWorker,
    EnemyType.BoosterGangMember,
    EnemyType.CorporateExecutive,
    EnemyType.GovernmentOfficial
]

export const EnemyTypeTexts: Map<string, string> = new Map([
    [EnemyType.ExFriend, "Бывший друг"],
    [EnemyType.ExLover, "Бывший любовник"],
    [EnemyType.ChildhoodEnemy, "Враг детства"],
    [EnemyType.PersonWorkingForYou, "Человек, работавший на Вас"],
    [EnemyType.PersonYouWorkFor, "Бывший работодатель"],
    [EnemyType.CoWorker, "Коллега"],
    [EnemyType.BoosterGangMember, "Член банды"],
    [EnemyType.CorporateExecutive, "Директор корпорации"],
    [EnemyType.GovernmentOfficial, "Чиновник"]
])