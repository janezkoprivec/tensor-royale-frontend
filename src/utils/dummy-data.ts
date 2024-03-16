import { ActiveModel, DatasetModel, ModelTraining, ProblemModel } from './models';

export const dummyProblems: ProblemModel[] = [
  {
    id: 0,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: true,
    submissions_count: 12,
    solved: false,
  },
  {
    id: 1,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: false,
    submissions_count: 12,
    solved: false,
  },
  {
    id: 2,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: false,
    submissions_count: 12,
    solved: false,
  },
  {
    id: 3,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: true,
    submissions_count: 12,
    solved: true,
  },

  {
    id: 4,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: true,
    submissions_count: 12,
    solved: true,
  },
  {
    id: 5,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: true,
    submissions_count: 12,
    solved: true,
  },
  {
    id: 6,
    user_address: 'ADDR1',
    timestamp: 1710545142091,
    deadline: 1710548142091,
    title: 'Test problem 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reward: 69,
    has_dataset: true,
    submissions_count: 12,
    solved: true,
  },
];

export const dummyDatasets: DatasetModel[] = [
  {
    id: 0,
    problem: {
      id: 4,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
  {
    id: 1,
    problem: {
      id: 6,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
  {
    id: 2,
    problem: {
      id: 4,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
  {
    id: 3,
    problem: {
      id: 4,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
  {
    id: 4,
    problem: {
      id: 6,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
  {
    id: 5,
    problem: {
      id: 4,
      user_address: 'ADDR1',
      timestamp: 1710545142091,
      deadline: 1710548142091,
      title: 'Test problem 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reward: 69,
      has_dataset: true,
      submissions_count: 12,
      solved: true,
    },
    description:
      'Dataset description about dataset data and info about models and files and all that',
    file_url: 'testurl',
    timestamp: 171054514000,
    author: '0x0123-9-12039-120393',
  },
];

export const dummyModels: ModelTraining[] = [
  {
    id: 0,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 1,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 1,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 2,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 2,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 0,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 3,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 1,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 4,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 4,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 5,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 5,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 6,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 0,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 7,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 1,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 8,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 2,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
  {
    id: 9,
    author: '0x3413-1203-1023',
    timestamp: 171054514000,
    problem_id: 3,
    model: 'url do modela',
    size: '230MB',
    data_id: undefined,
    description: 'Description of the model that someone submitted',
  },
];

export const dummyActiveModels: ActiveModel[] = [
  {
    id: 1,
    author: '0xbdd01feeD4EFDE1CeACC502E60E40bea1CDa8AFB',
    name: 'My Model',
    description: 'This is a sample model',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 2,
    author: '0x0123456789abcdef0123456789abcdef01234567',
    name: 'Another Model',
    description: 'A different sample model',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 3,
    author: '0x89abcdef0123456789abcdef0123456789abcdef',
    name: 'Yet Another Model',
    description: 'Yet another sample model',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 4,
    author: '0x23456789abcdef0123456789abcdef0123456789',
    name: 'Model 4',
    description: 'Description 4',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 5,
    author: '0x3456789abcdef0123456789abcdef0123456789a',
    name: 'Model 5',
    description: 'Description 5',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 6,
    author: '0x456789abcdef0123456789abcdef0123456789ab',
    name: 'Model 6',
    description: 'Description 6',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 7,
    author: '0x56789abcdef0123456789abcdef0123456789abc',
    name: 'Model 7',
    description: 'Description 7',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 8,
    author: '0x6789abcdef0123456789abcdef0123456789abcd',
    name: 'Model 8',
    description: 'Description 8',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 9,
    author: '0x789abcdef0123456789abcdef0123456789abcde',
    name: 'Model 9',
    description: 'Description 9 ;laksfoliajf;da pa;sma FLASMFALDSKASKdadaSKDASMDAMSDASM APKSDADDSDASDALASDASD ADA DLKASD AS D',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 10,
    author: '0x89abcdef0123456789abcdef0123456789abcdef0',
    name: 'Model 10',
    description: 'Description 10',
    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
];
