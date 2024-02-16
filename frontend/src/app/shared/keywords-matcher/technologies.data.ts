export interface Keywords {
  [key: string]: string;
}

/*
  All keys must be in lower case.
  
  You will see multiple keys pointing to the same value.
  This is necessary to ensure that different ways of writing a technology
  will always be counted as just one technology. For example:

  typescript: 'TypeScript'
  ts: 'TypeScript'

  Two different ways of writing TypeScript that in the end will be counted only as TypeScript.
*/

//TODO: Migrate all keywords that have a dot (.) to multiwork keywords. Then, include the dot symbol in sanitize content functions

export const oneWordKeywords: Keywords = {
  //FRONTEND
  html: 'HTML',
  html5: 'HTML',
  css: 'CSS',
  css3: 'CSS',
  javascript: 'JavaScript',
  js: 'JavaScript',
  typescript: 'TypeScript',
  ts: 'TypeScript',
  react: 'React',
  reactjs: 'React',
  angular: 'Angular',
  angularjs: 'AngularJS',
  vuejs: 'Vue.js',
  vue: 'Vue.js',
  vue3: 'Vue.js',
  bootstrap: 'Bootstrap',
  sass: 'Sass',
  less: 'Less',
  redux: 'Redux',
  webpack: 'Webpack',
  babel: 'Babel',
  rest: 'REST',
  restful: 'REST',
  restfull: 'REST',
  graphql: 'GraphQL',
  ajax: 'AJAX',
  json: 'JSON',
  xml: 'XML',
  stylus: 'Stylus',
  next: 'NextJS',
  nextjs: 'NextJS',
  blazor: 'Blazor',
  jquery: 'jQuery',
  edux: 'Edux',
  mobx: 'Mobx',
  vuex: 'Vuex',
  recoil: 'Recoil',
  leaflet: 'Leaflet',
  leafletjs: 'Leaflet',
  relay: 'Relay',
  figma: 'Figma',
  tailwind: 'Tailwind',
  spa: 'Single Page Applications',
  pwa: 'Progressive Web Apps',
  webassembly: 'WebAssembly',
  nuxt: 'Nuxt',
  nuxtjs: 'Nuxt',
  gastby: 'Gatsby',
  jekyll: 'Jekyll',
  hugo: 'Hugo',
  remix: 'Remix',
  zustand: 'Zustand',
  rxjs: 'RxJS',
  hooks: 'React Hooks',
  microfrontends: 'Micro Frontend',
  microfrontend: 'Micro Frontend',
  vb: 'Visual Basic',
  ngrx: 'NgRx',
  seo: 'SEO',
  //END OF FRONTEND

  //BACKEND
  kotlin: 'Kotlin',
  node: 'Node.js',
  nodejs: 'Node.js',
  express: 'Express',
  java: 'Java',
  springboot: 'Spring Boot',
  spring: 'Spring Boot',
  python: 'Python',
  django: 'Django',
  ruby: 'Ruby',
  rails: 'Ruby On Rails',
  php: 'PHP',
  laravel: 'Laravel',
  asp: '.NET',
  dotnet: '.NET',
  csharp: 'C#',
  'c#': 'C#',
  go: 'Go',
  golang: 'Go',
  flask: 'Flask',
  fastapi: 'FastAPI',
  oauth: 'OAuth',
  jwt: 'JWT',
  'c++': 'C++',
  C: 'C',
  soap: 'SOAP',
  rabbitmq: 'RabbitMQ',
  swagger: 'Swagger',
  perl: 'Perl',
  delphi: 'Delphi',
  cobol: 'Cobol',
  fortran: 'Fortran',
  grpc: 'GRPC',
  postman: 'Postman',
  insomnia: 'Insomnia',
  apollo: 'Apollo',
  entity: 'Entity Framework',
  elixir: 'Elixir',
  haskell: 'Haskell',
  mq: 'IBM MQ',
  nestjs: 'NestJS',
  nest: 'NestJS',
  hibernate: 'Hibernate',
  websocket: 'WebSocket',
  websockets: 'WebSocket',
  ssr: 'Server-Side Rendering',
  sse: 'Server-Sent Events',
  ssg: 'Static Site Generator',
  svelte: 'Svelte',
  deno: 'Deno',
  bun: 'Bun',
  symfony: 'Symfony',
  fastify: 'Fastify',
  groovy: 'Groovy',
  grails: 'Grails',
  marshmallow: 'Marshmallow',
  alembic: 'Alembic',
  sqlalchemy: 'SQLAlchemy',
  gradle: 'Gradle',
  api: 'API',
  apis: 'API',
  memcached: 'Memcached',
  orm: 'ORM',
  //END OF BACKEND

  //DATABASE
  sql: 'SQL',
  sqlite: 'SQLite',
  nosql: 'NoSQL',
  mongodb: 'MongoDB',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  elasticsearch: 'Elasticsearch',
  oracle: 'Oracle',
  redis: 'Redis',
  plsql: 'PL/SQL',
  aurora: 'AWS Aurora',
  dynamo: 'AWS Dynamo',
  mariadb: 'MariaDB',
  //END OF DATABASE

  //MOBILE
  android: 'Android',
  ios: 'iOS',
  swift: 'Swift',
  ionic: 'Ionic',
  cordova: 'Cordova',
  reactnative: 'React Native',
  flutter: 'Flutter',
  xamarin: 'Xamarin',
  expo: 'Expo',
  dart: 'Dart',
  //END OF MOBILE

  //CLOUD
  microservices: 'Microsserviços',
  microserviços: 'Microsserviços',
  microsserviços: 'Microsserviços',
  aws: 'AWS',
  cloudflare: 'Cloudflare',
  gcp: 'GCP',
  azure: 'Azure',
  nginx: 'Nginx',
  apache: 'Apache',
  docker: 'Docker',
  dockers: 'Docker',
  ci: 'CI/CD',
  cd: 'CI/CD',
  jenkins: 'Jenkins',
  terraform: 'Terraform',
  kubernetes: 'Kubernetes',
  kubernets: 'Kubernetes', //sic
  k8s: 'Kubernetes',
  firebase: 'Firebase',
  tomcat: 'Tomcat',
  amplify: 'AWS Amplify',
  kynesis: 'AWS Kynesis',
  cloudfront: 'AWS Cloudfront',
  ecs: 'AWS ECS',
  rds: 'AWS RDS',
  sqs: 'AWS SQS',
  s3: 'AWS S3',
  lambda: 'AWS Lambda',
  sns: 'AWS SNS',
  cloudwatch: 'AWS Cloudwatch',
  cdn: 'CDN',
  webhook: 'Webhook',
  openshift: 'Red Hat OpenShift',
  //END OF CLOUD

  //TESTING,
  junit: 'JUnit',
  mockito: 'Mockito',
  teste: 'Testes',
  testes: 'Testes',
  jest: 'Jest',
  enzyme: 'Enzyme',
  cypress: 'Cypress',
  selenium: 'Selenium',
  cucumber: 'Cucumber',
  tdd: 'TDD',
  bdd: 'BDD',
  ddd: 'DDD',
  pytest: 'pytest',
  mocks: 'Mocks',
  stubs: 'Stubs',
  fakes: 'Fakes',
  spies: 'Spies',
  dummies: 'Dummies',
  jasmine: 'Jasmine',
  karma: 'Karma',
  e2e: 'End-to-End Testing',
  //END OF TESTING

  //MISCELLANEOUS
  git: 'Git',
  github: 'GitHub',
  bitbucket: 'Bitbucket',
  gitflow: 'GitFlow',
  scrum: 'Scrum',
  gitlab: 'Gitlab',
  lean: 'Lean',
  kanbam: 'Kanban', //sic
  kanban: 'Kanban',
  salesforce: 'Salesforce',
  yaml: 'YAML',
  assembly: 'Assembly',
  linux: 'Linux',
  jira: 'Jira',
  maven: 'Maven',
  wordpress: 'WordPress',
  shell: 'Shell',
  meteor: 'Meteor.js',
  meteorjs: 'Meteor.js',
  meteorJS: 'Meteor.js',
  blockchain: 'Blockchain',
  drupal: 'Drupal',
  magento: 'Magento',
  embarcado: 'Sistemas embarcados',
  embarcados: 'Sistemas embarcados',
  mensageria: 'Mensageria',
  zabbix: 'Zabbix',
  grafana: 'Grafana',
  windows: 'Windows',
  iot: 'IoT',
  xp: 'Extreme Programming',
  crm: 'CRM',
  erp: 'ERP',
  poo: 'POO',
  mvc: 'MVC',
  mvvm: 'MVVM',
  cqrs: 'CQRS',
  arcgis: 'ArcGIS',
  agile: 'Agile',
  ssh: 'SSH',
  ftp: 'FTP',
  filezilla: 'FileZilla',
  cache: 'Cache',
  pubsub: 'Pub/Sub',
  splunk: 'Splunk',
  solid: 'SOLID',
  kiss: 'KISS',
  dry: 'DRY',
  circleci: 'CircleCI',
  vtex: 'VTEX',
  crud: 'CRUD',
  criptografia: 'Criptografia',
  cryptography: 'Criptografia',
  //END OF MISCELLANEOUS

  //DATA SCIENCE
  excel: 'Excel',
  analytics: 'Analytics',
  dmbok: 'DMBOK',
  r: 'R',
  scala: 'Scala',
  spark: 'Spark',
  airflow: 'AirFlow',
  lgpd: 'LGPD',
  qlik: 'Qlik',
  tableau: 'Tableau',
  looker: 'Looker',
  pipeline: 'Pipeline',
  pipelines: 'Pipeline',
  etl: 'ETL',
  etls: 'ETL',
  numpy: 'NumPy',
  matplotlib: 'Matplotlib',
  seaborn: 'Seaborn',
  redshift: 'Redshift',
  bigquery: 'GCP BigQuery',
  snowflake: 'Snowflake',
  hive: 'Hive',
  hbase: 'HBase',
  kafka: 'Kafka',
  hadoop: 'Hadoop',
  primavera: 'Primavera',
  kibana: 'Kibana',
  //END OF DATA SCIENCE

  //GAME DEVELOPMENT
  unity: 'Unity',
  godot: 'Godot',
  //END OF GAME DEVELOPMENT

  //AI
  ia: 'IA',
  ai: 'IA',
  tensorflow: 'TensorFlow',
  pytorch: 'PyTorch',
  keras: 'Keras',
  'scikit-learn': 'scikit-learn',
  scikit_learn: 'scikit-learn',
  pandas: 'Pandas',
  openai: 'OpenAI',
  nltk: 'NLTK',
  spaCy: 'spaCy',
  fastai: 'fastai',
  'stable-diffusion': 'Stable Diffusion',
  transformers: 'Transformers',
  gensim: 'Gensim',
  prophet: 'Prophet',
  opencv: 'OpenCV',
  dlib: 'dlib',
  pybrain: 'PyBrain',
  deap: 'DEAP',
  mlops: 'MLOps',
  llama: 'Llama',
  langchain: 'Langchain',
  LLMS: 'LLM',
  llm: 'LLM',
  databricks: 'Databricks',
  mlflow: 'MLflow',
  lakehouse: 'lakehouse',
  ml: 'Machine Learning',
  //END OF AI
};

export const multiWordKeywords: Keywords = {
  //FRONTEND
  'micro frontends': 'Micro Frontend',
  'micro frontend': 'Micro Frontend',
  'micro front end': 'Micro Frontend',
  'micro front ends': 'Micro Frontend',
  'responsive design': 'Responsive Design',
  'styled components': 'Styled Components',
  'context api': 'Context API',
  'server side rendering': 'Server Side Rendering',
  'visual basic': 'Visual Basic',
  'material design': 'Material Design',
  'react.js': 'React',
  'vue.js': 'Vue.js',
  'next.js': 'NextJS',
  'leaflet.js': 'Leaflet',
  'nuxt.js': 'Nuxt',

  //END OF FRONTEND

  //BACKEND
  'spring boot': 'Spring Boot',
  'ruby on rails': 'Ruby on Rails',
  'authentication and authorization': 'Authentication and Authorization',
  'security best practices': 'Security Best Practices',
  'representational state transfer': 'REST',
  'node.js': 'Node.js',
  'express.js': 'Express',
  'asp.net': '.NET',
  '.net': '.NET',
  '.net core': '.NET',
  'socket.io': 'Socket.io',
  'nest.js': 'NestJS',

  //END OF BACKEND

  //UI/UX
  'ui/ux design': 'UI/UX Design',
  'design system': 'Design System',
  //END OF UI/UX

  //TESTING
  'frontend testing': 'Testes',
  //END OF TESTING

  //DATABASE
  'database management': 'Database Management',
  'stored procedures': 'Stored Procedures',
  'sql server': 'SQL Server',
  'banco de dados relacionais': 'Banco de dados relacional',
  'banco de dados não relacionais': 'Banco de dados não relacional',
  'pl/sql': 'PL/SQL',
  'sq-lite': 'SQLite',
  //END OF DATABASE

  //MOBILE
  'apache cordova': 'Cordova',
  'react native': 'React Native',
  //END OF MOBILE

  //CLOUD
  'micro serviços': 'Microsserviços',
  'Google Cloud Platform': 'GCP',
  'web servers': 'Web Servers',
  'ci/cd': 'CI/CD',
  'integracao constante': 'Continuous Integration',
  'integracao continua': 'Continuous Integration',
  'continuous integration': 'Continuous Integration',
  'new relic': 'New Relic',
  'cloud functions': 'GCP Cloud Functions',
  'github actions': 'GitHub Actions',
  'github action': 'GitHub Actions',
  //END OF CLOUD

  //MISCELLANEOUS
  'clean code': 'Clean Code',
  'clean architecture': 'Clean Architecture',
  'design patterns': 'Design Patterns',
  'programacao orientada a eventos': 'Programação Orientada a Eventos',
  'programacao orientada a objetos': 'POO',
  'orientacao a objetos': 'POO',
  'metodologias ageis': 'Agile',
  'celulas ageis': 'Agile',
  'desenvolvimento agil': 'Agile',
  'git flow': 'Git Flow',
  'injecao de dependencia': 'Dependency Injection',
  'dependency injection': 'Dependency Injection',
  'domain driven design': 'DDD',
  'domain-driven design': 'DDD',
  'test driven development': 'TDD',
  'test-driven development': 'TDD',
  'behavior-driven development': 'TDD',
  'behavior driven development': 'TDD',
  'application programming interface': 'API',
  'system design': 'System Design',
  'arquitetura hexagonal': 'Arquitetura Hexagonal',
  'json web token': 'JWT',
  'json web tokens': 'JWT',
  'pub/sub': 'Pub/Sub',
  'extreme programming': 'Extreme Programming',
  's.o.l.i.d': 'SOLID',
  'meteor.js': 'Meteor.js',

  //END OF MISCELLANEOUS

  //TESTING
  'testes unitarios': 'Testes Unitários',
  'testes de unidade': 'Testes Unitários',
  'testes integrados': 'Testes de Integração',
  'testes de integracao': 'Testes de Integração',
  'testes de regressao': 'Testes de Regressão',
  'testes funcionais': 'Testes Funcionais',
  'testes de caixa-preta': 'Testes Funcionais',
  'testes automatizados': 'Testes Automatizados',

  'teste unitarios': 'Testes Unitários',
  'teste de unidade': 'Testes Unitários',
  'teste integrados': 'Testes de Integração',
  'teste de integracao': 'Testes de Integração',
  'teste de regressao': 'Testes de Regressão',
  'teste funcionais': 'Testes Funcionais',
  'teste de caixa-preta': 'Testes Funcionais',
  'teste automatizados': 'Testes Automatizados',

  'react testing library': 'React Testing Library',
  //END OF TESTING

  //AI
  'machine learning': 'Machine Learning',
  'deep learning': 'Deep Learning',
  'inteligencia artificial': 'Inteligência Artificial',
  'artificial intelligence ': 'Inteligência Artificial',
};
