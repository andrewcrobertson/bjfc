import type { ITeam } from '@this/types/team';

const data: ITeam[] = [
  {
    code: 'U18G',
    ageGroupCode: 'U18',
    name: 'Under 18 Girls',
    birthYears: [2003, 2004],
    playerGenders: ['Female'],
    teamGender: 'Female',
    headCoach: null,
    assistantCoach: null,
    trainer: null,
    teamManager: null,
  },
  {
    code: 'U17B-GOLD',
    ageGroupCode: 'U17',
    name: 'Under 17 Boys (Gold)',
    birthYears: [2004],
    playerGenders: ['Male'],
    teamGender: 'Male',
    headCoach: {
      initials: 'JA',
      firstName: 'Jarrod',
      lastName: 'Amey',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0439 039 578',
        },
        {
          type: 'Email',
          value: 'jazznchaz01@gmail.com',
        },
      ],
    },
    assistantCoach: {
      initials: 'DP',
      firstName: 'Danny',
      lastName: 'Phillips',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0417 339 397',
        },
        {
          type: 'Email',
          value: 'danny.phillips@thermon.com',
        },
      ],
    },
    trainer: {
      initials: 'KP',
      firstName: 'Kim',
      lastName: 'Phillips',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Phone',
          value: '0418 337 535',
        },
        {
          type: 'Email',
          value: 'littlekim.phillips@gmail.com',
        },
      ],
    },
    teamManager: {
      initials: 'DD',
      firstName: 'Deanna',
      lastName: 'Derham',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Phone',
          value: '0414 952 117',
        },
        {
          type: 'Email',
          value: 'dderham@ldb.com.au',
        },
      ],
    },
  },
  {
    code: 'U17B-GREEN',
    ageGroupCode: 'U16',
    name: 'Under 17 Boys (Green)',
    birthYears: [2005, 2006],
    playerGenders: ['Male'],
    teamGender: 'Male',
    headCoach: {
      initials: 'LM',
      firstName: 'Lachie',
      lastName: 'McGuire',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0488 149 080',
        },
        {
          type: 'Email',
          value: 'lachlan.mcguire2@bigpond.com',
        },
      ],
    },
    assistantCoach: {
      initials: 'NM',
      firstName: 'Nic',
      lastName: 'Maxwell',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Email',
          value: 'nicmaxwell44@optusnet.com.au',
        },
      ],
    },
    trainer: {
      initials: 'RS',
      firstName: 'Rob',
      lastName: 'Scripps',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Email',
          value: 'rkscripps@gmail.com',
        },
      ],
    },
    teamManager: {
      initials: 'KM',
      firstName: 'Kelly',
      lastName: 'McGuire',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Email',
          value: 'lachlan.mcguire2@bigpond.com',
        },
      ],
    },
  },
  {
    code: 'U16G',
    ageGroupCode: 'U16',
    name: 'Under 16 Girls',
    birthYears: [2005, 2006],
    playerGenders: ['Female'],
    teamGender: 'Female',
    headCoach: {
      initials: 'MH',
      firstName: 'Michael',
      lastName: 'Hughson',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0401 995 003',
        },
        {
          type: 'Email',
          value: 'michael.hughson@trendwindows.com.au',
        },
      ],
    },
    assistantCoach: null,
    trainer: null,
    teamManager: {
      initials: 'KC',
      firstName: 'Kylie',
      lastName: 'Cameron',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Phone',
          value: '0409 017 724',
        },
        {
          type: 'Email',
          value: 'camscove@icloud.com',
        },
      ],
    },
  },
  {
    code: 'U14B',
    ageGroupCode: 'U14',
    name: 'Under 14 Boys',
    birthYears: [2007, 2008],
    playerGenders: ['Male'],
    teamGender: 'Male',
    headCoach: {
      initials: 'AP',
      firstName: 'Andrew',
      lastName: 'Peters',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0409 794 180',
        },
        {
          type: 'Email',
          value: 'apeters@swin.edu.au',
        },
      ],
    },
    assistantCoach: {
      initials: 'SR',
      firstName: 'Steve',
      lastName: 'Roberts',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0474 221 909',
        },
        {
          type: 'Email',
          value: 'cbrsteve.roberts@gmail.com',
        },
      ],
    },
    trainer: null,
    teamManager: {
      initials: 'DD',
      firstName: 'Deanna',
      lastName: 'Derham',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Phone',
          value: '0414 952 117',
        },
        {
          type: 'Email',
          value: 'dderham@ldb.com.au',
        },
      ],
    },
  },
  {
    code: 'U14G',
    ageGroupCode: 'U14',
    name: 'Under 14 Girls',
    birthYears: [2007, 2008],
    playerGenders: ['Female'],
    teamGender: 'Female',
    headCoach: {
      initials: 'MR',
      firstName: 'Matt',
      lastName: 'Rennison',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Email',
          value: 'golfman05@live.com',
        },
      ],
    },
    assistantCoach: null,
    trainer: {
      initials: 'DH',
      firstName: 'Dragana',
      lastName: 'Hindson',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Email',
          value: 'dragana@icircle.net',
        },
      ],
    },
    teamManager: null,
  },
  {
    code: 'U12G',
    ageGroupCode: 'U12',
    name: 'Under 12 Girls',
    birthYears: [2009, 2010],
    playerGenders: ['Female'],
    teamGender: 'Female',
    headCoach: {
      initials: 'KM',
      firstName: 'Kevin',
      lastName: 'Maniscalchi',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0421 785 622',
        },
        {
          type: 'Email',
          value: 'kmaniscalchi@outlook.com',
        },
      ],
    },
    assistantCoach: null,
    trainer: null,
    teamManager: null,
  },
  {
    code: 'U12B',
    ageGroupCode: 'U12',
    name: 'Under 12 Boys',
    birthYears: [2009],
    playerGenders: ['Male'],
    teamGender: 'Male',
    headCoach: {
      initials: 'AR',
      firstName: 'Andrew',
      lastName: 'Rippon',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0412 244 056',
        },
        {
          type: 'Email',
          value: 'chipsbricklaying@hotmail.com',
        },
      ],
    },
    assistantCoach: {
      initials: 'AP',
      firstName: 'Andrew',
      lastName: 'Parker',
      gender: 'Male',
      contactMethods: [],
    },
    trainer: null,
    teamManager: {
      initials: 'BD',
      firstName: 'Beccy',
      lastName: 'Dawber',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Phone',
          value: '0401 306 209',
        },
        {
          type: 'Email',
          value: 'beccydawber@bigpond.com',
        },
      ],
    },
  },
  {
    code: 'U11M',
    ageGroupCode: 'U11',
    name: 'Under 11 Mixed',
    birthYears: [2010],
    playerGenders: ['Female', 'Male'],
    teamGender: 'Mixed',
    headCoach: {
      initials: 'AG',
      firstName: 'Alex',
      lastName: 'Gunn',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0403 977 524',
        },
        {
          type: 'Email',
          value: 'algunn71@hotmail.com',
        },
      ],
    },
    assistantCoach: null,
    trainer: null,
    teamManager: {
      initials: 'DP',
      firstName: 'Deb',
      lastName: 'Pearson',
      gender: 'Female',
      contactMethods: [
        {
          type: 'Email',
          value: 'debbie_rob@optusnet.com.au',
        },
      ],
    },
  },
  {
    code: 'U10M',
    ageGroupCode: 'U10',
    name: 'Under 10 Mixed',
    birthYears: [2011],
    playerGenders: ['Female', 'Male'],
    teamGender: 'Mixed',
    headCoach: {
      initials: 'BB',
      firstName: 'Ben',
      lastName: 'Beveridge',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0411 105 440',
        },
        {
          type: 'Email',
          value: 'benbev35@gmail.com',
        },
      ],
    },
    assistantCoach: {
      initials: 'EC',
      firstName: 'Erin',
      lastName: 'Chamberlain',
      gender: 'Female',
      contactMethods: [],
    },
    trainer: null,
    teamManager: null,
  },
  {
    code: 'U09M',
    ageGroupCode: 'U9',
    name: 'Under 9 Mixed',
    birthYears: [2012],
    playerGenders: ['Female', 'Male'],
    teamGender: 'Mixed',
    headCoach: {
      initials: 'MH',
      firstName: 'Mark',
      lastName: 'Hindson',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Phone',
          value: '0419 149 500',
        },
        {
          type: 'Email',
          value: 'mark@icircle.net',
        },
      ],
    },
    assistantCoach: {
      initials: 'RK',
      firstName: 'Rob',
      lastName: 'Kinstler',
      gender: 'Male',
      contactMethods: [
        {
          type: 'Email',
          value: 'robertgk.66@gmail.com',
        },
      ],
    },
    trainer: null,
    teamManager: null,
  },
  {
    code: 'U08M',
    ageGroupCode: 'U8',
    name: 'Under 8 Mixed',
    birthYears: [2013, 2014],
    playerGenders: ['Female', 'Male'],
    teamGender: 'Mixed',
    headCoach: null,
    assistantCoach: null,
    trainer: null,
    teamManager: null,
  },
];

export default data;
